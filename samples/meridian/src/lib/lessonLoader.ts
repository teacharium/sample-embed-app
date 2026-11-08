import type {
  MediaResolverConfig,
  TeachariumLessonExport,
} from "@teacharium/player";

/**
 * The manifest.json at the root of a Teacharium lesson export.
 * Only the fields this app uses are typed; see the export docs for the rest.
 */
export interface LessonManifest {
  lessonId: string;
  title: string;
  versionNumber: number;
  versionId: string;
  publishedAt: string;
  exportedAt: string;
  formatVersion: string;
  files: {
    lesson: string;
    media: Array<{ id: string; localPath: string; mimeType?: string }>;
    videos?: Array<{ id: string; localPath: string }>;
    widgets: Array<{
      widgetType: string;
      localPath: string;
      cssLocalPath?: string;
    }>;
    customCss?: { localPath: string; contentLength: number };
  };
  fonts?: { googleFontsUrl?: string };
}

export interface LoadedLesson {
  manifest: LessonManifest;
  lesson: TeachariumLessonExport;
  /** URL of the unzipped export folder, e.g. "/lesson" (no trailing slash) */
  basePath: string;
}

/** Turn an export-relative path ("./widgets/x.js") into a URL. */
const resolvePath = (basePath: string, localPath: string) =>
  `${basePath}/${localPath.replace(/^\.\//, "")}`;

const loadScript = (src: string) =>
  new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const script = document.createElement("script");
    // Widget bundles are ES modules that import "react" (see the import map).
    script.type = "module";
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load widget ${src}`));
    document.head.appendChild(script);
  });

const loadStylesheet = (href: string) => {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
};

const fetchJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json() as Promise<T>;
};

/**
 * Load an unzipped lesson export served from `basePath`:
 * 1. read manifest.json
 * 2. inject every widget bundle (and its CSS) so the widgets register
 *    themselves before the player renders
 * 3. read lesson.json
 *
 * The lesson's custom CSS is already inside lesson.json and is injected by the
 * player, so styles/custom.css does not need to be loaded here.
 */
export const loadLesson = async (
  basePath = "/lesson",
): Promise<LoadedLesson> => {
  const manifest = await fetchJson<LessonManifest>(`${basePath}/manifest.json`);

  for (const widget of manifest.files.widgets) {
    if (widget.cssLocalPath)
      loadStylesheet(resolvePath(basePath, widget.cssLocalPath));
  }
  await Promise.all(
    manifest.files.widgets.map((widget) =>
      loadScript(resolvePath(basePath, widget.localPath)),
    ),
  );

  const lesson = await fetchJson<TeachariumLessonExport>(
    resolvePath(basePath, manifest.files.lesson),
  );
  return { manifest, lesson, basePath };
};

/**
 * Media resolvers for the player. An export rewrites every image/audio
 * reference to a relative path ("./media/<id>.png"), so resolving is just
 * prefixing the folder the export is served from.
 */
export const createMediaResolvers = (basePath: string): MediaResolverConfig => {
  const resolve = (ref?: string | null) => {
    if (!ref) return null;
    if (ref.startsWith("./")) return resolvePath(basePath, ref);
    if (ref.startsWith("media:")) return `${basePath}/media/${ref.slice(6)}`;
    return ref;
  };
  return {
    useMediaUrl: (ref?: string | null) => ({ data: resolve(ref) }),
    // Voiceover audio is not included in exports.
    useVoiceoverUrl: () => ({ data: null }),
  };
};

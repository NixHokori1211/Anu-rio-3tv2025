import { CSSProperties } from "react";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { avatarDataUri, hashSeed } from "@/lib/placeholder";

type PhotoFrameProps = {
  seed: string;
  label: string;
  photo?: string;
  className?: string;
  rotate?: boolean;
  stamp?: string;
  shape?: "card" | "circle";
};

/**
 * Renders a person/moment photo.
 *
 * If `photo` is passed and the file actually exists under `public/`, that
 * real image is used. Otherwise (no `photo`, or a path that doesn't
 * resolve to a real file yet — every mock record currently sets one as a
 * placeholder path) it falls back to a generated illustrated placeholder,
 * so nothing breaks before real photos are added: drop a real file at the
 * path already stored in `src/data/*.ts` and it's picked up automatically,
 * no component changes needed.
 *
 * Deliberately still plain <img> even for real photos, not next/image:
 * this project has no photo pipeline yet (no fixed dimensions, no build
 * step to whitelist paths), and the placeholder path always needs the
 * data-URI fallback anyway, which next/image can't serve. Worth revisiting
 * once real photos are the norm rather than the exception.
 *
 * When `rotate` is set, the frame sits at a small deterministic tilt (like
 * a photo tossed on an album page) and straightens slightly on hover of
 * its nearest `.group` ancestor — a quiet "picking up the photo" cue.
 * `prefers-reduced-motion` turns the transition off globally (globals.css).
 */
export function PhotoFrame({
  seed,
  label,
  photo,
  className = "",
  rotate = false,
  stamp,
  shape = "card",
}: PhotoFrameProps) {
  const tilt = rotate ? (hashSeed(seed) % 7) - 3 : 0;
  const style = tilt ? ({ "--tilt": `${tilt}deg` } as CSSProperties) : undefined;
  const radius = shape === "circle" ? "rounded-full" : "rounded-sm";
  const src = resolveRealPhoto(photo) ?? avatarDataUri(seed, label);

  return (
    <div className={`relative overflow-visible ${className}`} style={style}>
      <div
        className={`h-full w-full overflow-hidden border border-line-strong bg-surface-2 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out ${radius} ${
          tilt ? "rotate-(--tilt) group-hover:rotate-0 group-hover:scale-[1.03]" : ""
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- see the note above the component: placeholder is a data URI, real photos have no fixed pipeline yet */}
        <img src={src} alt={label} className="h-full w-full object-cover" loading="lazy" />
        <div className={`pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/20 ${radius}`} />
      </div>
      {stamp && (
        <span className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border border-gold-dim bg-bg font-mono text-[10px] text-gold">
          {stamp}
        </span>
      )}
    </div>
  );
}

/**
 * Only treats `photo` as usable when the file genuinely exists in
 * `public/` — every mock record already sets a `/mock/nome.jpg`-style
 * path, so a plain truthy check would try to render 404s for all of them
 * today. This runs server-side only (this component never runs on the
 * client, so `node:fs` is safe here); if that ever changes, this needs to
 * move to a server-only data step instead.
 */
function resolveRealPhoto(photo?: string): string | null {
  if (!photo) return null;
  try {
    const onDisk = join(process.cwd(), "public", photo);
    return existsSync(onDisk) ? photo : null;
  } catch {
    return null;
  }
}

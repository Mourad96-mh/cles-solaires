import "./PhotoFrame.css";

/**
 * Placeholder for a photo the client will supply.
 *
 * The client's document lays its sections out around empty captioned boxes
 * (p.3 "PIEU D'ANCRAGE", p.4 "CHEVRON AUTOBLOQUANT" / "STRUCTURES SOLAIRES",
 * p.5 "CONSTRUCTIONS DIVERSES ENCOME", …) and he asked for the frames to be
 * kept on the site with just "PHOTO" written inside, so he can send the right
 * shot for each one. Swap a <PhotoFrame> for an <img> as each photo arrives.
 *
 * Pass `src` once the real photograph exists and the same slot renders it
 * instead, keeping the caption so the grid still reads as one set.
 *
 * @param {string} caption  the subject, as worded in the client's document.
 * @param {"wide"|"tall"} [ratio]  box shape; defaults to the 4/3 used by .split__media.
 * @param {string} [src]  real photo; omit to keep the reserved-space placeholder.
 * @param {string} [alt]  description of that photo; falls back to the caption.
 */
export default function PhotoFrame({ caption, ratio = "wide", src, alt }) {
  if (src) {
    return (
      <figure className={`photoframe photoframe--filled photoframe--${ratio}`}>
        <img src={src} alt={alt || caption} loading="lazy" />
        {caption && <figcaption className="photoframe__caption">{caption}</figcaption>}
      </figure>
    );
  }
  return (
    <div className={`photoframe photoframe--${ratio}`} role="img" aria-label={`Photo à venir : ${caption}`}>
      <span className="photoframe__tag">PHOTO</span>
      {caption && <span className="photoframe__caption">{caption}</span>}
    </div>
  );
}

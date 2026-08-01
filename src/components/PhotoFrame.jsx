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
 * @param {string} caption  the subject, as worded in the client's document.
 * @param {"wide"|"tall"} [ratio]  box shape; defaults to the 4/3 used by .split__media.
 */
export default function PhotoFrame({ caption, ratio = "wide" }) {
  return (
    <div className={`photoframe photoframe--${ratio}`} role="img" aria-label={`Photo à venir : ${caption}`}>
      <span className="photoframe__tag">PHOTO</span>
      {caption && <span className="photoframe__caption">{caption}</span>}
    </div>
  );
}

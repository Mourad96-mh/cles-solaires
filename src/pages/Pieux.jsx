import { useSeo, useReveal } from "../lib/hooks.js";
import { useLang } from "../i18n.jsx";
import {
  PILE_RANGES, SAND_PILE_RANGES, PILE_USES,
  PILE_CAVEAT, PILE_PROTECTION, PILE_TIMING,
} from "../data/content.js";
import PageHero from "../components/PageHero.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { IconCheck, IconArrowRight } from "../lib/icons.jsx";
import "./content.css";

export default function Pieux() {
  const { lang, t } = useLang();
  useSeo({
    lang,
    title: t("Les pieux d'ancrage", "Anchor piles"),
    description: t(
      "Pieux d'ancrage des Clés Solaires : pieux tous terrains (TT) posés en trou foré et pieux sable (S) posés par battage, en modèles L, XL et XXL. Ancrage mécanique par pelles, essais d'arrachement sur site, dépose réversible. Sans béton coulé.",
      "Les Clés Solaires anchor piles: all-terrain piles (TT) set in a bored hole and sand piles (S) driven in, in L, XL and XXL models. Mechanical anchoring by blades, on-site pull-out tests, reversible removal. No poured concrete."
    ),
    path: "/pieux",
  });
  useReveal();

  /* Three-line summary of the installation principle. */
  const PRINCIPE_STEPS = [
    { n: "01", text: t("Le pieu, pourvu de ses poutres d'assises, est positionné dans le trou foré.",
                       "The pile, fitted with its bearing beams, is positioned in the bored hole.") },
    { n: "02", text: t("La tige d'allonge, l'entretoise et le vérin muni de la pompe sont mis en place.",
                       "The extension rod, the spacer and the jack fitted with its pump are set in place.") },
    { n: "03", text: t("Le pompage exerce une traction sur la tige du pieu, écartant les pelles qui pèsent alors fortement sur les parois en fond de trou.",
                       "Pumping applies tension to the pile's rod, spreading the blades so they press firmly against the walls at the bottom of the hole.") },
  ];

  const GEAR = [
    // "ou fixée sur boule d'attelage" added by the client (scan of 10/08/2026,
    // p. 18) — the case his own photo of the van-mounted rig illustrates.
    t("Machine de forage légère portée sur remorque, automobile, tractée par une voiture ou fixée sur boule d'attelage", "Light drilling machine on a trailer, self-propelled, towed by a car or mounted on a tow ball"),
    t("Forets courants à béton, le forage s'exécutant à sec ; système de percussion en option", "Standard concrete drill bits, drilling done dry; percussion system optional"),
    t("Vérin creux de puissance définie selon le pieu, et entretoise de montage fournie", "Hollow jack sized for the pile, and the mounting spacer supplied"),
    t("Pompe manuelle ou électrique avec manomètre, compatible avec le vérin", "Manual or electric pump with a pressure gauge, compatible with the jack"),
    t("Comparateur de mesure des déplacements pour les essais", "Dial gauge to measure displacements during tests"),
  ];

  const BENEFITS = [
    t("Forage et mise en œuvre rapides : le temps de pose dépend du diamètre et de la profondeur de forage, pas du terrain", "Fast drilling and installation: time depends on borehole diameter and depth, not on the ground"),
    // The geotechnical design offices were dropped when this bullet was
    // condensed; the client wrote them back in (scan of 10/08/2026, p. 10) and
    // his source document names them first (Scan2026-08-01_105630.pdf, p. 8).
    t("Matériel de forage courant, utilisé partout dans le monde par les bureaux d'études géotechniques et les entreprises de forage de puits", "Standard drilling equipment, used worldwide by geotechnical design offices and well-drilling companies"),
    t("Forte tenue aux actions climatiques : neige, vent jusqu'au vent cyclonique, séisme", "Strong resistance to climatic actions: snow, wind up to cyclonic wind, earthquake"),
    t("Rallonge disponible pour atteindre une terre plus compacte en profondeur", "Extension available to reach more compact soil deeper down"),
    t("Dépose réversible — le terrain retrouve son aspect d'origine", "Reversible removal — the site returns to its original state"),
    t("Résistance à l'arrachement vérifiable par essai sur le site", "Pull-out resistance that can be verified by an on-site test"),
  ];

  return (
    <>
      {/* "Supprimer BREVETÉ ou le mettre aussi sur pieux — le pieu est également
          breveté" (scan of 10/08/2026, p. 28); he wrote "BREVETÉ" beside this
          very eyebrow on p. 9. Both products carry it now. */}
      <PageHero
        eyebrow={t("Produit breveté", "Patented product")}
        title={t("Les pieux d'ancrage", "Anchor piles")}
        text={t(
          "Deux types de pieux : le pieu tous terrains, positionné dans un trou foré, et le pieu sable, posé par battage sans aucun forage. Dans les deux cas, des pelles se déploient à la base pour ancrer le pieu — sans béton coulé.",
          "Two types of pile: the all-terrain pile, set in a bored hole, and the sand pile, driven in without any drilling. In both cases, blades deploy at the base to anchor the pile — without poured concrete."
        )}
        image="/media/essai-pression.jpg"
        current={t("Pieux d'ancrage", "Anchor piles")}
      />

      {/* Description */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__text reveal">
              <span className="eyebrow">{t("Description technique", "Technical description")}</span>
              <h2>{t("Qu'est-ce qu'un pieu d'ancrage ?", "What is an anchor pile?")}</h2>
              <p>
                {t(
                  "Le pieu a pour fonction d'immobiliser la structure sous les actions climatiques exercées sur les panneaux, en particulier la neige et le vent. Il est enfoncé dans un trou foré selon ses dimensions.",
                  "The pile's role is to hold the structure against the climatic actions on the panels, in particular snow and wind. It is driven into a hole bored to its dimensions."
                )}
              </p>
              <p>
                {t(
                  "Un vérin creux exerce une charge de précontrainte définie, qui entraîne le déploiement de deux pelles situées à la base du pieu. Ces pelles s'opposent directement aux charges de traction et de pression exercées sur le pieu. Trois modèles couvrent les charges légères, moyennes et lourdes ; des modèles personnalisés peuvent être étudiés.",
                  "A hollow jack applies a defined preload, which deploys two blades at the base of the pile. Those blades directly oppose the tension and compression loads applied to the pile. Three models cover light, medium and heavy loads; custom models can be studied."
                )}
              </p>
              <ul className="checklist">
                {BENEFITS.slice(0, 3).map((b) => <li key={b}><IconCheck /> {b}</li>)}
              </ul>
            </div>
            {/* "VIDÉO DU PIEU" — the client marked this slot for a video of the
                pile itself (scan of 10/08/2026, p. 10) and sent this clip on
                15/08. It shows the blade linkage worked by hand, above ground:
                a demonstration, not an installation, so the caveat below says
                so rather than letting the shot read as a pile going in. */}
            <div className="split__media split__media--tall reveal">
              <video
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster="/media/pieu-pelles-terrain-poster.webp"
                aria-label={t(
                  "Vidéo : les deux pelles articulées en pied de pieu, ouvertes puis refermées à la main",
                  "Video: the two hinged blades at the foot of the pile, opened then closed by hand"
                )}
              >
                <source src="/media/pieu-pelles-terrain.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="caveat reveal" style={{ maxWidth: 780 }}>
            {t(
              "Démonstration hors sol : les pelles sont ici ouvertes et refermées à la main pour montrer l'articulation. En place, ce sont la traction du vérin et la résistance du terrain qui les déploient.",
              "Above-ground demonstration: the blades are opened and closed by hand here to show the linkage. In place, it is the jack's pull and the ground's resistance that deploy them."
            )}
          </p>

          {/* Workshop prototype. The client sent this video (e-mail 05/08/2026)
              with his own warning that the part is unfinished. That warning is
              reproduced verbatim below and must travel with the video wherever
              it is reused — it is what keeps the shot from reading as a
              finished product. */}
          <div className="split" style={{ marginTop: 72 }}>
            <div className="split__media split__media--tall reveal">
              <video
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster="/media/pieu-essai-atelier-poster.webp"
              >
                <source src="/media/pieu-essai-atelier.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="split__text reveal">
              <span className="eyebrow">{t("Prototype d'essai", "Test prototype")}</span>
              <h3>{t("Le mécanisme, vu en atelier", "The mechanism, seen in the workshop")}</h3>
              <p>
                {t(
                  "Un pieu d'essai monté sur l'établi, qui laisse voir l'articulation des pelles avant toute mise en terre.",
                  "A test pile assembled on the bench, showing the linkage of the blades before any installation in the ground."
                )}
              </p>
              <p className="caveat">
                {t(
                  "Prototype d'essai en atelier : la pièce n'est pas finie, elle n'est pas galvanisée et les boulons utilisés ne sont pas à la bonne longueur.",
                  "Workshop test prototype: the part is not finished — it is not galvanised, and the bolts used are not the right length."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ranges */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Pieu tous terrains (TT)", "All-terrain pile (TT)")}</span>
            <h2>{t("Trois modèles selon les charges", "Three models, by load class")}</h2>
            <p>{t(PILE_CAVEAT.fr, PILE_CAVEAT.en)}</p>
          </div>
          <div className="grid grid-3 reveal">
            {PILE_RANGES.map((r) => (
              <article className="card pilecard" key={r.name}>
                <span className="pilecard__name">{r.name}</span>
                <p className="pilecard__dim">{t(r.load.fr, r.load.en)}</p>
                <ul className="pilecard__caps">
                  <li><span>{t("Terre limoneuse", "Silty soil")}</span><strong>{t(r.terre.fr, r.terre.en)}</strong></li>
                  <li><span>{t("Roche", "Rock")}</span><strong>{t(r.roche.fr, r.roche.en)}</strong></li>
                </ul>
              </article>
            ))}
          </div>
          <table className="spectable spectable--wide reveal" style={{ marginTop: 32 }}>
            <thead>
              <tr>
                <th scope="col">{t("Modèle", "Model")}</th>
                <th scope="col">{t("Charges", "Loads")}</th>
                <th scope="col">{t("Forage", "Borehole")}</th>
                <th scope="col">{t("Arrachage en terre limoneuse", "Pull-out in silty soil")}</th>
                <th scope="col">{t("Arrachage dans la roche", "Pull-out in rock")}</th>
              </tr>
            </thead>
            <tbody>
              {PILE_RANGES.map((r) => (
                <tr key={r.name}>
                  <th scope="row">{r.name}</th>
                  <td>{t(r.load.fr, r.load.en)}</td>
                  <td>{t(r.drilling.fr, r.drilling.en)}</td>
                  <td>{t(r.terre.fr, r.terre.en)}</td>
                  <td>{t(r.roche.fr, r.roche.en)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="docrow reveal" style={{ marginTop: 28 }}>
            <IconArrowRight />
            <span>{t(PILE_TIMING.fr, PILE_TIMING.en)}</span>
          </div>
          <div className="docrow reveal" style={{ marginTop: 14 }}>
            <IconArrowRight />
            <span>{t(PILE_PROTECTION.fr, PILE_PROTECTION.en)}</span>
          </div>
          <div className="docrow reveal" style={{ marginTop: 14 }}>
            <IconArrowRight />
            <span>
              {t(
                "Des modèles personnalisés peuvent être étudiés. Une rallonge permet de multiplier par 2, 3… la longueur du pieu en sous-sol lorsque le terrain n'offre pas la résistance requise ; une plaque E.T. peut être ajoutée pour s'opposer aux efforts horizontaux.",
                "Custom models can be studied. An extension can multiply the pile's underground length by 2, 3… where the ground does not offer the required resistance; an E.T. plate can be added to resist horizontal forces."
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Second pile family: no drilling at all */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Pieu sable (S)", "Sand pile (S)")}</span>
            <h2>{t("Un pieu posé sans aucun forage", "A pile installed without any drilling")}</h2>
            <p>
              {t(
                "Le pieu sable ne nécessite aucun forage. Il est présenté à son emplacement, puis un engin de battage l'enfonce à la profondeur requise en frappant un chapeau placé en tête. Le chapeau retiré, le battage reprend sur un élément intérieur qui déploie les pelles en pied de pieu. Il s'utilise efficacement dans des sables mouillés stabilisés de longue date ; des essais en confirment la tenue.",
                "The sand pile requires no drilling at all. It is presented at its position, then a driving rig sinks it to the required depth by striking a cap fitted on its head. Once the cap is removed, driving resumes on an inner element that deploys the blades at the foot of the pile. It is effective in long-stabilised wet sands; tests confirm its hold."
              )}
            </p>
          </div>
          <div className="grid grid-3 reveal">
            {SAND_PILE_RANGES.map((r) => (
              <article className="card pilecard" key={r.name}>
                <span className="pilecard__name">{r.name}</span>
                <p className="pilecard__dim">{t(r.load.fr, r.load.en)}</p>
              </article>
            ))}
          </div>
          <div className="docrow reveal" style={{ marginTop: 28 }}>
            <IconArrowRight />
            <span>
              {t(
                "Le retrait du pieu sable est aisé : il suffit de tirer l'élément intérieur tout en battant légèrement la face du pieu.",
                "Removing the sand pile is straightforward: pull the inner element while lightly driving the face of the pile."
              )}
            </span>
          </div>
        </div>
      </section>

      {/* Documented scope of use — narrower than the site's five domains */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Utilisation", "Use")}</span>
            <h2>{t("Où les pieux sont utilisés", "Where the piles are used")}</h2>
            <p>{t("Les pieux peuvent être utilisés efficacement pour :", "The piles can be used effectively for:")}</p>
          </div>
          <ul className="checklist reveal">
            {PILE_USES.map((u) => (
              <li key={u.fr}><IconCheck /> {t(u.fr, u.en)}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Installation method */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{t("Méthode de pose", "Installation method")}</span>
            <h2>{t("La pose du pieu tous terrains, étape par étape", "Installing the all-terrain pile, step by step")}</h2>
            <ol className="ministeps">
              {PRINCIPE_STEPS.map((s) => (
                <li key={s.n}>
                  <span className="ministeps__n">{s.n}</span>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* The client's own CAD sequence, titled by hand "Pose et blocage du
              pieu" (scan of 10/08/2026, p. 17). The seven drawings had been
              sitting unused in public/media/methode/. He struck out the step
              numbers the site printed over them — his drawings carry their own
              order — and wrote "La pose est terminée" under the pressurising
              step, which is the point of the whole sequence: the pile is
              anchored at that moment, and the last drawing is a separate,
              optional test. */}
          <h3 className="reveal" style={{ marginTop: 56 }}>
            {t("Pose et blocage du pieu", "Installing and locking the pile")}
          </h3>
          <div className="schemas schemas--2 reveal" style={{ marginTop: 24 }}>
            {[
              {
                src: "/media/methode/01-plaque-assise.webp",
                alt: t("Plaque d'assise boulonnée sur la tête de pieu par deux boulons M10×80, écrou non serré",
                       "Bearing plate bolted to the pile head with two M10×80 bolts, nut left loose"),
                cap: t("Montage de la plaque d'assise et boulonnage sur la tête de pieu. Elle peut être remplacée par un UPN 80 ou 100.",
                       "Fitting the bearing plate and bolting it to the pile head. It can be replaced by a UPN 80 or 100."),
              },
              {
                src: "/media/methode/02-positionnement.webp",
                alt: t("Pieu équipé descendu dans le trou foré, réglage de position en XX et en YY",
                       "Equipped pile lowered into the bored hole, position adjusted in XX and YY"),
                cap: t("Présentation du pieu équipé dans le trou et positionnement selon les coordonnées théoriques.",
                       "Presenting the equipped pile in the hole and positioning it to the theoretical coordinates."),
              },
              {
                src: "/media/methode/03-modele-entretoise.webp",
                alt: t("Modèle de pose de 200 à 250 mm et entretoise de montage centrés sur la tête de pieu",
                       "200 to 250 mm setting jig and mounting spacer centred on the pile head"),
                cap: t("Pose du modèle et de l'entretoise de montage, centrés au mieux sur la tête de pieu.",
                       "Fitting the setting jig and the mounting spacer, centred as closely as possible on the pile head."),
              },
              {
                src: "/media/methode/04-tige-allonge.webp",
                alt: t("Tige d'allonge engagée par son côté à écrou double soudé et boulonnée sans serrage sur la tige du pieu",
                       "Extension rod engaged by its welded double-nut side and bolted without tightening onto the pile rod"),
                cap: t("Engagement de la tige d'allonge par le côté comportant l'écrou double soudé, puis boulonnage sans serrage sur la tête de tige du pieu.",
                       "Engaging the extension rod by the side carrying the welded double nut, then bolting it — without tightening — onto the pile's rod head."),
              },
              {
                src: "/media/methode/05-verin-creux.webp",
                alt: t("Vérin creux posé sur l'entretoise, la tige d'allonge passant dans son trou central",
                       "Hollow jack set on the spacer, the extension rod passing through its central bore"),
                cap: t("Mise en place du vérin creux sur l'entretoise : la tige d'allonge passe dans son trou central. Cale et écrou sont installés sur la tige — le serrage est inutile.",
                       "Setting the hollow jack on the spacer: the extension rod passes through its central bore. Shim and nut are fitted on the rod — no tightening is needed."),
              },
              {
                src: "/media/methode/06-mise-pression.webp",
                alt: t("Vérin en pression alimenté par la pompe manuelle et son manomètre ; en fond de trou, les pelles s'écartent",
                       "Jack under pressure fed by the hand pump and its gauge; at the bottom of the hole, the blades spread apart"),
                cap: t("Le vérin est mis en pression jusqu'à la charge de traction définie pour le modèle. Sous l'effort, les pelles s'écartent et ancrent le pieu dans le sol.",
                       "The jack is pressurised up to the tension load defined for the model. Under that load, the blades spread apart and anchor the pile in the ground."),
                done: true,
              },
            ].map((s) => (
              <figure className="schema" key={s.src}>
                <div className="schema__media">
                  <img src={s.src} alt={s.alt} loading="lazy" />
                </div>
                <figcaption>
                  {s.cap}
                  {s.done && <> <strong>{t("La pose est terminée.", "Installation is complete.")}</strong></>}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* The seventh drawing of the client's sequence covers this step, but
              it carries an AutoCAD tooltip burnt into the image and cannot be
              published as is. This photograph shows the same set-up for real —
              jack on the test chaise, comparator on top, gauge in the
              foreground — and is the only shot of it on the site. */}
          <div className="split" style={{ marginTop: 56 }}>
            <div className="split__text reveal">
              <span className="eyebrow">{t("Essai d'arrachement", "Pull-out test")}</span>
              <h3>{t("Vérifier la tenue sur le site même", "Verifying the hold on site itself")}</h3>
              <p>
                {t(
                  "Après décompression du vérin et dépose de la tige d'allonge et de l'entretoise, le pieu est repris sur une chaise d'essai calée de part et d'autre. Le pompage reprend jusqu'au déplacement maximal admis, que le comparateur mesure.",
                  "Once the jack is released and the extension rod and spacer removed, the pile is taken up on a test frame shimmed on either side. Pumping resumes up to the maximum admitted displacement, which the dial gauge measures."
                )}
              </p>
            </div>
            <div className="split__media split__media--tall reveal">
              <img
                src="/media/pieu-ancrage.webp"
                alt={t("Montage d'essai d'arrachement : vérin creux jaune sur la chaise d'essai, comparateur au-dessus, manomètre au premier plan et foreuse en arrière-plan", "Pull-out test set-up: yellow hollow jack on the test frame, dial gauge above, pressure gauge in the foreground and drilling rig behind")}
                loading="lazy"
              />
            </div>
          </div>

          {/* Photographed on site, 23/05/2025. These three cover the tensioning
              operation only — step 01, the pile going into the bored hole, has
              no picture yet, so the sequence starts at the spacer. */}
          <div className="shots shots--3 reveal">
            <figure className="shot">
              <div className="shot__media">
                <img
                  src="/media/pieu-entretoise.webp"
                  alt={t("Tête de pieu équipée de son entretoise de montage et de sa tige d'allonge filetée", "Pile head fitted with its mounting spacer and threaded extension rod")}
                  loading="lazy"
                />
              </div>
              <figcaption>
                {t(
                  "L'entretoise de montage et la tige d'allonge en place sur la tête de pieu, avant pose du vérin.",
                  "The mounting spacer and extension rod in place on the pile head, before the jack is fitted."
                )}
              </figcaption>
            </figure>
            <figure className="shot">
              <div className="shot__media">
                <img
                  src="/media/verin-creux-en-place.webp"
                  alt={t("Vérin creux hydraulique monté sur l'entretoise au-dessus de la tête de pieu, flexible raccordé", "Hollow hydraulic jack mounted on the spacer above the pile head, hose connected")}
                  loading="lazy"
                />
              </div>
              <figcaption>
                {t(
                  "Le vérin creux monté sur l'entretoise, son flexible hydraulique raccordé.",
                  "The hollow jack mounted on the spacer, its hydraulic hose connected."
                )}
              </figcaption>
            </figure>
            <figure className="shot">
              <div className="shot__media">
                <img
                  src="/media/pompe-verin.webp"
                  alt={t("Opérateur actionnant la pompe hydraulique manuelle reliée au vérin, manomètre en ligne", "Operator working the manual hydraulic pump connected to the jack, gauge in line")}
                  loading="lazy"
                />
              </div>
              <figcaption>
                {t(
                  "La mise en pression à la pompe manuelle : le manomètre en ligne donne la charge appliquée.",
                  "Applying pressure with the hand pump: the in-line gauge reads the load applied."
                )}
              </figcaption>
            </figure>
          </div>

          <div className="split reveal" style={{ marginTop: 64, marginBottom: 56 }}>
            <div className="split__text">
              <ul className="checklist">
                <li><IconCheck /> {t("Ancrage mécanique par pelles pivotantes", "Mechanical anchoring by pivoting blades")}</li>
                <li><IconCheck /> {t("Mise en traction au vérin creux", "Tensioning with a hollow jack")}</li>
                <li><IconCheck /> {t("Essai d'arrachement éventuel : poutres d'assises dévissées, comparateur en place, pompage repris jusqu'au déplacement maximal admis", "Optional pull-out test: bearing beams unscrewed, dial gauge in place, pumping resumed up to the maximum admitted displacement")}</li>
                <li><IconCheck /> {t("Positionnement suivant les coordonnées théoriques", "Positioning according to the theoretical coordinates")}</li>
              </ul>
            </div>
            <div className="split__media">
              <img src="/media/methode/methode-hero.webp" alt={t("Vue d'ensemble de la pose : vérin creux, pompe et pieu", "Overview of installation: hollow jack, pump and pile")} loading="lazy" />
            </div>
          </div>

        </div>
      </section>

      {/* Gear + benefits */}
      <section className="section section--soft">
        <div className="container">
          {/* The stock illustration that stood beside this list — a figure in a
              hard hat next to a cutaway pile — was crossed out by the client
              (scan of 10/08/2026, p. 18). The real machines below replace it. */}
          <div className="section-head reveal">
            <span className="eyebrow">{t("Matériel léger", "Light equipment")}</span>
            <h2>{t("Le matériel de forage et de pose", "Drilling and installation equipment")}</h2>
          </div>
          <ul className="checklist reveal">
            {GEAR.map((g) => <li key={g}><IconCheck /> {g}</li>)}
          </ul>

          {/* Shown uncropped at the client's insistence — "photos entières,
              l'intérêt c'est la machine pas l'ouvrier" (pp. 18-19). Every fixed
              frame cut the drilling mast, which is the subject. */}
          <div className="shots shots--3 reveal">
            <figure className="shot">
              <div className="shot__media shot__media--whole">
                <img
                  src="/media/foreuse-attelage.webp"
                  alt={t("Machine de forage légère montée sur rail à l'arrière d'un fourgon, opérateur engageant le train de tiges", "Light drilling rig mounted on a rail at the back of a van, operator engaging the rod string")}
                  loading="lazy"
                />
              </div>
              <figcaption>
                {t(
                  "Une machine de forage légère portée par un véhicule, mise en œuvre directement depuis l'arrière du fourgon.",
                  "A light drilling rig carried by a vehicle and worked straight from the back of the van."
                )}
              </figcaption>
            </figure>
            <figure className="shot">
              <div className="shot__media shot__media--whole">
                <img
                  src="/media/foreuse-autonome.webp"
                  alt={t("Machine de forage autonome sur chenilles, mât dressé, posée sur son embase", "Self-propelled tracked drilling rig, mast raised, set on its baseplate")}
                  loading="lazy"
                />
              </div>
              <figcaption>
                {t(
                  "Une machine de forage autonome sur chenilles, mât dressé sur son embase.",
                  "A self-propelled tracked drilling rig, mast raised on its baseplate."
                )}
              </figcaption>
            </figure>
            <figure className="shot">
              <div className="shot__media shot__media--whole">
                <img
                  src="/media/foreuse-autonome-forage.webp"
                  alt={t("Forage en cours : l'opérateur guide le train de tiges de la machine autonome", "Drilling under way: the operator guides the rod string of the self-propelled rig")}
                  loading="lazy"
                />
              </div>
              <figcaption>
                {t(
                  "Le forage en cours, exécuté à sec : l'opérateur guide le train de tiges.",
                  "Drilling under way, done dry: the operator guides the rod string."
                )}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t("Avantages", "Advantages")}</span>
            <h2>{t("Pourquoi choisir le pieu d'ancrage", "Why choose the anchor pile")}</h2>
          </div>
          <div className="grid grid-3">
            {BENEFITS.map((b) => (
              <article className="card reveal" key={b}>
                <span className="icon-badge"><IconCheck /></span>
                <p style={{ margin: 0 }}>{b}</p>
              </article>
            ))}
          </div>
          <div className="docrow reveal" style={{ marginTop: 28 }}>
            <IconArrowRight />
            <span>{t("Descriptions des essais et de la pose (croquis) disponibles sur demande.", "Test and installation descriptions (drawings) available on request.")}</span>
          </div>
        </div>
      </section>

      <CtaBand
        title={t("Besoin d'un dimensionnement pour votre projet ?", "Need sizing for your project?")}
        text={t("Envoyez-nous la nature de votre sol et les charges à reprendre : nous proposons la gamme adaptée.", "Send us your soil type and the loads to carry: we'll propose the right range.")}
      />
    </>
  );
}

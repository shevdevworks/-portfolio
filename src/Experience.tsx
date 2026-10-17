import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { flushSync } from "react-dom";
import { Brand, BrandSymbol, Icon } from "./components";
import { BotIllustration } from "./BotIllustration";
import { content, languages, projects, type Lang, type Project } from "./content";
import {
  pointerDepth,
  resetDepth,
  usePageMotion,
  useReducedMotion,
} from "./motion";

const assets = `${import.meta.env.BASE_URL}images/`;
const email = "shevdevworks@gmail.com";
const imageVersion = "692a35413f";
const interfaceImages: Record<string, { file: string; width: number; height: number }> = {
  "stayline": {
    "file": "stayline-interface.webp",
    "width": 1440,
    "height": 940
  },
  "emquad": {
    "file": "emquad-interface.webp",
    "width": 1440,
    "height": 1000
  },
  "cybergear": {
    "file": "cyber-gear-interface.webp",
    "width": 1440,
    "height": 900
  },
  "apex": {
    "file": "apex-saas-interface.webp",
    "width": 1440,
    "height": 820
  },
  "trendify": {
    "file": "trendify-interface.webp",
    "width": 1440,
    "height": 1100
  }
};
const shot = (project: Project) =>
  `${assets}${interfaceImages[project.id].file}?v=${imageVersion}`;
const staylineMobile = `${assets}stayline-mobile.webp?v=${imageVersion}`;
const serviceProjects = [3, 0, 2, 4, 5];
const examples = projects.filter((project) => project.live);
const toolkit = [
  { name: "React", icon: "atom" },
  { name: "Next.js", mark: "N" },
  { name: "TypeScript", mark: "TS" },
  { name: "JavaScript", mark: "JS" },
  { name: "HTML & CSS", mark: "</>" },
  { name: "Tailwind CSS", mark: "TW" },
  { name: "GSAP", mark: "GS" },
  { name: "Node.js", mark: "JS" },
  { name: "PostgreSQL", mark: "PG" },
  { name: "Telegram Bot API", icon: "telegram" },
  { name: "Figma", mark: "Fi" },
  { name: "Vite", icon: "bolt" },
];

/* The switch shows UA, while the language code stays the standard "uk". */
const languageLabels: Record<Lang, string> = { en: "EN", ru: "RU", uk: "UA" };
const isLang = (value: string | null): value is Lang =>
  languages.includes(value as Lang);

function initialLanguage(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromUrl)) return fromUrl;
  try {
    const stored = localStorage.getItem("shevdevworks-language");
    return isLang(stored) ? stored : "en";
  } catch {
    return "en";
  }
}

type Theme = "light" | "dark";
const themeColors: Record<Theme, string> = { light: "#f7f8fa", dark: "#0f0e15" };

/* index.html applies a saved theme before the first paint; light is the default. */
function initialTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function CaseDialog({
  project,
  lang,
  onClose,
  onRequest,
  reduced,
}: {
  project: Project | null;
  lang: Lang;
  onClose: () => void;
  onRequest: (project: Project) => void;
  reduced: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closing = useRef(false);
  const exitAnimation = useRef<Animation | null>(null);
  const c = content[lang];
  useEffect(() => {
    const el = dialog.current;
    if (!el || !project) return;
    closing.current = false;
    el.showModal();
    el.scrollTop = 0;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const animation = reduced
      ? null
      : el.animate(
          [
            { opacity: 0, transform: "translateY(38px) scale(.97)" },
            { opacity: 1, transform: "translateY(0) scale(1)" },
          ],
          { duration: 500, easing: "cubic-bezier(.16,1,.3,1)" },
        );
    return () => {
      animation?.cancel();
      exitAnimation.current?.cancel();
      el.close();
      document.body.style.overflow = previous;
    };
  }, [project, reduced]);
  const requestClose = () => {
    if (closing.current) return;
    closing.current = true;
    const el = dialog.current;
    if (reduced || !el) {
      onClose();
      return;
    }
    exitAnimation.current = el.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(20px)" },
      ],
      { duration: 180, easing: "ease-in", fill: "forwards" },
    );
    exitAnimation.current.finished.then(onClose).catch(() => {});
  };
  return (
    <dialog
      ref={dialog}
      className="case-dialog"
      aria-labelledby="case-title"
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      {project && (
        <div className="case-inner">
          <div className="case-top">
            <span>
              {c.caseLabel}
              <span className="small-dot" />
              {project.category[lang]}
            </span>
            <button
              className="icon-button"
              autoFocus
              onClick={requestClose}
              aria-label={c.closeCase}
            >
              <Icon name="close" />
            </button>
          </div>
          <div className="case-heading">
            <h2 id="case-title">{project.title[lang]}</h2>
            <p>{project.summary[lang]}</p>
            <button className="button button-primary case-request" onClick={() => onRequest(project)}>
              {c.similar}<Icon name="arrow" size={18} />
            </button>
          </div>
          <div className={`case-image-wrap surface-${project.id}`}>
            {project.id === "telegram" ? <BotIllustration lang={lang} /> : <img
              className="case-image"
              src={shot(project)}
              alt={`${project.name} — ${project.category[lang]}`}
            />}
          </div>
          <div className="case-body">
            <div>
              <h3>{c.brief}</h3>
              <p>{project.brief[lang]}</p>
            </div>
            <aside>
              <h3>{c.implementation}</h3>
              <ul>
                {project.implementation.map((item, i) => (
                  <li key={i}><Icon name="check" size={18} /><span>{item[lang]}</span></li>
                ))}
              </ul>
            </aside>
          </div>
          <div className="case-example-note">
            <strong>{project.live ? `${c.example}: ${project.name}` : c.illustration}</strong>
            <p>{project.scope[lang]}</p>
            <div className="tech-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <div className="case-bottom">
            <button className="button button-primary" onClick={() => onRequest(project)}>
              {c.similar}<Icon name="arrow" size={18} />
            </button>
            {project.live && <a
              className="text-link"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{c.live}</span>
              <Icon name="external" />
            </a>}
            {project.repo && <a
              className="text-link"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.code}
              <Icon name="external" size={16} />
            </a>}
          </div>
        </div>
      )}
    </dialog>
  );
}

function Theatre({
  lang,
  featured,
  setFeatured,
  onOpen,
}: {
  lang: Lang;
  featured: number;
  setFeatured: (value: number) => void;
  onOpen: (project: Project) => void;
}) {
  const c = content[lang];
  const project = examples[featured];
  return (
    <div className="project-theatre">
      <div
        className="showcase-stage"
        onPointerMove={pointerDepth}
        onPointerLeave={resetDepth}
      >
        <div className="stage-light" aria-hidden="true" />
        <div className="stage-orbit orbit-one" aria-hidden="true" />
        <div className="stage-orbit orbit-two" aria-hidden="true" />
        <div className="stage-top">
          <span>
            <BrandSymbol className="stage-mark mark-join" /> {c.previewNote}
          </span>
          <span>{c.workCount}</span>
        </div>
        <div className="stage-composition">
          <div className="stage-backplate" aria-hidden="true" />
          <button
            className={`showcase-browser browser-${project.id}`}
            onClick={() => onOpen(project)}
            aria-label={`${c.openCase}: ${project.name}`}
          >
            <div className="browser-bar">
              <span className="browser-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="browser-address">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="4"
                    y="7"
                    width="8"
                    height="6"
                    rx="1"
                    stroke="currentColor"
                  />
                  <path
                    d="M5.5 7V4.5a2.5 2.5 0 0 1 5 0V7"
                    stroke="currentColor"
                  />
                </svg>
                {new URL(project.live!).hostname}
              </span>
              <Icon name="external" size={14} />
            </div>
            <div className="hero-image-wrap">
              <img
                key={project.id}
                src={shot(project)}
                alt={`${project.name} — ${project.category[lang]}`}
                fetchPriority="high"
              />
            </div>
            <span className="stage-open">
              {c.openCase}
              <Icon name="open" size={18} />
            </span>
          </button>
          {featured === 0 ? (
            <div className="showcase-phone" aria-hidden="true">
              <div className="phone-speaker" />
              <img src={staylineMobile} alt="" />
            </div>
          ) : (
            <div className="stage-project-note" key={project.id}>
              <span>{project.category[lang]}</span>
              <strong>{project.name}</strong>
              <div>{project.stack.slice(0, 2).join(" / ")}</div>
            </div>
          )}
          <div className="stage-detail">
            <span className="detail-cross" aria-hidden="true" />
            <span>{featured === 0 ? c.mobile : c.stamp}</span>
          </div>
        </div>
        <div className="stage-bottom">
          <a href="#work">
            {c.scroll}
            <span className="scroll-line" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="showcase-controls">
        <div className="showcase-info" aria-live="polite">
          <strong>{project.name}</strong>
          <span>{project.category[lang]}</span>
        </div>
        <div
          className="project-switch"
          role="group"
          aria-label={c.projectSelect}
        >
          {examples.map((p, i) => (
            <button
              key={p.id}
              aria-pressed={featured === i}
              onClick={() => setFeatured(i)}
            >
              <span className="project-switch-dot" />
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [lang, setLang] = useState<Lang>(initialLanguage);
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [featured, setFeatured] = useState(0);
  const [filter, setFilter] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const [service, setService] = useState(0);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const [contactChannel, setContactChannel] = useState<"email" | "telegram" | null>(null);
  const [briefMessage, setBriefMessage] = useState("");
  const [briefService, setBriefService] = useState(0);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const workGrid = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const c = content[lang];
  const contactBody = `${c.mailGreeting}\n\n${c.mailNeed} ${c.serviceOptions[briefService]}\n\n${briefMessage.trim()}\n`;
  const emailDraftUrl = `mailto:${email}?subject=${encodeURIComponent(c.mailSubject)}&body=${encodeURIComponent(contactBody)}`;
  /* The control is named after the theme it switches to. */
  const nextThemeLabel = theme === "dark" ? c.themeLight : c.themeDark;
  const themeIcon = (
    <span className="theme-icon">
      <Icon name="moon" size={18} />
      <Icon name="sun" size={18} />
    </span>
  );
  const telegramDraftUrl =`https://t.me/shevdevworks?text=${encodeURIComponent(contactBody)}`;
  const shownProjects = projects.filter(
    (p) => filter === 0 || p.group === [null, "apps", "websites", "bots"][filter],
  );
  const serviceProject = projects[serviceProjects[service]];
  usePageMotion(reduced);
  const closeCase = useCallback(() => setSelected(null), []);
  const requestEnquiry = (enquiry: number) => {
    setSelected(null);
    setBriefService(enquiry);
    setContactChannel(null);
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" });
      document.getElementById("message")?.focus({ preventScroll: true });
    });
  };
  const requestService = (project: Project) => requestEnquiry(project.enquiry);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content[lang].pageTitle;
    const description = content[lang].pageDescription;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
    try {
      localStorage.setItem("shevdevworks-language", lang);
    } catch {
      /* The selected language still works without storage. */
    }
    const url = new URL(window.location.href);
    if (lang === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    setCopyState("idle");
    setContactChannel(null);
  }, [lang]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themeColors[theme]);
    try {
      localStorage.setItem("shevdevworks-theme", theme);
    } catch {
      /* The selected theme still works without storage. */
    }
  }, [theme]);
  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if ((event.target as Element).closest(".header")) return;
      setMenuOpen(false);
      /* The press that dismisses the menu should not activate what is under it. */
      const swallow = (click: MouseEvent) => {
        click.preventDefault();
        click.stopPropagation();
      };
      const release = () =>
        setTimeout(() => document.removeEventListener("click", swallow, true));
      document.addEventListener("click", swallow, { capture: true, once: true });
      document.addEventListener("pointerup", release, { once: true });
      document.addEventListener("pointercancel", release, { once: true });
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [menuOpen]);
  useEffect(() => {
    if (reduced || !workGrid.current) return;
    const animation = workGrid.current.animate(
      [
        { opacity: 0.25, transform: "translateY(12px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 450, easing: "cubic-bezier(.16,1,.3,1)" },
    );
    return () => animation.cancel();
  }, [filter, reduced]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyState("idle"), 4000);
  }
  function toggleTheme(event: ReactMouseEvent<HTMLButtonElement>) {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      flushSync(() => setTheme(next));
    };
    if (reduced || !("startViewTransition" in document)) return apply();
    /* The new palette opens as a circle from the control that was pressed. */
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    document
      .startViewTransition(apply)
      .ready.then(() =>
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 700,
            easing: "cubic-bezier(.16,1,.3,1)",
            pseudoElement: "::view-transition-new(root)",
          },
        ),
      )
      .catch(() => {
        /* The theme is already applied if the transition is skipped. */
      });
  }
  function prepareContact(event: ReactMouseEvent<HTMLAnchorElement>, channel: "email" | "telegram") {
    const request = briefMessage.trim();
    const input = event.currentTarget.closest("form")!.elements.namedItem("message") as HTMLTextAreaElement;
    input.setCustomValidity(request ? "" : c.messageRequired);
    if (!request) {
      event.preventDefault();
      setContactChannel(null);
      input.reportValidity();
      return;
    }
    setContactChannel(channel);
  }

  return (
    <>
      <a href="#main" className="skip-link">
        {c.skip}
      </a>
      <div className="reading-progress" aria-hidden="true" />
      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav
            className="desktop-nav"
            aria-label={c.navLabel}
          >
            {["work", "services", "about"].map((id, i) => (
              <a href={`#${id}`} key={id}>
                <span>{c.nav[i]}</span>
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <div className="header-tools">
              <div
                className="language-switch"
                role="group"
                aria-label={c.languageLabel}
              >
                {languages.map((l) => (
                  <button
                    key={l}
                    lang={l}
                    aria-pressed={lang === l}
                    onClick={() => setLang(l)}
                  >
                    {languageLabels[l]}
                  </button>
                ))}
              </div>
              <button
                className="theme-toggle"
                aria-label={nextThemeLabel}
                title={nextThemeLabel}
                onClick={toggleTheme}
              >
                {themeIcon}
              </button>
            </div>
            <a href="#contact" className="header-contact">
              {c.talk}
              <span>
                <Icon name="arrow" size={15} />
              </span>
            </a>
            <button
              id="menu-toggle"
              className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
              aria-label={menuOpen ? c.closeMenu : c.menu}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav
          className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
          id="mobile-nav"
          aria-label={c.mobileNavLabel}
          inert={!menuOpen}
        >
          {["work", "services", "about", "contact"].map((id, i) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {i < 3 ? c.nav[i] : c.talk}
              <Icon name="arrow" size={20} />
            </a>
          ))}
          <button className="mobile-theme" onClick={toggleTheme}>
            {nextThemeLabel}
            {themeIcon}
          </button>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span className="availability" data-intro>
              <span className="status-dot" aria-hidden="true" />
              {c.status}
            </span>
          </div>
          <div className="hero-lead">
            <h1 id="hero-title" key={lang}>
              {c.headline.map((line, i) => (
                <span className="headline-mask" key={line}>
                  <span data-intro>
                    {line}
                    {i === 1 && (
                      <BrandSymbol className="headline-mark mark-join" />
                    )}
                  </span>
                </span>
              ))}
            </h1>
            <div className="hero-intro">
              <p>{c.intro}</p>
              <a className="button button-primary" href="#contact">
                <span>{c.discuss}</span>
                <span className="button-icon">
                  <Icon name="arrow" size={20} />
                </span>
              </a>
              <a className="hero-work-link" href="#work">
                {c.viewWork}
                <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
          <Theatre
            lang={lang}
            featured={featured}
            setFeatured={setFeatured}
            onOpen={setSelected}
          />
        </section>

        <div className="tool-strip container">
          <span id="toolkit-label">{c.techNote}</span>
          <ul className="tool-list" aria-labelledby="toolkit-label" role="list">
            {toolkit.map((tool) => (
              <li key={tool.name}>
                <span
                  className={`tool-mark${tool.icon ? " tool-mark-icon" : ""}`}
                  aria-hidden="true"
                >
                  {tool.icon ? <Icon name={tool.icon} size={25} /> : tool.mark}
                </span>
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <section
          className="work-section container section-space"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                <span className="status-dot" aria-hidden="true" />
                {c.selectedWork}
              </span>
              <h2 id="work-title">{c.workTitle}</h2>
              <p>{c.workIntro}</p>
            </div>
            <div
              className="work-filter"
              role="group"
              aria-label={c.filterLabel}
            >
              {c.filters.map((label, i) => (
                <button
                  key={i}
                  aria-pressed={filter === i}
                  onClick={() => setFilter(i)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div
            className={`work-grid ${filter !== 0 ? "is-filtered" : ""}`}
            ref={workGrid}
          >
            {shownProjects.map((p, i) => (
              <article
                className={`project project-${p.id} ${(filter === 0 && (i === 0 || p.id === "telegram")) || shownProjects.length === 1 ? "project-featured" : ""}`}
                key={p.id}
              >
                <button
                  className={`project-image-button surface-${p.id}`}
                  onClick={() => setSelected(p)}
                  onPointerMove={pointerDepth}
                  onPointerLeave={resetDepth}
                  aria-label={`${c.case}: ${p.title[lang]}`}
                >
                  <span className="project-visual-label">
                    {p.name}
                    <span>{p.live ? c.example : c.illustration}</span>
                  </span>
                  <div className="project-browser">
                    {p.id === "telegram" ? <BotIllustration lang={lang} /> : <img
                      src={shot(p)}
                      alt={`${p.name} — ${p.category[lang]}`}
                      loading="lazy"
                      width={interfaceImages[p.id].width}
                      height={interfaceImages[p.id].height}
                    />}
                  </div>
                  {p.id === "stayline" && (
                    <div className="project-phone" aria-hidden="true">
                      <img
                        src={staylineMobile}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  )}
                  <span className="image-open">
                    <span>{c.detailLabel}</span>
                    <Icon name="open" size={20} />
                  </span>
                </button>
                <div className="project-details">
                  <div className="project-title-row">
                    <h3>
                      <button onClick={() => setSelected(p)}>
                        {p.title[lang]}
                        <Icon name="open" size={22} />
                      </button>
                    </h3>
                  </div>
                  <p>{p.summary[lang]}</p>
                  <div className="project-stack">
                    {p.benefits.map((s) => (
                      <span key={s.en}>{s[lang]}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="services-section"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="container section-space">
            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  <span className="small-dot" />
                  {c.serviceCaption}
                </span>
                <h2 id="services-title">{c.serviceIntro}</h2>
              </div>
              <p>{c.servicesIntro}</p>
            </div>
            <div className="services-layout">
              <div className="service-list">
                {c.services.map((item, i) => (
                  <article
                    className={`service ${service === i ? "is-active" : ""}`}
                    key={item.icon}
                  >
                    <h3>
                      <button
                        id={`service-heading-${i}`}
                        aria-expanded={service === i}
                        aria-controls={`service-panel-${i}`}
                        onClick={() => setService(i)}
                      >
                        <span className="service-icon">
                          <Icon name={item.icon} size={25} />
                        </span>
                        <span>{item.title}</span>
                        <span className="service-plus" aria-hidden="true" />
                      </button>
                    </h3>
                    <div
                      className="service-expander"
                      id={`service-panel-${i}`}
                      role="region"
                      aria-labelledby={`service-heading-${i}`}
                      inert={service !== i}
                    >
                      <div>
                        <p>{item.text}</p>
                        <span className="service-tools">{item.tags}</span>
                        <button className="text-link service-enquiry" onClick={() => requestEnquiry(i === 3 ? 6 : projects[serviceProjects[i]].enquiry)}>
                          {c.talk}
                          <Icon name="arrow" size={18} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className={`service-preview surface-${serviceProject.id}`}>
                <div
                  className="service-preview-content"
                  key={serviceProject.id}
                >
                  <span className="service-preview-label">
                    {serviceProject.category[lang]}
                  </span>
                  <div className="service-preview-screen">
                    {serviceProject.id === "telegram" ? <BotIllustration lang={lang} /> : <img
                      src={shot(serviceProject)}
                      alt={`${serviceProject.name} — ${serviceProject.category[lang]}`}
                      loading="lazy"
                    />}
                  </div>
                  <button
                    className="service-preview-link"
                    onClick={() => setSelected(serviceProject)}
                  >
                    <span>
                      <small>{c.serviceLink}</small>
                      <strong>{serviceProject.title[lang]}</strong>
                    </span>
                    <Icon name="open" size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="about-section container section-space"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-copy">
            <span className="section-kicker">
              <span className="status-dot" aria-hidden="true" />
              {c.aboutLabel}
            </span>
            <h2 id="about-title">{c.aboutTitle}</h2>
            <p>{c.aboutText}</p>
            <p>{c.aboutText2}</p>
            <a
              className="text-link"
              href="https://github.com/shevdevworks"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.aboutLink}
              <Icon name="external" size={17} />
            </a>
          </div>
          <div
            className="about-art"
            lang="en"
            onPointerMove={pointerDepth}
            onPointerLeave={resetDepth}
          >
            <div className="identity-orbit" aria-hidden="true" />
            <div className="identity-card">
              <div className="identity-card-top">
                <Brand />
                <span className="status-dot" aria-hidden="true" />
              </div>
              <span className="identity-name">{content.en.name}</span>
              <span className="identity-role">{content.en.role}</span>
              <div className="identity-bottom">
                <span>{content.en.city}</span>
                <span>{content.en.independent}</span>
              </div>
            </div>
            <div className="about-signature">
              <span>{content.en.aboutSmall}</span>
              <BrandSymbol className="signature-mark" />
            </div>
          </div>
          <div className="about-principles">
            {c.aboutPrinciples.map((item) => (
              <span key={item}>
                <Icon name="check" size={18} />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section
          className="process-section container"
          aria-labelledby="process-title"
        >
          <div className="process-heading">
            <h2 id="process-title">{c.processTitle}</h2>
            <span className="process-arrow" aria-hidden="true">
              <Icon name="arrow" size={30} />
            </span>
          </div>
          <div className="process-grid">
            {c.steps.map((step, i) => (
              <article className="process-step" key={i}>
                <span className="step-number">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-glow" aria-hidden="true" />
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-kicker">
                <span className="status-dot" aria-hidden="true" />
                {c.contactEyebrow}
              </span>
              <h2 id="contact-title">{c.contactTitle}</h2>
              <p>{c.contactText}</p>
              <div className="contact-methods">
                <div className="email-contact">
                  <a href={`mailto:${email}`}>
                    <span>
                      <small>{c.emailLabel}</small>
                      {email}
                    </span>
                  </a>
                  <button
                    className="copy-button"
                    onClick={copyEmail}
                    aria-label={c.copy}
                  >
                    <Icon
                      name={copyState === "copied" ? "check" : "copy"}
                      size={20}
                    />
                  </button>
                </div>
                <a
                  className="telegram-contact"
                  href="https://t.me/shevdevworks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="telegram" size={21} />
                  <span>{c.telegramLabel}</span>
                  <Icon name="external" size={17} />
                </a>
                <span className="copy-status" role="status">
                  {copyState === "copied"
                    ? c.copied
                    : copyState === "failed"
                      ? c.copyFailed
                      : ""}
                </span>
              </div>
              <span className="availability availability-light">
                <span className="status-dot" aria-hidden="true" />
                {c.status}
              </span>
            </div>
            <form className="brief-form" onSubmit={(event) => event.preventDefault()} noValidate>
              <h3>{c.briefTitle}</h3>
              <label htmlFor="service">{c.serviceLabel}</label>
              <select
                id="service"
                name="service"
                value={briefService}
                onChange={(event) => {
                  setBriefService(Number(event.target.value));
                  setContactChannel(null);
                }}
              >
                {c.serviceOptions.map((option, index) => (
                  <option key={index} value={index}>
                    {option}
                  </option>
                ))}
              </select>
              <label htmlFor="message">{c.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                aria-required="true"
                maxLength={1200}
                value={briefMessage}
                onChange={(event) => {
                  setBriefMessage(event.target.value);
                  setContactChannel(null);
                }}
                placeholder={c.placeholder}
                onInput={(event) => event.currentTarget.setCustomValidity("")}
              />
              <div className="contact-send-actions">
                <a className="button button-primary" href={telegramDraftUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => prepareContact(event, "telegram")}>
                  <span>{c.sendTelegram}</span>
                  <span className="button-icon"><Icon name="telegram" size={20} /></span>
                </a>
                <a className="button contact-send-email" href={emailDraftUrl} onClick={(event) => prepareContact(event, "email")}>
                  <span>{c.sendEmail}</span>
                  <span className="button-icon"><Icon name="mail" size={20} /></span>
                </a>
              </div>
              {contactChannel && (
                <p className="draft-status" role="status">
                  {contactChannel === "telegram" ? c.telegramReady : c.emailReady}
                </p>
              )}
            </form>
          </div>
          <div className="container contact-bottom">
            <span>{c.contactHint}</span>
            <a href="#top" aria-label={c.backTop}>
              <Icon name="up" size={22} />
            </a>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <Brand footer />
        <p>{c.footer}</p>
        <span>© {new Date().getFullYear()} ShevDevWorks</span>
      </footer>
      <CaseDialog
        project={selected}
        lang={lang}
        onClose={closeCase}
        onRequest={requestService}
        reduced={reduced}
      />
    </>
  );
}

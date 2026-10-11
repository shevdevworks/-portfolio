import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { Brand, Icon } from "./components";
import { content, projects, type Lang, type Project } from "./content";
import {
  pointerDepth,
  resetDepth,
  usePageMotion,
  useReducedMotion,
} from "./motion";

const assets = `${import.meta.env.BASE_URL}images/`;
const email = "shevdevworks@gmail.com";
const interfaceImages: Record<string, string> = {
  stayline: "stayline-interface.webp",
  emquad: "emquad-interface.webp",
  cybergear: "cyber-gear-interface.webp",
  apex: "apex-saas-interface.webp",
  trendify: "trendify-interface.webp",
};
const shot = (project: Project) => assets + interfaceImages[project.id];
const serviceProjects = [3, 0, 2, 4];

function initialLanguage(): Lang {
  try {
    return localStorage.getItem("shevdevworks-language") === "ru" ? "ru" : "en";
  } catch {
    return "en";
  }
}

function CaseDialog({
  project,
  lang,
  onClose,
  reduced,
}: {
  project: Project | null;
  lang: Lang;
  onClose: () => void;
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
            <h2 id="case-title">{project.name}</h2>
            <p>{project.summary[lang]}</p>
            <div className="tech-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className={`case-image-wrap surface-${project.id}`}>
            <img
              className="case-image"
              src={shot(project)}
              alt={`${project.name} — ${project.category[lang]}`}
            />
          </div>
          <div className="case-body">
            <div>
              <h3>{c.brief}</h3>
              <p>{project.brief[lang]}</p>
              <h3>{c.implementation}</h3>
              <ul>
                {project.implementation.map((item, i) => (
                  <li key={i}>
                    <Icon name="check" size={18} />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside>
              <h3>{c.scope}</h3>
              <p>{project.scope[lang]}</p>
            </aside>
          </div>
          <div className="case-bottom">
            <a
              className="button button-primary"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{c.live}</span>
              <Icon name="external" />
            </a>
            <a
              className="text-link"
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.code}
              <Icon name="external" size={16} />
            </a>
            <a
              className="case-contact text-link"
              href={`mailto:${email}?subject=${encodeURIComponent(`${project.name} — ${lang === "en" ? "project enquiry" : "новый проект"}`)}`}
            >
              {c.similar}
              <Icon name="arrow" size={17} />
            </a>
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
  const project = projects[featured];
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
            <span className="stage-star">✳</span> {c.previewNote}
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
                {new URL(project.live).hostname}
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
              <Icon name="external" size={18} />
            </span>
          </button>
          {featured === 0 ? (
            <div className="showcase-phone" aria-hidden="true">
              <div className="phone-speaker" />
              <img src={assets + "stayline-mobile.webp"} alt="" />
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
          {projects.map((p, i) => (
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [featured, setFeatured] = useState(0);
  const [filter, setFilter] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const [service, setService] = useState(0);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const [draftReady, setDraftReady] = useState(false);
  const [briefMessage, setBriefMessage] = useState("");
  const [briefService, setBriefService] = useState(0);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const workGrid = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const c = content[lang];
  const shownProjects = projects.filter(
    (p) => filter === 0 || (filter === 2 ? p.id === "apex" : p.id !== "apex"),
  );
  const serviceProject = projects[serviceProjects[service]];
  usePageMotion(reduced);
  const closeCase = useCallback(() => setSelected(null), []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "en"
        ? "ShevDevWorks — Your idea. Beautifully built."
        : "ShevDevWorks — Ваша идея. Готовый продукт.";
    const description =
      lang === "en"
        ? "Independent frontend developer in Kyiv. Websites, React interfaces and e-commerce frontends, crafted with care. Explore the work and discuss your project."
        : "Frontend-разработчик в Киеве. Сайты, React-приложения и интерфейсы магазинов с вниманием к деталям. Посмотрите работы и обсудим ваш проект.";
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
    setCopyState("idle");
    setDraftReady(false);
  }, [lang]);
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
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
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
  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const request = String(data.get("message") || "").trim();
    const input = event.currentTarget.elements.namedItem(
      "message",
    ) as HTMLTextAreaElement;
    input.setCustomValidity(
      request
        ? ""
        : lang === "en"
          ? "Add a short description of your project."
          : "Добавьте короткое описание проекта.",
    );
    if (!request) {
      input.reportValidity();
      return;
    }
    const serviceName =
      c.serviceOptions[Number(data.get("service"))] ?? c.serviceOptions[0];
    const body =
      lang === "en"
        ? `Hi Ivan,\n\nI’m looking for: ${serviceName}\n\n${request}\n`
        : `Привет, Иван!\n\nМне нужно: ${serviceName}\n\n${request}\n`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(lang === "en" ? "Project enquiry — ShevDevWorks" : "Новый проект — ShevDevWorks")}&body=${encodeURIComponent(body)}`;
    setDraftReady(true);
  }

  return (
    <>
      <a href="#main" className="skip-link">
        {c.skip}
      </a>
      <div className="reading-progress" aria-hidden="true" />
      <header className="header" id="top">
        <div className="container header-inner">
          <Brand />
          <nav
            className="desktop-nav"
            aria-label={
              lang === "en" ? "Main navigation" : "Основная навигация"
            }
          >
            {["work", "services", "about"].map((id, i) => (
              <a href={`#${id}`} key={id}>
                <span>{c.nav[i]}</span>
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <div
              className="language-switch"
              role="group"
              aria-label={lang === "en" ? "Language" : "Язык"}
            >
              {(["en", "ru"] as Lang[]).map((l) => (
                <button
                  key={l}
                  lang={l}
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#contact" className="header-contact">
              {c.talk}
              <span>
                <Icon name="external" size={15} />
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
          aria-label={
            lang === "en" ? "Mobile navigation" : "Мобильная навигация"
          }
          inert={!menuOpen}
        >
          {["work", "services", "about", "contact"].map((id, i) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {i < 3 ? c.nav[i] : c.talk}
              <Icon name="arrow" size={20} />
            </a>
          ))}
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span className="intro-mask">
              <span data-intro>
                {c.role}
                <span className="small-dot" />
                {c.city}
              </span>
            </span>
            <span className="availability">
              <span />
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
                      <span className="headline-spark" aria-hidden="true">
                        ✳
                      </span>
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
                  <Icon name="external" size={20} />
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
          <span>{c.techNote}</span>
          <div>
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "HTML & CSS",
              "GSAP",
              "Vite",
            ].map((tool, i) => (
              <span key={tool}>
                <span className="tool-mark" aria-hidden="true">
                  {["⚛", "TS", "JS", "⌘", "〰", "ϟ"][i]}
                </span>
                {tool}
              </span>
            ))}
          </div>
        </div>

        <section
          className="work-section container section-space"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                <span className="small-dot" />
                {c.selectedWork}
              </span>
              <h2 id="work-title">{c.workTitle}</h2>
              <p>{c.workIntro}</p>
            </div>
            <div
              className="work-filter"
              role="group"
              aria-label={lang === "en" ? "Filter projects" : "Фильтр проектов"}
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
                className={`project project-${p.id} ${filter === 0 && i === 0 ? "project-featured" : ""}`}
                key={p.id}
              >
                <button
                  className={`project-image-button surface-${p.id}`}
                  onClick={() => setSelected(p)}
                  onPointerMove={pointerDepth}
                  onPointerLeave={resetDepth}
                  aria-label={`${c.case}: ${p.name}`}
                >
                  <span className="project-visual-label">
                    {p.name}
                    <span>{p.category[lang]}</span>
                  </span>
                  <div className="project-browser">
                    <img
                      src={shot(p)}
                      alt={`${p.name} — ${p.category[lang]}`}
                      loading="lazy"
                      width="1440"
                      height="1000"
                    />
                  </div>
                  {p.id === "stayline" && (
                    <div className="project-phone" aria-hidden="true">
                      <img
                        src={assets + "stayline-mobile.webp"}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  )}
                  <span className="image-open">
                    <span>{c.detailLabel}</span>
                    <Icon name="external" size={20} />
                  </span>
                </button>
                <div className="project-details">
                  <div className="project-title-row">
                    <h3>
                      <button onClick={() => setSelected(p)}>
                        {p.name}
                        <Icon name="external" size={22} />
                      </button>
                    </h3>
                    <span className="project-category">{p.category[lang]}</span>
                  </div>
                  <p>{p.summary[lang]}</p>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
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
                        <a className="text-link" href="#contact">
                          {c.talk}
                          <Icon name="arrow" size={18} />
                        </a>
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
                    <img
                      src={shot(serviceProject)}
                      alt={`${serviceProject.name} — ${serviceProject.category[lang]}`}
                      loading="lazy"
                    />
                  </div>
                  <button
                    className="service-preview-link"
                    onClick={() => setSelected(serviceProject)}
                  >
                    <span>
                      <small>{c.serviceLink}</small>
                      <strong>{serviceProject.name}</strong>
                    </span>
                    <Icon name="external" size={25} />
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
              <span className="small-dot" />
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
            onPointerMove={pointerDepth}
            onPointerLeave={resetDepth}
          >
            <div className="identity-orbit" aria-hidden="true" />
            <div className="identity-card">
              <div className="identity-card-top">
                <Brand />
                <span className="identity-status" />
              </div>
              <span className="identity-name">{c.name}</span>
              <span className="identity-role">{c.role}</span>
              <div className="identity-bottom">
                <span>{c.city}</span>
                <span>{c.independent}</span>
              </div>
            </div>
            <div className="about-signature">
              <span>{c.aboutSmall}</span>
              <span className="signature-mark" aria-hidden="true">
                S.
              </span>
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
                <span className="small-dot" />
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
                <span />
                {c.status}
              </span>
            </div>
            <form className="brief-form" onSubmit={prepareDraft}>
              <h3>{c.briefTitle}</h3>
              <label htmlFor="service">{c.serviceLabel}</label>
              <select
                id="service"
                name="service"
                value={briefService}
                onChange={(event) =>
                  setBriefService(Number(event.target.value))
                }
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
                required
                maxLength={1200}
                value={briefMessage}
                onChange={(event) => setBriefMessage(event.target.value)}
                placeholder={c.placeholder}
                onInput={(event) => event.currentTarget.setCustomValidity("")}
              />
              <button className="button button-primary" type="submit">
                <span>{c.send}</span>
                <span className="button-icon">
                  <Icon name="external" size={20} />
                </span>
              </button>
              <p className="form-note">{c.formNote}</p>
              {draftReady && (
                <p className="draft-status" role="status">
                  {c.draftReady}
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
        reduced={reduced}
      />
    </>
  );
}

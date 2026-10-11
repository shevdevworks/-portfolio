import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);
  return reduced;
}

/** Native motion stays off the React render path and cleans up under StrictMode. */
export function usePageMotion(reduced: boolean) {
  useEffect(() => {
    const animations: Animation[] = [];
    const hero = document.querySelector<HTMLElement>(".hero");
    const stage = document.querySelector<HTMLElement>(".showcase-stage");
    const progress = document.querySelector<HTMLElement>(".reading-progress");
    const navLinks = [
      ...document.querySelectorAll<HTMLAnchorElement>(".desktop-nav a"),
    ];
    const navSections = navLinks.map((link) =>
      document.querySelector<HTMLElement>(link.getAttribute("href") ?? ""),
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      progress?.style.setProperty(
        "transform",
        `scaleX(${maxScroll > 0 ? scrollY / maxScroll : 0})`,
      );
      if (stage && hero && !reduced) {
        const value = Math.min(
          1,
          Math.max(0, scrollY / (hero.offsetHeight * 0.85)),
        );
        stage.style.setProperty("--scroll", value.toFixed(4));
      }
      document
        .querySelector(".header")
        ?.classList.toggle("is-scrolled", scrollY > 28);
      const marker = window.innerHeight * 0.35;
      navLinks.forEach((link, i) => {
        const rect = navSections[i]?.getBoundingClientRect();
        if (rect && rect.top <= marker && rect.bottom > marker)
          link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    update();

    let observer: IntersectionObserver | undefined;
    if (!reduced) {
      document
        .querySelectorAll<HTMLElement>("[data-intro]")
        .forEach((el, i) => {
          animations.push(
            el.animate(
              [
                { transform: "translateY(105%)", opacity: 0 },
                { transform: "translateY(0)", opacity: 1 },
              ],
              {
                duration: 950,
                delay: 100 + i * 110,
                easing: "cubic-bezier(.16,1,.3,1)",
                fill: "backwards",
              },
            ),
          );
        });
      const theatre = document.querySelector(".project-theatre");
      if (theatre)
        animations.push(
          theatre.animate(
            [
              { opacity: 0, transform: "translateY(50px) scale(.96)" },
              { opacity: 1, transform: "translateY(0) scale(1)" },
            ],
            {
              duration: 1300,
              delay: 280,
              easing: "cubic-bezier(.16,1,.3,1)",
              fill: "backwards",
            },
          ),
        );

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target;
            const isImage = el.classList.contains("project-image-button");
            animations.push(
              el.animate(
                isImage
                  ? [
                      { clipPath: "inset(8% 0 8% 0 round 24px)", opacity: 0.3 },
                      { clipPath: "inset(0 0 0 0 round 24px)", opacity: 1 },
                    ]
                  : [
                      { opacity: 0.2, transform: "translateY(20px)" },
                      { opacity: 1, transform: "translateY(0)" },
                    ],
                {
                  duration: isImage ? 1100 : 850,
                  easing: "cubic-bezier(.16,1,.3,1)",
                },
              ),
            );
            observer?.unobserve(el);
          }
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll(".project-image-button, .about-copy, .process-grid")
        .forEach((el) => observer?.observe(el));
    } else stage?.style.setProperty("--scroll", "0");

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [reduced]);
}

export function pointerDepth(event: React.PointerEvent<HTMLElement>) {
  if (
    event.pointerType !== "mouse" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  event.currentTarget.style.setProperty("--pointer-x", `${x}`);
  event.currentTarget.style.setProperty("--pointer-y", `${y}`);
}

export function resetDepth(event: React.PointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--pointer-x", ".5");
  event.currentTarget.style.setProperty("--pointer-y", ".5");
}

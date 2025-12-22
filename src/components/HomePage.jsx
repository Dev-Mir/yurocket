import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Results from "../components/Results";
import Package from "../components/Package";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const SECTION_TO_PATH = {
  home: "/",
  services: "/services",
  process: "/process",
  results: "/results",
  package: "/offer",
  faq: "/faq",
};

const PATH_TO_SECTION = {
  "/": "home",
  "/services": "services",
  "/process": "process",
  "/results": "results",
  "/offer": "package",
  "/faq": "faq",
};

const SCROLL_DURATION = 500;

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Refs to avoid rebuilding observers on every URL change
  const pathnameRef = useRef(location.pathname);
  const stateRef = useRef(location.state);

  const scrollLockRef = useRef(false);
  const unlockTimerRef = useRef(null);

  const isSpyNavRef = useRef(false);

  const lastActiveIdRef = useRef(null);
  const lastChangeAtRef = useRef(0);
  const pendingTimerRef = useRef(null);

  // keep latest router values in refs (no observer rebuild)
  useEffect(() => {
    pathnameRef.current = location.pathname;
    stateRef.current = location.state;
  }, [location.pathname, location.state]);

  // 1) Auto-scroll only for:
  // - click navigation (state.scrollTo)
  // - direct load on /services, /process etc
  useEffect(() => {
    const fromState = location.state?.scrollTo;
    const fromPath = PATH_TO_SECTION[location.pathname];
    const target = fromState || fromPath;

    if (!target) return;

    // ✅ If this route change came from scroll-spy, do NOT auto-scroll
    if (isSpyNavRef.current && !fromState) {
      isSpyNavRef.current = false;
      return;
    }
    isSpyNavRef.current = false;

    // Lock scroll-spy during auto scroll (prevents URL flicker)
    scrollLockRef.current = true;
    if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    if (pendingTimerRef.current) clearTimeout(pendingTimerRef.current);

    setTimeout(() => {
      scroller.scrollTo(target, {
        smooth: true,
        duration: SCROLL_DURATION,
        offset: -80,
      });
    }, 50);

    lastActiveIdRef.current = target;

    unlockTimerRef.current = setTimeout(() => {
      scrollLockRef.current = false;
    }, SCROLL_DURATION + 200);

    // Clear click-state so refresh doesn't re-scroll
    if (fromState) {
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.pathname, location.state, navigate]);

  // 2) Scroll-spy (create observer ONCE)
  useEffect(() => {
    const ids = ["home", "services", "process", "results", "package", "faq"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const MIN_HOLD_MS = 250;
    const DEBOUNCE_MS = 80;

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollLockRef.current) return;
        if (stateRef.current?.scrollTo) return;

        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        const best = visible.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top - 80) -
            Math.abs(b.boundingClientRect.top - 80)
        )[0];

        const id = best.target.id;
        if (!id) return;

        if (pendingTimerRef.current) clearTimeout(pendingTimerRef.current);
        pendingTimerRef.current = setTimeout(() => {
          const now = Date.now();
          if (now - lastChangeAtRef.current < MIN_HOLD_MS) return;
          if (lastActiveIdRef.current === id) return;

          lastActiveIdRef.current = id;
          lastChangeAtRef.current = now;

          const nextPath = SECTION_TO_PATH[id] || "/";
          if (pathnameRef.current !== nextPath) {
            // ✅ mark this navigation as coming from scroll-spy
            isSpyNavRef.current = true;
            navigate(nextPath, { replace: true, state: {} });
          }
        }, DEBOUNCE_MS);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((el) => observer.observe(el));

    return () => {
      if (pendingTimerRef.current) clearTimeout(pendingTimerRef.current);
      if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
      observer.disconnect();
    };
  }, [navigate]);

  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      {/* Each component must contain its own <section id="..."> */}
      <Services />
      <Process />
      <Results />
      <Package />
      <FAQ />

      <Footer />
    </div>
  );
};

export default HomePage;

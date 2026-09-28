"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("in-view")), { threshold: .12 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}

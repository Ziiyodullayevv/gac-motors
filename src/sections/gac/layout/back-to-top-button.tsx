"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  onContactClick: () => void;
};

export function BackToTopButton({ onContactClick }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 320);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* Desktop: contact button */}
      <button
        className="fixed bottom-8 right-7 z-40 hidden size-9 place-items-center rounded-lg bg-white/82 text-black shadow-md backdrop-blur transition-[background-color] duration-200 hover:bg-white md:grid"
        type="button"
        onClick={onContactClick}
        aria-label="Bog'lanish"
      >
        <Phone className="size-4" strokeWidth={2.2} />
      </button>

      {/* Mobile: back to top button */}
      <button
        className={`fixed bottom-5 right-5 z-40 grid size-8 place-items-center rounded-lg bg-white/82 text-black shadow-md backdrop-blur transition-[opacity,transform,background-color] duration-300 hover:bg-white md:hidden ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
      >
        <span className="text-base leading-none">↑</span>
      </button>
    </>
  );
}

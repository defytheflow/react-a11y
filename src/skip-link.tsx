import clsx from "clsx";
import React from "react";

export function SkipLink({ text = "Skip to main content" }: { text?: string }) {
  return (
    <a
      href="#skip"
      className={clsx(
        "fixed top-3 left-3 z-10 rounded bg-white p-2 font-medium",
        "-translate-y-20 focus:translate-y-0",
        "motion-safe:transition-transform motion-safe:ease-in-out"
      )}
    >
      {text}
    </a>
  );
}

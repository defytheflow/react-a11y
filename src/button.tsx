import clsx from "clsx";
import React from "react";

export function Button({
  disabled,
  onClick,
  onKeyDown,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 border",
        disabled ? "pointer-events-none opacity-60" : "",
        className
      )}
      aria-disabled={disabled || undefined}
      onClick={disabled ? e => e.preventDefault() : onClick}
      onKeyDown={disabled ? e => (e.key === " " ? e.preventDefault() : null) : onKeyDown}
    />
  );
}

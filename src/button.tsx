import React from "react";

export function Button({
  disabled,
  onClick,
  onKeyDown,
  ...rest
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...rest}
      style={{
        ...rest.style,
        pointerEvents: disabled ? "none" : "all",
        opacity: disabled ? 0.5 : undefined,
      }}
      aria-disabled={disabled || undefined}
      onClick={disabled ? e => e.preventDefault() : onClick}
      onKeyDown={disabled ? e => (e.key === " " ? e.preventDefault() : null) : onKeyDown}
    />
  );
}

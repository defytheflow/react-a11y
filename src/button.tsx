import React from 'react'

export default function Button({
  disabled,
  onClick,
  ...rest
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      {...rest}
      aria-disabled={disabled}
      onClick={disabled ? e => e.preventDefault() : onClick}
      style={{
        ...rest.style,
        pointerEvents: disabled ? 'none' : 'all',
        opacity: disabled ? 0.5 : undefined,
      }}
    />
  )
}

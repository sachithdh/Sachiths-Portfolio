export function Pin({ className = "" }: { className?: string }) {
  return (
    <div className={`w-4 h-4 ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="pin-shadow">
        <circle cx="12" cy="12" r="10" fill="var(--pin-color)" />
        <circle cx="12" cy="12" r="6" fill="var(--pin-color)" opacity="0.6" />
        <circle cx="12" cy="12" r="3" fill="var(--pin-color)" opacity="0.8" />
      </svg>
    </div>
  )
}

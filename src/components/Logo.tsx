export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Фонд поддержки предпринимательства Таганрога" role="img">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="28" height="28" rx="6" fill="#1a56db" />
        <path
          d="M7 20V12L14 8L21 12V20H16V15H12V20H7Z"
          fill="white"
        />
      </svg>
      <span className="text-lg font-bold text-foreground">ФПП Таганрог</span>
    </div>
  )
}
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}
export function Mark() {
  return (
    <span className="cc-mark" aria-hidden="true">
      <svg viewBox="0 0 32 36" fill="none">
        <path
          d="M16 2 29 7v10c0 8-7 14-13 17C10 31 3 25 3 17V7L16 2Z"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="m10 17 4 4 9-10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

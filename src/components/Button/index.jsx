



export default function Button({ children, onClick, className, onMouseEnter, disabled, onFocus }) {
  return (
    <button onClick={onClick} className={className} onMouseEnter={onMouseEnter} disabled={disabled} onFocus={onFocus}>
      {children}
    </button>
  );
}
export default function Input({ placeholder, className, type, onFocus, onBlur, value, onInput, onChange, defaultValue }) {
  return (
    <input className={className} placeholder={placeholder} type={type} onFocus={onFocus} onBlur={onBlur} value={value} onInput={onInput} onChange={onChange} defaultValue={defaultValue} />
  );
}
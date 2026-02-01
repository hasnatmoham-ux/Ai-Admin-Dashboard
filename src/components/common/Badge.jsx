export default function Badge({ children, tone='gray' }) { return <span className={`badge ${tone}`}>{children}</span>; }
export function toneFor(value='') {
  const v=value.toLowerCase();
  if(['active','approved','running','success','low','connected'].some(x=>v.includes(x))) return 'green';
  if(['high','critical','failed','suspended','error'].some(x=>v.includes(x))) return 'red';
  if(['medium','pending','paused','review','trial','investigating'].some(x=>v.includes(x))) return 'yellow';
  return 'gray';
}

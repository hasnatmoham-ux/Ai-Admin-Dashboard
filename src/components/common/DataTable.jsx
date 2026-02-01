import Badge, { toneFor } from './Badge.jsx';
export default function DataTable({ columns, rows, onRowClick }) {
  return <div className="table-wrap"><table className="table"><thead><tr>{columns.map(c=><th key={c.key}>{c.label}</th>)}<th>Actions</th></tr></thead><tbody>{rows.map((row,i)=><tr key={row.id||i} onClick={()=>onRowClick?.(row)}>{columns.map(c=><td key={c.key}>{['status','risk','severity'].includes(c.key)?<Badge tone={toneFor(row[c.key])}>{row[c.key]}</Badge>:row[c.key]}</td>)}<td><button className="btn btn-secondary" onClick={(e)=>{e.stopPropagation();onRowClick?.(row)}}>View</button></td></tr>)}</tbody></table></div>;
}

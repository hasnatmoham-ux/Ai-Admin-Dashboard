import { X } from 'lucide-react';
export default function Drawer({ title, children, onClose }) {return <div className="drawer-backdrop"><aside className="drawer"><div className="page-header"><h2 style={{margin:0}}>{title}</h2><button className="btn btn-secondary" onClick={onClose}><X size={18}/></button></div>{children}</aside></div>}

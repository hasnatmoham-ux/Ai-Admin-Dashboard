import { X } from 'lucide-react';
export default function Modal({ title, children, onClose }) {return <div className="modal-backdrop"><div className="modal"><div className="page-header"><h2 style={{margin:0}}>{title}</h2><button className="btn btn-secondary" onClick={onClose}><X size={18}/></button></div>{children}</div></div>}

export default function PageHeader({ title, subtitle, actions }) {
  return <div className="page-header"><div><h1 className="page-title">{title}</h1>{subtitle && <p className="page-subtitle">{subtitle}</p>}</div><div className="top-actions">{actions}</div></div>;
}

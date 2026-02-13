import { Plug, Settings } from 'lucide-react';
import PageHeader from '../components/common/PageHeader.jsx';
import Badge, { toneFor } from '../components/common/Badge.jsx';
import { integrations } from '../data/mockData.js';
export default function Integrations(){return <section className="page"><PageHeader title="Integrations" subtitle="Mock API connectors for databases, SaaS tools, webhooks, and warehouse systems." actions={<button className="btn btn-primary"><Plug size={17}/>Add Connector</button>}/><div className="grid grid-3">{integrations.map(i=><div className="card integration-card" key={i.name}><div style={{display:'flex',gap:12,alignItems:'center'}}><div className="logo-tile">{i.name[0]}</div><div><h3 style={{margin:'0 0 6px'}}>{i.name}</h3><p className="page-subtitle">Last sync: {i.lastSync}</p><Badge tone={toneFor(i.status)}>{i.status}</Badge></div></div><button className="btn btn-secondary"><Settings size={16}/></button></div>)}</div></section>}

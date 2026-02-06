import PageHeader from '../components/common/PageHeader.jsx';
import DataTable from '../components/common/DataTable.jsx';
import { alerts } from '../data/mockData.js';
export default function Alerts(){const cols=[{key:'title',label:'Alert'},{key:'severity',label:'Severity'},{key:'source',label:'Source'},{key:'status',label:'Status'},{key:'created',label:'Created At'},{key:'owner',label:'Owner'}];return <section className="page"><PageHeader title="System Alerts" subtitle="Operational warnings, failed jobs, API issues, suspicious activity, and SLA risks." actions={<button className="btn btn-primary">Create Incident</button>}/><DataTable columns={cols} rows={alerts.map((a,i)=>({...a,id:i}))}/></section>}

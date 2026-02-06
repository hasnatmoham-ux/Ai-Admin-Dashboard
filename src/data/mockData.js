export const kpis = [
  { label: 'Total Users', value: '18,420', change: '+12.4%', icon: 'Users' },
  { label: 'Pending Approvals', value: '128', change: '+18 today', icon: 'ClipboardCheck' },
  { label: 'Failed Jobs', value: '7', change: '-3 vs yesterday', icon: 'AlertTriangle' },
  { label: 'Revenue Impact', value: '$248K', change: '+8.2%', icon: 'DollarSign' },
];
export const chartData = [
  { name: 'Mon', actions: 420, tickets: 120 },{ name: 'Tue', actions: 680, tickets: 180 },{ name: 'Wed', actions: 520, tickets: 140 },{ name: 'Thu', actions: 790, tickets: 260 },{ name: 'Fri', actions: 920, tickets: 310 },{ name: 'Sat', actions: 610, tickets: 180 },{ name: 'Sun', actions: 740, tickets: 220 },
];
export const users = [
  { id:'USR-1001', name:'Sarah Lee', email:'sarah@adminai.io', role:'Super Admin', department:'Operations', status:'Active', lastLogin:'12 minutes ago', risk:'Low', created:'Jan 12, 2026' },
  { id:'USR-1002', name:'Omar Khan', email:'omar@adminai.io', role:'Support Agent', department:'Support', status:'Active', lastLogin:'1 hour ago', risk:'Medium', created:'Feb 2, 2026' },
  { id:'USR-1003', name:'Emily Carter', email:'emily@adminai.io', role:'Analyst', department:'Data', status:'Pending', lastLogin:'Never', risk:'Low', created:'Mar 9, 2026' },
  { id:'USR-1004', name:'Daniel Kim', email:'daniel@adminai.io', role:'Manager', department:'Finance', status:'Suspended', lastLogin:'5 days ago', risk:'High', created:'Nov 18, 2025' },
  { id:'USR-1005', name:'Maya Patel', email:'maya@adminai.io', role:'Admin', department:'Revenue Ops', status:'Active', lastLogin:'30 minutes ago', risk:'Low', created:'Apr 3, 2026' },
];
export const approvals = [
  { id:'APR-4421', type:'Refund Request', requestedBy:'Omar Khan', customer:'Acme Health', amount:'$12,400', risk:'High', status:'Pending', created:'Today, 9:18 AM', owner:'Sarah Lee' },
  { id:'APR-4422', type:'Enterprise Discount', requestedBy:'Maya Patel', customer:'Northwind AI', amount:'18%', risk:'Medium', status:'Pending', created:'Today, 10:44 AM', owner:'Daniel Kim' },
  { id:'APR-4423', type:'Data Export', requestedBy:'Emily Carter', customer:'FinEdge Bank', amount:'2.4 GB', risk:'Low', status:'Approved', created:'Yesterday', owner:'Sarah Lee' },
  { id:'APR-4424', type:'Account Suspension', requestedBy:'Omar Khan', customer:'User USR-8841', amount:'N/A', risk:'High', status:'Pending', created:'Yesterday', owner:'Unassigned' },
];
export const logs = [
  { time:'2026-05-26 09:42', actor:'Sarah Lee', action:'Approved refund', resource:'APR-4410', ip:'104.28.11.2', status:'Success' },
  { time:'2026-05-26 09:21', actor:'Omar Khan', action:'Suspended user', resource:'USR-8841', ip:'74.125.2.1', status:'Success' },
  { time:'2026-05-26 08:58', actor:'Emily Carter', action:'Exported report', resource:'Payments CSV', ip:'18.203.8.4', status:'Review' },
  { time:'2026-05-25 17:39', actor:'System', action:'Failed sync', resource:'Stripe connector', ip:'internal', status:'Failed' },
];
export const alerts = [
  { title:'Stripe sync failed for 3 invoices', severity:'Critical', source:'Stripe', status:'Open', created:'8 min ago', owner:'Data Ops' },
  { title:'Refund volume 42% above baseline', severity:'High', source:'Payments', status:'Investigating', created:'22 min ago', owner:'Finance Ops' },
  { title:'Zendesk SLA breach risk', severity:'Medium', source:'Zendesk', status:'Open', created:'1 hour ago', owner:'Support' },
  { title:'Unusual admin login detected', severity:'High', source:'Auth', status:'Open', created:'2 hours ago', owner:'Security' },
];
export const customers = [
  { id:'CUST-1001', name:'Acme Health', email:'ops@acmehealth.com', plan:'Enterprise', status:'Active', mrr:'$42,000', health:'82', created:'Jan 4, 2026' },
  { id:'CUST-1002', name:'Northwind AI', email:'admin@northwind.ai', plan:'Business', status:'Active', mrr:'$9,200', health:'71', created:'Feb 18, 2026' },
  { id:'CUST-1003', name:'FinEdge Bank', email:'platform@finedge.com', plan:'Enterprise', status:'At Risk', mrr:'$58,000', health:'44', created:'Nov 11, 2025' },
  { id:'CUST-1004', name:'RetailGrid', email:'it@retailgrid.com', plan:'Starter', status:'Trial', mrr:'$0', health:'69', created:'May 16, 2026' },
];
export const workflows = [
  { name:'Refund Approval Flow', status:'Running', trigger:'Refund > $5K', owner:'Finance Ops', lastRun:'12 min ago', success:'98.4%', steps:6 },
  { name:'Failed Payment Recovery', status:'Running', trigger:'Invoice failed', owner:'RevOps', lastRun:'30 min ago', success:'93.1%', steps:5 },
  { name:'Suspicious Login Review', status:'Paused', trigger:'Risk score > 80', owner:'Security', lastRun:'2 days ago', success:'89.7%', steps:7 },
  { name:'SLA Escalation', status:'Running', trigger:'SLA < 2 hrs', owner:'Support', lastRun:'6 min ago', success:'99.2%', steps:4 },
];
export const integrations = ['PostgreSQL','Snowflake','Stripe','Slack','HubSpot','Zendesk','BigQuery','REST API','Webhook'].map((name,i)=>({name,status:i===4?'Error':'Connected',lastSync:i===4?'Failed 1h ago':`${i+4} min ago`,errors:i===4?3:0}));
export const roles = ['Super Admin','Admin','Manager','Analyst','Support','Viewer'];
export const permissions = ['View users','Edit users','Delete users','Approve requests','View audit logs','Manage integrations','Export data','Use AI Copilot'];

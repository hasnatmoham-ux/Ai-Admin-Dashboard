import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Users from './pages/Users.jsx';
import Roles from './pages/Roles.jsx';
import DataExplorer from './pages/DataExplorer.jsx';
import Approvals from './pages/Approvals.jsx';
import Workflows from './pages/Workflows.jsx';
import AICopilot from './pages/AICopilot.jsx';
import Alerts from './pages/Alerts.jsx';
import AuditLogs from './pages/AuditLogs.jsx';
import Integrations from './pages/Integrations.jsx';
import Settings from './pages/Settings.jsx';
import MainLayout from './components/layout/MainLayout.jsx';
import { useAppStore } from './store/useAppStore.js';

export default function App() {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" replace />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="roles" element={<Roles />} />
        <Route path="data" element={<DataExplorer />} />
        <Route path="approvals" element={<Approvals />} />
        <Route path="workflows" element={<Workflows />} />
        <Route path="copilot" element={<AICopilot />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="audit-logs" element={<AuditLogs />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

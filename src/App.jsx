import { useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { menuConfig } from './data/menuConfig';
import { HOME_HEADER } from './data/sampleData';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AccountInquiryPage from './pages/AccountInquiryPage';
import CifPage from './pages/CifPage';
import TellerPage from './pages/TellerPage';
import NonCashPage from './pages/NonCashPage';
import ReportsPage from './pages/ReportsPage';
import UsersPage from './pages/UsersPage';
import BranchPage from './pages/BranchPage';

function AppShell({ onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [workClass, setWorkClass] = useState('25');

  const menu = menuConfig[workClass] || menuConfig['25'];

  const handleNav = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="finacle-header">
        <div className="header-title">Finacle Core Banking System</div>
        <div className="header-user-info">
          <span>User: DOP User</span>
          <span>| Branch: Head Office</span>
          <span>| SOL: 100</span>
          <select
            className="header-select"
            value={workClass}
            onChange={(e) => setWorkClass(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="125">125</option>
            <option value="150">150</option>
            <option value="200">200</option>
          </select>
          <button className="header-logout" onClick={onLogout}>Logout</button>
        </div>
      </header>

      <div className="app-shell">
        <aside className="sidebar">
          <div className="sidebar-title">Menu</div>
          <nav className="menu-list">
            {menu.map((item) => (
              <div key={item.code} className="menu-group">
                <button
                  className={`menu-item ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => handleNav(item.path)}
                >
                  {item.code}
                </button>

                {item.submenu && (
                  <div className="submenu-wrap">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.label}
                        className={`submenu-item ${isActive(sub.path) ? 'active' : ''}`}
                        onClick={() => handleNav(sub.path)}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        <main className="main-panel">
          <Routes>
            <Route path="/" element={<HomePage header={HOME_HEADER} />} />
            <Route path="/hacli" element={<AccountInquiryPage />} />
            <Route path="/mandate" element={<CifPage />} />
            <Route path="/teller" element={<TellerPage />} />
            <Route path="/nteller" element={<NonCashPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/branches" element={<BranchPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return <AppShell onLogout={() => setLoggedIn(false)} />;
}

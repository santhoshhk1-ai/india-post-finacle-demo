html, body, #root {
  margin: 0;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background: #f3f3f3;
  color: #1a1a1a;
}

* {
  box-sizing: border-box;
}

button, input, select, textarea {
  font: inherit;
}

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e9f0f9, #f7f7f7);
}

.login-card {
  width: min(430px, 92vw);
  background: #ffffff;
  border: 1px solid #d0d7de;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  padding: 28px 26px 20px;
}

.login-logo {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #003366;
  margin-bottom: 10px;
}

.login-card h1 {
  margin: 0 0 24px;
  color: #003366;
  text-align: center;
  font-size: 22px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-group label {
  font-size: 12px;
  font-weight: 700;
  color: #003366;
}

.field-group input,
.field-group select,
.field-group textarea {
  width: 100%;
  min-height: 36px;
  border: 1px solid #c9ced6;
  background: #fff;
  padding: 6px 8px;
  font-size: 13px;
}

.finacle-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: #003366;
  color: #fff;
  border-bottom: 2px solid #001d3d;
}

.header-title {
  font-size: 20px;
  font-weight: 700;
}

.header-user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  flex-wrap: wrap;
}

.header-select {
  min-width: 100px;
  min-height: 30px;
  border: 1px solid #b7c8d9;
  background: #fff;
  color: #0f172a;
  padding: 4px 8px;
}

.header-logout {
  padding: 5px 10px;
  border: 1px solid #dfe7f5;
  background: #fff;
  color: #003366;
  cursor: pointer;
}

.app-shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: calc(100vh - 64px);
}

.sidebar {
  background: #efefef;
  border-right: 1px solid #d5d5d5;
  padding: 10px;
}

.sidebar-title {
  font-size: 14px;
  font-weight: 700;
  color: #003366;
  margin: 8px 6px 12px;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menu-item,
.submenu-item {
  width: 100%;
  border: 1px solid transparent;
  background: transparent;
  color: #003366;
  cursor: pointer;
  text-align: left;
  padding: 8px 10px;
  font-weight: 700;
}

.menu-item.active,
.submenu-item.active {
  background: #dfeeff;
  border-color: #bfd7ff;
}

.menu-item:hover,
.submenu-item:hover {
  background: #e7eef9;
}

.submenu-wrap {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 12px;
}

.submenu-item {
  padding: 6px 8px;
  font-weight: 500;
  color: #1d1d1d;
}

.main-panel {
  padding: 18px;
  background: #f5f5f5;
}

.page-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.page-wrap h1 {
  margin: 0;
  text-align: center;
  color: #003366;
  font-size: 30px;
}

.page-wrap h2 {
  margin: 0 0 12px;
  color: #003366;
  font-size: 20px;
}

.content-card {
  background: #fff;
  border: 1px solid #d6dbe1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  padding: 16px;
}

.content-card.large {
  min-height: 180px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  gap: 16px;
}

.small-grid {
  grid-template-columns: repeat(3, minmax(180px, 1fr));
}

.info-card {
  background: #fff;
  border: 1px solid #d6dbe1;
  padding: 16px;
  min-height: 90px;
}

.card-title {
  font-weight: 700;
  color: #003366;
  margin-bottom: 6px;
}

.card-detail {
  color: #1f2937;
  font-size: 14px;
}

.finacle-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-row {
  display: grid;
  gap: 14px;
}

.two-col {
  grid-template-columns: repeat(2, minmax(220px, 1fr));
}

.button-row {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.btn-primary,
.btn-secondary {
  border: 1px solid #6b7280;
  padding: 8px 18px;
  cursor: pointer;
  min-width: 90px;
}

.btn-primary {
  background: #003366;
  color: #fff;
  border-color: #001d3d;
}

.btn-secondary {
  background: #f3f4f6;
  color: #111827;
}

.finacle-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

.finacle-table th,
.finacle-table td {
  border: 1px solid #d5d8dd;
  padding: 8px 10px;
  text-align: left;
  font-size: 12px;
}

.finacle-table th {
  background: #003366;
  color: #fff;
  font-weight: 700;
}

.finacle-table tbody tr:nth-child(even) {
  background: #f8f9fa;
}

@media (max-width: 820px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid #d5d5d5;
  }

  .two-col,
  .card-grid,
  .small-grid {
    grid-template-columns: 1fr;
  }

  .finacle-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}

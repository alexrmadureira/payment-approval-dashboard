@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --panel-alt: #eef3ff;
  --primary: #4f46e5;
  --primary-dark: #312e81;
  --text: #162033;
  --muted: #6f7a90;
  --border: #e4e9f2;
  --success: #16a34a;
  --success-soft: #dcfce7;
  --warning: #f59e0b;
  --warning-soft: #fef3c7;
  --danger: #dc2626;
  --danger-soft: #fee2e2;
  --info: #2563eb;
  --info-soft: #dbeafe;
  --shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
}

* { box-sizing: border-box; }

html, body, #root {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button, select {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg, #111827 0%, #0f172a 100%);
  color: white;
  padding: 28px 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 10px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #818cf8, #4f46e5);
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 1.1rem;
}

.brand h2 {
  margin: 0;
  font-size: 1.3rem;
}

.eyebrow {
  margin: 0 0 4px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.68rem;
  opacity: 0.7;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-item {
  border: none;
  background: transparent;
  color: rgba(255,255,255,0.8);
  text-align: left;
  padding: 12px 14px;
  border-radius: 12px;
  transition: 0.2s ease;
}

.nav-item.active,
.nav-item:hover {
  background: rgba(255,255,255,0.08);
  color: white;
}

.sidebar-card {
  margin-top: auto;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 18px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.small-label {
  margin: 0;
  font-size: 0.7rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.primary-btn, .ghost-btn {
  border-radius: 10px;
  padding: 12px 14px;
  border: none;
  font-weight: 600;
}

.primary-btn {
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
}

.ghost-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
}

.main-panel {
  flex: 1;
  padding: 28px 32px 40px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
}

.user-pill {
  background: var(--panel);
  border: 1px solid var(--border);
  padding: 11px 16px;
  border-radius: 999px;
  font-weight: 600;
  box-shadow: var(--shadow);
}

.filters {
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 22px;
}

.filters label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 600;
}

.filters select {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  color: var(--text);
  font-weight: 500;
}

.kpis {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
  margin-bottom: 26px;
}

.kpi-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px 18px 16px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 130px;
}

.kpi-card span {
  color: var(--muted);
  font-size: 0.8rem;
}

.kpi-card strong {
  font-size: clamp(1.4rem, 2vw, 2rem);
  letter-spacing: -0.04em;
}

.kpi-card em {
  font-style: normal;
  color: var(--muted);
  font-size: 0.76rem;
}

.accent-blue { border-top: 4px solid var(--info); }
.accent-green { border-top: 4px solid var(--success); }
.accent-amber { border-top: 4px solid var(--warning); }
.accent-red { border-top: 4px solid var(--danger); }

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(220px, 0.8fr);
  gap: 22px;
  margin-bottom: 26px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 18px 18px 14px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.panel-header h3 {
  margin: 0;
  font-size: 1.05rem;
}

.panel-header span {
  color: var(--muted);
  font-size: 0.76rem;
}

.chart-svg {
  width: 100%;
  height: 220px;
  display: block;
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
}

.status-row {
  display: grid;
  grid-template-columns: 10px 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 8px 4px;
  border-bottom: 1px solid var(--border);
}

.status-row:last-child {
  border-bottom: none;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.aguardando { background: var(--warning); }
.dot.aprovado { background: var(--success); }
.dot.rejeitado { background: var(--danger); }
.dot.pendente { background: var(--info); }

.table-panel {
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 14px 10px;
  border-bottom: 1px solid var(--border);
  font-size: 0.93rem;
}

th {
  color: var(--muted);
  font-weight: 700;
  background: #f8fafc;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.76rem;
  font-weight: 700;
}

.badge.aguardando {
  background: var(--warning-soft);
  color: #92400e;
}

.badge.aprovado {
  background: var(--success-soft);
  color: #166534;
}

.badge.rejeitado {
  background: var(--danger-soft);
  color: #991b1b;
}

.badge.pendente {
  background: var(--info-soft);
  color: #1d4ed8;
}

@media (max-width: 980px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .kpis {
    grid-template-columns: repeat(2, minmax(160px, 1fr));
  }

  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .main-panel {
    padding: 20px 16px 32px;
  }

  .filters {
    grid-template-columns: 1fr;
  }

  .kpis {
    grid-template-columns: 1fr;
  }

  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

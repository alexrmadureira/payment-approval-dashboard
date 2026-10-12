import { useMemo, useState } from 'react';

type Status = 'Aguardando' | 'Aprovado' | 'Rejeitado' | 'Pendente';

type Payment = {
  id: number;
  reference: string;
  amount: number;
  center: string;
  account: string;
  dueDate: string;
  status: Status;
  approver: string;
  priority: 'Alta' | 'Média' | 'Baixa';
};

const data: Payment[] = [
  { id: 101, reference: 'PG-2012', amount: 12850, center: 'Marketing', account: 'Banco do Brasil', dueDate: '2026-10-11', status: 'Aguardando', approver: 'Ana Souza', priority: 'Alta' },
  { id: 102, reference: 'PG-2014', amount: 7600, center: 'TI', account: 'Santander', dueDate: '2026-10-12', status: 'Aprovado', approver: 'Renato Nunes', priority: 'Média' },
  { id: 103, reference: 'PG-2018', amount: 45300, center: 'Financeiro', account: 'Caixa', dueDate: '2026-10-13', status: 'Pendente', approver: 'Luiza Costa', priority: 'Alta' },
  { id: 104, reference: 'PG-2021', amount: 22000, center: 'Operações', account: 'Bradesco', dueDate: '2026-10-15', status: 'Aguardando', approver: 'Mateus Silva', priority: 'Média' },
  { id: 105, reference: 'PG-2026', amount: 13980, center: 'Vendas', account: 'Itaú', dueDate: '2026-10-16', status: 'Rejeitado', approver: 'Fernanda Melo', priority: 'Baixa' },
  { id: 106, reference: 'PG-2030', amount: 9200, center: 'Marketing', account: 'Banco do Brasil', dueDate: '2026-10-18', status: 'Aguardando', approver: 'Ana Souza', priority: 'Alta' },
  { id: 107, reference: 'PG-2041', amount: 31200, center: 'Financeiro', account: 'Caixa', dueDate: '2026-10-19', status: 'Aprovado', approver: 'Renato Nunes', priority: 'Alta' },
  { id: 108, reference: 'PG-2045', amount: 8700, center: 'TI', account: 'Santander', dueDate: '2026-10-20', status: 'Pendente', approver: 'Luiza Costa', priority: 'Média' },
  { id: 109, reference: 'PG-2050', amount: 17350, center: 'Operações', account: 'Bradesco', dueDate: '2026-10-21', status: 'Aguardando', approver: 'Mateus Silva', priority: 'Alta' },
  { id: 110, reference: 'PG-2053', amount: 5400, center: 'Vendas', account: 'Itaú', dueDate: '2026-10-22', status: 'Aprovado', approver: 'Fernanda Melo', priority: 'Baixa' },
];

const centerOptions = ['Todos', ...new Set(data.map((item) => item.center))];
const accountOptions = ['Todas', ...new Set(data.map((item) => item.account))];

const chartValues = [55, 70, 62, 88, 94, 80, 110, 96, 120, 103, 130, 118];

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value);
}

function App() {
  const [selectedCenter, setSelectedCenter] = useState('Todos');
  const [selectedAccount, setSelectedAccount] = useState('Todas');
  const [selectedStatus, setSelectedStatus] = useState('Todos');

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesCenter = selectedCenter === 'Todos' || item.center === selectedCenter;
      const matchesAccount = selectedAccount === 'Todas' || item.account === selectedAccount;
      const matchesStatus = selectedStatus === 'Todos' || item.status === selectedStatus;
      return matchesCenter && matchesAccount && matchesStatus;
    });
  }, [selectedCenter, selectedAccount, selectedStatus]);

  const totalAmount = filteredData.reduce((sum, item) => sum + item.amount, 0);
  const approvedAmount = filteredData
    .filter((item) => item.status === 'Aprovado')
    .reduce((sum, item) => sum + item.amount, 0);
  const waitingCount = filteredData.filter((item) => item.status === 'Aguardando').length;
  const overdueCount = filteredData.filter((item) => item.priority === 'Alta').length;

  const statusCounts = {
    Aguardando: filteredData.filter((item) => item.status === 'Aguardando').length,
    Aprovado: filteredData.filter((item) => item.status === 'Aprovado').length,
    Rejeitado: filteredData.filter((item) => item.status === 'Rejeitado').length,
    Pendente: filteredData.filter((item) => item.status === 'Pendente').length,
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">P</div>
          <div>
            <p className="eyebrow">Finance</p>
            <h2>PayFlow</h2>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Pagamentos</button>
          <button className="nav-item">Centros de custo</button>
          <button className="nav-item">Contas</button>
          <button className="nav-item">Relatórios</button>
        </nav>

        <div className="sidebar-card">
          <p className="small-label">Ações rápidas</p>
          <button className="primary-btn">Aprovar em lote</button>
          <button className="ghost-btn">Gerar relatório</button>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Controle financeiro</p>
            <h1>Dashboard de pagamentos</h1>
          </div>
          <div className="user-pill">Alex - Financeiro</div>
        </header>

        <section className="filters">
          <label>
            Centro de custo
            <select value={selectedCenter} onChange={(e) => setSelectedCenter(e.target.value)}>
              {centerOptions.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            Conta
            <select value={selectedAccount} onChange={(e) => setSelectedAccount(e.target.value)}>
              {accountOptions.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            Status
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              {['Todos', 'Aguardando', 'Aprovado', 'Rejeitado', 'Pendente'].map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>
        </section>

        <section className="kpis">
          <div className="kpi-card accent-blue">
            <span>Total em análise</span>
            <strong>{formatCurrency(totalAmount)}</strong>
            <em>+12,4% vs. último mês</em>
          </div>
          <div className="kpi-card accent-green">
            <span>Aprovado</span>
            <strong>{formatCurrency(approvedAmount)}</strong>
            <em>{statusCounts.Aprovado} registros</em>
          </div>
          <div className="kpi-card accent-amber">
            <span>Em espera</span>
            <strong>{waitingCount}</strong>
            <em>Needing review</em>
          </div>
          <div className="kpi-card accent-red">
            <span>Prioridade alta</span>
            <strong>{overdueCount}</strong>
            <em>Requer atenção</em>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel chart-panel">
            <div className="panel-header">
              <h3>Fluxo de pagamentos</h3>
              <span>Últimos 12 meses</span>
            </div>
            <Chart values={chartValues} />
          </div>

          <div className="panel small-panel">
            <div className="panel-header">
              <h3>Status</h3>
              <span>Resumo</span>
            </div>
            <div className="status-list">
              {Object.entries(statusCounts).map(([label, count]) => (
                <div key={label} className="status-row">
                  <span className={`dot ${label.toLowerCase()}`}></span>
                  <span>{label}</span>
                  <strong>{count}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="panel table-panel">
          <div className="panel-header">
            <h3>Pagamentos</h3>
            <span>{filteredData.length} registros</span>
          </div>

          <table>
            <thead>
              <tr>
                <th>Ref.</th>
                <th>Centro</th>
                <th>Conta</th>
                <th>Vencimento</th>
                <th>Valor</th>
                <th>Status</th>
                <th>Prioridade</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.reference}</td>
                  <td>{item.center}</td>
                  <td>{item.account}</td>
                  <td>{item.dueDate}</td>
                  <td>{formatCurrency(item.amount)}</td>
                  <td>
                    <span className={`badge ${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>{item.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

function Chart({ values }: { values: number[] }) {
  const width = 600;
  const height = 220;
  const max = Math.max(...values);
  const min = Math.min(...values);

  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / (max - min || 1)) * (height - 24) - 12;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="chart-svg" aria-label="Fluxo de pagamento">
      <defs>
        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {[0, 1, 2, 3].map((line) => (
        <line
          key={line}
          x1="0"
          x2={width}
          y1={20 + line * 45}
          y2={20 + line * 45}
          stroke="#dfe5f1"
          strokeDasharray="5 5"
        />
      ))}

      <polyline fill="none" stroke="#4f46e5" strokeWidth="3" points={points} />
      <polygon points={`0,${height} ${points} ${width},${height}`} fill="url(#chartFill)" opacity="0.8" />
    </svg>
  );
}

export default App;

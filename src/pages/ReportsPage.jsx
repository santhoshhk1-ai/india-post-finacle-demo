import { reportRows } from '../data/sampleData';

export default function ReportsPage() {
  return (
    <div className="page-wrap">
      <h1>REPORTS GENERATIONS</h1>

      <div className="card-grid small-grid">
        <div className="info-card">
          <div className="card-title">Daily Summary</div>
          <div className="card-detail">₹ 2,40,000</div>
        </div>
        <div className="info-card">
          <div className="card-title">Branch Cash</div>
          <div className="card-detail">₹ 8,60,000</div>
        </div>
        <div className="info-card">
          <div className="card-title">User Events</div>
          <div className="card-detail">142</div>
        </div>
      </div>

      <div className="content-card large">
        <h2>Generated Report List</h2>
        <table className="finacle-table">
          <thead>
            <tr>
              <th>Report</th>
              <th>Branch</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {reportRows.map((row) => (
              <tr key={`${row.report}-${row.date}`}>
                <td>{row.report}</td>
                <td>{row.branch}</td>
                <td>{row.status}</td>
                <td>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

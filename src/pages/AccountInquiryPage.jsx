import { accountStatement } from '../data/sampleData';

export default function AccountInquiryPage() {
  return (
    <div className="page-wrap">
      <h1>BALANCE INQUIRE</h1>

      <div className="content-card">
        <form className="finacle-form">
          <div className="form-row two-col">
            <div className="field-group">
              <label>Account No</label>
              <input type="number" value="800000000001" />
            </div>
            <div className="field-group">
              <label>Customer Name</label>
              <input type="text" value="Demo Customer" />
            </div>
          </div>

          <div className="form-row two-col">
            <div className="field-group">
              <label>Date From</label>
              <input type="date" value="2025-01-01" />
            </div>
            <div className="field-group">
              <label>Date To</label>
              <input type="date" value="2025-01-31" />
            </div>
          </div>

          <div className="button-row">
            <button type="submit" className="btn-primary">Go</button>
            <button type="button" className="btn-secondary">Clear</button>
          </div>
        </form>
      </div>

      <div className="content-card large">
        <h2>Account Details</h2>
        <table className="finacle-table">
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>Demo Customer</td>
              <td><strong>Open Balance</strong></td>
              <td>₹ 0.00</td>
            </tr>
            <tr>
              <td><strong>Status</strong></td>
              <td>Active</td>
              <td><strong>Close Balance</strong></td>
              <td>₹ 236,900.00</td>
            </tr>
            <tr>
              <td><strong>Open Date</strong></td>
              <td>2024-01-12</td>
              <td><strong>Effective Balance</strong></td>
              <td>₹ 236,900.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content-card large">
        <h2>Account Statement</h2>
        <table className="finacle-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Tran</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Balance</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {accountStatement.map((row) => (
              <tr key={`${row.date}-${row.tran}`}>
                <td>{row.date}</td>
                <td>{row.tran}</td>
                <td>{row.credit}</td>
                <td>{row.debit}</td>
                <td>{row.balance}</td>
                <td>{row.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function HomePage({ header }) {
  return (
    <div className="page-wrap">
      <h1>Welcome To Finacle Core Banking System</h1>

      <div className="card-grid">
        {header.map((item, index) => (
          <div key={`${item.title}-${index}`} className="info-card">
            <div className="card-title">{item.title}</div>
            <div className="card-detail">{item.detail}</div>
          </div>
        ))}
      </div>

      <div className="content-card large">
        <h2>Portal Summary</h2>
        <table className="finacle-table">
          <thead>
            <tr>
              <th>Function</th>
              <th>Description</th>
              <th>Branch</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MANDATE</td>
              <td>Openings of Accounts and CIF Creations</td>
              <td>Head Office</td>
              <td>Open</td>
            </tr>
            <tr>
              <td>HACLI</td>
              <td>Inquire on Accounts</td>
              <td>Head Office</td>
              <td>Ready</td>
            </tr>
            <tr>
              <td>TELLER</td>
              <td>Cash Transaction Posting</td>
              <td>Bengaluru HO</td>
              <td>Open</td>
            </tr>
            <tr>
              <td>NTELLER</td>
              <td>Non Cash Transaction</td>
              <td>Head Office</td>
              <td>Ready</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

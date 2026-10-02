export default function TellerPage() {
  return (
    <div className="page-wrap">
      <h1>CASH OPERATIONS</h1>

      <div className="content-card">
        <form className="finacle-form">
          <div className="form-row two-col">
            <div className="field-group">
              <label>Function</label>
              <select defaultValue="deposit">
                <option value="deposit">Deposit</option>
                <option value="withdraw">Withdrawal</option>
              </select>
            </div>
            <div className="field-group">
              <label>AC No</label>
              <input type="number" value="800000000001" />
            </div>
          </div>

          <div className="form-row two-col">
            <div className="field-group">
              <label>Transaction Amount</label>
              <input type="number" value="25000" />
            </div>
            <div className="field-group">
              <label>Cheque No</label>
              <input type="text" value="CHQ-12091" />
            </div>
          </div>

          <div className="button-row">
            <button type="submit" className="btn-primary">Submit</button>
            <button type="button" className="btn-secondary">Clear</button>
          </div>
        </form>
      </div>

      <div className="content-card large">
        <h2>Denomination</h2>
        <table className="finacle-table">
          <tbody>
            <tr>
              <td>5000</td>
              <td><input type="number" value="2" /></td>
              <td>2000</td>
              <td><input type="number" value="3" /></td>
              <td>1000</td>
              <td><input type="number" value="1" /></td>
            </tr>
            <tr>
              <td>500</td>
              <td><input type="number" value="4" /></td>
              <td>100</td>
              <td><input type="number" value="6" /></td>
              <td>50</td>
              <td><input type="number" value="8" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

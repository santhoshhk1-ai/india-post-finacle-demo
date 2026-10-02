export default function NonCashPage() {
  return (
    <div className="page-wrap">
      <h1>NON CASH OPERATIONS</h1>

      <div className="content-card">
        <form className="finacle-form">
          <div className="form-row two-col">
            <div className="field-group">
              <label>Debit Account No</label>
              <input type="number" value="800000000001" />
            </div>
            <div className="field-group">
              <label>Credit Account No</label>
              <input type="number" value="800000000021" />
            </div>
          </div>

          <div className="form-row two-col">
            <div className="field-group">
              <label>Amount</label>
              <input type="number" value="5000" />
            </div>
            <div className="field-group">
              <label>Remarks</label>
              <input type="text" value="Transfer to savings account" />
            </div>
          </div>

          <div className="button-row">
            <button type="submit" className="btn-primary">Submit</button>
            <button type="button" className="btn-secondary">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

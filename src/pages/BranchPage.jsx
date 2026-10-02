import { branchList } from '../data/sampleData';

export default function BranchPage() {
  return (
    <div className="page-wrap">
      <h1>CREATE A NEW BRANCH</h1>

      <div className="content-card">
        <form className="finacle-form">
          <div className="form-row two-col">
            <div className="field-group">
              <label>Branch Name</label>
              <input type="text" value="New DOP Branch" />
            </div>
            <div className="field-group">
              <label>Branch Code</label>
              <input type="text" value="NDB" />
            </div>
          </div>

          <div className="button-row">
            <button type="submit" className="btn-primary">Open</button>
            <button type="button" className="btn-secondary">Clear</button>
          </div>
        </form>
      </div>

      <div className="content-card large">
        <h2>Branch Master</h2>
        <table className="finacle-table">
          <thead>
            <tr>
              <th>Branch Name</th>
              <th>SOL</th>
              <th>Cash</th>
              <th>TFR</th>
            </tr>
          </thead>
          <tbody>
            {branchList.map((branch) => (
              <tr key={branch.sol}>
                <td>{branch.branchName}</td>
                <td>{branch.sol}</td>
                <td>{branch.cash}</td>
                <td>{branch.tfr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

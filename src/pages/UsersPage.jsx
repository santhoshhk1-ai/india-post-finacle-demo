import { userList } from '../data/sampleData';

export default function UsersPage() {
  return (
    <div className="page-wrap">
      <h1>USER MODIFICATIONS</h1>

      <div className="content-card">
        <form className="finacle-form">
          <div className="form-row two-col">
            <div className="field-group">
              <label>User ID</label>
              <input type="number" value="1010" />
            </div>
            <div className="field-group">
              <label>Work Class</label>
              <select defaultValue="100">
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
              </select>
            </div>
          </div>

          <div className="button-row">
            <button type="submit" className="btn-primary">Submit</button>
            <button type="button" className="btn-secondary">Clear</button>
          </div>
        </form>
      </div>

      <div className="content-card large">
        <h2>User Matrix</h2>
        <table className="finacle-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Work Class</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.branch}</td>
                <td>{user.workClass}</td>
                <td>{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

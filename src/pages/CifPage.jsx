export default function CifPage() {
  return (
    <div className="page-wrap">
      <h1>CIF / ACCOUNT CREATION</h1>

      <div className="content-card">
        <form className="finacle-form">
          <div className="form-row two-col">
            <div className="field-group">
              <label>Document</label>
              <select defaultValue="NIC">
                <option value="NIC">NIC</option>
                <option value="PP">PP</option>
                <option value="BC">BC</option>
              </select>
            </div>
            <div className="field-group">
              <label>Unique ID</label>
              <input type="text" value="912345678V" />
            </div>
          </div>

          <div className="form-row two-col">
            <div className="field-group">
              <label>Title</label>
              <select defaultValue="Mr">
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
              </select>
            </div>
            <div className="field-group">
              <label>Full Name</label>
              <input type="text" value="Demo Customer" />
            </div>
          </div>

          <div className="form-row two-col">
            <div className="field-group">
              <label>Date of Birth</label>
              <input type="date" value="1992-09-15" />
            </div>
            <div className="field-group">
              <label>Gender</label>
              <select defaultValue="Male">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className="field-group">
            <label>Permanent Address</label>
            <textarea rows="3">No. 24, Main Road, Bengaluru</textarea>
          </div>

          <div className="form-row two-col">
            <div className="field-group">
              <label>Phone No</label>
              <input type="number" value="9876543210" />
            </div>
            <div className="field-group">
              <label>Email</label>
              <input type="email" value="demo@india-post.in" />
            </div>
          </div>

          <div className="button-row">
            <button type="submit" className="btn-primary">Create</button>
            <button type="button" className="btn-secondary">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

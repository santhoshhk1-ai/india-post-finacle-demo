export default function LoginPage({ onLogin }) {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">FINACLE</div>
        <h1>Finacle Core Banking System</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
          className="login-form"
        >
          <div className="field-group">
            <label>User ID</label>
            <input type="text" defaultValue="1001" />
          </div>

          <div className="field-group">
            <label>Password</label>
            <input type="password" defaultValue="1" />
          </div>

          <div className="button-row">
            <button type="submit" className="btn-primary">Login</button>
            <button type="button" className="btn-secondary">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

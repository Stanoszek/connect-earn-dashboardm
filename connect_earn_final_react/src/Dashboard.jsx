import { useState } from "react";

export default function Dashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = "pepe2025";

  if (!authenticated) {
    return (
      <div style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
        <div style={{width: 300, padding: 20, border: "1px solid #ccc", borderRadius: 8}}>
          <h2>Enter Password</h2>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{width: "100%", padding: 8, marginTop: 10}}
          />
          <button
            onClick={() => {
              if (password === correctPassword) setAuthenticated(true);
              else alert("Incorrect password");
            }}
            style={{marginTop: 10, width: "100%", padding: 10}}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{padding: 40}}>
      <h1>Connect & Earn Dashboard</h1>
      <p>This is your influencer platform dashboard.</p>
    </div>
  );
}

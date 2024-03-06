import { useEffect, useState } from "react";
import PageNav from "../component/PageNav";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FeakAuthContext";
export default function Login() {
  // const [user,setUser] = useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) {
        return navigate("/app");
      }
    },
    [isAuthenticated, navigate]
  );

  return (
    <div className={styles.login}>
      <PageNav />
      <main>
        <form onSubmit={handleClick}>
          <div>
            {error && <Correct />}
            <label htmlFor="email">Email address</label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  );
}

function Correct() {
  return <p>Incorect Email or passWord</p>;
}

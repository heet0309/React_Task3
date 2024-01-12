// loginh.js
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const user = "heet";
    const pass = "heet";
    if (user === username && pass === password) {
      setUser({ username });
    } else {
      return (
        // <>
        //   <div>
        //     <p>Invalid Credentials</p>
        //   </div>
        // </>
      );
    }
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};

export default Login;

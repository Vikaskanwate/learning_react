import React, { useContext } from "react";
import { useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import AuthProvider, { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  
  

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      console.log(email);
      console.log(user);
      setUser("employee");
    } else {
      alert("Invalid Credentails");
    }
  };


  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>{user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}</>
      )}
    </>
  );
}

export default App;

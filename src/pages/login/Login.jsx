import { useContext,useState } from "react";
import "./login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

  const Login = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailr, setEmailr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordr, setPasswordr] = useState("");
  const navitage = useNavigate()
  
  const {dispatch} = useContext(AuthContext)
  


    /* Con esta funcion verificamos los usuarios ya registrados*/


  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };
  /* ///////////////////////////////////////////////////////*/



  
/*

  const handleRegister = (e) => {
    e.preventDefault();

  createUserWithEmailAndPassword(auth, emailr, passwordr)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    
    navitage("/")
  })
  .catch((error) => {
    setError(true);
  });
};



<form onSubmit={handleRegister}>
              <h1>Registar</h1>
        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmailr(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPasswordr(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      
/* ///////////////////////////////////////////////////////*/



  return (
    <div className="login">
      
      <form onSubmit={handleLogin}>
              <h1>Login</h1>
        <input
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>El usuario o contraseña son incorrectos</span>}
      </form>


      

      
    </div>
  );
};
export default Login
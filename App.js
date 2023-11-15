import logo from './logo.svg';
import './Freshcut.css';

function App() {
  return (
    <div>
      <h1 style={{color: "black"}}>FRESHCUTS RESTAURANT</h1>
      <div id="form">
        <form>
          <h2>Create An Account</h2>
          <label for="username">Username</label><br></br>
          <input type="text" width="40%"></input><br></br>
          <label for="email">Email</label><br></br>
          <input type="email" width="40%"></input><br></br>
          <label for="password">Password</label><br></br>
          <input type="password" width="40%"></input><br></br>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { users } from './assets/userdata';
import Hooks from './components/Hooks';



function User({ name, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>ID: {bio}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Hooks />
    </>
  );
}

export default App;

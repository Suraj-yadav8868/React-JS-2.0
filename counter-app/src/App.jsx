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
      {/* <h1 style={{ textAlign: 'center' }}>User List</h1>
      {users.map((user) => (
        <User key={user.id} name={user.name} bio={user.company.name} />
      ))} */}
      <Hooks />
    </>
  );
}

export default App;

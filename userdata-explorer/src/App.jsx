import './App.css'
import { users } from './assets/userdata'

function User({ name, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>ID: {bio}</p>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <div className="scroller">
        {users.map((user) => (
          <User key={user.id} name={user.name} bio={user.company.name} />
        ))}
      </div>
    </div>
  )
}

export default App;

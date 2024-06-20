import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'


function App() {

  const [x, setX] = useState(1);

  return (
    <div>
      <button onClick={() => setX(1)}>1</button>
      <button onClick={() => setX(2)}>2</button>
      <button onClick={() => setX(3)}>3</button>
      <Todo id={x} />
    </div>
  )
}

function Todo({ id }) {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos?id=" + id).then(
      function (response) {
        setTodos(response.data.todos);
      }
    )

  }, [id]);

  return <div>
    <p>{id}</p>
    {
      todos.map((td) => (
        <div>
          <h1>{td.title}</h1>
          <h1>{td.description}</h1>
        </div>
      ))
    }
  </div>

}

export default App

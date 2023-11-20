import { useEffect, useState } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/todos/").then(({ data }) => {
      setTodos((todoS) => {
        return data;
      });
    });
  }, []);

  const handleChangeTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const createTodo = (event) => {
    event.preventDefault()
    
    axios.post("http://localhost:8000/api/todos/", {
        title: newTodo,
      })
      .then(({ data }) => {
        setTodos((todoS) => {
          return [data, ...todoS];
        });
        setNewTodo('');
      });
  };

  const deleteTodo = (todo) => {
    axios.delete(`http://localhost:8000/api/todo/${todo.id}/`)
    .then(() => {
      setTodos((todoS) => {
        return todoS.filter((t) => t.id !== todo.id)
      });
    });
  };

  return (
    <div className="my-5 text-center">
      <div
        className="card mx-auto"
        style={{ maxWidth: "580px", background: "rgb(255,165,0)" }}
      >
        <div className="card-body">
          <div className="d-flex gap-3 justify-content-center"></div>
          <h1>Lista de tareas</h1>
          <div className="text-start ">
            <form className="mt-5 mb-3" onSubmit={createTodo}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Nueva tarea..."
                  className="form-control bg-secondary rounded-3"
                  onChange={handleChangeTodo}
                  value={newTodo}
                />
                <button className="btn btn-primary rounded-3">Agregar</button>
              </div>
            </form>
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="d-flex gap-1 justify-content-between 
                    align-items-center mt-3 shadow p-2 mb-2 bg-white rounded-3 bg-warning"
              >
                {todo.title}
                <button
                  className="btn btn-danger small"
                  onClick={() => deleteTodo(todo)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoList;

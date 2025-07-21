import mySun from "./assets/purple-sun.png";
import emptyState from "./assets/empty.png";
import "./App.css";
import { CommonModal } from "./components/Modal";
import { useState } from "react";
function App() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [openModal, setOpenModal] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState(savedTasks);
  const [time, setTime] = useState("");
  const [statusCheck, setStatusCheck] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  console.log(todos);
  console.log(savedTasks);
  console.log(statusCheck);

  function addTodo() {
    if (textInput.length < 2) {
      return alert("Title cannot be less than 2 characters long");
    }
    const task = {
      id: Date.now(),
      title: textInput,
      isCompleted: false,
      startDate: "",
    };
    setTodos([...todos, task]);
    localStorage.setItem("tasks", JSON.stringify([...todos, task]));

    handleCloseModal();
    setTextInput("");
  }
  function handleMarkAsCompleted(title) {
    const updatedTodos = todos.map((todo) => {
      if (todo.title === title) {
        console.log({ todo });
        return { ...todo, isCompleted: !todo.isCompleted };

        // setTodos((prev) => [...prev, { ...todo, status: "completed" }]);
      } else {
        return todo;
      }

      console.log({ todo });
    });
    setTodos(updatedTodos);
  }
  function handleRemoveAllTodos() {
    // localStorage.removeItem("tasks");

    setTodos([]);
    localStorage.setItem("tasks", JSON.stringify([]));
  }
  function handleRemoveTodo(title) {
    const filterTodos = todos.filter((todo) => todo.title !== title);
    setTodos(filterTodos);
    localStorage.setItem("tasks", JSON.stringify(filterTodos));
  }
  console.log(todos);
  function handleChangeDate(title, date) {
    const updatedTodos = todos.map((todo) => {
      if (todo.title === title) {
        return { ...todo, startDate: date };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }

  // const todos = [
  //   {
  //     id: 1,
  //     title: "task1",
  //     status: "pending",
  //   },
  //   {
  //     id: 2,
  //     title: "task2",
  //     status: "completed",
  //   },
  // ];

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }
  return (
    <main>
      <section className="todo">
        <h2 className="todo-list">TODO LIST</h2>

        <div className="comment-container">
          <div id="comment">
            <input
              rows="1"
              name="comment"
              className="comment-search"
              placeholder="Search note..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="btn-all">
            <button className="btn">All</button>
          </div>

          <div>
            <img className="purple-img" src={mySun} />
          </div>
        </div>
      </section>
      <section className="note">
        {filteredTodos.map((todo, index) => (
          <div key={todo.id} className="note-section">
            <div className="note-flex">
              <div className="note1">
                <div>
                  <input
                    name="note2"
                    id="note2"
                    className="checkbox"
                    type="checkbox"
                    value={todo.title}
                    onChange={(event) =>
                      handleMarkAsCompleted(event.target.value)
                    }
                  />
                </div>
                <label
                  htmlFor="note2"
                  className={
                    todo.isCompleted === true ? "completed" : "pending"
                  }
                >
                  {todo.title}
                </label>
              </div>
              <div className="input-remove">
                <input
                  type="date"
                  value={todo.startDate}
                  onChange={(e) => handleChangeDate(todo.title, e.target.value)}
                />
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveTodo(todo.title)}
                >
                  REMOVE
                </button>
              </div>
            </div>

            <hr className="border" />
          </div>
        ))}
      </section>

      {todos.length < 1 && (
        <div className="empty">
          <img src={emptyState} />
        </div>
      )}
      <CommonModal
        isOpen={openModal}
        size={"lg"}
        onClose={handleCloseModal}
        className={"common-modal"}
      >
        <div className="modal-state">
          <h2 className="modal-description">NEW NOTE</h2>
          <input
            type="text"
            className="note-search"
            placeholder="Input your note..."
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
          />
          {/* <div>
            <h2>Time</h2>
            <input
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </div> */}
          <div className="modal-btn">
            <button className="cancel-btn" onClick={() => handleCloseModal()}>
              CANCEL
            </button>
            <button className="apply-btn" onClick={addTodo}>
              APPLY
            </button>
          </div>
        </div>
      </CommonModal>
      <div className="clear-btn">
        {todos.length > 0 && (
          <button className="task-btn" onClick={handleRemoveAllTodos}>
            CLEAR TASK
          </button>
        )}
        <button className="floating-btn" onClick={handleOpenModal}>
          +
        </button>
      </div>
    </main>
  );
}

export default App;

// onChange prop in react
// spread operator
// textInput is the value and its the state, while setState is the

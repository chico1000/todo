import mySun from "./assets/purple-sun.png";
import emptyState from "./assets/empty.png";
import "./App.css";
import { CommonModal } from "./components/Modal";
import { useState } from "react";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [time, setTime] = useState("");

  function addTodo() {
    const task = {
      id: Date.now(),
      title: textInput,
      status: "pending",
    };
    setTodos((prev) => [...prev, task]);
    handleCloseModal();
    setTextInput("");
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

  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  console.log(openModal);
  console.log(textInput);
  return (
    <main>
      <section className="todo">
        <h2 className="todo-list">TODO LIST</h2>

        <div className="comment-container">
          <div id="comment">
            <textarea
              rows="1"
              name="comment"
              className="comment-search"
              placeholder="Search note..."
            ></textarea>
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
        {todos.map((todo, index) => (
          <div key={todo.id}>
            <div className="note1">
              <div>
                <input
                  name="note2"
                  id="note2"
                  className="checkbox"
                  type="checkbox"
                />
              </div>
              <label
                htmlFor="note2"
                className={
                  todo.status === "completed" ? "completed" : "pending"
                }
              >
                {todo.title}
              </label>
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
          <div>
            <h2>Time</h2>
            <input
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </div>
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
      <button className="floating-btn" onClick={handleOpenModal}>
        +
      </button>
    </main>
  );
}

export default App;

// onChange prop in react
// spread operator
// textInput is the value and its the state, while setState is the

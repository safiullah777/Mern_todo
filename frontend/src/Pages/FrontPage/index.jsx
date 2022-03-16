import { useState, useEffect } from "react";
import "./style.css";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/buttons/index";
import SimpleAccordion from "../../components/accordian";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@mui/material";
import axios from "axios";
import {
  addAllTodoUrl,
  createUserUrl,
  editTodoUrl,
  getAllTodosUrl,
} from "../../utils/constants";

const FrontPage = () => {
  const {
    isAuthenticated,
    user,
    logout,
  } = useAuth0();

  const [clickForm, setClickForm] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [getTodos, setTodos] = useState([]);
  const [todoEdit, settodoEdit] = useState({
    iseditClick: false,
  });
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    todoDate: "",
  });

  // on page relaod sending user data from auth0
  // and getting all todos of user
  useEffect(() => {
    const get = async () => {
      if (isAuthenticated) {
        setLoading(true);

        const data = await axios.post(createUserUrl, {
          name: user?.name,
          email: user?.email,
          picture: user?.picture,
        });

        const todos = await axios.get(getAllTodosUrl);

        setTodos(todos?.data?.todos);
        setLoading(false);
      }
    };
    get();
  }, [isAuthenticated]);

  // sending data to create todo for user and editing todos
  const createTodo = async () => {
    if (!todo.title.length < 3 && !todoEdit.iseditClick) {
      console.log(todo);
        const addTodo = await axios
          .post(addAllTodoUrl, { todo })
          setTodos([...getTodos, addTodo.data.todo]);
            setClickForm(false);
            setTodo({
              title: "",
              description: "",
              todoDate: "",
            });
    }
    // editing or updating todo
    else if (todoEdit.iseditClick) {

      setTodo({ _id: todoEdit._id, ...todo });
      console.log(todo);
      const editTodo = await axios
        .put(editTodoUrl, { todo })
      setTodos([...editTodo.data.todos]);
      setClickForm(false);
      setTodo({
        title: "",
        description: "",
        todoDate: "",
      });
    }
  };
  // logout user
  const Logout = () => {
    logout();
  };

  const onChangeTitle = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };
  const onChangeDescription = (e) => {
    setTodo({ ...todo, description: e.target.value });
  };
  const getDate = (e) => {
    setTodo({ ...todo, todoDate: e.target.value });
  };

  return (
    <div className="main">
      {!isLoading && (
        <>
          <header>
            <Avatar
              alt="Cindy Baker"
              sx={{ width: 100, height: 100 }}
              src={user?.picture}
            />
            <button className="logout" onClick={Logout}>
              Logout
            </button>
          </header>
          <div className="todo__ui">
            <h1 className="welcome">wellcome {user?.name}</h1>
            {/* <Buttons classes={"delete--btn"} onClick={setClickForm} text="delete All" /> */}
            <div className="list">
              {getTodos.map((data, i) => {
                return (
                  <SimpleAccordion
                    key={i}
                    data={data}
                    editForm={clickForm}
                    onEdit={setClickForm}
                    setNewTodos={setTodos}
                    settodoEdit={settodoEdit}
                    setTodo={setTodo}
                  />
                );
              })}
            </div>
            <Buttons
              classes={"add_todo--btn"}
              onClick={setClickForm}
              text="+"
            />
          </div>
          <div className={`${clickForm ? "todo_form" : "none"}`}>
            <form onSubmit={(e) => e.preventDefault()} className="form">
              <span
                className="cross"
                onClick={() => {
                  setClickForm(false);
                  setTodo({
                    title: "",
                    description: "",
                    todoDate: "",
                  });
                }}
              >
                &#10006;
              </span>
              <h2 className="heading">Title</h2>
              <Inputs
                classes="add_todo"
                require={true}
                type={"text"}
                placeholder={"title"}
                onChange={onChangeTitle}
                value={todo.title}
              />
              <h2 className="heading">Description</h2>
              <textarea
                value={todo.description}
                className="description"
                onChange={onChangeDescription}
              />
              <h2 className="heading">Select Date & Time</h2>
              <Inputs
                onChange={getDate}
                value={todo.todoDate}
                type={"datetime-local"}
                classes={"datepicker"}
              />
              <Buttons
                classes={"add_button"}
                onClick={createTodo}
                text="add todo"
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
};
export default FrontPage;

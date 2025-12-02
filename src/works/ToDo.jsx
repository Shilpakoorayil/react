import React, { useState } from "react";
import "./Todo.css";
import { MdEdit } from "react-icons/md";
import { TbOvalFilled } from "react-icons/tb";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [errors, setErrors] = useState({});
    //...............................................................................
    const validation = () => {
        const newErrors = {};

        if (!input.trim()) {
            newErrors.text = "Please enter the task";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0; // true if no errors
    };
    //..........................................................
    const handleAddTodo = () => {
        const isValid = validation();
        if (!isValid) return;

        if (editingId) {
            setTodos(
                todos.map((todo) =>
                    todo.id === editingId
                        ? { ...todo, text: input, editedTime: new Date().toLocaleString() }
                        : todo
                )
            );
            setEditingId(null);
        } else {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: input,
                    createdTime: new Date().toLocaleString(),
                    editedTime: null,
                },
            ]);
        }

        setInput("");
        setErrors({});
    };

    //.........................................................................

    // Delete Todo
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Edit Todo
    const handleEdit = (todo) => {
        setInput(todo.text);
        setEditingId(todo.id);
    };

    return (


        // .......................................................................
        <div className="container">
            {/* Navbar */}
            <nav className="navbar">
                <h1>Todo App</h1>
            </nav>

            {/* Todo Section */}
            <div className="todo-box">
                <h2>Tasks</h2>
                <div className="input-group">
                    <input
                        type="text"
                        name="text"
                        placeholder="Enter your task..."
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            if (errors.text) setErrors({});
                        }}
                    />
                   
                    <button onClick={handleAddTodo}>
                        {editingId ? "Update" : "Add"}
                    </button>
                     
                </div>
                <div>
                    {errors.text && <p style={{ color: 'red' }}>{errors.text}</p>}
                </div>

                {todos.length === 0 ? (
                    <p className="empty">No tasks added yet</p>
                ) : (
                    <ul className="todo-list">
                        {todos.map((todo) => (
                            <li key={todo.id} className="todo-item">
                                <div className="todo-text">
                                    <strong>{todo.text}</strong>&nbsp;&nbsp;

                                   <p> Created: {todo.createdTime}</p>
                                    {todo.editedTime && <p>Edited: {todo.editedTime}</p>}
                                </div>

                                <div className="actions">
                                    <button className="edit" onClick={() => handleEdit(todo)}><MdEdit />

                                    </button>
                                    <button
                                        className="delete"
                                        onClick={() => handleDelete(todo.id)}
                                    ><TbOvalFilled />

                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TodoApp;
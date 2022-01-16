import React, { useState } from "react";
import Breads from "../breadcrumbs/BreadCrumbs";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, name: "playing", status: "active" },
        { id: 2, name: "sleeping", status: "inactive" },
        { id: 3, name: "biking", status: "active" },
    ]);

    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const [nameError, setNameError] = useState("");
    const [statusError, setStatusError] = useState("");

    const onSubmit = () => {
        if (name === "") {
            setNameError("Name is required...");
        } else if (status === "") {
            setStatusError("Status is required...");
        } else {
            setTodos([
                ...todos,
                { id: todos.length + 1, name: name, status: status },
            ]);
            setName("");
            setStatus("");
        }
    };

    const onDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const onClickEdit = (data) => {
        setName(data.name);
        setStatus(data.status);
        setTodos(
            todos.map((todo) =>
                todo.id === data.id ? { ...todo, edit: true } : todo
            )
        );
    };

    const onEdit = (data) => {
        setTodos(
            todos.map((todo) =>
                todo.id === data.id
                    ? { ...todo, edit: false, name: name, status: status }
                    : todo
            )
        );
    };
    return (
        <>
            {/* TodoList Project */}

            <div className="max-w-6xl mx-auto py-15">
                <div className="py-10">
                    <Breads />
                </div>
                <div className="flex flex-col align-center justify-center">
                    <div className="mx-3 bg-blue-600 font-bold text-xl text-gray-100 px-6 py-3">
                        To-Do-List
                    </div>
                    <div className="flex justify-center">
                        <table className="w-full border border-black mx-3">
                            <thead className="border border-black">
                            <tr className="bg-gray-300">
                                <th className="text-gray-700 text-lg">Task</th>
                                <th className="text-gray-700 text-lg">Status</th>
                                <th className="text-gray-700 text-lg">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* {console.log(todos)} */}
                            {todos.length > 0
                                ? todos.map((todo) => (
                                    <tr
                                        key={todo.id}
                                        className="border capitalize text-sm text-gray-800 text-center font-bold border-black"
                                    >
                                        {todo.edit ? (
                                            <td>
                                                <input
                                                    className="border border-black"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </td>
                                        ) : (
                                            <td>{todo.name}</td>
                                        )}

                                        {todo.edit ? (
                                            <td>
                                                <select
                                                    className="border border-black"
                                                    value={status}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                >
                                                    <option hidden></option>
                                                    <option value="active">active</option>
                                                    <option value="inactive">inactive</option>
                                                </select>
                                            </td>
                                        ) : (
                                            <td>{todo.status}</td>
                                        )}

                                        <td>
                                            <button
                                                onClick={() => onDelete(todo.id)}
                                                className="px-2 py-1 rounded-md shadow-lg bg-red-600 text-white font-bold text-sm border-2"
                                                type="button"
                                            >
                                                Delete
                                            </button>
                                            {todo.edit ? (
                                                <button
                                                    onClick={() => onEdit(todo)}
                                                    className="px-2 py-1 rounded-md shadow-lg bg-yellow-600 text-white font-bold text-sm border-2"
                                                    type="button"
                                                >
                                                    Save
                                                </button>
                                            ) : (
                                                <button
                                                    className="px-2 py-1 rounded-md shadow-lg bg-green-600 text-white font-bold text-sm border-2"
                                                    type="button"
                                                    onClick={() => {
                                                        onClickEdit(todo);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                                : null}
                            </tbody>
                        </table>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-xl text-gray-800 px-6 py-3">
                            New Task
                        </h1>

                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <label className="m-3 font-bold text-gray-800">Add Task</label>
                                <input
                                    className="mx-3 border-2 capitalize border-gray-600 rounded-md ml-3"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setNameError("");
                                    }}
                                />
                                <span>{nameError ? nameError : null}</span>
                            </div>
                            <div className="flex flex-col">
                                <label className="mt-2 mx-3 font-bold text-gray-800">
                                    Status
                                </label>
                                <select
                                    value={status}
                                    className="mx-3 border-2 capitalize border-gray-600 rounded-md ml-3"
                                    onChange={(e) => {
                                        setStatus(e.target.value);
                                        setStatusError("");
                                    }}
                                >
                                    <option hidden></option>
                                    <option value="active">active</option>
                                    <option value="inactive">inactive</option>
                                </select>
                                <span>{statusError ? statusError : null}</span>
                            </div>

                            <div className="pt-3 flex flex-row-reverse">
                                <button
                                    onClick={() => {
                                        onSubmit();
                                    }}
                                    className=" mx-3 mt-1 px-2 py-1 rounded-md shadow-lg bg-blue-600 text-white font-bold text-sm border-2"
                                    type="button"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoList;
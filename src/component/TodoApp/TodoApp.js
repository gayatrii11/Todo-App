import React  from "react";
import "./TodoApp.css";


function TodoApp() {
  const [input, setInput] = React.useState("");
  const [items, setItems] = React.useState([]);

  // update the input state variable with the value of the input field 
  // whenever the input field's value changes.
  const handleChange = (event) => {
    setInput(event.target.value);
  };
// adds the current value of the input variable to the items array and then resets the input variable to an empty string when a 
// form is submitted, preventing the page from reloading.
  const storeItems = (event) => {
    event.preventDefault();
    setItems([...items, input]);
    setInput("");
  };

  // Deletes the items in the item boxes
  const deleteItem = (key) => {
    const allItems = [...items];
    allItems.splice(key, 1);
    setItems(allItems);
  };

  return (
    <div className="todo-container">
      <form className="input-section" onSubmit={storeItems}>
        <h1>Todo App</h1>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter Items"
          maxlength="40"
        />
      </form>
      <ul>
        {items.map((data, index) => (
          <li key={index}>
            {data}{" "}
            <i
              className="fa-solid fa-trash-can"
              onClick={() => deleteItem(index)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

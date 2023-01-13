import React from "react";

function NewTaskForm({ categories, onSubmit, onChange }) {
  return (
    <form className="new-task-form" onSubmit={onSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={onChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={onChange}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


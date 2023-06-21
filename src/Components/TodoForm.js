import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    // const handlesubmit = (e) => {
    //   e.preventDefault();
    //   const empdata = { id, fullname, email, phone, position, bio, empnumber, dob,  active };
  
    //   fetch("http://localhost:8000/employee/" + empid, {
    //     method: "PUT",
    //     headers: { "content-type": "application/json" },
    //     body: JSON.stringify(empdata),
    //   })
    //     .then((res) => {
    //       alert("Saved successfully.");
    //       navigate("/");
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });
    // };

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      className="todo-input" 
      placeholder='What is the task today?' 
      />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
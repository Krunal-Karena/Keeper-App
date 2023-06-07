import React, { useState } from "react";

function CreateArea(props) {
  const [item, setItem] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(item);
    setItem({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={item.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={item.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

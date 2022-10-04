import React from 'react';


function EditMemoryForm() {

  const handleEditClick = async (event) => {
    event.preventDefault();
    console.log("Edit clicked");
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleEditClick}>
        <label>Edit memory:</label><br />
        <textarea></textarea><br />
        <button type="submit">Save Edited Memory</button>
      </form>
    </div>
  )
}

export default EditMemoryForm;
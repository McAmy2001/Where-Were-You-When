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
      <form onSubmit={handleEditClick} className="form-flex">
        <label><h4>Edit memory:</h4></label>
        <textarea className="form-input"></textarea>
        <button type="submit" className="submit-btn">Save Edited Memory</button>
      </form>
    </div>
  )
}

export default EditMemoryForm;
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_MEMORY } from "../../utils/mutations";
import { useNavigate } from "react-router-dom";

function EditMemoryForm(memory) {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({ memoryText: "" });
  const { memoryText } = formState;

  const [updateMemory, error] = useMutation(UPDATE_MEMORY);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  console.log(formState.memoryText);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");

    try {
      await updateMemory({
        variables: { memoryText: formState.memoryText, _id: memory.memory._id },
      });
    } catch (e) {
      console.error(e);
    }
    navigate("/profile");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-flex">
        <label>
          <h4>Edit memory:</h4>
        </label>
        <textarea
          className="form-input"
          name="memoryText"
          defaultValue={memoryText}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-btn">
          Save Edited Memory
        </button>
      </form>
      {error && <p>Something went wrong.</p>}
    </div>
  );
}

export default EditMemoryForm;

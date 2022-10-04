import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_MEMORY } from "../../utils/mutations";
import { QUERY_MEMORY, QUERY_ME } from "../../utils/queries";

function EditMemoryForm() {

  const [memoryText, setMemoryText] = useState("");

  const [updateMemory, { error }] = useMutation(UPDATE_MEMORY, {
    update(cache, { data: { updateMemory } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, memories: [...me.memories, updateMemory] } },
        });
      } catch (e) {
        console.warn("Memory edited by user.");
      }

      const { memory } = cache.readQuery({ query: QUERY_MEMORY});

      cache.writeQuery({
        query: QUERY_MEMORY,
        data: { memory: [updateMemory, ...memory] }
      });
    }
  });

  const handleEditClick = async (event) => {
    event.preventDefault();

    try {
      setMemoryText(event.target.value);
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleEditClick} className="form-flex">
        <label><h4>Edit memory:</h4></label>
        <textarea 
          className="form-input"
          name="memoryText"
          onChange={(e) =>
            setMemoryText(e.target.value)}
        ></textarea>
        <button type="submit" className="submit-btn">Save Edited Memory</button>
      </form>
    </div>
  )
}

export default EditMemoryForm;
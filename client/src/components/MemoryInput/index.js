// import react with state
import React, { useState } from "react";

import { useMutation } from "@apollo/client";
// import ADD_MEMORY from mutations
import { ADD_MEMORY } from "../../utils/mutations";
// impory QUERY_MEMORIES and QUERY_ME from queries
import { QUERY_MEMORIES, QUERY_ME } from "../../utils/queries";

/* Attempt #5 */
// MemoryInput function create a new memory with user input
const MemoryInput = () => {
  const [memoryMonth, setMemoryMonth] = useState(0);
  const [memoryDate, setMemoryDate] = useState(0);
  const [memoryYear, setMemoryYear] = useState(0);
  const [memoryText, setMemoryText] = useState({ memoryText: "" });

  const [addMemory, { error }] = useMutation(ADD_MEMORY, {
    update(cache, { data: { addMemory } }) {
      // use try/catch
      try {
        // update me
        const { me } = cache.readQuery({ query: QUERY_ME });

        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, memories: [...me.memories, addMemory] } },
        });
      } catch (e) {
        console.warn("First memory by user.");
      }
      // update memories
      const { memories } = cache.readQuery({ query: QUERY_MEMORIES });

      cache.writeQuery({
        query: QUERY_MEMORIES,
        data: { memories: [addMemory, ...memories] },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // add a new memory to the databse and then clear the memory input form
    try {
      const { data } = await addMemory({
        variables: { memoryMonth, memoryDate, memoryYear, memoryText },
      });

      setMemoryMonth(0);
      setMemoryDate(0);
      setMemoryYear(0);
      setMemoryText("");
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <h3>Record Your Memory</h3>
      <form onSubmit={handleFormSubmit} className="form-flex">
        <input
          placeholder="Enter a month as 1-12"
          type="number"
          name="memoryMonth"
          onChange={(e) => setMemoryMonth(parseInt(e.target.value))}
          className="form-input"
        />
        <input
          placeholder="Enter a date as 1-31"
          type="number"
          name="memoryDate"
          onChange={(e) => setMemoryDate(parseInt(e.target.value))}
          className="form-input"
        />
        <input
          placeholder="Enter a year"
          type="number"
          name="memoryYear"
          onChange={(e) => setMemoryYear(parseInt(e.target.value))}
          className="form-input"
        />
        <textarea
          placeholder="Record your memory"
          name="memoryText"
          onChange={(e) => setMemoryText(e.target.value)}
          className="form-input"
        ></textarea>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      {error && <p>Something went wrong.</p>}
    </div>
  );
};

export default MemoryInput;

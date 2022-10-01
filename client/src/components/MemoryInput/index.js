import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_MEMORY } from "../../utils/mutations";
import { QUERY_MEMORIES, QUERY_ME } from "../../utils/queries";

const MemoryInput = () => {
  const [memoryText, setText] = useState("");
  const [memoryYear, setYear] = useState("");
  const [memoryDate, setDate] = useState("");
  const [memoryMonth, setMonth] = useState("");

  const [addMemory, { error }] = useMutation(ADD_MEMORY, {
    update(cache, { data: { addMemory } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, memory: [...me.memory, addMemory] } },
        });
      } catch (e) {
        console.warn("First memory insertion by user!");
      }

      const { memories } = cache.readQuery({ query: QUERY_MEMORIES });
      cache.writeQuery({
        query: QUERY_MEMORIES,
        data: { memories: [addMemory, ...memories] },
      });
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length >= 1) {
      setText(event.target.value);
    }
    if (memoryYear.value.length === 4) {
      setYear(event.target.value);
    }
    if (memoryDate.value.length >= 1) {
      setDate(event.target.value);
    }
    if (memoryMonth.value.length >= 1) {
      setMonth(event.target.value);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addMemory({
        variables: { memoryText, memoryDate, memoryMonth, memoryYear },
      });

      setText("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Add a new memory:</h2>
      <form onSubmit={handleFormSubmit}>
        <label for="month">
          Month:
          <input
            type="number"
            id="month"
            min="1"
            max="31"
            value={memoryMonth}
            onChange={handleChange}
          />
        </label>
        <label for="day">
          Day:
          <input
            type="number"
            id="day"
            min="1"
            max="31"
            value={memoryDate}
            onChange={handleChange}
          />
        </label>
        <label for="year">
          Year:
          <input
            type="number"
            id="year"
            value={memoryYear}
            onChange={handleChange}
          />
        </label>
        <label for="memory">
          My memory:
          <textarea
            placeholder="Enter your memory here."
            id="memory"
            value={memoryText}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit New Memory</button>
      </form>
    </div>
  );
};

export default MemoryInput;

import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_MEMORY } from "../../utils/mutations";
import { QUERY_MEMORIES, QUERY_ME } from "../../utils/queries";

const MemoryInput = () => {
  const [memoryText, setText] = useState("");
  const [memoryYear, setYear] = useState("");
  const [memoryDate, setDate] = useState("");
  const [memoryMonth, setMonth] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

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
      setCharacterCount(event.target.value.length);
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
        variables: { memoryText },
      });

      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong.</span>}
      </p>
      <form onSubmit={handleFormSubmit}>
        <label for="month">Enter month</label>
        <input
          placeholder="Enter month"
          type="number"
          id="month"
          min="1"
          max="31"
          value={memoryMonth}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Enter day"
          type="number"
          min="1"
          max="31"
          value={memoryDate}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Enter year"
          type="number"
          value={memoryYear}
          onChange={handleChange}
        ></input>
        <textarea
          placeholder="Enter a memory here."
          value={memoryText}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit New Memory</button>
      </form>
    </div>
  );
};

export default MemoryInput;

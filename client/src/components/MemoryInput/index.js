import React, { useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { ADD_MEMORY } from "../../utils/mutations";
import { QUERY_MEMORIES, QUERY_ME } from "../../utils/queries";

/* Attempt #2 */
const MemoryInput = () => {
  const [formState, setFormState] = useState({ memoryMonth: "", memoryDate: "", memoryYear: "", memoryText: "" });
  const [addMemory, { error }] = useMutation(ADD_MEMORY, {
    update(cache, { data: { addMemory } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, memories: [...me.memories, addMemory] } },
        });
      } catch (e) {
        console.warn("First memory by user.");
      }

      const { memories } = cache.readQuery({ query: QUERY_MEMORIES });

      cache.writeQuery({
        query: QUERY_MEMORIES,
        data: { memories: [addMemory, ...memories] }
      });
    }
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormState((prev) => {
      return {...prev, [name]: value}
    });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addMemory({
        variables: { formState },
      });
      setFormState("");
    } catch (e) {
      console.error(e)
    }
  }; 

  return (
    <div>
      <h3>Record Your Memory Here</h3>
      <form onSubmit={handleFormSubmit}>
      <input
            placeholder="Enter a month as 1-12"
            type="number"
            name="memoryMonth"
            onChange={handleChange}
          />
          <input
            placeholder="Enter a date as 1-31"
            type="number"
            name="memoryDate"
            onChange={handleChange}
          />
          <input
            placeholder="Enter a year"
            type="number"
            name="memoryYear"
            onChange={handleChange}
          />
          <textarea
            placeholder="Record your memory"
            name="memoryText"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
      </form>
      {error && <p>Something went wrong.</p>}
    </div>
  )
}

export default MemoryInput;

/* Attempt #1 
const MemoryInput = () => {
  const [formState, setFormState] = useState({ memoryMonth: "", memoryDate: "", memoryYear: "", memoryText: "" });

  const [addMemory, { error }] = useMutation(ADD_MEMORY);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Before submitting data");
      const { data } = await addMemory({
        variables: { ...formState }
      });
      console.log("After submitting data");
      console.log(data);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      memoryMonth: "",
      memoryDate: "",
      memoryYear: "",
      memoryText: ""
    })
  }

  return (
    <div>
      <h3>Record Your Memory Here</h3>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="Enter a month as 1-12"
            name="memoryMonth"
            type="number"
            id="memoryMonth"
            value={formState.memoryMonth}
            onChange={handleChange}
          />
          <input
            placeholder="Enter a date as 1-31"
            name="memoryDate"
            type="text"
            id="memoryDate"
            value={formState.memoryDate}
            onChange={handleChange}
          />
          <input
            placeholder="Enter a year"
            name="memoryYear"
            type="number"
            id="memoryYear"
            value={formState.memoryYear}
            onChange={handleChange}
          />
          <input
            placeholder="Record your memory"
            name="memoryText"
            type="text"
            id="memoryText"
            value={formState.memoryText}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
        {error && <div>Please fill out every field.</div>}
      </div>
    </div>
*/

/* Pulled from develop 
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
          name="month"
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
*/

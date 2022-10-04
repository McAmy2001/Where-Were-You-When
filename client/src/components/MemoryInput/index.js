import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_MEMORY } from "../../utils/mutations";
import { QUERY_MEMORIES, QUERY_ME } from "../../utils/queries";

/* Attempt #6 
const MemoryInput = () => {

  const [formState, setFormState] = useState({ memoryMonth: "", memoryDate: "", memoryYear: "", memoryText: "" });
  const { memoryMonth, memoryDate, memoryYear, memoryText } = formState;


  const [addMemory, { error }] = useMutation(ADD_MEMORY, {
    update(cache, { data: { addMemory } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        console.log(me);
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, memory: [...me.memory, addMemory] } },

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
      await addMemory({
        variables: { memoryMonth: formState.memoryMonth, memoryDate: formState.memoryDate, memoryYear: formState.memoryYear, memoryText: formState.memoryText },
      });
      setFormState({
        memoryMonth: 0,
        memoryDate: 0,
        memoryYear: 0,
        memoryText: ""
      });
    } catch (e) {
      console.error(e.message)
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
            value={memoryMonth}
            onChange={handleChange}
            className="form-input"
          />
          <input
            placeholder="Enter a date as 1-31"
            type="number"
            name="memoryDate"
            value={memoryDate}
            onChange={handleChange}
            className="form-input"
          />
          <input
            placeholder="Enter a year"
            type="number"
            name="memoryYear"
            value={memoryYear}
            onChange={handleChange}
            className="form-input"
          />
          <textarea
            placeholder="Record your memory"
            name="memoryText"
            value={memoryText}
            onChange={handleChange}
            className="form-input"
          ></textarea>
          <button type="submit" className="submit-btn">Submit</button>
      </form>
      {error && <p>Something went wrong.</p>}
    </div>
  )
}

export default MemoryInput;
*/

/* Attempt #5 */
const MemoryInput = () => {

  // const [memoryMonth, setMemoryMonth] = useState(0);
  // const [memoryDate, setMemoryDate] = useState(0);
  const [memoryYear, setMemoryYear] = useState(0);
  const [memoryText, setMemoryText] = useState({memoryText: ''});
 
  const [addMemory, { error }] = useMutation(ADD_MEMORY, {
    update(cache, { data: { addMemory } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        console.log(me);
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(memoryText, memoryYear);
    try {
      const { data } = await addMemory({
        variables: { memoryText, memoryYear },
      })

      // setMemoryMonth(0);
      // setMemoryDate(0);
      setMemoryYear(0);
      setMemoryText("");

    } catch (e) {
      console.error(e.message)
    }
  }; 

  return (
    <div>
      <h3>Record Your Memory</h3>
      <form onSubmit={handleFormSubmit} className="form-flex">
      {/* <input
            placeholder="Enter a month as 1-12"
            type="number"
            name="memoryMonth"
            value={memoryMonth}
            onChange={(e) =>
              setMemoryMonth(parseInt(e.target.value))
            }
            className="form-input"
          />
          <input
            placeholder="Enter a date as 1-31"
            type="number"
            name="memoryDate"
            value={memoryDate}
            onChange={(e) =>
              setMemoryDate(parseInt(e.target.value))
            }
            className="form-input"
          /> */}
          <input
            placeholder="Enter a year"
            type="number"
            name="memoryYear"
            onChange={(e) =>
              setMemoryYear(parseInt(e.target.value))
            }
            className="form-input"
          />
          <textarea
            placeholder="Record your memory"
            name="memoryText"
            onChange={(e) =>
            setMemoryText(e.target.value)}
            className="form-input"
          ></textarea>
          <button type="submit" className="submit-btn">Submit</button>
      </form>
      {error && <p>Something went wrong.</p>}
    </div>
  )
}

export default MemoryInput;


/* Attempt #4 
const MemoryInput = () => {

  const [formState, setFormState] = useState({ memoryMonth: "", memoryDate: "", memoryYear: "", memoryText: "" });
  const { memoryMonth, memoryDate, memoryYear, memoryText } = formState;


  const [addMemory, { error }] = useMutation(ADD_MEMORY, {
    update(cache, { data: { addMemory } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        console.log(me);
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, memory: [...me.memory, addMemory] } },

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
      await addMemory({
        variables: { memoryMonth: formState.memoryMonth, memoryDate: formState.memoryDate, memoryYear: formState.memoryYear, memoryText: formState.memoryText },
      });
      setFormState("");
    } catch (e) {
      console.error(e.message)
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
            value={memoryMonth}
            onChange={handleChange}
            className="form-input"
          />
          <input
            placeholder="Enter a date as 1-31"
            type="number"
            name="memoryDate"
            value={memoryDate}
            onChange={handleChange}
            className="form-input"
          />
          <input
            placeholder="Enter a year"
            type="number"
            name="memoryYear"
            value={memoryYear}
            onChange={handleChange}
            className="form-input"
          />
          <textarea
            placeholder="Record your memory"
            name="memoryText"
            value={memoryText}
            onChange={handleChange}
            className="form-input"
          ></textarea>
          <button type="submit" className="submit-btn">Submit</button>
      </form>
      {error && <p>Something went wrong.</p>}
    </div>
  )
}

export default MemoryInput;
*/

/* Attempt #3 */
// const MemoryInput = () => {
//   const [memoryText, setMemoryText] = useState('');

//   const [addMemory, { error }] = useMutation(ADD_MEMORY, {
//     update(cache, { data: { addMemory } }) {
//       try {
//         const { me } = cache.readQuery({ query: QUERY_ME });
//         cache.writeQuery({
//           query: QUERY_ME,
//           data: { me: { ...me, memory: [...me.memory, addMemory] } },

//         });

//       } catch (e) {
//         console.warn("First memory by user.");
//       }
      
//       const { memories } = cache.readQuery({ query: QUERY_MEMORIES });

//       cache.writeQuery({
//         query: QUERY_MEMORIES,
//         data: { memories: [addMemory, ...memories] }
//       });
//     }
//   });

//   function handleChange(event) {
//     setMemoryText(event.target.value);
//   }

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await addMemory({
//         variables: { memoryText },
//       });
//       setMemoryText("");
//     } catch (e) {
//       console.error(e.message)
//     }
//   }; 

//   return (
//     <div>
//       <h3>Record Your Memory Here</h3>
//       <form onSubmit={handleFormSubmit}>
//       {/* <input
//             placeholder="Enter a month as 1-12"
//             type="number"
//             name="memoryMonth"
//             value={memoryMonth}
//             onChange={handleChange}
//           />
//           <input
//             placeholder="Enter a date as 1-31"
//             type="number"
//             name="memoryDate"
//             value={memoryDate}
//             onChange={handleChange}
//           />
//           <input
//             placeholder="Enter a year"
//             type="number"
//             name="memoryYear"
//             value={memoryYear}
//             onChange={handleChange}
//           /> */}
//           <textarea
//             placeholder="Record your memory"
//             name="memoryText"
//             value={memoryText}
//             onChange={handleChange}
//           ></textarea>
//           <button type="submit">Submit</button>
//       </form>
//       {error && <p>Something went wrong.</p>}
//     </div>
//   )
// }

// export default MemoryInput;

/* Attempt #2 
const MemoryInput = () => {
  const [formState, setFormState] = useState({ memoryMonth: "", memoryDate: "", memoryYear: "", memoryText: "" });
  const { memoryMonth, memoryDate, memoryYear, memoryText } = formState;

  const [addMemory, { error }] = useMutation(ADD_MEMORY, {
    update(cache, { data: { addMemory } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        console.log(me);
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, memory: [...me.memory, addMemory] } },

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

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addMemory({
        variables: { memoryMonth: formState.memoryMonth, memoryDate: formState.memoryDate, memoryYear: formState.memoryYear, memoryText: formState.memoryText },
      });
      setFormState("");

    } catch (e) {
      console.error(e.message)
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
            value={memoryMonth}
            onChange={handleChange}
          />
          <input
            placeholder="Enter a date as 1-31"
            type="number"
            name="memoryDate"
            value={memoryDate}
            onChange={handleChange}
          />
          <input
            placeholder="Enter a year"
            type="number"
            name="memoryYear"
            value={memoryYear}
            onChange={handleChange}
          />
          <textarea
            placeholder="Record your memory"
            name="memoryText"
            value={memoryText}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>

      </form>
      {error && <p>Something went wrong.</p>}
    </div>
  )
}

export default MemoryInput;
*/


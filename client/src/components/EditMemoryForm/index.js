// import react with useState
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import UPDATE_MEMORY from mutations
import { UPDATE_MEMORY } from "../../utils/mutations";
// import QUERY_ME and QUERY_MEMORY from queries
import { QUERY_MEMORY, QUERY_ME } from "../../utils/queries";

// EditMemoryForm uses useState to allow users to edit memory text input and update a single memory
function EditMemoryForm() {
  const [formState, setFormState] = useState({ memoryText: "" });
  const { memoryText } = formState;

  const [updateMemory, { error }] = useMutation(UPDATE_MEMORY, {
    update(cache, { data: { updateMemory } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, memories: [...me.memories, updateMemory] } },
        });
      } catch (e) {
        console.warn("Memory edited");
      }

      const { memory } = cache.readQuery({ query: QUERY_MEMORY });
      cache.writeQuery({
        query: QUERY_MEMORY,
        data: { memory: [updateMemory, ...memory] },
      });
    },
  });

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateMemory({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
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

// function EditMemoryForm() {

//   const [formState, setFormState] = useState({memoryText: ''});

//   const [updateMemory, { error }] = useMutation(UPDATE_MEMORY);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleEditSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await updateMemory({
//         variables: { ...formState }
//       });
//     } catch (e) {
//       console.log(e);
//     }

//     setFormState({ memoryText: ""});
//   };

//   return (
//     <div>
//       <form onSubmit={handleEditSubmit} className="form-flex">
//         <label><h4>Edit memory:</h4></label>
//         <textarea
//           className="form-input"
//           name="memoryText"
//           value={formState.memoryText}
//           onChange={handleChange}
//         ></textarea>
//         <button type="submit" className="submit-btn">Save Edited Memory</button>
//       </form>
//       {error && <p>Something went wrong.</p>}
//     </div>
//   )
// }

// export default EditMemoryForm;

// function EditMemoryForm() {

//   const [memoryText, setMemoryText] = useState({memoryText: ''});

//   const [updateMemory, { error }] = useMutation(UPDATE_MEMORY, {
//     update(cache, { data: { updateMemory } }) {
//       try {
//         const { me } = cache.readQuery({ query: QUERY_ME });
//         cache.writeQuery({
//           query: QUERY_ME,
//           data: { me: { ...me, memories: [...me.memories, updateMemory] } },
//         });
//       } catch (e) {
//         console.warn("Memory edited by user.");
//       }

//       const { memory } = cache.readQuery({ query: QUERY_MEMORY});

//       cache.writeQuery({
//         query: QUERY_MEMORY,
//         data: { memory: [updateMemory, ...memory] }
//       });
//     }
//   });

//   const handleEditClick = async (event) => {
//     event.preventDefault();

//     try {
//       await updateMemory({
//         variables: {memoryText}
//       });
//       setMemoryText(event.target.value);
//     } catch (e) {
//       console.error(e.message)
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={handleEditClick} className="form-flex">
//         <label><h4>Edit memory:</h4></label>
//         <textarea
//           className="form-input"
//           name="memoryText"
//           onChange={(e) =>
//             setMemoryText(e.target.value)}
//         ></textarea>
//         <button type="submit" className="submit-btn">Save Edited Memory</button>
//       </form>
//       {error && <p>Something went wrong.</p>}
//     </div>
//   )
// }

// export default EditMemoryForm;

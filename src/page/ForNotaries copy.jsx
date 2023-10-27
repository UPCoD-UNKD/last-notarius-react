import { db } from "../firebase";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
// import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";

// import {uid} from "../utils/uid";
import { uid } from "uid";
import Container from "../components/common/Conteiner";
import { useEffect, useState } from "react";

import {
  getDatabase,
  set,
  ref,
  onValue,
  remove,
  update,
} from "firebase/database";

const ForNotaries = () => {
  // const db = getDatabase();
  const database = getDatabase(db);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  /**
   * Added the new variadles
   * @param {} e
   */

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  // const [file, setFile] = useState(null);

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  //read
  useEffect(() => {
    const todoRef = ref(database, "todos");
    // onValue(ref(db), (snapshot) => {
    onValue(todoRef, (snapshot) => {
      const data = snapshot.val();
      // if (data !== null) {
      //   // Object.values(data).map((todo) => {
      //   //   setTodos((oldArray) => [...oldArray, todo]);
      //   //   return todo;
      //   // });

      //   // Convert data to an array and update the todos state
      //   const todosArray = Object.values(data);
      //   setTodos(todosArray);
      // }

      if (data) {
        // Update your state with the retrieved data
        setTodos(Object.values(data));
      }
    });
  }, []);

  const uuid = uid();
  const storage = getStorage();
  // const storageRef1 = storageRef(storage);
  const storageRef = ref(storage, `avatars/${uuid}`); // Define a reference to the specific location within storage

  //write
  const writeToDatabase = () => {
    // const storage = getStorage(); // Get a reference to Firebase Storage

    // const storageRef = ref(storage, `avatars/${uuid}`);
    // const storageRef = storageRef(storage, `avatars/${uuid}`);
    const fileRef = storageRef.child(`avatars/${uuid}`);

    // Upload the file to Firebase Storage
    // uploadBytes(storageRef, file)
    uploadBytes(fileRef, file)
      // uploadBytes(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          set(ref(db, `/${uuid}`), {
            todo,
            uuid,
            title,
            description,
            avatar: downloadURL, // Store the download URL of the uploaded image
          });
          // Clear input fields
          setTodo("");
          setTitle("");
          setDescription("");
          setFile(null);
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  //update
  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTempUuid(todo.uuid);
    setTodo(todo.todo);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      todo,
      uuid: tempUuid,
    });
    setTodo("");
    setIsEdit(false);
  };
  //delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };

  return (
    <section class="bg-white mt-[-72px] text-center text-xl font-semibold min-h-[calc(100vh-200px)] w-full py-10">
      <Container>
        <h2 class=" border__bottom pb-5">Для нотаріусів</h2>

        <div class="mt-10 flex gap-4">
          <input
            type="text"
            class=" border border-gray-500 p-2"
            value={todo}
            onChange={handleTodoChange}
          />
          {isEdit ? (
            <>
              <button class="bg-slate-400 px-2" onClick={handleSubmitChange}>
                Submit Change{" "}
              </button>
              <button
                class="bg-slate-400 px-2"
                onClick={() => {
                  setIsEdit(false);
                  setTodo("");
                }}
              >
                X
              </button>
            </>
          ) : (
            <button class="bg-slate-400 px-2" onClick={writeToDatabase}>
              submit{" "}
            </button>
          )}
        </div>

        <div class="flex flex-col mt-5 gap-2">
          <input
            class=" border border-gray-500 p-2"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            class=" border border-gray-500 p-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
         
          {/* <input
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              style={{ maxWidth: "200px" }}
            />
          )} */}
        </div>

        {todos.map((todo) => (
          <>
            <div class=" flex gap-2 mt-2">
              <h1>{todo.todo}</h1>
              <button
                class="bg-slate-400 px-2"
                onClick={() => handleUpdate(todo)}
              >
                update
              </button>
              <button
                class="bg-slate-400 px-2"
                onClick={() => handleDelete(todo)}
              >
                delete
              </button>
            </div>
          </>
        ))}
      </Container>
    </section>
  );
};

export default ForNotaries;

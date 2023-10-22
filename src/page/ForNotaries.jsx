import { db } from "../firebase";
// import {uid} from "../utils/uid";
import { uid } from "uid";
import Container from "../components/common/Conteiner";
import { useEffect, useState } from "react";
import { set, ref, onValue, remove, update } from "firebase/database";

const ForNotaries = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        // Object.values(data).map((todo) => {
        //   setTodos((oldArray) => [...oldArray, todo]);
        //   return todo;
        // });

        // Convert data to an array and update the todos state
        const todosArray = Object.values(data);
        setTodos(todosArray);
      }
    });
  }, []);

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      uuid,
    });

    setTodo("");
  };

  //update
  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTempUuid(todo.uuid);
    setTodo(todo.todo);
  }

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
               <button class="bg-slate-400 px-2" onClick={handleSubmitChange}>Submit Change </button>
               <button class="bg-slate-400 px-2" onClick={()=> {
                
                setIsEdit(false);
                setTodo("");
               }
                
                }>X</button>
          
               </>
          ): ( <button class="bg-slate-400 px-2" onClick={writeToDatabase}>submit </button>)}
         
            
        </div>

        {todos.map((todo) => (
          <>
            <div class=" flex gap-2 mt-2">
              <h1>{todo.todo}</h1>
              <button class="bg-slate-400 px-2"
              onClick={()=> handleUpdate(todo)}>update</button>
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
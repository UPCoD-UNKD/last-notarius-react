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
  //added new input
//   const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");
const [avatar, setAvatar] = useState("");
const [ fio, setFio] = useState("");
const [ license, setLicense] = useState("");
const [ post, setPost] = useState("");
const [ description, setDescription] = useState("");
const [ schedule, setSchedule] = useState("");

const [ region, setRegion] = useState("");
const [ city, setCity] = useState("");
const [ nameObj, setNameObj] = useState("");
const [ kind, setKind] = useState("");
const [ contacts, setContacts] = useState("");


const [ areal, setAreal] = useState("");

const [ fullAddress, setFullAddress] = useState("");
const [ shortAddress, setShortAddress] = useState("");
// const [ latitude, setLatitude] = useState("");
// const [ longitude, setLongitude] = useState("");

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
    // const uuid = uid();
    const id = uid();
    set(ref(db, `/${id}`), {
      id,
      todo,
      

    //   title, // Add the title field
    // description, // Add the description field
    avatar, // Add the avatar field
    fio,
    license,
    post,
    description,
    schedule,


    region,
    city,
    nameObj,
    kind,
    contacts,
   
    
    areal,
    
    fullAddress,
    shortAddress,
    // latitude,
    // longitude,
    });

   // Clear all input fields
  setTodo("");
  // setTitle("");
  // setDescription("");
  // setAvatar("");
  setTodos("");
  setIsEdit("");
  setTempUuid("");
  setAvatar("");
  setFio("");
  setLicense("");
  setPost("");
  setDescription("");
  setSchedule("");
  setRegion("");
  setCity("");
  setNameObj("");
  setKind("");
  setContacts("");
  setAreal("");
  setFullAddress("");
  setShortAddress("");












  };

  //update
  const handleUpdate = (todo) => {
    setIsEdit(true);
    // setTempUuid(todo.uuid);
    setTempUuid(todo.id);
    setTodo(todo.todo);
  }

  const handleSubmitChange = () => {
   
      update(ref(db, `/${tempUuid}`), {
        todo,
        // uuid: tempUuid,
        id: tempUuid,
      });
      setTodo("");
      setIsEdit(false);
   
  };
  //delete
  const handleDelete = (todo) => {
    // remove(ref(db, `/${todo.uuid}`));
    remove(ref(db, `/${todo.id}`));
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

        <div class="flex flex-col mt-5 gap-4">
        {/* <input
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
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Avatar Image URL"
  value={avatar}
  onChange={(e) => setAvatar(e.target.value)}
/> */}

<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Логотип фото"
  value={avatar}
  onChange={(e) => setAvatar(e.target.value)}
/>
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="ФІП"
  value={fio}
  onChange={(e) => setFio(e.target.value)}
/>
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Ліцензія"
  value={license}
  onChange={(e) => setLicense(e.target.value)}
/>
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Пошта"
  value={post}
  onChange={(e) => setPost(e.target.value)}
/>
<textarea
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Опис"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>

{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Телеграм"
  value={region}
  onChange={(e) => setRegion(e.target.value)}
/> */}

{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Нотаріальні дії"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Важливі оновлення"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="ГРАФІК РОБОТИ"
  value={schedule}
  onChange={(e) => setSchedule(e.target.value)}
/>
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Вдгуки клієнтів"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Статистика діяльності"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Промо-акції"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Корисні ресурси"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Сайт нотаріуса"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Регіон"
  value={region}
  onChange={(e) => setRegion(e.target.value)}
/>
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Місто"
  value={city}
  onChange={(e) => setCity(e.target.value)}
/>
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Вид нотаріальної діяльності"
  value={nameObj}
  onChange={(e) => setNameObj(e.target.value)}
/>
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Населений пункт"
  value={kind}
  onChange={(e) => setKind(e.target.value)}
/>


<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Контакти"
  value={contacts}
  onChange={(e) => setContacts(e.target.value)}
/>
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Рейтинг користувачів
  value={contacts}
  onChange={(e) => setContacts(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Досвід роботи"
  value={contacts}
  onChange={(e) => setContacts(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Мови спілкування"
  value={contacts}
  onChange={(e) => setContacts(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Доступність для інвалідів"
  value={contacts}
  onChange={(e) => setContacts(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Онлайн-послуги"
  value={contacts}
  onChange={(e) => setContacts(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Термінові послуги"
  value={contacts}
  onChange={(e) => setContacts(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Відгуки"
  value={contacts}
  onChange={(e) => setContacts(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Виклик нотаріуса"
  value={contacts}
  onChange={(e) => setContacts(e.target.value)}
/> */}
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Ціновий діапазон"
  value={contacts}
  onChange={(e) => setContacts(e.target.value)}
/> */}





<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Населений пункт"
  value={areal}
  onChange={(e) => setAreal(e.target.value)}
/>

<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Повна адреса"
  value={fullAddress}
  onChange={(e) => setFullAddress(e.target.value)}
/>
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder="Адреса"
  value={shortAddress}
  onChange={(e) => setShortAddress(e.target.value)}
/>
{/* <input
class=" border border-gray-500 p-2"
  type="text"
  placeholder=""
  value={latitude}
  onChange={(e) => setLatitude(e.target.value)}
/>
<input
class=" border border-gray-500 p-2"
  type="text"
  placeholder=""
  value={longitude}
  onChange={(e) => setLongitude(e.target.value)}
/> */}
        
        
        
        
        
        </div>


    <ul>
        {todos.map(({
          id,
          todo,
          // title,
          avatar, // Add the avatar field
    fio,
    license,
    post,
    description,
    schedule,


    region,
    city,
    nameObj,
    kind,
    contacts,
   
    
    areal,
    
    fullAddress,
    shortAddress,
    // latitude,
    // longitude,
  }
        ) => (
         
            <li key={id} class=" flex items-end  gap-2 mt-2 ">
              <div class="flex flex-col">

              
              {/* <h1>{todo.todo}</h1>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
              <p>{todo.avatar}</p> */}
              <p>{id}</p>
              <p>{todo}</p>

              <p>{avatar}</p>
              <p>{fio}</p>
              <p>{license}</p>
              <p>{post}</p>
              <p>{description}</p>
              <p>{schedule}</p>

             
              <p>{region}</p>
              <p>{city}</p>
              <p>{nameObj}</p>
              <p>{kind}</p>
              <p>{contacts}</p>
              
              <p>{areal}</p>
              
              <p>{fullAddress}</p>
              <p>{shortAddress}</p>
              {/* <p>{latitude}</p>
              <p>{longitude}</p> */}
             

              </div>
              <button class="flex bg-slate-400 px-2"
              onClick={()=> handleUpdate(todo)}>update</button>
              <button
                class="bg-slate-400 px-2"
                onClick={() => handleDelete(todo)}
              >
                delete
              </button>
             
            </li> 
            
            
         
        ))}
        </ul>
      </Container>
    </section>
  );
};

export default ForNotaries;
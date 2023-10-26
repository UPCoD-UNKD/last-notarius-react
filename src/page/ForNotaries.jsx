import { db } from "../firebase";
// import {uid} from "../utils/uid";
import { uid } from "uid";
import Container from "../components/common/Conteiner";
import { useEffect, useState } from "react";
// import { set, ref, onValue, remove, update } from "firebase/database";
import { set, ref, onValue, update } from "firebase/database";

const ForNotaries = () => {
  const [notaryData, setNotaryData] = useState({
    notaries: [], // Initialize an empty array to store notaries
  });

  const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  //added new input
  //   const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const [fio, setFio] = useState("");
  const [license, setLicense] = useState("");
  const [contacts, setContacts] = useState("");
  const [post, setPost] = useState("");
  const [description, setDescription] = useState("");

  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
   // Населений пункт
   // const [areal, setAreal] = useState("");
   const [kind, setKind] = useState("");
   const [shortAddress, setShortAddress] = useState("");
   const [fullAddress, setFullAddress] = useState("");
//Вид нотаріальної діяльності
  const [nameObj, setNameObj] = useState("");
  const [rating, setRating] = useState("");
  const [experience, setExperience] = useState("");
  const [languages, setLanguages] = useState("");
  const [accessibility, setAccessibility] = useState("");
 

 
//графік
  const [schedule, setSchedule] = useState("");

  const [online, setOnline] = useState("");
  const [urgent, setUrgent] = useState("");
  const [reviews, setReviews] = useState("");
  const [summons, setSummons] = useState("");
  const [price, setPrice] = useState("");

 
  

  

  
  
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
        // setTodos(todosArray);
        setNotaryData({ notaries: todosArray });
      }
    });
  }, []);

  //write
  const writeToDatabase = () => {
    // const uuid = uid();
    const id = uid();
    const newNotary = {
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

      // areal,

      fullAddress,
      shortAddress,
      // latitude,
      // longitude,
    };

    // set(ref(db, `/${id}`), {
    //   id,
    //   todo,

    // //   title, // Add the title field
    // // description, // Add the description field
    // avatar, // Add the avatar field
    // fio,
    // license,
    // post,
    // description,
    // schedule,

    // region,
    // city,
    // nameObj,
    // kind,
    // contacts,

    // areal,

    // fullAddress,
    // shortAddress,
    // // latitude,
    // // longitude,
    // });

    const updatedNotaries = [...notaryData.notaries, newNotary];
    set(ref(db), updatedNotaries);

    setNotaryData("");
    // Clear all input fields
    setTodo("");
    // setTitle("");
    // setDescription("");
    // setAvatar("");
    // setTodos("");
    setIsEdit("");
    setTempUuid("");
    

    setAvatar("");
    setFio("");
    setLicense("");
    setContacts("");
    setPost("");
    setDescription("");

    setRegion("");
    setCity("");
    setKind("");
    setShortAddress("");
    setFullAddress("");

    setNameObj("");
    setRating("");
   
    
    setSchedule("");
   
    
   
    
    // setAreal("");
    
    
  };

  //update
  // const handleUpdate = (todo) => {
  //   setIsEdit(true);
  //   // setTempUuid(todo.uuid);
  //   setTempUuid(todo.id);
  //   setTodo(todo.todo);
  // };

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
  // const handleDelete = (todo) => {
  //   // remove(ref(db, `/${todo.uuid}`));
  //   remove(ref(db, `/${todo.id}`));
  // };

  return (
    <section class="bg-white mt-[-72px] text-center text-xl font-semibold min-h-[calc(100vh-200px)] w-full py-10">
      <Container>
        <h2 class=" border__bottom pb-5">Для нотаріусів</h2>

        <div class="flex flex-col mt-5 gap-4 text-base">
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
          disabled
            class="opacity-50 border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Логотип фото"
            required
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="ФІП"
            required
            value={fio}
            onChange={(e) => setFio(e.target.value)}
          />
          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Ліцензія"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />
          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Контакти"
            required
            value={contacts}
            onChange={(e) => setContacts(e.target.value)}
          />
          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Пошта"
            required
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          {/* <input
class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
  type="text"
  placeholder="Телеграм"
  required
  value={region}
  onChange={(e) => setRegion(e.target.value)}
/> */}
          <textarea
            class="  border resize-y border-gray-400 p-2 pl-4 rounded-[20px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Опис"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Регіон"
            required
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />

          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Місто"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          {/* <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Населений пункт"
            required
            value={areal}
            onChange={(e) => setAreal(e.target.value)}
          /> */}
           <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Населений пункт"
            required
            value={kind}
            onChange={(e) => setKind(e.target.value)}
          />

          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Адреса"
            required
            value={shortAddress}
            onChange={(e) => setShortAddress(e.target.value)}
          />

          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Повна адреса"
            required
            value={fullAddress}
            onChange={(e) => setFullAddress(e.target.value)}
          />

          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Вид нотаріальної діяльності"
            required
            value={nameObj}
            onChange={(e) => setNameObj(e.target.value)}
          />



          <input
            disabled
            class="opacity-50 border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Рейтинг користувачів"
            required
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />

          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Досвід роботи"
            required
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Мови спілкування"
            required
            value={languages}
            onChange={(e) => setLanguages(e.target.value)}
          />

          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Доступність для інвалідів"
            required
            value={accessibility}
            onChange={(e) => setAccessibility(e.target.value)}
          />

          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Графік роботи"
            required
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
          />

          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Онлайн-послуги"
            required
            value={online}
            onChange={(e) => setOnline(e.target.value)}
          />
          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Термінові послуги"
            required
            value={urgent}
            onChange={(e) => setUrgent(e.target.value)}
          />

          <input
            disabled
            class="opacity-50  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Відгуки"
            required
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
          />

          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Виклик нотаріуса"
            required
            value={summons}
            onChange={(e) => setSummons(e.target.value)}
          />

          <input
            disabled
            class=" opacity-50 border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Ціновий діапазон"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          {/* <textarea
class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
  type="text"
  placeholder="Нотаріальні дії"
  required
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
          {/* <textarea
class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
  type="text"
  placeholder="Важливі оновлення"
  required
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}

          {/* <input
class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
  type="text"
  placeholder="Вдгуки клієнтів"
  required
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
          {/* <input
class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
  type="text"
  placeholder="Статистика діяльності"
  required
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
          {/* <textarea
class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
  type="text"
  placeholder="Промо-акції"
  required
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
          {/* <input
class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
  type="text"
  placeholder="Корисні ресурси"
  required
  value={city}
  onChange={(e) => setCity(e.target.value)}
/> */}
          <input
            class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
            type="text"
            placeholder="Сайт нотаріуса"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

         

          {/* <input
class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
  type="text"
  placeholder=""
  required
  value={latitude}
  onChange={(e) => setLatitude(e.target.value)}
/>
<input
class="  border border-gray-400 p-2 pl-4 rounded-full focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:shadow-xl"
  type="text"
  placeholder=""
  required
  value={longitude}
  onChange={(e) => setLongitude(e.target.value)}
/> */}
        </div>

        <div class="mt-10 flex gap-4">
          <input
            type="text"
            class="hidden border border-gray-500 p-4  "
            value={todo}
            onChange={handleTodoChange}
          />
          {isEdit ? (
            <>
              <button
                class="bg-slate-400 p-4 px-6 rounded"
                onClick={handleSubmitChange}
              >
                Submit Change{" "}
              </button>
              <button
                class="bg-slate-400 p-4 px-6 rounded"
                onClick={() => {
                  setIsEdit(false);
                  // setTodo("");
                  setTempUuid("");
                }}
              >
                X
              </button>
            </>
          ) : (
            <button
              class="bg-[#45a057] text-white hover:text-black hover:bg-[#327e41]   transition-all p-4 px-6 rounded-full w-full lg:max-w-max lg:px-20 lg:ml-auto"
              onClick={writeToDatabase}
            >
              Відправити{" "}
            </button>
          )}
        </div>

        {/* <ul>
         
          {notaryData.notaries.map(
            ({
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
              latitude,
              longitude,
            }) => (
              <li key={id} class=" flex items-end  gap-2 mt-2 ">
                <div class="flex items-start flex-col">
                  
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
                  <p>{latitude}</p>
              <p>{longitude}</p>
                </div>
                <button
                  class="flex bg-slate-400 px-2"
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
              </li>
            )
          )}
        </ul> */}
      </Container>
    </section>
  );
};

export default ForNotaries;

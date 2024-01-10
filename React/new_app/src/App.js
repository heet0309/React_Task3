// function Item({ name, isPacked }) {
//   if (isPacked) {
//     return <li className="item">{name} ✔</li>;
//   }
//   return <li className="item">{name}</li>;
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// export default function List() {
//   const ListItems = people.map((person) => <li>{person}</li>);
//   return <ul>{ListItems}</ul>;
// }

// function Reciepe({ drinkers }) {
//   return (
//     <ol>
//       <li>boil {drinkers} cups of water</li>
//       <li>add {0.5 * drinkers} spoon salt</li>
//     </ol>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Reciepe drinkers={2} />
//       <Reciepe drinkers={65} />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert("Playing!")}
//       onUploadImage={() => alert("Uploading!")}
//     />
//   );
// }

// function Toolbar(onPlayMovie, onUploadImage) {
//   return (
//     <div>
//       <button onclick={onPlayMovie}>movie</button>

//       <button onclick={onUploadImage}>image</button>
//     </div>
//   );
// }

// import { sculptureList } from "./data.js";

// export default function Gallery() {
//   let index = 0;

//   function handleClick() {
//     index = index + 1;
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>Next</button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img src={sculpture.url} alt={sculpture.alt} />
//       <p>{sculpture.description}</p>
//     </>
//   );
// }

//reduce4r function
// import React, { useReducer } from "react";

// function Counter() {
//   const initialState = { count: 0 };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return { count: state.count + 1 };
//       case "DECREMENT":
//         return { count: state.count - 1 };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;

// Step 1: Create a context
// import React, { createContext, useContext, useState } from "react";

// const MyContext = createContext();

// // Step 2: Create a provider component
// const MyProvider = ({ children }) => {
//   const [value, setValue] = useState("Default Value");

//   return (
//     <MyContext.Provider value={{ value, setValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// // Step 3: Use the context in components
// const ComponentA = () => {
//   const { value, setValue } = useContext(MyContext);

//   return (
//     <div>
//       <p>Component A: {value}</p>
//       <button onClick={() => setValue("New Value for A")}>Change Value</button>
//     </div>
//   );
// };

// const ComponentB = () => {
//   const { value } = useContext(MyContext);

//   return <p>Component B: {value}</p>;
// };

// // Step 4: Wrap components with the provider
// const App = () => {
//   return (
//     <MyProvider>
//       <div>
//         <h1>Context Example</h1>
//         <ComponentA />
//         <ComponentB />
//       </div>
//     </MyProvider>
//   );
// };

// export default App;
// import { useReducer } from "react";
// import AddTask from "./components/AddTask";
// import TaskList from "./components/TaskList.js";

// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//   function handleAddTask(text) {
//     dispatch({
//       type: "added",
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: "changed",
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: "deleted",
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Day off in Kyoto</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case "added": {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case "changed": {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case "deleted": {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: "Philosopher’s Path", done: true },
//   { id: 1, text: "Visit the temple", done: false },
//   { id: 2, text: "Drink matcha", done: false },
// ];

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

// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("olove");

//   return (
//     <>
//       <div
//         className="w-full h-screen duration-200"
//         style={{ backgroundColor: color }}
//       >
//         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//           <button
//             onClick={() => setColor("red")}
//             className="outline-none px-1 py-1 rounded-full text-white"
//             style={{ backgroundColor: "red" }}
//           >
//             RED
//           </button>
//           <button
//             onClick={() => setColor("green")}
//             className="outline-none px-1 py-1 rounded-full text-white"
//             style={{ backgroundColor: "green" }}
//           >
//             GREEN
//           </button>
//           <button
//             onClick={() => setColor("black")}
//             className="outline-none px-1 py-1 rounded-full text-white"
//             style={{ backgroundColor: "black" }}
//           >
//             GREEN
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
// import { useState } from "react";

// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: "",
//     lastName: "",
//     details: {
//       email: "",
//       city: "",
//     },
//   });

//   function handleFirstNameChange(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value,
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       details: {
//         ...person.details,
//         city: e.target.value,
//       },
//     });
//   }

//   function handleLastNameChange(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value,
//     });
//   }

//   function handleEmailChange(e) {
//     setPerson({
//       ...person,
//       details: {
//         ...person.details,
//         email: e.target.value,
//       },
//     });
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input value={person.firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name:
//         <input value={person.lastName} onChange={handleLastNameChange} />
//       </label>
//       <label>
//         Email:
//         <input value={person.details.email} onChange={handleEmailChange} />
//       </label>
//       <label>
//         city:
//         <input value={person.details.city} onChange={handleCityChange} />
//       </label>
//       <p>
//         {person.firstName} {person.lastName} {person.details.email}{" "}
//         {person.details.city}
//       </p>
//     </>
//   );
// }

// import { useState } from "react";

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {
//           setArtists([...artists, { id: nextId++, name: name }]);
//           console.log(artists);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

import { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function List() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

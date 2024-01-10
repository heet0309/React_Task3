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
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {
//           setArtists([...artists, { id: nextId++, name: name }]);
//           console.log(artists);
//         }}
//       >
//         Add
//       </button>

//       <>
//         <ul>
//           {artists.map((artist) => (
//             <li key={artist.id}>
//               {artist.name}{" "}
//               <button
//                 onClick={() => {
//                   setArtists(artists.filter((a) => a.id !== artist.id));
//                 }}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </>
//     </>
//   );
// }

// import { useRef } from "react";

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert(ref.current + "   times");
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Click me!</button>
//     </>
//   );
// }

// import { useState, useRef, useEffect } from "react";

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }, [isPlaying]);

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? "Pause" : "Play"}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }

import React, { useState } from "react";
import Login from "./login";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user, login, logout } = Login();

  const handleLogin = () => {
    login(username, password);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;

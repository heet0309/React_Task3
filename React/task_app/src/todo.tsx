import React, { useState } from "react";

interface Intern {
  id: number;
  name: string;
}

function List() {
    const [name, setName] = useState<string>("");
    const [Interns, setInterns] = useState<Intern[]>([]);

    const addIntern = () => {
        setInterns([...Interns, { id: nextId++, name: name }]);
        console.log(Interns);
    };

    function deleteIntern(id: number) {
        setInterns(Interns.filter((arg) => arg.id !== id));
    }

    return (
        <>
            <h3>TODOLIST</h3>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={addIntern}>Add</button>

            <ul>
                {Interns.map((Intern) => (
                    <li key={Intern.id}>
                        {Intern.name}{" "}
                        <button onClick={() => deleteIntern(Intern.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}


export default List;

let nextId = 0;

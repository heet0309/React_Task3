import { useEffect } from "react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

const Dataapi = () =>{
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const jsonData: Post[] = await response.json();

            localStorage.setItem("product", JSON.stringify(jsonData));
            // console.log(jsonData); // Log the string data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        fetchData(); // Call the fetchData function
        }, []);
}
export default Dataapi;
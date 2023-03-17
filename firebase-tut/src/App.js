import { useState , useEffect} from 'react';
import './App.css';
import {db} from './firebase-config';
import { collection, getDocs , addDoc} from 'firebase/firestore';

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, Setusers] = useState ([]);
  const usersCollectionRef = collection(db,'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name:newName , age: newAge})
  }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      Setusers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getUsers();
  }, []);
  
  return (<div className="App">
    <input type="name" placeholder='Name...' onChange={(event) => {setNewName(event.target.value)}} />
    <input type="number" placeholder='Age...' onChange={(event) => {setNewAge(event.target.value)}} />

    <button onClick={createUser}>Create Users</button>
    {users.map((users) => {
      return <div>
        {" "}
        <h1>Name: {users.name}</h1>
        <h1>Age: {users.age}</h1>
      </div>
    })}
  </div>);
}

export default App;

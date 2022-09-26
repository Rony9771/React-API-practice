// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
      
    </div>
  );
}

function ExternalUser (){
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (data => setUsers(data))
  },[])
  return (
    <div>
      <h2>Name : </h2>
      <p>Length {users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
      
    </div>
  )

  function User (props){
    return (
      <div style={{border: '2px solid green', margin :'10px', padding : '20px'}}>
        <h2>Name : {props.name}</h2>
        <p>Email : {props.email}</p>
      </div>
    )
  }
  
}



export default App;

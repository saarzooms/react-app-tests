
import { useState } from 'react';
import './App.css'

function App() {
  const [age, setAge] = useState(0);

  function calcAge(dob:string){
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear()
    setAge(age);
  }
  return (
  <><div>
       <input type="date" onChange={(e)=>{
        calcAge(e.target.value);
       }}/><br/><p>You are {age} years old</p>
  </div>
  </>
  );
}

export default App

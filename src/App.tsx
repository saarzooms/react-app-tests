
import './App.css'

function App() {
  

  return (
  <div>
      <input type="text" name="mydata" onChange={(e)=>{console.log(e.target.value);
      }}/> 
  </div>
  );
}

export default App

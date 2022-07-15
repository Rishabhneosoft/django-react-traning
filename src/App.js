import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [ students, setStudents] = useState([])

  useEffect(()=>{
    async function getAllStudents(){
      try{
        const students = await axios.get("http://127.0.0.1:8000/api/student/")
        console.log(students.data)
        setStudents(students.data)
      } catch (error){
        console.log(error)

      }
    }
    getAllStudents()
  }, [])
  return (
    <div className="App">
      <h1>Connect reactjs to Django</h1>
      {
        students.map((student, i)=>{
          return (
            <h2>{student.stuname} {student.email}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
// "this is main file"
import { useEffect, useState, useContext } from "react";
import { createCourse } from "../services/courseService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function CreateCourse(){
    const[title, setTitle] = useState("")
    const[duration, setDuration] = useState("")
    const[capacity, setCapacity] = useState("")
    const{user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(user.role === 'student'){
            navigate('/dashboard')
        }
    },[])

    const handleSubmit = async(e)=>{
          e.preventDefault()

          await createCourse({
            title,
            duration,
            capacity
          })
          alert("course created")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2> Create Course </h2>
                <input type="text" placeholder="enter course title..."
                onChange={(e)=>setTitle(e.target.value)} />

                <input type="number" placeholder="enter duration..."
                onChange={(e)=>setDuration(e.target.value)} />
                
                  <input type="number" placeholder="enter capacity..."
                onChange={(e)=>setCapacity(e.target.value)} />

                <button> create course</button>

            </form>
        </div>
    )
}

export default CreateCourse
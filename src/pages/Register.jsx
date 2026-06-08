import { useEffect, useState } from "react";
import { signupStudent } from "../services/studentService";
import{getCourse} from "../services/courseService";
import { Navigate, useNavigate } from "react-router-dom";

function Register(){

    const navigate = useNavigate();

    const[courses, setCourses] = useState([]);
    const[formData, setFormData]=useState({name:"",age:"",email:"",password:"",course:""});

    useEffect(()=>{
        fetchCourses();
    },[])

    const fetchCourses = async ()=>{
        try{
            const res = await getCourse();
            setCourses(res.data)

        }catch(err){
            console.log(err)
        }
    }
    const handleChange = (e)=>{
        setFormData({
            ...formData,
        [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await signupStudent(formData)
            alert("sign up succesfully")
            navigate("/")

        }catch(err){
            console.log(err.message)
        }

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" 
                placeholder="Enter your name..." onChange={handleChange} 
                />
                <input type="number" name="age" 
                placeholder="Enter your age..." onChange={handleChange} 
                />
                <input type="text" name="email" 
                placeholder="Enter your email..." onChange={handleChange} 
                />
                <input type="password" name="password" 
                placeholder="Enter your password..." onChange={handleChange} 
                />

                {/* course drop down */ }
                <select name="course" onChange={handleChange}>
                    <option value=""> select course </option>
                    { courses.map(course=>(
                        <option key={course._id} value={course._id}> 
                            {course.title} 
                        </option>
                    ))}
                </select>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default Register
import{useState, useContext} from 'react';
import {loginStudent} from "../services/studentService";
import{loginTeacher} from "../services/teacherService";
import{AuthContext} from "../context/AuthContext";
import{useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

function Login(){
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[role, setRole] = useState("")

    const {login} = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmit = async (e)=>{
        e.preventDefault();

        let res;

        if(role === 'student'){
            res = await loginStudent({email, password})
        } else if(role === 'teacher'){
            res = await loginTeacher({email,password})
        } else {
            alert("Please select a role");
            return;
        }
        login(res.data.token, role, res.data.name, role==="student"? res.data.age:0)
        navigate("/dashboard")

    }

    return(
        <form onSubmit={handleSubmit}>

            <h2> Log IN </h2>
            <input type='email' placeholder='Enter Email...' onChange={(e)=>setEmail(e.target.value)} />
            <input type='password' placeholder='Enter Password...' onChange={(e)=>setPassword(e.target.value)} />

        <select value={role} onChange={(e)=>setRole(e.target.value)}>
            <option value="" disabled> Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
        </select>
        <button> LogIn </button>
        
        <p> Don't have account 
          <Link to={"/signup"}> Sign Up </Link>
        </p>

        </form>
    )

}

export default Login;
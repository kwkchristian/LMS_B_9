import React from "react";
import { useState, useContext } from "react";
import { updateStudentProfile } from "../services/studentService";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";


function Profile(){

    const {user, update} = useContext(AuthContext);
    const navigate = useNavigate();
  
    const[formData, setFormData]=useState({
        name:user.name,
        age:user.age
    })

    const handleChange=(e)=>{
        setFormData({
            ...formData,
        [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await updateStudentProfile(formData);
            update({name:formData.name, age:formData.age})
            alert("Update succesfully");
            navigate("/dashboard")
            
        } catch(err){
            console.log(err.message)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2> User Profile </h2>

                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
             
                    <input type="number" name="age" value={formData.age} onChange={handleChange}/>
            
                <button> Update </button>

            </form>
        </div>
    );
}

export default Profile
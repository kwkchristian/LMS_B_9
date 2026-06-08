import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Dashboard (){
    const{user} = useContext(AuthContext)

    return(
        <div>
            {user?.role === 'teacher' &&(
        <div className="card">
            <h2> Teacher panel </h2>
            <ul> 
                <li>
                    <Link to={"/courses"}> View courses </Link>
                </li>
                <li>
                    <Link to={"/create-courses"}> Create courses </Link>
                </li>
                <li>
                    <Link to={"/students"}> View students </Link>
                </li>
            </ul>
        </div>
    )} 
    
    {user?.role === 'student' &&(
        <div className="card">
            <h2> Student pannel</h2>
            <ul>
                <li>
                    <Link to={"/courses"}> View courses </Link>
                </li>
                <li>
                     <Link to={"/profile"}> View profile </Link>
                </li>
            </ul>
        </div>
    )}
        </div>
    )
}

export default Dashboard
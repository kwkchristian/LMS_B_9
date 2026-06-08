import {useEffect, useState} from "react";
import { getCourse } from "../services/courseService";


function Courses(){
    const[courses, setCourses] = useState([]);

    useEffect(()=>{
        fetchCourses();
    },[])

    const fetchCourses = async ()=>{
        const res = await getCourse();
        setCourses(res.data)
    }

    return(
        <div>
            <h2> Courses </h2>
            {
                courses.map(course=>(
                    <div key={course._id} className="card">
                        <h2>{course.title} </h2>
                        <p> Teacher: {course.teacher?.name}</p>
                        <p> Duration: {course.duration} hours </p>
                        <p> Capacity: {course.capacity}</p>
                    </div>

                ))
            }
        </div>
    )

} 

export default Courses
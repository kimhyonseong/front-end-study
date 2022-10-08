import data from "../db/data.json"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function DayList() {
    const [days,setDays] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/days')
            .then(res=>res.json())
            .then(data => {
                setDays(data);
            })
        console.log("Count change");
    },[])

    return <>
    <ul className="list_day">
        {days.map(data=>(
            <li key={data.id}>
                <Link to={`/day/${data.day}`}>Day {data.day}</Link>
            </li>
        ))}
    </ul>
    </>
}
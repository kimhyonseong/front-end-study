import data from "../db/data.json"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    const days = useFetch(`http://localhost:3001/days`);

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
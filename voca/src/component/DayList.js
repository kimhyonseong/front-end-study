import data from "../db/data.json"
import {Link} from "react-router-dom";

export default function DayList() {
    console.log(data);
    return <ul className="list_day">
        {data.days.map(data=>(
            <li key={data.id}>
                <Link to={`/day/${data.day}`}>Day {data.day}</Link>
            </li>
        ))}
    </ul>
}
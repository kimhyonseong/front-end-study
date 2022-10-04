import data from "../db/data.json"
export default function DayList() {
    console.log(data);
    return <ul className="list_day">
        {data.days.map(data=>(
            <li key={data.id}>Day {data.day}</li>
        ))}
    </ul>
}
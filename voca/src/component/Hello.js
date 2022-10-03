import styles from "./Hello.module.css";
import {useState} from "react";
import UserName from "./UserName";

export default function Hello({age}) {
    //console.log(prop);
    const [name,setName] = useState("Mike");
    const msg = age > 19 ? "성입입니다." : "미성년자입니다.";
    //const [age,setAge] = useState(prop.age);

    function showName() {
        console.log("Mike");
    }
    function showText(txt) {
        console.log(txt);
    }
    function changeName(){
        setName(name === "Mike" ? "Jane" : "Mike");
    }
    return (
        <div>
            <p>{name}</p>
            <p>({age}) {msg}</p>
            <UserName name={name}/>
            <button onClick={() => {
                changeName();
            }}>change Name.</button>
        </div>
    );
}
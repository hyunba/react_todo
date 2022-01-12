import { IToDo } from "./atoms";

function ToDo({text, category}:IToDo) {
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log("I wnane go to", event.currentTarget.name);
    };
    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>}
            {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
            {category !== "DONE" && <button name="DONE" onClick={onClick}>Done</button>}
        </li>);
}

export default ToDo;
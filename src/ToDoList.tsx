import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList () {
//     const [toDo, setToDo] = useState("")
//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget : {value}, 
//         } = event;
//         setToDo(value);
//     };
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(toDo);
//     };
//     // 앞서 작성한 코드들은 reac-hook-form에서는 한 줄의 코드로 가능하게 해준다.
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }

function ToDoList(){
    // register 함수를 사용하게되면 기존에 사용했던 onChange 이벤트 핸들러가 필요없게된다.
    // watch는 form의 입력 값들의 변화를 관찰 할 수 있게 해주는 함수이다.
   const { register, watch } = useForm();
   console.log(watch());
   return(
       <div>
           <form>
               <input {...register("toDo")} placeholder="Write a to do" />
               <button>Add</button>
           </form>
       </div>
   ); 
}

export default ToDoList;
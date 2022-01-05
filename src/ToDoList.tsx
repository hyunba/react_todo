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
    // handleSubmit은 우리가 작성한 코드가 진행될 수 있게 해준다.
    // html Input 타입인 required와 minLength로도 가능하지만 자바스크립트만으로도 가능하다 { required: true, minLength: 10 }
   const { register, watch, handleSubmit } = useForm();
   const onValid = (data:any) => {
       console.log(data);
   };
   console.log(watch());
   return(
       <div>
           <form style={{ display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
               <input {...register("toDo", { required: true, minLength: 10 })} placeholder="Write a to do" /> 
               <button>Add</button>
           </form>
       </div>
   ); 
}

export default ToDoList;
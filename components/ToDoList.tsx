import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ShorthandPropertyAssignment } from "typescript";

interface IForm {
    toDo: string;
}

interface IToDo{
    text: string;
    id: number;
    category: "TO_DO"|"DOING"|"DONE";
}

const toDoState = atom<IToDo[]> ({
    key: "toDo",
    default: [],
});


function ToDoList(){
    // register 함수를 사용하게되면 기존에 사용했던 onChange 이벤트 핸들러가 필요없게된다.
    // watch는 form의 입력 값들의 변화를 관찰 할 수 있게 해주는 함수이다.
    // handleSubmit은 우리가 작성한 코드가 진행될 수 있게 해준다.
    // html Input 타입인 required와 minLength로도 가능하지만 자바스크립트만으로도 가능하다 { required: true, minLength: 10 }
    // formState를 통해 앞에 넣었던 패턴들에 대해 오류가 있을경우 message를 남겨줄 수 있다.
    // shouldFocus는 에러가 발생한 곳으로 커서가 이동하게된다.
    // ?를 붙이는 이유는 물음표(?) 앞에 있는 내용이 undefined면 뒤에 내용을 찾지 않게하기위해 쓴다.
    // setValue는 사용자가 입력값을 주면 작성했던 내용들을 없애준다
    const [toDos, setToDos] = useRecoilState(toDoState);
   const { register, handleSubmit, setValue } = useForm<IForm>();
   const handleValid = ({toDo}:IForm) => {
        setToDos(oldToDos => [{text: toDo, id: Date.now(), category: "TO_DO"}, ...oldToDos])
        setValue("toDo", "");
    
   };
   return(
       <div>
           <h1>To Dos</h1>
           <hr />
           <form onSubmit={handleSubmit(handleValid)}>
               <input {...register("toDo", {required:"Please write a To Do", })} minLength={10} placeholder="Write a to do" /> 
               <button>Add</button>
           </form>
           <ul>
               {toDos.map(toDo => <li key={toDo.id}>{toDo.text}</li>)}
           </ul>
       </div>
   ); 
}

export default ToDoList;
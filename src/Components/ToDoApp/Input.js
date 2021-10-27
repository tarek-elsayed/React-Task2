import { useState, useEffect , useRef} from 'react';
import Desplay from './Desplay';

export default function Input() {

    const [toDo,setTodo] = useState('');
    const props = [];

    function submitTodo(e){
        e.preventDefault();
        props.splice(1,0,toDo);
    }
 
  
    return (
     <form onSubmit={(e)=>submitTodo(e)} className="mt-5 ">
         <input type="text" value={toDo} onChange={(e)=>{setTodo(e.target.value)}}/>
         <button type="submit" >click</button>
         <Desplay todo={props}/>
     </form>
    )
}

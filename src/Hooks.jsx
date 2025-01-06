// import React ,{useState,useRef} from 'react'
// const Hooks = () => {
//     let [Count,setCount]=useState(0);
//     let countref=useRef(0);
//     let increment=()=>{
//         setCount(Count+1);
//         countref.current++;
//         console.log("State: ",Count);
//         console.log("Ref:",countref.current)
//     }
//     return (
//     <div>
//        <h1>Count:{Count}</h1>
//        <button onClick={increment}>++++</button>
      
//     </div>
//   )
// }

// export default Hooks
// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";
// function Useref() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);
//   useEffect(() => {
//     count.current = count.current + 1;
//     console.log("Render Count: ", count.current);
//   });
//   return (
//     <> <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)} />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );}export default Useref
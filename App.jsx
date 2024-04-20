import React, { useState } from "react";

const App=()=>{

let time=new Date().toLocaleTimeString();

const state= useState(time);

const [currtime, settime]=useState(time);

const Update=()=>{
    time=new Date().toLocaleTimeString();
    settime(time);
};
 setInterval(Update, 1000);

return (
    <>
<h1>{time}</h1>

{/* <Button onClick={Update}>Click Me</Button> */}


    </>
);
};
export default App;
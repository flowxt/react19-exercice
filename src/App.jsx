import React, { useState } from 'react';
import Form from './Components/Form';


const COLORS = {
  "red": "bg-red-500",
  "blue": "bg-blue-500",
}

const SIZE = {
  sm: 'w-32',
  lg: 'w-44',
}

const HEIGHT = {
  sm: 'h-16',
  lg: 'h-24',
}

function Lego({ color = "red", size = "sm", height = "sm", children, onClick }) {

const [value, setValue] = useState(0);

  return <div className= {`flex items-center justify-center ${HEIGHT[height]} ${COLORS[color]} ${SIZE[size]}`}
  onClick={() => {
    onClick?.("mon super parametre");
    setValue(value +1);
   
  }}
  >
    {value}
    <br />
  {children}

  </div>;
}


const App = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
   <Lego color="blue" size="lg" onClick={(e)=>{console.log("Patate Clicked !!", e)}}>Patate</Lego>
   <Lego color="red" height="lg">
        <button onClick={(e) => { console.log("click") }}>Click me</button>
      </Lego>
   <Lego />
   <Lego color="blue"/>
   <Form />
    </div>
  );
};

export default App;
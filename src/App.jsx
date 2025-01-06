import React, { useState } from 'react';


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
    </div>
    
  );
};

export default App;


// import React from 'react';
// import RollingGallery from './Components/RollingGallery';
// import car1 from './assets/car1.jpg';
// import car2 from './assets/car2.png';
// import car3 from './assets/car3.jpg';
// import car4 from './assets/car4.jpg';
// import car5 from './assets/car5.jpg';
// import car6 from './assets/car1.jpg';
// import car7 from './assets/car2.png';
// import car8 from './assets/car3.jpg';
// import car9 from './assets/car4.jpg';
// import car10 from './assets/car5.jpg';

// const App = () => {
//   const images = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

//   return (
//     <div className='bg-black h-screen w-screen flex items-center justify-center'>
//       <RollingGallery autoplay={true} pauseOnHover={true} images={images} />
//     </div>
//   );
// };

// export default App;
import React, {useState, useEffect} from 'react';

const Example2 = () => {
  const [color, setColor] = useState('black');

  useEffect (() => {
    const changeColor = () => {
      (color === 'black') 
      ? setColor('red')
      : setColor('black');
    };
    
    document.addEventListener('click', changeColor);

    return () => {
      document.removeEventListener('click', changeColor);
    }
  
  }, [color]);

  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
}

export default Example2;
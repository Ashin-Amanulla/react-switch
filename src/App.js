import React, { useState } from 'react';
import styled from 'styled-components';

//components
import Lamp from './Lamp';
import LightSwitch from './LightSwitch';


const Room = styled.div`
position: relative;
width: 500px;
height: 500px;
border: 10px solid black;
margin: 0 auto;
`;


function App() {

  //* useState() Hook is the initial state. It returns a pair of values: the current state and a function that updates it.  
  const [isLampOneOn, setLampOneOn] = useState(true); //LampOne
  const [isLampTwoOn, setLampTwoOn] = useState(false); //LampTwo

  //* below functions toggle the useState(boolean) value
  const switchLampOne = () => setLampOneOn((prev => !prev)); //switch of lamp one
  const switchLampTwo = () => setLampTwoOn((prev => !prev)); //switch of lamp two


  return (
    <Room>

      <Lamp lampOn={isLampOneOn} position='left' />  {/* lamp1  */}
      <Lamp lampOn={isLampTwoOn} position='right' />  {/* lamp2  */}

      {/* switchOne  */}
      <LightSwitch    
        name='one'
        callback={switchLampOne}
        switchOn={isLampOneOn}
        position='left'
      />

      {/* switchTwo  */}
      <LightSwitch
        name='two'
        callback={switchLampTwo}
        switchOn={isLampTwoOn}
        position='right'
      />
    </Room>
  );
}

export default App;

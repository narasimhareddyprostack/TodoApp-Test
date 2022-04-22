import React,{useState} from 'react';
import Form from './Form';
import Tracker from './Tracker';

const App = ()=>{
  const [track,settrack] = useState([]);
  return <>
          <Form track={track} settrack={settrack}/>
          <Tracker track={track}/>
         </>;
}

export default App;

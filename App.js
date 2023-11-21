import './App.css';
import { useRef, useLayoutEffect } from 'react';

function App( ) {
  const myRef = useRef(null)
  useLayoutEffect(()=>{
    myRef.current.focus();
  }, [])
  
  return (
    <div className='App'>
      <input ref={ myRef }/> 
     

    </div>
  );
}

export default App;

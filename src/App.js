import {useState} from 'react'
import './App.css';
import Posts from './components/Posts/Posts';
import UsingFetch from './components/UsingFetch'


function App() {
    const [show, setShow]=useState(false);
    return (   
        <div className='container mx-auto'>            
            <Posts />            
            <button className="bg-blue-600 px-2 py-1 text-white" onClick={()=>setShow(!show)}>SHOW API</button>
            {show && <UsingFetch/>}
        </div>
    );
}

export default App;
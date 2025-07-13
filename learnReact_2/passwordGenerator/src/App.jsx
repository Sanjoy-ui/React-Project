import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

/* → Want to show/update value? → useState  
→ Want to run something after UI updates? → useEffect  
→ Want to access a DOM element? → useRef  
→ Want to avoid function recreation? → useCallback  
→ Want to avoid recalculating data? → useMemo  
→ Want to share state globally? → useContext  
→ Want structured state logic? → useReducer
*/

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordRef = useRef(null);

  const passwordCopyToClip = () =>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let passworditems = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) passworditems += "0123456789";
    if (characterAllowed) passworditems += "!@#$%^&*()_+";
      for (let i = 0; i < length; i++) {
         let random = Math.floor(Math.random()* passworditems.length );
         pass += passworditems[random]
        
      }
      
      setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

      useEffect(()=>{
        passwordGenerator()
      },[length , characterAllowed , numberAllowed ])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button onClick={passwordCopyToClip} 
          
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input onChange={(e)=> setLength(e.target.value)}  type="range" min="6" max="100" className="cursor-pointer" />
            <label>Length : {length} </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            onChange={()=> setNumberAllowed( prev => !prev ) 
              
            }
            type="checkbox" 
            checked = {numberAllowed} />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            onChange={()=> setCharacterAllowed(prev => !prev)}
            checked ={characterAllowed}
            type="checkbox" />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

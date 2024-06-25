// import { useState } from 'react'
// import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
// import CoreConcept from './components/CoreConcept.jsx';
import Example from './components/Example.jsx';
import Core from './components/Core.jsx';
// import TabButton, { AnotherBtn } from './components/TabButton.jsx';
// import { EXAMPLES } from './data.js';


function App() {
// const [topic, setTopic] = useState()


//   function handleClick(selectButton){
//     //selectButton = components, jsx, props, state, anotherbtn
//   setTopic(selectButton);
//   }


  
  return (
  
   
    <div>
       <Header/>
      <main>
       <Core/>
       <Example/>
      </main>
    </div>
 
  );
}

export default App;

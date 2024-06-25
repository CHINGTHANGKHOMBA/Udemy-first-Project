import { useState } from "react";
import { EXAMPLES } from "../data.js"
import TabButton from "./TabButton.jsx"
import Taps from "./Taps.jsx";




const Example = () => {
    const [topic, setTopic] = useState()

    function handleClick(selectButton){
        //selectButton = components, jsx, props, state, anotherbtn
      setTopic(selectButton);
      }

       let tapContent =  <p>Please select a topic</p>
       if (topic){
        tapContent = (
            <div id="tab-content"> <h3>{EXAMPLES[topic].title}</h3>
     <p>{EXAMPLES[topic].description}</p>
     <pre>
       <code>
       {EXAMPLES[topic].code}
       </code>
     </pre>  </div>
        )
       }
  return (
    <>
    
<section id='examples'>
  <h1>EXAMPLES</h1>
<Taps 
button={ <>
    <TabButton isSelected={topic==='components'} onClick={()=>{handleClick('components')}}>Components</TabButton>
    <TabButton isSelected={topic==='jsx'} onClick={()=>{handleClick('jsx')}}>JSX</TabButton>
    <TabButton isSelected={topic==='props'} onClick={()=>{handleClick('props')}}>Props</TabButton>
    <TabButton isSelected={topic==='state'} onClick={()=>{handleClick('state')}}>State</TabButton>    
            </>

}>
  {tapContent}
</Taps>
<menu>


</menu>


  {/* {!topic ? <p>Please select a topic</p> : <div id="tab-content"> <h3>{EXAMPLES[topic].title}</h3>
     <p>{EXAMPLES[topic].description}</p>
     <pre>
       <code>
       {EXAMPLES[topic].code}
       </code>
     </pre>  </div> } */}

</section>

    </>
  
  )
}

export default Example



 


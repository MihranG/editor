import React, {useCallback, useState} from 'react';
import './App.css';
import {EditorComponent} from './EditorComponent/EditorComponent.js';
import {SynonymsComponent} from './SynonymsComponent.js';
import {ToolbarComponent} from './control-panel/ToolbarComponent.js';
import {importedManipulations} from './service/constants';
import {callToGetSynonyms} from './service/apiService'

function App() {
  const [manipulations, setManipulations] = useState(importedManipulations)
  const [selectedText, setSelectedText] = useState('');
  const [synonyms, setSynonyms]=useState({isLoading: false, data:[]});

  const handleSelection = word=>{
      console.log('handle', word)
    setSynonyms({isLoading:true, data: []});
    setSelectedText(word);
    callToGetSynonyms(word).then(res=>{
      console.log(555, res)
      setSynonyms({isLoading: false, data: res})
    })
  };

  const handleClick= useCallback((manipulationType)=>{
      document.execCommand(manipulationType);
      const newManipulationsArray = [...manipulations];
      const index = newManipulationsArray.findIndex(item=>item.name === manipulationType);
      newManipulationsArray[index] = {...newManipulationsArray[index], isActive: true};
      setManipulations(newManipulationsArray)
  }, [manipulations]); 

  return (
    <div className="App">
    
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ToolbarComponent buttons={manipulations} onButtonClick={handleClick}  />
        <EditorComponent synonyms={synonyms} handleSelectWord={handleSelection} selectedText={selectedText}/>
      <SynonymsComponent synonyms={synonyms}  selectedText={selectedText}/>
                </main>
     
    </div>
  );
}

export default App;
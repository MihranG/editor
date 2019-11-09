import React, {useCallback, useState} from 'react';
import './App.css';
import {EditorComponent} from './EditorComponent/EditorComponent.js';
import {ToolbarComponent} from './control-panel/ToolbarComponent.js';
import {importedManipulations} from './service/constants';
import {callToGetSynonyms} from './service/apiService'

function App() {
  const [selectedText, setSelectedText] = useState('');
  const [synonyms, setSynonyms]=useState({isLoading: false, data:[]});

  const handleSelection = word=>{
    setSynonyms({isLoading:true, data: []});
    setSelectedText(word);
    callToGetSynonyms(word).then(res=>{
      setSynonyms({isLoading: false, data: res})
    })
  };

  const handleToolbarButtonClick = useCallback((manipulationType)=>{
      document.execCommand(manipulationType);
  }, []); 

  return (
    <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ToolbarComponent buttons={importedManipulations} onButtonClick={handleToolbarButtonClick}  />
                    <EditorComponent synonyms={synonyms} handleSelectWord={handleSelection} selectedText={selectedText}/>
                </main>
    </div>
  );
}

export default App;
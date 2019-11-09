import React from 'react';
import {SynonymsComponent} from '../SynonymsComponent/SynonymsComponent'
import './EditorComponent.css';

export class EditorComponent extends React.Component {
    onHandleSelect = (e)=>{        
        const selectedText = window.getSelection ? 
            window.getSelection().toString() :
            document.selection ? 
                document.selection.createRange().text:
                '';
        this.props.handleSelectWord(selectedText);   
    }


render(){
    const {synonyms, selectedText} = this.props;

    return(
        <div id="editor-zone">
            <div id="editor" contentEditable={true} onSelect={this.onHandleSelect}></div>
            <SynonymsComponent synonyms={synonyms}  selectedText={selectedText}/>
        </div>
        )
    }

}
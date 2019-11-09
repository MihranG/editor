import React from 'react';
import './FileZone.css';


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

        return(
            <div id="file-zone">
            <div id="file">
                <div  className='editorContent' contentEditable={true} onSelect={this.onHandleSelect} >
                </div>
            </div>
            </div>
            
        )

    }

}
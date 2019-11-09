import React from 'react';
import './SynonymsComponent.css';

export class SynonymsComponent extends React.Component {

    onWordChangeHandler = (e)=>{
        document.execCommand('insertText', false, e.target.value+' ');
    }

    render() {
        const {synonyms,  selectedText} = this.props;
        let synonymsContent;
        if(!selectedText){
            synonymsContent = (<div style={{color: 'green'}} className='synonym_message'>No selected words</div>)
        }else if(synonyms.isLoading){
            synonymsContent = (<div style={{color: 'red'}} className='synonym_message'>...loading...</div>)
        }else if(!synonyms.data || !synonyms.data.length>0){
            synonymsContent = (<div style={{color: 'blue'}} className='synonym_message'>No suggested synonyms</div>)
        }else{
            synonymsContent = synonyms.data.map((synonym, i)=>(
                <button key={synonym.word+i} value={synonym.word}
                      onClick={this.onWordChangeHandler}
                      >
                    {synonym.word}
            </button>  ))
        }
        return(
            <div className='synonymwrapper'  >
                {synonymsContent}
            </div> 
        )
    }
}

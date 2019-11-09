import React from 'react';

export class SynonymsComponent extends React.Component {

    onWordChangeHandler = (e)=>{
        console.log('eeee', e.target, e.currentTarget.text,)
        document.execCommand('insertText', false, e.target.value);
    }
    render() {
        const {synonyms,  selectedText} = this.props;
        let synonymsContent;
        if(!selectedText){
            synonymsContent = (<div style={{color: 'green'}}>No selected words</div>)
        }else if(synonyms.isLoading){
            synonymsContent = (<div style={{color: 'red'}}>...loading...</div>)
        }else if(!synonyms.data.length>0){
            synonymsContent = (<div style={{color: 'blue'}}>No suggested synonyms</div>)
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
                {/* {synonyms.isLoading ? 
                <div style={{color: 'red'}}>...loading...</div>
                : synonyms.data.map((synonym, i)=>(
                  <button key={synonym.word+i} value={synonym.word}
                        onClick={this.onWordChangeHandler}
                        >
                      {synonym.word}
                  </button>  
                ))} */}
            </div>
            
        )

    }
}

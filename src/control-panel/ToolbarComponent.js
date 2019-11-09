import React, {useState} from 'react';
import './ControlPanel.css';


function useForceUpdate(){
    const [useLessValue, setUseLessValue] = useState(true);
    return () => setUseLessValue(!useLessValue); 
}



export function ToolbarComponent(props) {
    
    const {buttons,onButtonClick } = props;

    const forceUpdate = useForceUpdate();
    const onClick = (name)=>{
        onButtonClick(name);
        forceUpdate();

    }
        return(
            <div id="control-panel">
                <div id="format-actions">
                {buttons.map(button=>{
                    console.log(button, document.queryCommandState(button.name))
                    return(
                    <button 
                        className={document.queryCommandState(button.name) ? 'format-action activeButton' : 'format-action'}
                        onClick={()=>onClick(button.name)}
                        type="button"
                    >
                        {button.content}
                    </button>
                )})}
            </div>
            </div>
        )

    

}
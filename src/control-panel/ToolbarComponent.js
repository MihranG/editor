import React from 'react';
import {useForceUpdate} from '../service/ForceUpdate'
import './ControlPanel.css';




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
                {buttons.map((button, index)=>{
                    console.log(button, document.queryCommandState(button.name))
                    return(
                    <button
                        key={`${button.content}_${index}`}
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
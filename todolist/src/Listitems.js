import React from 'react';
import './Listitems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return (
                <div className="list" key={item.key}>
                    <p>
                        <input type="text" 
                            id={item.key} 
                            value={item.text}
                            onChange = { 
                                (e) =>{ 
                                    props.setUpdate(e.target.value, item.key)
                                }
                            }
                        />
                        <span>
                            <FontAwesomeIcon className="faicons" 
                                icon={faTrash}
                                onClick={ () => props.deleteItems(item.key)}/>
                        </span>
                    </p>
                    
                </div>
            )
        })
    return(
        <div>{listItems}</div>
    )
}
export default ListItems;
import { useContext } from 'react';
import './Recent.css';
import { Context } from '../../context/context';
import {NavLink} from 'react-router-dom';


export const Recent = ()=>{
    const {prev}=useContext(Context);
    return (
        <>  
        <div className="recent-head-container">
            <div className="recent-head">
                <h1>Recent</h1>
                <h6>This is the collection of searches which you done recently</h6>
            </div>
            <div className="recent-container">
                {prev.map((item,index)=>{
                    return(
                        <NavLink to="/">
                            <div className="recent-entry">
                                <h1>*</h1>
                                <p>{item.input}</p>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
            <NavLink to="/" className="error-button">
                Return Home
            </NavLink>
        </div>
        </>
    )
}
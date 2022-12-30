import React from "react";
// import { useState,useEffect } from "react";
// import "./card.css"
        
        
        
        const Card = (props) => {
            return (
                <>
                
                <div key={props.key}>
                    
                        
                        <table>
                            <tbody><tr><td>
                                <td>{props.post.ppd_id}</td>
                                <td>image</td>
                                <td>{props.post.property}</td>
                                <td>{props.post.contact}</td>
                                <td>{props.post.area}</td>
                                <td>views</td>
                                <td>unsold</td>
                                <td>days left</td>
                                <td>action</td>
                            </td></tr></tbody>
                                </table>
                          
                    
                    
                    
                    
                    
                </div>
                </>
            )
        }
export default Card;



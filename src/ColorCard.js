import React from 'react';
export const ColorCard =(props)=>{
      return(
        <img onClick={props.getSRC} className = "icons" src={props.imageUrl} alt = "image2"></img>
    )
}
import React from 'react';

const planets = ({name,font})=>{
  var style = {
    'font-size': font
  }
  return(
    <div style={style}>{name}</div>
  )
}

export default planets;

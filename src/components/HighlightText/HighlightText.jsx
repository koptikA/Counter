import React from "react";


export function HighlightText (props)  {
  const newProps = { style: { color: 'red' } };
  return React.cloneElement(props.children, newProps);
}

  
  
import React from 'react';


export const BlockStore = (props) => {
  return (
    <div  key={props.id} 
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '400px',
        height: '240px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transition: 'background-color 0.3s',
        cursor: 'pointer',
        backgroundImage: `url(${props.type})`,
        margin: "0", // Ensure no extra spacing
      }}
    >
    </div>
  );
};

  

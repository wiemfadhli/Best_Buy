import React from 'react';

export const Store =() =>
{

    const BlockStore=  function  Blockstore(props){
        return (
            <div   style={{
                backgroundColor: "rgb(227, 217, 217)",
                    width: "180px",
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", 
                    justifyContent: "center", 
                    borderRadius: "8px",
                    padding: "10px",
                    textAlign: "center",
            }}> 
 <h3>{ props.type} </h3>
<img src="/1.jpg"  style={{
    width:"150px",
    height: "100px",

   }}/>
       

   
             </div>
        );


    }
return (
    <>
   <BlockStore type={30}> 
   </BlockStore>
  
   </>
);
}
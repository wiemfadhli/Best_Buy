import { BlockStore } from "./Store/Store";
import { FaHome ,FaUserPlus } from "react-icons/fa";
export const Index = () => {
    const Menu = () => {
      return (
  <>
  <div style={{ width: "100%",  height: "8%",   backgroundColor: "white", display: "flex", alignItems: "center",  justifyContent: "space-between",}}>
      {/* Home Icon on the Left */}
      <div style={{ paddingLeft: "0px", display: "flex", alignItems: "center",  gap: "8px", }}  >
        <FaHome size={24} style={{ color: "#808080" }} />
      </div>
      {/* Sign In Section on the Right */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingRight: "20px", }} >
        <FaUserPlus size={24} style={{ color: "#808080" }} />
        <span style={{ color: "#808080" }}>Sign In</span>
      </div>
  </div>
  </>
      );
    };
  
    const Contain = () => {
      return (
        <div style={{ width: "100%", height: "90%" }}>
          {/* First Row */}    
           
          <div style={{ width: "100%",  height: "80%",  display: "flex", justifyContent: "center", alignItems: "center",  overflow: "hidden", }} >
           
              <img src="/2.jpg"  alt="Example" style={{   width: "100%",    height: "100%",    objectFit: "cover",    display: "block",   }}/>
          </div>
          {/* Second Row */}
          <div style={{ width: "100%",  height: "50%",  backgroundColor: "white",  display: "flex",  flexDirection: "row",  justifyContent: "space-around",  alignItems: "center", padding: "0", gap: "0" 
}}>

      <BlockStore type="/1.jpg"></BlockStore>
      <BlockStore type="/3.jpg"></BlockStore>
      <BlockStore type="/4.jpg"></BlockStore>
          </div>

          <div style={{  height: "30%", backgroundColor:"black", }} > </div>
        </div>
      );
    };
    
    
  
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw" }}>
        <Menu />
        <Contain />
      </div>
    );
  };
  

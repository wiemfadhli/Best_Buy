import React, { useState } from 'react';


export const Registration = () => 
{

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        motpass1: '',
        motpass2: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data
      alert(" ok message sind" );
        // Reset form data after submit (optional)
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          motpass1:'',
          motpass2:'',
        });
      };
      return (
        <div className='center-div'>
     

      <form onSubmit={handleSubmit} className='form'>
          <div>
          <b>Register</b>
          <br></br> <br></br>
            <input className="input"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
      
              required
           
            />
           
          </div>
    
          <div>
           
            <input
            className="input"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Enter your Last Name" 
      
            />
          </div>
    
          <div>
           
            <input
            className="input"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
                placeholder="Enter your phoneNumber"
      
              required
            />
    
          </div>
    
          
    
          <div>
           
            <input
            className="input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
               placeholder="Enter your email address"
            />
          </div>
          <div> 
            <input className="input"
              type="string"
              id="motpass1"
              name="motpass1"
              value={formData.motpass1}
              onChange={handleChange}
                 placeholder="Enter your moytpass"
              required
            />
          </div>
          <div>
            
            <input className="input"
              type="string"
              id="motpass2"
              name="motpass2"
              value={formData.motpass2}
              onChange={handleChange}
                placeholder="Enter your moytpass"
              required
            />
          </div>
        
          <button  className="button" type="submit">Create Acouunt</button> &nbsp; &nbsp;&nbsp;
          <button type="reset" className='reset' onClick={
            ()=>{
              setFormData({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                motpass1:'',
                motpass2:'',
              });
    
            }
          }> Annule</button>
         
        </form>
       
       </div >
      );
}
export const  Sigin_in =()=>
{
  const [siginForm, setSiginForm] = useState({
    username: '',
    motpass: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
  alert(" ok message sind" );
    // Reset form data after submit (optional)
    setSiginForm({
      username: '',
      motpass: '',
      
    });
  };
  return (
    <>
      <div className='center-div'>
     <form onSubmit={handleSubmit} className='form'>
          <div>
          <b>Register</b>
          <br></br> <br></br>
            <input className="input"
              type="text"
              id="username"
              name="username"
              value={siginForm.username}
              onChange={handleChange}
              placeholder="Enter your User name"
      
              required
           
            />
           
          </div>
    
          <div>
           
            <input
            className="input"
              type="text"
              id="motpass"
              name="password"
              value={siginForm.motpass}
              onChange={handleChange}
              required
              placeholder="Enter your Password" 
      
            />
          </div>
          <b><a href="#">Forgot Password</a></b>

          <br></br> <br></br>
        
          <button  className="button" type="submit">Create Acouunt</button> 
         
        </form>
        </div>
       
    </>
  );

}






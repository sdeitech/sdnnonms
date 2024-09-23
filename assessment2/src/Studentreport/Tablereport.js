import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Tablereport() {
  const [data, setData] = useState([]);  
  const [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    maths:'',
    english:''
  });
  const [show,setShow]=useState(false);

  const getStudent = async () => {
    try {
      const response = await axios.get("http://localhost:4768/student");
      setData(response.data);
    } catch (error) {
      console.log("error");
    }
  };

  const handleChange=(e)=>
  {
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  
  const handleSubmit=async ()=>
  {
    if(show)
    {
    }
    else{
        postStudentdetails();
    }
  }

  const postStudentdetails=async ()=>
  {
    try {
        const response=await axios.post('http://localhost:4768/student',formData);
        setData(prevData=>[...prevData,response.data]);
        
    } catch (error) {
        console.log("errors");
    }
  }

  const resetForm=()=>
  {
     setFormData({
        firstName:"",
        lastName:"",
        email:'',
        maths:'',
        english:""
    })
  }

  
  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div className="container">
      <form className="form-container">
        <div>
          <label>
            First Name:
            <input 
                type="text" 
                name="firstName" 
                value={formData.firstName}
                onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Last Name:
            <input 
                type="text" 
                name="lastName" 
                value={formData.lastName}
                onChange={handleChange}
                
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}         
            />
          </label>
        </div>

        <div>
          <label>
            Math Marks:
            <input 
                type="number" 
                name="maths"
                value={formData.maths} 
                onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            English Marks:
            <input 
                type="Number" 
                name="english" 
                value={formData.english}
                onChange={handleChange} 
            />
          </label>
        </div>
        <div>
            <button type='submit' onClick={handleSubmit}>SUBMIT</button>
            <button onClick={resetForm}>RESET</button>
        </div>
      </form>

      <table className="table table-success table-striped-columns">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return (
              <tr key={value._id}>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.email}</td>
                <td>
                  <button variant="success">View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

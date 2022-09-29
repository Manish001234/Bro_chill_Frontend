import React, { useState } from 'react'
import axios from "axios";
import "./styles/Addrecipe.css"

const Addreciepe = () => {
    const [data, setData] = useState({
        id:"",
        name: "",
        img: "",
      });

      const handleSubmit = (e) => {
        axios.post("https://brochhill12.herokuapp.com/food", data)
        .then(() => {
          setData({
            id:"",
            name: "",
            img: "",
        
          });
        });
        alert("You have Successfully added Food Recipe")
      };

      const handleChange = (e)=>{
        const {id, value} = e.target;
        setData({
            ...data,
            [id]:value
        })
      }
    
    
  return (
    <div>
      <div className="add">
      <div>
        <h1>ADD YOUR OWN RECIPE</h1>
        <input 
          type="text" 
          id="name"
          onChange={handleChange}
          value={data.name}
          placeholder="Enter Name of the recipe.." 
        />
        <br />
        <input 
          type="text" 
          id="img"
          onChange={handleChange}
          value={data.img}
          placeholder="Enter Image URL" 
        />
        <br />
       
        <button onClick={()=>{
            handleSubmit(data)
        }}>Submit</button>
        <br />
        <br />
      </div>
    </div>
    </div>
  )
}

export default Addreciepe
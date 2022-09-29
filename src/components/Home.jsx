import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./styles/Home.css"
import { useNavigate } from "react-router";

const Home = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get("https://brochhill12.herokuapp.com/food")
          .then((res) => {
            setData(res.data);
          })
          .then((e) => {
            handleDelete(e);
          });
      }, [data]);

      const handleDelete = (id) => {
        fetch(`https://brochhill12.herokuapp.com/food/${id}`, {
          method: "DELETE",
        }).then((result) => {
          result.json();
        });
      };
   
      const handleSingleFood = (event) => {
        localStorage.setItem("singleFood", JSON.stringify(event));
        navigate("/singleFood");
      };
    
    
  return (
    <div>
        <div className="home">
      <div className="search-main1">
      <form className="d-flex" role="search">
      <input className="form-control me-0" type="search" placeholder="Search" aria-label="Search"    onChange={(e) => {
            setSearch(e.target.value);
          }}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
      <div className="content">
        {data
          ? data
              .filter((e) => e.name.toLowerCase().includes(search))
              .map((el) => {
                return (
                  <div
                    className="box"
                  >
                    <div>
                      <img 
                        src={el.img} 
                        alt="" 
                        onClick={() => {
                            handleSingleFood(el);
                        }}
                    />
                    </div>
                    <div onClick={() => {
                      handleSingleFood(el);
                    }}>{el.name}</div>
                    <div onClick={() => {
                      handleSingleFood(el);
                    }}>{el.ingredients}</div>
                    <div>
                   
                      <button onClick={() => handleDelete(el._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
          : [...Array(8)].map((data) => {
              return (
                <div className="box">
            
                </div>
              );
            })}
      </div>
    </div>
    </div>
  )
}

export default Home
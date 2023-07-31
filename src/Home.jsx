import React from "react";
import { useState } from "react";
import date from "./date";
// import './input.css'
// import Card from "./Card";
import Itemcart from "./Itemcart";
function Home() {
  const [quary,setQuary]=useState('')
  // console.log(date.title)
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <div className=""> <input style={{    width: "400px",
        border: "none",
        borderRadius : '10px',

      backgroundColor : " rgba(0, 0, 0 ,0.2)",
        padding:' 20px 20px',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        textAlign: 'center',
        margin: 'auto',
        marginBottom: '25px'}} className="input" type='text' palaceholder='search ...' onChange={(e => setQuary(e.target.value) )} /></div>
      <section className="py-4  container">
        <div className="row justify-content-center">
          {date.porductDate.filter(user => user.title.toLowerCase().includes(quary)).map((item, index) => {
            return (
              <>
                <Itemcart 
                key={date.id}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  item={item}
                  // key={index}
                />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;

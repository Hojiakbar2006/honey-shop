import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

export function ShowProduct({data}) {
  const navigate = useNavigate()
  return (
    <div className="ShowProduct" >
      {data.map((item) => {
        return (
          <div key={item.id} onClick={() => navigate(`/view/${item.id}`)}>
            <figure>
              <img src={item.img[0]} alt="" />
            </figure>
            <h3>{item.name}</h3>
            <p>{item.price} 000 sum</p>
          </div>
        );
      })}
    </div>
  );
}

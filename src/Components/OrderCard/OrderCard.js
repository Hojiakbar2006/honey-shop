import React from "react";
import "./OrderCard.css";

export function OrderCard({ data }) {
  return (
    <div className="orderCard">
      <h1>Sizning buyurtmangiz</h1>
      <div className="orderMenu">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <figure>
                <img src={item.img} alt="order" />
              </figure>
              <div>
                <h4>{item.name}</h4>
                <h4>{item.price}</h4>
                <h4>
                  Status: {item.status ? "Tasdiqlangan" : "Tasdiqlanmagan"}
                </h4>
              </div>
              <div>
                <h4>{item.date}</h4>
                <h4>qachondir yetkaziladi</h4>
                <button className="cancel">bekor qilish</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

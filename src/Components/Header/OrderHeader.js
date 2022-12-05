import React from "react";
import search from "../../Assets/Icons/Search_icon.svg";

export function OrderHeader() {
  return (
    <div className="orderTitle">
      <h2>Buyurtmangizni ko'rish uchun Telefon rqamingizni kiriting</h2>
      <label>
        <input type="text" placeholder="Telefon raqamingizni kiriting" />
        <img src={search} alt="" />
      </label>
    </div>
  );
}

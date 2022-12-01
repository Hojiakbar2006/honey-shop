import React from "react";
import "./Style.css";
import close from "../../Assets/Icons/close_ring.svg";
import axios from "axios";

export function ModalForm({ open, setOpen, product, img }) {
  return (
    <div className={open ? "open modalBody" : "modalBody"}>
      <form
        className="sendOrder"
        onSubmit={(e) => {
          e.preventDefault();

          var data = JSON.stringify({
            customer: e.target.name.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            name: product.name,
            price: product.price,
            territory: product.territory,
            weight: product.weight,
            about: product.about,
            img: img,
          });

          var config = {
            url: "https://honey.pandashop.uz/order/add",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            data,
          };

          axios(config)
            .then((response) => {
              console.log(response.data);
              setOpen(false)
            })
            .catch((error) => {});
        }}
      >
        <h1>
          <span>Tog’ asali 950g </span>
          <span>120 000 so'm</span>
        </h1>

        <input name="name" type="text" placeholder="Isim Familyangiz" />
        <input name="phone" type="text" placeholder="Telefon Rqamingiz" />
        <input name="address" type="text" placeholder="Sizning manzilingiz" />
        <input className="submit" type="submit" value="Buyurtma Berish" />

        <button
          type="button"
          className="btn-close"
          onClick={() => setOpen(false)}
        >
          <img src={close} alt="" />
        </button>
      </form>
    </div>
  );
}

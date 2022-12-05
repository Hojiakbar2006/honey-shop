// import axios from "axios";
import React from "react";
import "./Order.css";
import { OrderHeader } from "../../Components/Header/OrderHeader";
import { OrderCard } from "../../Components/OrderCard/OrderCard";
// import { useDispatch } from "react-redux";
// import { acAlert } from "../../Redux/Alert";

export function Order() {
  // const dispatch = useDispatch();

  // const myOrder = () => {
  //   const phone = 950270496;
  //   axios("http://honey.pandashop.uz/my/order", {
  //     headers: {
  //       phone,
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       dispatch(acAlert({ open: true, message: err.message, type: "error" }));
  //     });
  // };

  const data = [
    {
      about: "asas",
      address: "Haha",
      customer: "Bek",
      date: "2022-11-30T03:53:55.883Z",
      id: 22,
      img: "https://honey.pandashop.uz/honey_01669719644434.jpeg",
      name: "salom",
      phone: "942719777",
      price: "1222",
      status: 1,
      territory: "asas",
      weight: "asas",
    },
    {
      about: "asas",
      address: "Haha",
      customer: "Bek",
      date: "2022-11-30T03:53:55.883Z",
      id: 22,
      img: "https://honey.pandashop.uz/honey_01669719644434.jpeg",
      name: "salom",
      phone: "942719777",
      price: "1222",
      status: 1,
      territory: "asas",
      weight: "asas",
    },
    {
      about: "asas",
      address: "Haha",
      customer: "Bek",
      date: "2022-11-30T03:53:55.883Z",
      id: 22,
      img: "https://honey.pandashop.uz/honey_01669719644434.jpeg",
      name: "salom",
      phone: "942719777",
      price: "1222",
      status: 1,
      territory: "asas",
      weight: "asas",
    },
    {
      about: "asas",
      address: "Haha",
      customer: "Bek",
      date: "2022-11-30T03:53:55.883Z",
      id: 22,
      img: "https://honey.pandashop.uz/honey_01669719644434.jpeg",
      name: "salom",
      phone: "942719777",
      price: "1222",
      status: 1,
      territory: "asas",
      weight: "asas",
    },
    {
      about: "asas",
      address: "Haha",
      customer: "Bek",
      date: "2022-11-30T03:53:55.883Z",
      id: 22,
      img: "https://honey.pandashop.uz/honey_01669719644434.jpeg",
      name: "salom",
      phone: "942719777",
      price: "1222",
      status: 1,
      territory: "asas",
      weight: "asas",
    },

    {
      about: "salom bolla tuzumisila\n",
      address: "aaa",
      customer: "aaa",
      date: "2022-11-30T08:34:08.061Z",
      id: 24,
      img: "https://honey.pandashop.uz/honey_01669725953027.png",
      name: "asal",
      phone: "1111",
      price: "120",
      status: 0,
      territory: "namangan",
      weight: "10",
    },
    {
      about: "asas",
      address: "Haha",
      customer: "Bek",
      date: "2022-11-30T03:53:55.883Z",
      id: 22,
      img: "https://honey.pandashop.uz/honey_01669719644434.jpeg",
      name: "salom",
      phone: "942719777",
      price: "1222",
      status: 1,
      territory: "asas",
      weight: "asas",
    },

    {
      about: "salom bolla tuzumisila\n",
      address: "aaa",
      customer: "aaa",
      date: "2022-11-30T08:34:08.061Z",
      id: 24,
      img: "https://honey.pandashop.uz/honey_01669725953027.png",
      name: "asal",
      phone: "1111",
      price: "120",
      status: 0,
      territory: "namangan",
      weight: "10",
    },
    {
      about: "asas",
      address: "Haha",
      customer: "Bek",
      date: "2022-11-30T03:53:55.883Z",
      id: 22,
      img: "https://honey.pandashop.uz/honey_01669719644434.jpeg",
      name: "salom",
      phone: "942719777",
      price: "1222",
      status: 0,
      territory: "asas",
      weight: "asas",
    },

    {
      about: "salom bolla tuzumisila\n",
      address: "aaa",
      customer: "aaa",
      date: "2022-11-30T08:34:08.061Z",
      id: 24,
      img: "https://honey.pandashop.uz/honey_01669725953027.png",
      name: "asal",
      phone: "1111",
      price: "120",
      status: 0,
      territory: "namangan",
      weight: "10",
    },
  ];

  return (
    <div id="Order">
      <OrderHeader />
      <OrderCard data={data} />
    </div>
  );
}

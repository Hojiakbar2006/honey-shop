import React, { useEffect, useState } from "react";
import "./ProductView.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { Carusel } from "../../Components/Carusel/Carusel";
import { ModalForm } from "../../Components/Modal/ModalForm";

export function ProductView() {
  const [productView, setProductView] = useState({});
  const [Img, setImg] = useState([]);
  const [open, setOpen] = useState(false);

  const Location = useLocation();
  const dispatch = useDispatch();
  const id = Location.pathname.split("/").pop();

  useEffect(() => {
    dispatch(acLoading(true));
    axios
      .get(`https://honey.pandashop.uz/product/view/${id}`, {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        setProductView(res.data);
        setImg(res.data.img);
        dispatch(acLoading(false));
      })
      .catch((err) => {
        dispatch(acLoading(false));
        console.log(err);
      });
  }, [id, dispatch]);

  return (
    <div className="ProductView">
      <h1>Sifatli Tog' Asali</h1>
      <Carusel data={Img} />
      <div className="about">
        <p>{productView.about}</p>
        <div>
          <p>Narxi:</p>
          <p>{productView.price} 000 so'm</p>
        </div>
        <div>
          <p>Og'irligi</p>
          <p>{productView.weight}</p>
        </div>
        <div>
          <p>Xudud</p>
          <p>{productView.territory}</p>
        </div>
        <div className="btn-group-pay">
          <button onClick={() => setOpen(true)}>Xarid qilish</button>
          <button>Biz bilan bog'laning</button>
        </div>
      </div>
      <ModalForm
        open={open}
        setOpen={setOpen}
        product={productView}
        img={Img[0]}
      />
    </div>
  );
}

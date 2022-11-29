import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { Carusel } from "../../Components/View/Carusel";

export function ProductView() {
  const [productView, setProductView] = useState({});
  const [Img, setImg] = useState([]);

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

  
  return <div>
    <Carusel data={Img}/>
  </div>;
}

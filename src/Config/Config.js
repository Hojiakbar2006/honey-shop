import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { acProduct } from "../Redux/Product";
import { acLoading } from "../Redux/Loading";

export function Config() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acLoading(true));
    axios
      .get("https://honey.pandashop.uz/product/view", {
        header: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acProduct(res.data));
        dispatch(acLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(acLoading(false));
      });
  }, [dispatch]);

  return null;
}

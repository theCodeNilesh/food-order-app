import React, { useContext, useEffect } from "react";
import "./VerifyPayment.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const VerifyPayment = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();

  const { url } = useContext(StoreContext);

  const verify = async () => {
    const response = await axios.post(url + "/api/order/verify",
      {
        success: success.toString(),
        orderId,
      }
    );
    console.log(response.data.success);
    console.log(response.data.message);

    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default VerifyPayment;

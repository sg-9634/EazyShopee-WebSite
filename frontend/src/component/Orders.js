 import React from 'react'
 import axios from "axios";
 import { url } from './../common/constants';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import { useHistory } from 'react-router';
import "../styles/about.css"
const Orders = () => {
let history=useHistory();

const id = JSON.parse(localStorage.getItem("id"));
const amount = JSON.parse(localStorage.getItem("amount"));
const addressId= JSON.parse(localStorage.getItem("addressId"));
const productId= JSON.parse(localStorage.getItem("productId"))
const placeOrder=()=>{

    const data = new FormData();
    data.append("userId",id);
    data.append("amount",amount);
    data.append("addressId",addressId);
    data.append("productId",productId);
   
    


    axios
              .post(url + "/placeOrder", data)
              .then((response) => {
                const result = response.data;
                if (result.status === "success") {
                  toast.success("successfully placed order!");
                  history.push("/success");
                } else {
                }
              })
              .catch((err) => {
                toast.error("error while pplacing order");
                console.log(err);
              });
            };
    return (
        <div className="about-section" >
       <h2 >Do you want to place order {localStorage.getItem("firstname")} with amount {amount}?</h2>
       <p></p>
       <p></p>
        <button className="btn btn-success" onClick={placeOrder}>Place Order</button>
        </div>
    )
}


export default Orders

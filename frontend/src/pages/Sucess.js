import React from 'react'
import "../styles/order.css"
const Sucess = () => {
    return (
        <div className="success" >
            Your product order will delivered soon!!


            <p>Thanks For Shopping {localStorage.getItem("firstname")}</p>
        </div>
    )
}

export default Sucess

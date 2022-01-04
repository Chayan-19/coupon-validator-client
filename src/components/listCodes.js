import React, {useState, useEffect } from 'react'
import axios from "axios"
import "../css/createDiscount.css";

const ListCodes = () => {
    const [listCodes, setListCodes] = useState([])
    const makeRequest = async() => {
        const res = await axios.get("http://localhost:5000/discount");
        setListCodes(res.data);
    }

    useEffect(() => {
        makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <ul>
                {listCodes.map((items, index) => <li key={index}>{items.code} is valid from {items.startDate}
                 to {items.endDate}. Minimum cart value should be {items.minAmt}</li>)}
            </ul>
            <a href="http://localhost:3000/discount">
                <input type="button" className="btn" value="Calculate Discount" />
            </a>

            <a href="http://localhost:3000/create-discount-code">
                <input type="button" className="btn" value="Create Coupon" />
            </a>
        </div>
    )
}

export default ListCodes

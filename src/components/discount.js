import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../css/createDiscount.css";
import moment from 'moment';

const Discount = () => {
    const [cartTotal, setCartTotal] = useState(0);
    const [couponCode, setCouponCode] = useState("");
    const [coupon, setCoupon ] = useState({});

    const makeValidation = async() => {
        const res = await axios.post("https://my-server1903.herokuapp.com/discount/query-code", { code: couponCode });
        return res.data;
    }


    const onSubmit = async(e) => {
        e.preventDefault();
        const coupon2 = await makeValidation();
        if(coupon2){
            console.log(123)
            applyDiscount(coupon2);
        }
    };

    useEffect(() =>  {
        // console.log(123);
        // console.log(coupon);
    }, [coupon])

    const applyDiscount =(coupon) => {
        // console.log(coupon)
        const d1 = moment(coupon.startDate, "DD/MM/YYYY", true).format();
        const d2 = moment(coupon.endDate, "DD/MM/YYYY", true).format();
        const today = moment().format();
        if(today>d1 && today<d2){
            if(cartTotal >= coupon.minAmt ){
                if(coupon.type.toLowerCase() === "percentage"){
                    const percent = parseInt(coupon.code.split("%")[0]);
                    const decrement = (percent*cartTotal) / 100;
                    if(decrement>coupon.maxDiscount){
                        alert(`Final Amount = ${cartTotal - coupon.maxDiscount}`)
                    }else{
                        alert(`Final Amount = ${cartTotal - decrement}`)
                    }
                }else if(coupon.type.toLowerCase() === "flat"){
                    alert(`Final Amount = ${cartTotal - coupon.maxDiscount}`);
                }else{
                    alert("Please enter a valid code");
                }
            }else{
                alert("Cart Total less than minimum amount");
            }
        }else{
            alert("Coupon Code has expired");
        }
    }





    const onChangeTotal = (e) => {
        setCartTotal(e.target.value);
    }
    const onChangeCode = (e) => {
        setCouponCode(e.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
                <div className="form-group">
                    <div className="form-row">
                        <label>Enter Cart Total </label>
                            <input
                            type="text"
                            name="cartTotal"
                            value={ cartTotal }
                            onChange={onChangeTotal}
                        />
                    </div>

                    <div className="form-row">
                        <label>Enter Discount Code</label>
                            <input
                            type="text"
                            name="couponCode"
                            value={couponCode}
                            onChange={onChangeCode}
                        />
                    </div>
                    <input type="submit" className="btn" value="Submit" />
                    <a href="http://localhost:3000/list-discount-codes">
                        <input type="button" className="btn" value="Go to List" />
                    </a>
                    <a href="http://localhost:3000/create-discount-code">
                        <input type="button" className="btn" value="Create Coupon" />
                    </a>
             </div>
        </form>
    )
}

export default Discount

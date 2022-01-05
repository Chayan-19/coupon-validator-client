import React, { useState } from 'react';
import axios from "axios";
import "../css/createDiscount.css";

const CreateDiscount = () => {
    const[ discountCode, setDiscountCode ] = useState({
        code: "",
        type: "",
        startDate: "",
        endDate: "",
        maxDiscount: 0,
        minAmt: 0
    });

    const onChange = e =>
    setDiscountCode({ ...discountCode, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        axios.post("https://my-server1903.herokuapp.com/discount/create", { discountCode })
            .then((response)=>{
                alert("Coupon Created Successfully!!")
                console.log(response);
            })
            .catch((error)=>{
                alert("Coupon Creation failed");
                console.log(error);
            })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <div className="form-row">
                        <label>Enter code </label>
                            <input
                            type="text"
                            name="code"
                            value={ discountCode.code }
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <label>Enter code type(percentage or flat)</label>
                            <input
                            type="text"
                            name="type"
                            value={discountCode.type}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <label>Enter code Start Date(in DD/MM/YYYY format)</label>
                            <input
                            type="text"
                            name="startDate"
                            value={discountCode.startDate}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <label>Enter code End Date(DD/MM/YYYY)</label>
                            <input
                            type="text"
                            name="endDate"
                            value={discountCode.endDate}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <label>Enter Maximum discount</label>
                            <input
                            type="text"
                            name="maxDiscount"
                            value={discountCode.maxDiscount}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <label>Enter Minimum Cart Amount</label>
                            <input
                            type="text"
                            name="minAmt"
                            value={discountCode.minAmt}
                            onChange={onChange}
                            required
                        />

                        <input type="submit" className="btn" value="Submit" />
                        <a href="https://cocky-lamarr-248d2d.netlify.app/list-discount-codes">
                            <input type="button" className="btn" value="Go to List" />
                        </a>

                        <a href="https://cocky-lamarr-248d2d.netlify.app/discount">
                            <input type="button" className="btn" value="Calculate Discount" />
                        </a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreateDiscount

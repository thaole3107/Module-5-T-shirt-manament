import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NewProduct() {
    const PRODUCT_API = "http://localhost:3001";
    const [newProduct, setNewProduct] = useState({})

    function handleChange(event) {
        setNewProduct({
            ...newProduct,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post(`${PRODUCT_API}/products`, newProduct)
            .then(res => {
                console.log(res.data);
                window.location.href = "/";
            })
            .catch(err => {
                throw err;
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>               
                <h1>Add new product</h1>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Product name</label>
                    <input className="form-control" id="name" name="name" value={newProduct.name || ""} 
                    onChange={handleChange} placeholder="Please add product name"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="price">Price(VND)</label>
                    <input className="form-control" id="price" name="price" type="number" value={newProduct.price || ""} 
                    onChange={handleChange} placeholder="Please add product price"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="stock">Inventory</label>
                    <input className="form-control" id="stock" name="stock" type="number" value={newProduct.stock || ""} 
                    onChange={handleChange} placeholder="Please add the quantity in inventory"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="description">Detail</label>
                    <textarea className="form-control" id="description" name="description" value={newProduct.description || ""} onChange={handleChange} />
                    {/* <input className="form-control" id="description" name="description" value={newProduct.description || ""} onChange={handleChange} /> */}
                </div>

                <Link to="/">
                    <button type="button" className="btn btn-secondary">
                        Back
                    </button>
                </Link>
                &nbsp;
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewProduct;
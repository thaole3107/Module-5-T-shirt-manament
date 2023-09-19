import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../css/productEdit.css"

function ProductEdit() {
    const PRODUCT_API = "http://localhost:3001";
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (productId) {
            axios
                .get(`${PRODUCT_API}/products/${productId}`)
                .then(res => {
                    setProduct(res.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [productId]);

    function handleChange(event) {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit() {
        axios
            .put(`${PRODUCT_API}/products/${productId}`, product)
            .then(res => {
                console.log(res.data)
                window.location.href = "/";
            })
            .catch(err => {
                throw err;
            });
    }

    return (
        <div>
            <form className="edit-form">
                <h1 id="heading-edit">Edit</h1>
                <div className="mb-3">
                    <label className="form-label">Id</label>
                    <input className="form-control" readOnly name="id" value={product.id || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Product name</label>
                    <input className="form-control" id="name" name="name" value={product.name || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="price">Price(VND)</label>
                    <input className="form-control" type="number" id="price" name="price" value={product.price || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="stock">Inventory</label>
                    <input className="form-control" type="number" id="stock" name="stock" value={product.stock || ""} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="description">Detail</label>
                    <textarea className="form-control" id="description" name="description" value={product.description || ""} onChange={handleChange} />
                    {/* <input className="form-control" id="description" name="description" value={product.description || ""} onChange={handleChange} /> */}
                </div>
                <Link to="/">
                    <button type="button" className="btn btn-secondary">
                        Back
                    </button>
                </Link>
                &nbsp;
                
                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#myModal" >
                    Edit
                </button>

                <div class="modal" tabindex="-1" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Confirm Edit<span> {product.name}</span></h4>
                            
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <p id="notification">Are you sure?</p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Exit
                            </button>
                            <button type="button" class="btn btn-primary" onClick={handleSubmit}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            </form>
        </div>
    );
}

export default ProductEdit;
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../css/productDetail.css"

function ProductDelete() {
    const PRODUCT_API = "http://localhost:3001";
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect((() => {
        axios
            .get(`${PRODUCT_API}/products/${productId}`)
            .then(res => setProduct(res.data))
            .catch(err => { throw err })
    }), [productId])

    function removeProduct(e) {
        e.preventDefault();
        if (productId) {
            axios
                .delete(`${PRODUCT_API}/products/${productId}`)
                .then(res => {
                    // alert(
                    //     `Remove product ${JSON.stringify(
                    //         res.data
                    //     )} successfully!!!`
                    // );
                    console.log(res.data)
                    window.location.href = "/";
                })
                .catch(err => {
                    throw err;
                });
        }
    }

    return (
        <div>
            <h1 id="heading-detail">Delete product</h1>
            <table id="product-detail">
                <tr>
                    <td className="label-style">Product name</td>
                    <td className="detail">{product.name}</td>
                </tr>
                <tr>
                    <td className="label-style">Price(VND)</td>
                    <td className="detail">{product.price}</td>
                </tr>
                <tr>
                    <td className="label-style">Inventory</td>
                    <td className="detail">{product.stock}</td>
                </tr>
                <tr>
                    <td className="label-style">Detail</td>
                    <td className="detail">{product.description}</td>
                </tr>
            </table>

            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                data-bs-target="#myModal">
                Delete
            </button>
            
            &nbsp;
            <Link to="/">
                <button type="button" className="btn btn-secondary">
                    Product list
                </button>
            </Link>
            

            <div class="modal" tabindex="-1" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Confirm Delete<span> {product.name}</span></h4>
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
                            <button type="button" class="btn btn-primary" onClick={removeProduct}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDelete;
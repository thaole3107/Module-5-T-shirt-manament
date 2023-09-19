import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../css/productDetail.css'

function ProductDetail() {
    
    const PRODUCT_API = "http://localhost:3001";
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect((() => {
        axios
            .get(`${PRODUCT_API}/products/${productId}`)
            .then(res => setProduct(res.data))
            .catch(err => { throw err })
    }), [productId])

    return (
        <div>
            <h1 id="heading-detail">Detail</h1>
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

            <Link to="/">
                <button type="button" className="btn btn-secondary">
                    Product List
                </button>
            </Link>

        </div>
    )
}

export default ProductDetail;
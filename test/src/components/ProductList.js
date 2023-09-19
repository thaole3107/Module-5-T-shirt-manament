import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/product.css"

function ProductList() {
    const PRODUCT_API = "http://localhost:3001";
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${PRODUCT_API}/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    function handleClickNewProduct() {
        return navigate("/products");
    }

    return (
        <div>
            
            <h1 id="heading-list" className="display-4 text-center">Product List</h1>
            <button id="btnNewProduct" className="btn btn-outline-success" onClick={handleClickNewProduct}>Add product</button>
            <table id="table-product" className="table table-striped table-danger">
                <thead>
                    <tr id="table-title" className="table-danger">
                        <th>#</th>
                        <th>Product name</th>
                        <th>Price(VND)</th>
                        <th>Inventory</th>
                        <th>Detail</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id} className= "table-secondary">
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link to={`/products/${product.id}`}>
                                        <button className="btn btn-outline-primary">Detail</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/products/edit/${product.id}`}>
                                        <button className="btn btn-outline-success">Edit</button>
                                    </Link>
                                </td>

                                <td>
                                    <Link to={`/products/delete/${product.id}`}>
                                        <button className="btn btn-danger">Delete</button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;
import React, { Component } from "react";
import ProductAction from "../component/products/productAction/ProductAction";
import InputAction from "../component/products/inputAction/InputAction";


import axios from "../Axios";
import {Button} from "react-bootstrap";

class Product extends Component {
    state = {
        products: [],
        productFromShow: false,
        productID: null,
    };

    componentDidMount(){
        console.log('component');
        axios.get('/products')
        .then(response => {
            this.setState({products: response.data})
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }

    newProductsData = (id) => {
        axios.delete('/products/delete/'+id)
        .then((response) => {
            let oldProducts = [...this.state.products];
            const newProducts = oldProducts.filter(item => item.product_id !== id)
            this.setState({ products: newProducts })
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    } 
    
    addBtnHandler = () => {
        this.setState({ productFromShow: true });
    };

    addNewProductHandaler = (productName, price, quantity) => {
        axios.post('/products', {
            product_name: productName,
            price: price,
            quantity: quantity
          })
          .then((response) => {
            axios.get('/products')
            .then(res => {
                this.setState({products: res.data, productFromShow: false});
            })
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() {
        return (
            <React.Fragment>
                <div className="my-3 float-right">
                    <Button variant="primary" onClick={this.addBtnHandler}>
                        Add Product
                    </Button>
                </div>
                <ProductAction
                    formShow={this.state.productFromShow}
                    editBtnHandler={this.editBtnHandler}
                    products={this.state.products}
                    newData={this.newProductsData}
                />

                {this.state.productFromShow? <InputAction addNewProduct={this.addNewProductHandaler} /> : null}

            </React.Fragment>
        );
    }
}
export default Product;

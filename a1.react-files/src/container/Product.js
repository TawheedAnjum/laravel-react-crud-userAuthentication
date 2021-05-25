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
        productDitails: {
            product_id: '',
            product_name: '',
            price: '',
            quantity: ''
        },
        btnType: false
    };

    componentDidMount(){
        axios.get('/products')
        .then(response => {
            this.setState({products: response.data})
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }

    // delete
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
    
    // add
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
    // add end

    // edit
    editBtnHandler = (id) => {
        axios.get('/products/'+id)
        .then(response => {
            this.setState({
                productDitails: {
                    product_id: id,
                    product_name: response.data[0].product_name,
                    price: response.data[0].price,
                    quantity: response.data[0].quantity
                },
                productFromShow: true,
                btnType: true
            });

            console.log(response)
            
        })
        .catch(err => {
            console.log(err);
        })  
    };

    updateProduct = (productId, productName, price, quantity) => {
        axios.post('/products/edit/'+productId, {
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

                {/* input */}
                {this.state.productFromShow? <InputAction addNewProduct={this.addNewProductHandaler} productInfo={this.state.productDitails} btnType={this.state.btnType} updateProduct={this.updateProduct} /> : null}

            </React.Fragment>
        );
    }
}
export default Product;

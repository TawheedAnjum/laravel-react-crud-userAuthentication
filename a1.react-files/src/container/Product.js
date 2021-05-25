import React, { Component } from "react";
import ProductAction from "../component/products/productAction/ProductAction";
import axios from "../Axios";

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
            const newProducts = oldProducts.filter(item => item.product_id !==id)
            this.setState({ products: newProducts })
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    } 
    
    editBtnHandler = () => {
        this.setState({ productFromShow: true });
    };

    render() {
        return (
            <React.Fragment>
                
                <ProductAction
                    formShow={this.state.productFromShow}
                    editBtnHandler={this.editBtnHandler}
                    products={this.state.products}
                    newData={this.newProductsData}
                />
            </React.Fragment>
        );
    }
}
export default Product;

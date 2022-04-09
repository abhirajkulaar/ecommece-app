import ProductContext from "./productContext";
import { useState, useEffect } from "react";

const ProductState = (props) => {


  const [product,setProduct] = useState()


  const updateProduct =async (productId)=> {
    const apiData = await fetch(`https://fakestoreapi.com/products/${productId}`)
    setProduct(await apiData.json())
  }

    return(
        <ProductContext.Provider value = {[product,updateProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
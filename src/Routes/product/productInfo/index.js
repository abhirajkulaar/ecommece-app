
import ProductContext from "../../../Context/Product/productContext"
import ReviewContext from "../../../Context/Reviews/reviewContext";
import {useContext, useEffect, useState} from 'react'
import { Grid, Typography, Card, Button } from "@mui/material";
import ProductImageCarousel from "../../../Components/productImage";
import { useParams  } from 'react-router-dom';
import ReviewForm from "../../../Components/reviewForm";
function ProductInfo(props)
{
    const [formVisible,setFormVisible] = useState(false)
    const [product,updateProduct] = useContext(ProductContext)
    const [review,addReview] = useContext(ReviewContext)

    const onSubmit = (review) => addReview(review)
    const {productId} = useParams();  
    useEffect(()=>updateProduct(productId),[])
    if(!product){return}
    return(
        <>       
         <Grid style={{ backgroundColor: "rgb(217 218 220)" }} container>
        <Grid sx={{ m: 8 }} container>
          <Grid item md={4} xs={12}>
            <ProductImageCarousel images = {[1,2,3,4].map(val=>product.image)}></ProductImageCarousel>
          </Grid>
          <Grid sx={{ mt: 4 }} item md={8} xs={12}>
            <Typography sx={{ ml: 10 }} align="left" variant="h3">
              {product.title}
            </Typography>

            <Grid container>
              <Grid sx={{ m: 4 }} item>
                <Typography align="left" variant="body">
                  {product.description}
                </Typography>
                <Grid />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={4} xs={12}></Grid>
          <Grid item md={8} xs={12}>
            <Grid sx={{ m: 3 }} container direction="row" justifyContent="space-around" alignItems="center">
              <Typography sx={{ ml: 6 }} align="left" variant="h4" style={{ display: "inline" }}>
                Price: {product.price}$
              </Typography>
              <Button variant="contained" color="primary" onClick={()=>setFormVisible(true)}>
                Add Review
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ReviewForm onSubmit={onSubmit} visibility= {formVisible} setVisibility = {setFormVisible}></ReviewForm>
      </>

    )
}

export default ProductInfo
import ReviewsBar from "./reviewsBar";
import AppBarTop from "../../Components/appBar";
import ProductState from "../../Context/Product/productState";
import ReviewState from "../../Context/Reviews/reviewState";
import ProductInfo from "./productInfo";

function ProductPage() {
  return (
    <>
      <AppBarTop></AppBarTop>
      <ProductState>
        <ReviewState>
          <ProductInfo></ProductInfo>

          <ReviewsBar></ReviewsBar>
        </ReviewState>
      </ProductState>
    </>
  );
}

export default ProductPage;

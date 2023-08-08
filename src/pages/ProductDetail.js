// ProductDetail (page) component
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  /* 
    "params" OBJECT that holds the property names
    of every property we gave it in the path name
    (e.g. /product/:productId => params.productId)
  */
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;

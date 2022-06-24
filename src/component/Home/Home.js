import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";

// const product = {
//   name: "Blue shirt",
//   images: [
//     {
//       url:
//         "https://images.squarespace-cdn.com/content/v1/578c7a7815d5db22cae71c21/1624552666391-65OMUC80P4AIHA5RXEG6/436639_biggalleryimage.jpg?format=1500w",
//     },
//   ],
//   price: "₹3000",
//   _id: "Devansh",
// };

const Home = () => {
  // const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {

    // if(error){
    //   return alert.error(error);
    // }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Ecommerce" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>Amazing products with your choice</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="Products"> Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => <Product key={product._id} product={product}/>)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

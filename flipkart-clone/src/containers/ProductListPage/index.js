import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../actions";
import "./style.css";
import { generatePublicUrl } from "../../urlConfig";
import { useState } from "react";
/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under5k: 5000,
    under10k: 10000,
    under15k: 15000,
    under20k: 20000,
    under30k: 30000,
  });
  const dispatch = useDispatch();
  const { slug } = useParams();
  useEffect(() => {
    dispatch(getProductsBySlug(slug));
  }, [slug, dispatch]);

  return (
    <Layout>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <div className="card">
            <div className="cardHeader">
              <div>
                {slug} under {priceRange[key]}
              </div>
              <button>View All</button>
            </div>
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => (
                <div className="productContainer">
                  <div className="productImgContainer">
                    <img
                      src={generatePublicUrl(product.productPictures[0].img)}
                      alt=""
                    />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px 0" }}>{product.name}</div>
                    <div>
                      <span>4</span>&nbsp;
                      <span>1500</span>
                    </div>
                    <div className="productPrice">{product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};
export default ProductListPage;

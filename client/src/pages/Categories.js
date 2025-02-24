import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (   


   

    <Layout title={"All Categories"}>
 <img
        src="/images/cat.webp"
        className="banner-img"
        alt="bannerimage"
        height="100%"
        width="100%"
        style={{  objectFit: "cover" }}
      />


      <div className="container">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn btn-primary">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>


  );
};

export default Categories;
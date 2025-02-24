import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Maa Bhaarati Megamart, where innovation meets convenience! Founded by SAURABH KUMAR, a  Ece undergrad, our platform aims to redefine your online shopping experience. With a passion for technology and a commitment to quality service, we strive to offer a curated selection of products that cater to your every need. Whether you're searching for the latest gadgets, fashion essentials, or home decor, we're here to make your shopping journey seamless and enjoyable. Join us on this exciting venture as we continue to grow and enhance our offerings to serve you better.


           
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

import "./homepage.style.css";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import Product from "./product";

const HomePage = () => (
  <div className="">
    <h5 className="title-dark mb-3 mt-5">Category</h5>
    <div className="categories mb-5">
      <div className="d-flex flex-wrap p-2">
        {/* <h1 className="p-3 col bg-warning">a</h1>
        <h1 className="p-3 col bg-warning">a</h1> */}
        <div className="menu-item p-2 menu-item-sm col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div className="content p-3">
            <h4 className="title">HATS</h4>
            {/* <p className="subtitle">SHOP NOW</p> */}
          </div>
        </div>
        <div className="menu-item p-2 menu-item-sm col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div className="content p-3">
            <h4 className="title">JACKETS</h4>
            {/* <p className="subtitle">SHOP NOW</p> */}
          </div>
        </div>
        <div className="menu-item p-2 menu-item-sm col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <div className="content p-3">
            <h4 className="title">SNEAKERS</h4>
            {/* <p className="subtitle">SHOP NOW</p> */}
          </div>
        </div>

        <div className="menu-item p-2 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="content content-lg p-3">
            <h4 className="title">MENS</h4>
            {/* <p className="subtitle">SHOP NOW</p> */}
          </div>
        </div>
        <div className="menu-item p-2 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="content content-lg p-3">
            <h4 className="title">WOMENS</h4>
            {/* <p className="subtitle">SHOP NOW</p> */}
          </div>
        </div>
      </div>
    </div>
    <h5 className="title-dark mb-3">Products</h5>
    <div className="products d-flex flex-wrap p-2">
      <Product imgUrl={image1} title={"PRODUCT ONE"} price={"2.0"} />
      <Product imgUrl={image2} title={"hello"} price={"2.0"} />
      <Product imgUrl={image3} title={"hello"} price={"2.0"} />
      <Product imgUrl={image4} title={"hello"} price={"2.0"} />
      <Product imgUrl={image5} title={"hello"} price={"2.0"} />
    </div>
  </div>
);

export default HomePage;

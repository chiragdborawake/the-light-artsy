import Rating from "@mui/material/Rating";
import "./index.css";
import Footer from "../Footer";
export default function TableLamps() {
  const tableLamps = [
    {
      image: "/Images/AllProducts/BonsaiTree.png",
      productName: "Bonsai Style Tree Lamps",
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 5999.0,
      currentPrice: 1499.0,
      aboutImage: "Bonsai Style Tree Lamps",
    },
    {
      image: "/Images/AllProducts/WoodBlockLamp.jpg",
      productName: "True Wood Book Lamp",
      rating: 5,
      noOfReviews: 2,
      actualPrice: 1499.0,
      currentPrice: 9499.0,
      aboutImage: "True Wood Book Lamp",
    },
    {
      image: "/Images/AllProducts/PhotoClipsLight.jpg",
      productName: "Photo Clips Lights",
      rating: 5,
      noOfReviews: 2,
      actualPrice: 1499.0,
      currentPrice: 9499.0,
      aboutImage: "Photo Clips Lights",
    },
    {
      image: "/Images/AllProducts/StringLADLight.jpg",
      productName: "Copper Wire Fairy String LED Lights",
      rating: 5,
      noOfReviews: 2,
      actualPrice: 1499.0,
      currentPrice: 9499.0,
      aboutImage: "Copper Wire Fairy String LED Lights",
    },
  ];
  return (
    <>
      <h2>Table Lamps</h2>
      {tableLamps.map(
        ({
          image,
          productName,
          rating,
          noOfReviews,
          currentPrice,
          actualPrice,
          aboutImage,
        }) => {
          return (
            <div className="table-lamps">
              <div className="product-details">
                <span className="sale">SALE</span>
                <ul>
                  <li>{productName}</li>
                  <li className="rate">
                    <Rating
                      className="rating"
                      name="half-rating-read"
                      defaultValue={rating}
                      precision={0.5}
                      readOnly
                    />
                    ({noOfReviews})
                  </li>
                  <li>
                    <span>Rs.{currentPrice}</span>&nbsp;&nbsp;&nbsp;
                    <span className="red-text">Rs.{actualPrice}</span>
                  </li>
                </ul>
                <img src={process.env.PUBLIC_URL + image} alt={aboutImage} />
              </div>
            </div>
          );
        }
      )}
      <Footer></Footer>
    </>
  );
}

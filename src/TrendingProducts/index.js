import Rating from "@mui/material/Rating";
import "./index.css";
export default function TrendingProducts() {
  const trendingProducts = [
    {
      image: "/Images/TrendingProducts/WoodBlockLamp.jpg",
      productName: "Colourful Cotton Balls LED Ligh",
      rating: 5,
      noOfReviews: 26,
      actualPrice: 3199,
      currentPrice: 1499.0,
      aboutImage: "Colourful Cotton Balls LED Ligh",
    },
    {
      image: "/Images/TrendingProducts/BonsaiTree.png",
      productName: "Bonsai Style Tree Lamps",
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 5999.0,
      currentPrice: 1499.0,
      aboutImage: "Bonsai Style Tree Lamps",
    },
    {
      image: "/Images/TrendingProducts/DecorativeCottonBall.jpg",
      productName: "Decorative Cotton Balls Lights",
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 5999.0,
      currentPrice: 1499.0,
      aboutImage: "Decorative Cotton Balls Lights",
    },
    {
      image: "/Images/TrendingProducts/FlotingTeaLight.jpg",
      productName: "Floting LED Tea Lights",
      rating: 3,
      noOfReviews: 4,
      actualPrice: 999.0,
      currentPrice: 499.0,
      aboutImage: "Floting LED Tea Lights",
    },
    {
      image: "/Images/TrendingProducts/MotionSensingLight.jpg",
      productName: "Rechargeable Motion Sensing Light",
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 2,
      currentPrice: 599.0,
      aboutImage: "Rechargeable Motion Sensing Light",
    },
    {
      image: "/Images/TrendingProducts/WoodBlockLamp.jpg",
      productName: "True Wood Book Lamp",
      rating: 5,
      noOfReviews: 2,
      actualPrice: 1499.0,
      currentPrice: 9499.0,
      aboutImage: "True Wood Book Lamp",
    },
  ];
  return (
    <>
      <h2>TRENDING PRODUCTS</h2>
      {trendingProducts.map(
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
          );
        }
      )}
    </>
  );
}

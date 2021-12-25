import Rating from '@mui/material/Rating';
import './index.css'
import Footer from '../Footer'
export default function TableLamp() {
  const tableLamp = [
    {
      image: '/Images/AllProducts/BonsaiTree.png',
      productName: 'Bonsai Style Tree Lamps',
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 5999.00,
      currentPrice: 1499.00,
      aboutImage: 'Bonsai Style Tree Lamps'
    },
    {
      image: '/Images/AllProducts/MoonLightLamp.png',
      productName: 'Rechargeable Moon Lamp with Tourch Control',
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 2,
      currentPrice: 599.00,
      aboutImage: 'Rechargeable Moon Lamp with Tourch Control'
    },
    {
      image: '/Images/AllProducts/StringLADLight.jpg',
      productName: 'Copper Wire Fairy String LED Lights',
      rating: 5,
      noOfReviews: 2,
      actualPrice: 1499.00,
      currentPrice: 9499.00,
      aboutImage: 'Copper Wire Fairy String LED Lights'
    },
    {
      image: '/Images/AllProducts/WoodBlockLamp.jpg',
      productName: 'True Wood Book Lamp',
      rating: 5,
      noOfReviews: 2,
      actualPrice: 1499.00,
      currentPrice: 9499.00,
      aboutImage: 'True Wood Book Lamp'
    }
  ]
  return (
    <>
      <h2>Table Lamps</h2>
      {
        tableLamp.map(({ image, productName, rating, noOfReviews, currentPrice, actualPrice, aboutImage }) => {
          return (
            <div className='table-lamp'>
              <div className="product-details">
                <span className='sale'>SALE</span>
                <ul>
                  <li>
                    {productName}
                  </li>
                  <li className='rate'>
                    <Rating className="rating" name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    ({noOfReviews})
                  </li>
                  <li>
                    <span>Rs.{currentPrice}</span>&nbsp;&nbsp;&nbsp;<span className='red-text'>Rs.{actualPrice}</span>
                  </li>
                </ul>
                <img src={process.env.PUBLIC_URL + image} alt={aboutImage} />
              </div>
            </div>
          )
        })
      }
      <Footer> </Footer>
    </>)
}
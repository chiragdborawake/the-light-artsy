import Rating from '@mui/material/Rating';
import './index.css'
import Footer from '../Footer'
export default function DecorativeLights() {
  const decorativeLight = [
    {
      image: '/Images/AllProducts/ColourfullCottonBollonLight.jpg',
      productName: 'Colourful Cotton Balls LED Light',
      rating: 5,
      noOfReviews: 26,
      actualPrice: 3199,
      currentPrice: 1499.00,
      aboutImage: 'Colourful Cotton Balls LED Ligh.'
    },
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
      image: '/Images/AllProducts/DecorativeCottonBall.jpg',
      productName: 'Decorative Cotton Balls Lights',
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 5999.00,
      currentPrice: 1499.00,
      aboutImage: 'Decorative Cotton Balls Lights'
    }
    ,
    {
      image: '/Images/AllProducts/FlotingTeaLight.jpg',
      productName: 'Floting LED Tea Lights',
      rating: 3,
      noOfReviews: 4,
      actualPrice: 999.00,
      currentPrice: 499.00,
      aboutImage: 'Floting LED Tea Lights'
    }
    ,
    {
      image: '/Images/AllProducts/MotionSensingLight.jpg',
      productName: 'Rechargeable Motion Sensing Light',
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 2,
      currentPrice: 599.00,
      aboutImage: 'Rechargeable Motion Sensing Light'
    }
    ,
    {
      image: '/Images/AllProducts/WoodBlockLamp.jpg',
      productName: 'True Wood Book Lamp',
      rating: 5,
      noOfReviews: 2,
      actualPrice: 1499.00,
      currentPrice: 9499.00,
      aboutImage: 'True Wood Book Lamp'
    },
    {
      image: '/Images/AllProducts/DecorativeLights.jpg',
      productName: 'Decorative Lights',
      rating: 5,
      noOfReviews: 26,
      actualPrice: 3199,
      currentPrice: 1499.00,
      aboutImage: 'Decorative Lights'
    },
    {
      image: '/Images/AllProducts/DiyaCurtainLight.jpg',
      productName: 'Diya Curtain Light',
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 5999.00,
      currentPrice: 1499.00,
      aboutImage: 'Diya Curtain Light'
    },
    {
      image: '/Images/AllProducts/HomeShapeLight.jpg',
      productName: 'Home Shaped Fairy Lights',
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 5999.00,
      currentPrice: 1499.00,
      aboutImage: 'Home Shaped Fairy Lights'
    }
    ,
    {
      image: '/Images/AllProducts/HoneyBeeStringLight.jpg',
      productName: 'Honey Bee String Lights',
      rating: 3,
      noOfReviews: 4,
      actualPrice: 999.00,
      currentPrice: 499.00,
      aboutImage: 'Honey Bee String Lights'
    }
    ,
    {
      image: '/Images/AllProducts/MoonLightLamp.png',
      productName: 'Rechargeable Moon Lamp with Tourch Control',
      rating: 4.5,
      noOfReviews: 14,
      actualPrice: 2,
      currentPrice: 599.00,
      aboutImage: 'Rechargeable Moon Lamp with Tourch Control'
    }
    ,
    {
      image: '/Images/AllProducts/PhotoClipsLight.jpg',
      productName: 'Photo Clips Lights',
      rating: 5,
      noOfReviews: 2,
      actualPrice: 1499.00,
      currentPrice: 9499.00,
      aboutImage: 'Photo Clips Lights'
    }
    ,
    {
      image: '/Images/AllProducts/StringLADLight.jpg',
      productName: 'Copper Wire Fairy String LED Lights',
      rating: 5,
      noOfReviews: 2,
      actualPrice: 1499.00,
      currentPrice: 9499.00,
      aboutImage: 'Copper Wire Fairy String LED Lights'
    }
  ]
  return (
    <>
      <h2>DECORATIVE LIGHTS</h2>
      {
        decorativeLight.map(({ image, productName, rating, noOfReviews, currentPrice, actualPrice, aboutImage }) => {
          return (
            <div className='decorative-lights'>
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
      <Footer></Footer>
    </>)
}
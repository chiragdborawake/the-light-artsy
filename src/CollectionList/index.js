import './index.css'
export default function CollectionList() {
  let collectionList = [
    ['Table Lamps', '/Images/CollectionList/TableLamps.jpg', 'Table Lamp'],
    ['String Lights', '/Images/CollectionList/StringLights.jpg', 'String Light'],
    ['Curtain Light', '/Images/CollectionList/CurtainLights.jpg', 'Curtain Light'],
    ['Decorative Light', '/Images/CollectionList/DecorativeLights.jpg', 'Decorative Light']
  ]
  return (
    <>
      <h2>COLLECTION LIST</h2>
      {
        collectionList.map(([productName, image, aboutImage]) => {
          return (<>
            <div className="collection-list">
              <div className="table-lamps">
                <div className='product-name'>{productName}</div>
                <div>VIEW ALL</div>
              </div>
              <img src={process.env.PUBLIC_URL + image} alt={aboutImage} />
            </div>
          </>
          )
        })
      }
    </>
  );
} 
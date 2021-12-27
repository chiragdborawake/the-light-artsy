import CollectionList from '../CollectionList'
import TrendingProducts from '../TrendingProducts'
import SignUp from '../SignUp'
import Footer from '../Footer'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    document.title = "The Light Artsy"
  }, [])
  return (<div>
    <CollectionList />
    <TrendingProducts />
    <SignUp />
    <Footer />
  </div>)
}
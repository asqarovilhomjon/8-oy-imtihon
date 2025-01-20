import Brands from '@/components/Brands'
import Comments from '@/components/Comments'
import Browse from '@/components/Browse'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Selling from '../../components/Selling'

const Home = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <Products/>
      <Selling/>
      <Browse/>
      <Comments/>
    </>
  )
}

export default Home
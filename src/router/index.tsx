import Cart from '@/pages/Cart/Cart'
import CheckOut from '@/pages/CheckOut/CheckOut'
import Detail from '@/pages/Detail/Detail'
import Home from '@/pages/Home/Home'
import Layout from '@/pages/Layout/Layout'
import NotFound from '@/pages/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<CheckOut/>}/>
                <Route path='/detail/:id' element={<Detail/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>   
    </>
  )
}

export default Router
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Body from './components/Body'
import Buttons from './components/Buttons'
import Header from './components/Header'
import NavItems from './components/NavItems'
import store from './utils/store'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductContainer from './components/ProductContainer'
import ProductShow from './components/ProductShow'
import Cart from './components/Cart'
import Gradient from './components/Gradient'
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <><Header />   <Buttons /> <Body />  <NavItems /> </>,
        children: [
            {
                path: "/",
                element:<ProductContainer/>
            },
            {
                path: "/productShow/:id",
                element:<ProductShow/>
            },
            {
                path: "/cart",
                element:<Cart/>
            },
            {
                path: "/gradient",
                element:<Gradient/>
            }
        ]
    }
])


const App = () => {

    return (

        <Provider store={store}>
          <RouterProvider router={appRouter}/>
            {/* <Header />
            <Buttons />
            <NavItems />
            <Body /> */}
        </Provider>
    )
}
export default App
//  ReactDOM.createRoot(document.getElementById('root')).render(<App />)

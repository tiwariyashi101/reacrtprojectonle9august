import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './About.jsx';
import Cart from './Cart.jsx';
import Single from './SingleProduct.jsx';
import { Suspense ,lazy} from 'react';
let Food=lazy(()=>import('./Food.jsx'))
import store from './utility/Store.jsx';
import { ThemeProvider } from './utility/ThemeContext.jsx'; // Import ThemeProvider
 
import './index.css';
import { Provider } from 'react-redux';
import Sign from './Sign.jsx';


// Define the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/product/:id',
    element: <Single />,
  },{
path:'/food',
element:(<Suspense fallback={<h1>...loading</h1>}>
<Food></Food>
</Suspense>)
  }
,{
  path:'/login',
  element:<Sign></Sign>
},{
  path:'/sign',
  element:<Sign></Sign>
}]);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <ThemeProvider> 
    <RouterProvider router={router} />
  </ThemeProvider>
  </Provider>
);

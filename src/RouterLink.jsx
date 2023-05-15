// import { CircularProgress } from '@mui/material';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './Error';
// import AboutPage from './pages/AboutUs';
// import AllProductsPage from './pages/AllProducts';
// import Cart from './pages/Cart';
// import ViewCart from './pages/Cart/components/ViewCart';
// import ContectUsPage from './pages/ContectUs';
import HomePage from './pages/Home';
// import LoginRegisterPage from './pages/LoginRegister';
// import SingleProduct from './pages/SingleProduct';
// import CheckoutPage from './pages/Checkout';
// import ALLStore from './AllStores';
// import EnrollmentPage from './pages/Enrollment';

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { path: '', element: <HomePage /> },
            // { path: 'about_us', element: <AboutPage /> },
            // { path: 'contact_us', element: <ContectUsPage /> },
            // { path: 'Products', element: <AllProductsPage /> },
            // { path: 'enrollment', element: <EnrollmentPage /> },
            // { path: 'Products/:id/:name', element: <SingleProduct /> },
            // { path: 'login', element: <LoginRegisterPage /> },
            // { path: 'cart', element: <Cart /> },
            // { path: 'checkout', element: <CheckoutPage /> }

        ],
    },
]);

function Routes() {
    return (
        <RouterProvider router={routers} />
    );
}

export default Routes;
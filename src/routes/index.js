import config from '../configs/index';
import HomePage from '../pages/homePage/homePage.jsx';
import ProductPage from '../pages/productPage/productPage.jsx';
import BlogPage from '../pages/blogPage/blogPage.jsx';
import ContactPage from '../pages/contactPage/contactPage.jsx';
import LoginPage from '../pages/loginPage/loginPage';
import RegisterPage from '../pages/registerPage/registerPage';
export const publicRoutes = [
    {
        path: config.routes.login,
        needShowSideMenu: false,
        element: <LoginPage />,
    },
    {
        path: config.routes.home,
        needShowSideMenu: true,
        element: <HomePage />,
        label: 'Home',
    },
    {
        path: config.routes.product,
        needShowSideMenu: true,
        element: <ProductPage />,
        label: 'Product',
    },
    {
        path: config.routes.blog,
        needShowSideMenu: true,
        element: <BlogPage />,
        label: 'Blog Entries',
    },
    {
        path: config.routes.contact,
        needShowSideMenu: true,
        element: <ContactPage />,
        label: 'Contact us',
    },
    {
        path: config.routes.register,
        needShowSideMenu: false,
       element:<RegisterPage/>
    },
];

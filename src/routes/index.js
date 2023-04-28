import config from '~/configs';
import BlogPage from '~/pages/blogPage/blogPage';
import CartPage from '~/pages/cart/CartPage';
import ContactPage from '~/pages/contactPage/contactPage';
import HomePage from '~/pages/homePage/homePage';
import LoginPage from '~/pages/loginPage/loginPage';
import ProductPage from '~/pages/productPage/productPage';
import RegisterPage from '~/pages/registerPage/registerPage';

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
        element: <RegisterPage />,
    },
    {
        path: config.routes.cart,
        needShowSideMenu: true,
        element: <CartPage />,
        label: 'Cart',
    },
];

import './pageLayout.scss';
import Header from '../components/header/header.jsx'
import Footer from '~/components/footer/footer';
export default function PageLayout({ children }) {
    return (
        <div className='default__layout-container'>  
            <Header />
            {children}
            <Footer />
        </div>
    );
}


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Home from '../pages/home';
import Categories from '../pages/categories';

function Router() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="business" element={<Categories cat={"business"}/>} />
                <Route path="entertainment" element={<Categories cat={"entertainment"}/>} />
                <Route path="sports" element={<Categories cat={"sports"}/>} />
                <Route path="science" element={<Categories cat={"science"}/>} />
                <Route path="technology" element={<Categories cat={"technology"}/>} />
                <Route path="health" element={<Categories cat={"health"}/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;
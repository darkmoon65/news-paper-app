
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Header from '../components/header/header';

function Router() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="business" element={"el"} />
                <Route path="entertainment" element={"el"} />
                <Route path="sports" element={"el"} />
                <Route path="science" element={"el"} />
                <Route path="health" element={"el"} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
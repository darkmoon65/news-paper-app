
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import Home from '../pages/home';
import Sports from '../pages/sports';
import Politics from '../pages/politics';
import Economics from '../pages/economics';
import Culture from '../pages/culture';
import Current from '../pages/current';

function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="sports" element={<Sports />} />
                <Route path="politics" element={<Politics />} />
                <Route path="economics" element={<Economics />} />
                <Route path="culture" element={<Culture />} />
                <Route path="current" element={<Current />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
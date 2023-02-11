import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import {useParams} from "react-router-dom";
import './detail.css'

const Detail = () => {
    
    const [news, setNews] = useState({})

    let { id } = useParams();
    const d = useRef();
    
    useEffect(() => {
        fetchNew();
    //eslint-disable-next-line
    },[]);

    const fetchNew = () => {

        const api = `http://127.0.0.1:8000/api-article/top-headlines/${id}`
           
        fetch(api)
            .then(res => res.json())
            .then(data => {
                setNews(data);
            }).catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        console.log(d);
        d.current.innerHTML = news.content;
    }, [d, news.content]);

    return (
        <div className="content-detail" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', margin: 'auto'}}>
            <div className="content-detail-items">
                <h2> {news.title}</h2>
                <p>  {news.description}</p>
                <img src={news.urlToImage} className="content-detail-img" alt={news.title}/>
                <div ref={d} className='content-container' style={{display: 'flex', flexDirection: 'column'}}></div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <p>Unete a Papers News para seguir toda la actualidad </p>
                    <Link to="/suscription" className="enter-button">Suscribete</Link>
                </div>
            </div>
            <div>
                <h2>Lo mas visto</h2>
                <p>1. Un trozo del paraiso convertido en sepultura </p>
                <p>2. "Que sean libres yo pago la condena de ellos" </p>
                <p>3. "Terremotos en turquia ultima hora en directo"</p>

                <h2>Donacion</h2>
                <p>Imagen</p>
            </div>
        </div>
    )
}

export default Detail;
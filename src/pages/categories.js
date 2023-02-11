import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Article from '../components/article/article';

const Categories = ({ cat }) => {

    const [news, setNews] = useState([]),
        [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
        setNews([]);
    }, [cat]);


    useEffect(() => {
        fetchNews();
        //eslint-disable-next-line
    }, [cat, page]);


    const fetchNews = () => {

        const api = cat
            ? `http://127.0.0.1:8000/api-article/top-headlines/article-by/?page=${page}&category=${cat}`
            : `http://127.0.0.1:8000/api-article/top-headlines/?page=${page}`;

        fetch(api)
            .then(res => res.json())
            .then(data => {
                data?.results && setNews([...news, ...data.results]);
                if(page < Math.ceil(data.count / 6)) {
                    setPage(page + 1);
                }
            }).catch(error => {
                console.log(error);
            });
    };

    return (
        <main style={{width: '100%', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', minHeight: '73.1vh'}}>
            <div className='container-article' id='infiniteScroll'>
                <InfiniteScroll
                    dataLength={news.length}
                    next={fetchNews}
                    hasMore={true}
                    loader={""}
                    scrollableTarget="infiniteScroll"
                >
                    <div className='grid'>
                        {news.length !== 0 ? news.map((article, index) => {
                            return (
                                <Article article={article} key={article.id} index={index}></Article>
                            );
                        }) : <p style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold', gridColumn: 'span 3', margin: '20px 0'}}>No existen noticias para la categoría seleccionada</p>}
                    </div>
                </InfiniteScroll>
            </div>
        </main>
    );
};

export default Categories;
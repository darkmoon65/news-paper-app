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
    }, [page]);


    const fetchNews = () => {

        const api = cat
            ? `http://127.0.0.1:8000/api-article/top-headlines/article-by/?category=${cat}&page=${page}`
            : `http://127.0.0.1:8000/api-article/top-headlines/?page=${page}`;

        fetch(api)
            .then(res => res.json())
            .then(data => {
                setNews([...news, ...data.results]);
                if(page < Math.ceil(data.count / 5)) {
                    setPage(page + 1);
                }
            }).catch(error => {
                console.log(error);
            });
    };

    return (
        <main style={{width: '100%', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
            <div className='container-article' id='infiniteScroll'>
                <InfiniteScroll
                    dataLength={news.length}
                    next={fetchNews}
                    hasMore={true}
                    loader={""}
                    scrollableTarget="infiniteScroll"
                >
                    <div className='grid'>
                        {news.map((article, index) => {
                            return (
                                <Article article={article} key={article.id} index={index}></Article>
                            );
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </main>
    );
};

export default Categories;
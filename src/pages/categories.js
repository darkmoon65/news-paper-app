import { useEffect, useState } from 'react';
import { helpHttp } from '../api/helpHttp';
import Loader from '../components/loader/loader';
import Message from '../components/message/message';

const Categories = ({ cat }) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const endpoint = "http://127.0.0.1:8000/api-article/top-headlines/";

    useEffect(() => {
        
        setLoading(true);
        helpHttp().get(
            cat
                ? `${endpoint}article-by/?category=${cat}`
                : endpoint
        ).then(res => {
            if (!res.err) {
                setData(res);
                setError(null);
            } else {
                setData(null);
                setError(res);
            }
            setLoading(false);
        });

    }, [cat]);

    return (
        <main>
            {loading && <Loader />}
            {error && <Message error={error} />}
            {
                data ? data.results.map((article) => (
                    <article>
                        {console.log(article)}
                    </article>
                ))
                    : ""
            }
        </main>
    );
};

export default Categories;
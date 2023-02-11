import { Link } from 'react-router-dom';
import './article.css';

const Article = ({ article, index }) => {
    const { title, description, urlToImage, publishedAt, id } = article;
    return (
        <>
            <article>
                <div>
                    <div>
                        <Link to={'/detail/' + id}>{title}</Link>
                        {
                            index === 0
                                ? <p>{description}<br/><span style={{fontSize: '14px', color: 'black', fontWeight: 'bold'}}>Publicado el día {publishedAt}</span><br/><span>⭐Exclusive content for premium</span></p>
                                : ""
                        }
                    </div>
                    <figure style={{ width: "100%", margin: "0 auto" }}>
                        <img src={urlToImage}
                            alt="" />
                    </figure>
                </div>
            </article>
        </>
    );
};

export default Article;
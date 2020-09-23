import React, { useEffect, useState }from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './component/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey = '3b6bda96db4f8238aceb4492bc52a7d42e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command , articles}) =>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
            }
        })
    }, [])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img className={classes.alanLogo}src="https://res.cloudinary.com/springboard-images/image/upload/q_auto,f_auto,fl_lossy/wordpress/2018/08/Blog-AI.png" alt="alan logo"/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}
export default App;
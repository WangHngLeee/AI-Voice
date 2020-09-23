import React, { useEffect, useState }from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './component/NewsCards/NewsCards';
import useStyles from './styles.js';
import wordsToNumber from 'words-to-numbers';

const alanKey = '3b6bda96db4f8238aceb4492bc52a7d42e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command , articles, number}) =>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }else if(command === 'highlight'){ 
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }else if(command === 'open'){
                    const parsedNumber = number.length > 2 ? wordsToNumber(number, {fuzzy : true}) : number;
                    const article = articles[parsedNumber-1]
                    if(parsedNumber > 20){
                        alanBtn().playText('Please try that again.');
                    }else if(article){
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    }
                }
            }
        })
    }, [])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img className={classes.alanLogo}src="https://hrasiamedia.com/2017/wp-content/uploads/2019/04/20190402-HRAsia-Magazine-Website-AI-to-Complement-HR-Image.jpg" alt="alan logo"/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}
export default App;
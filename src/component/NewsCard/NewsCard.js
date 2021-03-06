import React, {useState, useEffect, createRef} from 'react'
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './styles.js'
import classNames from 'classnames';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import cx from 'clsx';
import FlexyTag from '../FlexyTag/FlexyTag';

const NewsCard = ({article:{ description, publishedAt, source, title, url, urlToImage}, i, activeArticle }) => {
    const classes = useStyles();
    const [elRefs, setElrefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0,ref.current.offsetTop - 50);
    const shadowStyles = useBouncyShadowStyles();

    useEffect(() => {
        setElrefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if(i === activeArticle && elRefs[activeArticle]){
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs]);

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, cx(classes.card, shadowStyles.root), activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://st.depositphotos.com/1152339/1972/i/950/depositphotos_19723583-stock-photo-news-concept-news-on-digital.jpg'}/>
                <div className={classes.details}>
                    <Typography variant="body2" color = "textSecondary" component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color = "textSecondary" component='h2'>{source.name}</Typography>
                </div>
                <Typography className={classes.title}gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color="textSecondary" component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <FlexyTag >Learn More</FlexyTag>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}
export default NewsCard;

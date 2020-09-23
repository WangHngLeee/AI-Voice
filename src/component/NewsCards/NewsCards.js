
import React from 'react';
import { Grid, Grow } from '@material-ui/core';
import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles.js';
import '../style.css';
import StyleCard from '../StyleCard/StyleCard';

const infoCards = [
  { color: '#00838f', url : "https://file03.16sucai.com/2017/1100/16sucai_v567c127_6ec.JPG", title: 'Latest', text: 'The latest news', info: "Try to say something like this : ' Give me the latest news ! ' " },
  { color: '#1565c0', url: "https://picnew13.photophoto.cn/20190310/zisejianyuebianpinghuajianbianguanggaobeijing-33121883_1.jpg", title: 'By Categories', info: "Try any categories like Sport. Just say : 'Give me the latest xxx news ", text: 'News by category' },
  { color: '#4527a0', url: "https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-purple-geometric-flat-texture-poster-background-image_210018.jpg", title: 'By Terms', info: "Try any temrs like Trump. Just say : ' What's up with xxx ? '", text: 'Search Terms' },
  { color: '#283593', url: "https://www.newswhip.com/wp-content/uploads/2016/06/Images-for-first-page-articles-57-1080x675.jpg", title: 'By Sources', info: "Try any brand like CNN. Just say : ' Give me the latest xxx news '", text: 'Brand News' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              {/* <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div> */}
              <StyleCard infoCard={infoCard}/>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            {/* <StyleNewCard article={article}/> */}
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
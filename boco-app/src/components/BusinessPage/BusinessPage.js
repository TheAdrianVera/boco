import React, { Component, PropTypes } from 'react';
import './BusinessPage.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import SplitPane from 'react-split-pane';



const styles = {
  root: {
    paddingTop: 30,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 700,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: "https://s-media-cache-ak0.pinimg.com/originals/55/69/44/55694430d8016411e0ee19bf43ead445.jpg",
    title: 'Everett and Jones',
    author: 'Oakland, CA',
  },
  {
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/5V6C20ndzmLbp6_ZmdQpkw/180s.jpg",
    title: 'Home of Chicken and Waffles',
    author: 'Oakland, CA',
  },
  {
    img: "https://oaklandnorth.net/wp-content/uploads/2012/12/Ollies1-620x412.jpg",
    title: 'Miss Ollie\'s',
    author: 'Oakland, CA',
  },
  {
    img: "http://s3.amazonaws.com/localon_user_uploads/upload-682820142832149764.png",
    title: 'Kingston 11 Cuisine',
    author: 'Oakland, CA',
  },
  {
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/1u8kS48Nm8hXUsdzZHjIYw/ls.jpg",
    title: 'Brown Sugar Kitchen',
    author: 'Oakland, CA',
  },
  {
    img: "http://s3.amazonaws.com/movotoblog/2013/07/oakland/allgood.jpg",
    title: 'It\'s All Good Bakery',
    author: 'Oakland, CA',
  },

];

const CardExampleWithAvatar = () => (
  <Card>

    <CardMedia
      overlay={<CardTitle title="Lena's Soul Food Cafe" />}
    >
      <img src="https://d3ciwvs59ifrt8.cloudfront.net/90664189-6e33-4c32-a238-748a0f199921/450b9c33-e893-4cae-8cd0-034ec8ad76f9.jpg" alt="" />
    </CardMedia>
    <SplitPane defaultSize="55%" split="vertical">
      <div>

        <h2>ADDRESS </h2>
        <h3>
          <p>1462 High St,</p>
          <p>Oakland, CA 94601 </p>
        </h3>
        <h2> CONTACT </h2>
        <h3>
          <p>Phone: (510) 842-3510</p>
          <p>Email: lenassoulfoodcafe.com </p>
        </h3>
        <h2> HOURS </h2>
        <h3>
          <p>Mon	Closed</p>
          <p>Tue	11:00 am - 8:00 pm</p>
          <p>Wed	11:00 am - 8:00 pm</p>
          <p>Thu	11:00 am - 8:00 pm</p>
          <p>Fri	11:00 am - 8:00 pm</p>
          <p>Sat	11:00 am - 8:00 pm</p>
          <p>Sun	11:00 am - 8:00 pm</p>
        </h3>
        <h2> ABOUT </h2>
        <h3>
            <p> Lena Mae Peters was born April 15, 1935 in Wharton Texas. She spent most of her childhood days growing up in and around the Houston, Texas area. At the age of 16, she migrated to Sacramento, California, where she lived with her aunt and uncles that had already moved there from Texas.

Like most young girls from the south during that time, Lena learned at a young age the ways of the kitchen. Lena learned to cook anything, but she particularly learned the style of southern cooking, also known as Soul Food. Lena became an outstanding cook and it would come in handy as she began to start her own family.

In 1955, Lena married Fred Henry Andrews and later they moved from Sacramento to the Bay Area. From their union they gave birth to 5 children-Fred Jr, Mario, Cynthia, Angelo, and Calvin. With seven mouths to feed, being able to cook was essential. Each night Lena would have to make massive meals to feed her family.

Cooking every night for a family of seven is a very tough task and Lena had a great idea to make things a little easier for her over time. Her idea was to teach each of the kids at a young age the ways of the kitchen. By the time each kid was a teenager, they had the ability to cook an entire dinner for the family. Her plan worked like a charm. From the oldest Andrews to the youngest, boy or girl can cook with the best of them.

As an Andrews child, once you were old enough, you were assigned a week that you had to prepare dinner for the family. Over the years each child honed their skills under the guidance of their mother.

Lena Mae Andrews passed away November 30, 2004. Lena's Soul Food Cafe is the creation of her five children and two grandchildren in honor of her cooking legacy. </p>
        </h3>
      </div>
      <div>
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
            <Subheader>RELATED PLACES</Subheader>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span>in <b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              >
                <img src={tile.img} />

              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    </SplitPane>

  </Card>

);


this.propTypes = {
  businessRelated: PropTypes.object,
  businesses: PropTypes.object,
};


// export default CardExampleWithAvatar;

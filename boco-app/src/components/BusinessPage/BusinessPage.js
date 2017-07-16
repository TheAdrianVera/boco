// import React, { Component, PropTypes } from 'react';
// import './BusinessPage.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import SplitPane from 'react-split-pane';



// const styles = {
//   root: {
//     paddingTop: 30,
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//     overflowY: 'auto',
//   },
// };

// <<<<<<< HEAD
// const tilesData = [
//   {
//     title: 'Breakfast',
//     author: 'jill111',
//   },
//   {
//     img: 'images/grid-list/burger-827309_640.jpg',
//     title: 'Tasty burger',
//     author: 'pashminu',
//   },
//   {
//     img: 'images/grid-list/camera-813814_640.jpg',
//     title: 'Camera',
//     author: 'Danson67',
//   },
//   {
//     img: 'images/grid-list/morning-819362_640.jpg',
//     title: 'Morning',
//     author: 'fancycrave1',
//   },
//   {
//     img: 'images/grid-list/hats-829509_640.jpg',
//     title: 'Hats',
//     author: 'Hans',
//   },
//   {
//     img: 'images/grid-list/honey-823614_640.jpg',
//     title: 'Honey',
//     author: 'fancycravel',
//   },
//   {
//     img: 'images/grid-list/vegetables-790022_640.jpg',
//     title: 'Vegetables',
//     author: 'jill111',
//   },
//   {
//     img: 'images/grid-list/water-plant-821293_640.jpg',
//     title: 'Water plant',
//     author: 'BkrmadtyaKarki',
//   },
// ];
// =======
// const tilesData = [
//   {
//     img: this.props.businesses[1].image_url,
//     title: 'Breakfast',
//     author: 'jill111',
//   },
//   {
//     img: 'images/grid-list/burger-827309_640.jpg',
//     title: 'Tasty burger',
//     author: 'pashminu',
//   },
//   {
//     img: 'images/grid-list/camera-813814_640.jpg',
//     title: 'Camera',
//     author: 'Danson67',
//   },
//   {
//     img: 'images/grid-list/morning-819362_640.jpg',
//     title: 'Morning',
//     author: 'fancycrave1',
//   },
//   {
//     img: 'images/grid-list/hats-829509_640.jpg',
//     title: 'Hats',
//     author: 'Hans',
//   },
//   {
//     img: 'images/grid-list/honey-823614_640.jpg',
//     title: 'Honey',
//     author: 'fancycravel',
//   },
//   {
//     img: 'images/grid-list/vegetables-790022_640.jpg',
//     title: 'Vegetables',
//     author: 'jill111',
//   },
//   {
//     img: 'images/grid-list/water-plant-821293_640.jpg',
//     title: 'Water plant',
//     author: 'BkrmadtyaKarki',
//   },
// ];
>>>>>>> e1aae99fda4581bd4f0d7b9784095eaabb3ef831

// const CardExampleWithAvatar = () => (
//   <Card>
    
//     <CardMedia
//       overlay={<CardTitle title="RESTAURANT NAME" />}
//     >
//       <img src="https://d3ciwvs59ifrt8.cloudfront.net/90664189-6e33-4c32-a238-748a0f199921/450b9c33-e893-4cae-8cd0-034ec8ad76f9.jpg" alt="" />
//     </CardMedia>
//       <SplitPane defaultSize="55%" split="vertical">
//        <div>
   
//      <h1> NAME </h1>
//      <h2> ADDRESS </h2>
//      <h2> CONTACT </h2>
//      <h2> HOURS </h2>
//      <h2> ABOUT </h2>
// </div>
//        <div>
//   <div style={styles.root}>
//     <GridList
//       cellHeight={180}
//       style={styles.gridList}
//     >
//       <Subheader>RELATED PLACES</Subheader>
//       {tilesData.map((tile) => (
//         <GridTile
//           key={tile.img}
//           title={tile.title}
//           subtitle={<span>by <b>{tile.author}</b></span>}
//           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//         >
//           <img src={tile.img} />
          
// <<<<<<< HEAD
//         </GridTile>
//       ))}
//     </GridList>
//   </div>
//   </div>
//   </SplitPane> 
// =======
// //         </GridTile>
// //       ))}
// //     </GridList>
// //   </div>
// //   </div>
// //   </SplitPane>
// >>>>>>> e1aae99fda4581bd4f0d7b9784095eaabb3ef831
    
//   </Card>
  
// );


// this.propTypes = {
//     businessRelated: PropTypes.object,
//     businesses: PropTypes.object,
// };


// export default CardExampleWithAvatar;

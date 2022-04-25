// This component file displays all the ML categories in the main page.
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

//  list the static images for the page
const itemData = [
  {
    img:
      'https://www.freelancinggig.com/blog/wp-content/uploads/2017/08/Programming-Languages-For-Face-Recognition.jpg',
    title: 'Face Detection',
  },
  {
    img:
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Detected-with-YOLO--Schreibtisch-mit-Objekten.jpg',
    title: 'Object Detection',
  },
  {
    img:
      'https://www.researchgate.net/profile/Md-Islam-1141/publication/331373648/figure/fig1/AS:730814132264965@1551251075247/Applications-of-text-detection-and-recognition-a-Robotic-navigation-b-Automatic_Q320.jpg',
    title: 'Text Detection',
  },
  {
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55jwRrZOTObvtHSXQRQMbi_QACFKYMtHogA&usqp=CAU',
    title: 'Logo Detection',
  },
];

export default function MlCategories() {
  return (
    // sx={{ width: 500, height: 450 }}
    <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight="200">
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

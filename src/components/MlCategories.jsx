// This component file displays all the ML categories in the main page.
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ExploreCagoryModal from './ExploreCategoryModal';
import itemData from '../categoryImages';

export default function MlCategories() {
  return (
    <ImageList>
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
          <ExploreCagoryModal item={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

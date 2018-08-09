import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card'

const AlbumDetail = (probs) => {

   return (
     <Card >
     <Text>{probs.album.title} </Text>
     </Card>
   );
};

export default AlbumDetail;

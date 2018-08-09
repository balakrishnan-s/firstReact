import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import Cardsection from './Cardsection';

const AlbumDetail = (probs) => {

   return (
     <Card >
       <Cardsection>
        <Text>{probs.album.title} </Text>
       </Cardsection>

       
     </Card>
   );
};

export default AlbumDetail;

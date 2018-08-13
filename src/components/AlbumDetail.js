import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import Cardsection from './Cardsection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle, headerContentStyle,
    thumbnailContainerStyle, headerTextStyle, imageStyle
  } = styles;

   return (
     <Card >
         <Cardsection>
           <View style={thumbnailContainerStyle}>
              <Image
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }}
              />
           </View>
           <View style={headerContentStyle} >
              <Text style={headerTextStyle}>{ title } </Text>
              <Text>{ artist } </Text>
            </View>
         </Cardsection>
       <Cardsection>
        <Image
        style={imageStyle}
        source={{ uri: image }}
        />
       </Cardsection>

       <Cardsection>
        <Button onPress={() => Linking.openURL(url)} />
       </Cardsection>
     </Card>
   );
};
const styles = {
    headerContentStyle: {
      flexDirectoin: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'flex-start',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
};

export default AlbumDetail;

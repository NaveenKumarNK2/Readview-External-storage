import React, { useState } from 'react';
import {View, StyleSheet,PermissionsAndroid, Platform,Image} from 'react-native';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

import RNFetchBlop from 'rn-fetch-blob';

const ImageScreen = () => {

    const [base64Icon,setBase64Icon] = useState("");

   

    async function requestFileReadingPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              'title': 'Read  Files',
              'message': 'This app needs permission to read files from your device.'
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can read files")
          } else {
            console.log("Read files permission denied")
          }
        } catch (err) {
          console.warn(err)
        }
      }
    
      if(Platform.OS === 'android') {
        
        requestFileReadingPermission()
      }

      RNFetchBlop.fs.readFile('///storage/emulated/0/Cricket.jpg','///storage/emulated/0/Bike.jpg',
       'base64')
      .then((data) => {
        setBase64Icon(`${data}`)
      }).catch((error)=>{
        console.log("api call error");
        alert(error.message);
      })

return(
    <View>
        <Image style={{width: 150,height: 150,resizeMode:'contain',
        borderWidth:1,borderColor:'red'}}
        source={{uri:('file:///storage/emulated/0/Cricket.jpg'),
         base64Icon}}/>
      <Image style={{width: 150,height: 150,resizeMode:'contain',
        borderWidth:1,borderColor:'red'}}
        source={{uri:('file:///storage/emulated/0/Bike.jpg'),
         base64Icon}}/>
    </View>
)
}
const styles = StyleSheet.create({});
export default ImageScreen;
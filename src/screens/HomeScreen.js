import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
} from 'react-native';

import RNFetchBlop from 'rn-fetch-blob';


export default class App extends React.Component {
  proceed() {
    alert('You can use the STORAGE');
  }

  onPress = () => {
    var that = this;
    
    async function requestREAD_EXTERNAL_STORAGEPermission() {
    
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'AndoridPermissionExample App READ_EXTERNAL_STORAGE Permission',
          message: 'AndoridPermissionExample App needs access to your READ_EXTERNAL_STORAGE',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        that.proceed();
      } else {
        alert('READ_EXTERNAL_STORAGE Permission Denied.');
      }
    }
    if (Platform.OS === 'android') {
      requestREAD_EXTERNAL_STORAGEPermission();
    } else {
      this.proceed();
    }
    RNFetchBlop.fs.readFile('/storage/emulated/0/Cricket.jpg', 'base64')
    .then((data) => {
      console.log(data)
    }).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
   })

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Ask Permission for Storage</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
import React from 'react';
import {View,Image,StyleSheet,Text,ImageBackground,TouchableOpacity} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
   <View style={styles.container}>
        <ImageBackground
      source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/714/61/desktop-wallpaper-cartoon-blue-sky-white-clouds-anime-sky-iphone.jpg' }}
      style={styles.background}
      >
        
      <Text style={styles.header}>Welcome to our Fantasy!!</Text>
      <Image
        source={{ uri: 'https://m.media-amazon.com/images/I/61ewR1JDGQL._AC_UF1000,1000_QL80_.jpg' }} 

        style={styles.image}
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={{justifyContent: "center", alignItems: "center", width: "80%", height: 40, backgroundColor: "purple",borderRadius:30}} onPress={() => navigation.navigate('SignInScreen')}>
        <Text style={{color: "white"}}>Sign in</Text>
      </TouchableOpacity>

        <TouchableOpacity style={{justifyContent: "center", alignItems: "center", width: "80%", height: 40, backgroundColor: "purple", marginTop: 20,borderRadius:30}} onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={{color: "white"}}>New User</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent: "center", alignItems: "center", width: "80%", height: 40, backgroundColor: "purple", marginTop: 20,borderRadius:30}} onPress={() => navigation.navigate('TabBarScreen')}>
        <Text style={{color: "white"}}>Continue as Guest</Text>
      </TouchableOpacity>
     
      </View>
    </ImageBackground>
    </View>
   
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue'
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 200,
    color: 'black', 
    textAlign: 'center',
  },
  image: {
    width: 450,
    height: 300,
    marginBottom: 100,
    borderRadius: 5, 
    overflow: 'hidden', 
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 10,
   alignItems:'center',
   borderRadius:50,
  justifyContent: "space-between" 
  },
  button: {
    flex: 1,  
    borderRadius: 50, 
    overflow: 'hidden', 
    marginHorizontal: 5,
  },
});
export default WelcomeScreen;
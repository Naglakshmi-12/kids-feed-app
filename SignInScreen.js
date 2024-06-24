import React,{useState} from 'react';
import {View, Button,Text, ImageBackground,Alert, StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
   
    if (email === 'user@example.com' && password === 'password') {
      
      navigation.navigate('TabBarScreen');
    } else {
      Alert.alert('Error', 'Invalid email or password.');
    }
  };
  return (
      <ImageBackground
      source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/246/768/desktop-wallpaper-yongieee-on-%E4%B8%80%E4%BA%8C-bubu-dudu-thumbnail.jpg' }} 
      style={styles.background}
    >
  
    <View style={styles.container}>
    
    <Text style={styles.headerText}>Login to your Account</Text>
    <Icon name="user" size={100} color="black" style={styles.icon}></Icon>
    <TextInput
        placeholder="Email"
        placeholderTextColor="black"
        onChangeText={setEmail}
        value={email}
        style={[styles.input, { color: 'black' }]}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="black"
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Sign In"
     onPress={() => navigation.navigate('TabBarScreen') } 
     color='purple'/>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
    
  },
  icon: {
    marginBottom: 20, 
     
  },
  Button: {
    width:30, 
    height: 40, 
  },
  buttonText: {
    color: 'black', 
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});


export default SignInScreen;
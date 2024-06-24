import React, {useState} from 'react';
import {View, Button, Text, TextInput, StyleSheet,ImageBackground} from 'react-native';

 
const SignUpScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = () => {
    
    console.log('Signing up...');
    navigation.navigate('TabBarScreen');
  };


  return (
    <ImageBackground
    source={{ uri: 'https://marketplace.canva.com/EAFvAgA7mQY/1/0/900w/canva-colorful-cute-anime-cartoon-illustration-phone-wallpaper-5ZLagTC09_4.jpg' }} 
    style={styles.background}
  >
    <View style={styles.container}>
    <Text style={styles.header}>Create New Account</Text>
    <TextInput
      style={styles.input}
      placeholder="Email"
      placeholderTextColor="black"
      value={email}
      onChangeText={setEmail}
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      placeholderTextColor="black"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />
    <TextInput
      style={styles.input}
      placeholder="Confirm Password"
      placeholderTextColor="black"
      secureTextEntry
      value={confirmPassword}
      onChangeText={setConfirmPassword}
    />
    <TextInput
      style={styles.input}
      placeholder="Phone Number"
      placeholderTextColor="black"
      secureTextEntry
      value={PhoneNumber}
      onChangeText={setPhoneNumber}
    />
     <Button title="Join" onPress={() => navigation.navigate('TabBarScreen') }
     color='purple' />
      <Text style={styles.signInText}>
        Already have an account?{
}
        <Text style={styles.signInLink} onPress={() => navigation.navigate('SignInScreen')}>
          Sign In
          
          </Text>
      </Text>
     
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
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color:'black'
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  signInText: {
    marginTop: 20,
    marginLeft:200,
    color:'black',
    fontSize: 16,

  },
  signInLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
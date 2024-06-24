import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,TouchableOpacity,Text,ImageBackground} from 'react-native';

const EditProfileScreen = ({ navigation, route }) => {
  const [profile, setProfile] = useState(route.params.profile);
  const [selectedGender, setSelectedGender] = useState(profile.gender || '');

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/hd/blue-aesthetic-we-bare-bears-p5aap6j0zqf5c3bi.jpg' }}
      style={styles.background}
      >
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="black"
        value={profile.name}
        onChangeText={(text) => setProfile({ ...profile, name: text })}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="black"
        value={profile.phoneNumber}
        onChangeText={(text) => setProfile({ ...profile, phoneNumber: text })}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="black"
        value={profile.email}
        onChangeText={(text) => setProfile({ ...profile, email: text })}
        keyboardType="email-address"
      />
      <View style={styles.genderContainer}>
        <Text style={styles.label}>Gender:</Text>
        <TouchableOpacity
          style={[styles.genderButton, selectedGender === 'male' && styles.selectedGender]}
          onPress={() => setSelectedGender('male')}
        >
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, selectedGender === 'female' && styles.selectedGender]}
          onPress={() => setSelectedGender('female')}
        
        >
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>
      <Button title="Save Changes" 
      color='purple'
   onPress={() => navigation.navigate('ProfileScreen') }

       />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 360,
    fontSize:18
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginRight: 10,
    color:'black',
    fontSize:18
  },
  genderButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedGender: {
    backgroundColor: 'red',
  },
  genderText: {
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
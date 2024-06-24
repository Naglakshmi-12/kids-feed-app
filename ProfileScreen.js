import React from 'react';
import {View,Image,TouchableOpacity, Text,StyleSheet,ImageBackground} from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const childProfile = {
  
    name: "John Doe",
    email: "john.doe@example.com",
    mobileNumber: "123-456-7890",
    gender: "Male",
    profileImage: "https://cdn4.sharechat.com/compressed_gm_40_img_222734_19dc90f0_1695962219625_sc.jpg?tenant=sc&referrer=tag-service&f=625_sc.jpg", 
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', { profile: childProfile });
  };


  return (
    <ImageBackground
      source={{ uri: 'https://i.pngimg.me/thumb/f/720/comrawpixel6202990.jpg' }}
      style={styles.background}
      >
    <View style={styles.container}>
      <Image source={{ uri: childProfile.profileImage }} style={styles.profileImage} />
      <Text style={styles.name}>{childProfile.name}</Text>
      <Text style={styles.email}>Email: {childProfile.email}</Text>
      <Text style={styles.mobileNumber}>Mobile Number: {childProfile.mobileNumber}</Text>
      <Text style={styles.gender}>Gender: {childProfile.gender}</Text>
      
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  age: {
    fontSize: 18,
    marginBottom: 20,
    color:'black'
  },
  gender: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  email: {
    fontSize: 18,
    marginBottom: 10,
    color:'black'
  },
  mobileNumber: {
    fontSize: 18,
    marginBottom: 20,
    color:'black'
  },
   editButton: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 360,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default ProfileScreen;
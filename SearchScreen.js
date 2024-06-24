import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet,ImageBackground} from 'react-native';

const SearchScreen = () => {

    const searchCategories = [
      'Nursery Rhymes and songs',
      'DIY & crafts',
      'Story Time',
      'Cooking and Baking',
      'Dance and Exercise',
      'Cartoons & Animated Series',
    ];
  
    const handleCategorySelect = (category) => {
      
      console.log('Selected category:', category);
    };
  
    return (
        <ImageBackground
            source={{ uri: 'https://w0.peakpx.com/wallpaper/102/124/HD-wallpaper-minions-blue-cartoon-cute-friends.jpg' }} 
            style={styles.background}
        >
      <View style={styles.container}>
        <Text style={styles.title}>Choose Your Favourites</Text>
        <View style={styles.categoriesContainer}>
          {searchCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryButton}
              onPress={() => handleCategorySelect(category)}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      </ImageBackground>
    );
  };
  const styles = StyleSheet.create({
    
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    categoriesContainer: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    categoryButton: {
      backgroundColor: 'purple',
      borderRadius: 100,
      paddingVertical: 10,
      paddingHorizontal: 20,
      margin: 10,
    },
    categoryText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign:'center'
    },
  });
  
export default SearchScreen;
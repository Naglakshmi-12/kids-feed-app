import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,ImageBackground} from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Genre data
  const genres = [
    { id: '1', title: 'Rhymes & Songs', description: 'With catchy rhymes and rhythms we will make learning fun,Join us in this adventure, for everyone, big and small, there is something to be won.!' },
    { id: '2', title: 'DIY & Crafts', description: 'Step into the world of creativity where imagination knows no bounds welcome to our DIY and crafts app where inspiration abounds' },
    { id: '3', title: 'Story Time', description: 'Welcome to Story Times, where magic unfolds on every page,Come journey with us, no matter your age.From fairy tales to adventures bold.' },
    { id: '4', title: 'Cooking & Baking', description: 'Welcome to our cooking and baking hub,Where recipes are shared and flavors rub.From savory dishes to sweet delights,Join us in culinary heights.' },
    { id: '5', title: 'Dance and Exercise', description: 'Step into our world of movement and grace,Where dance and exercise find their place.So lace up your shoes and let In our app, where every move will improves get in the groove!!' },
    { id: '6', title: 'Cartoon & Animated series', description: 'Welcome to our animated wonderland,Where laughter and adventure go hand in hand.From classic cartoons to new tales untold,Our apps where imaginations unfold...' },

  ];

 
  const navigateToGenre = (genre) => {
    navigation.navigate('GenreScreen', { genre });
  };

  return (
    <ImageBackground
      source={{ uri: 'https://e0.pxfuel.com/wallpapers/987/388/desktop-wallpaper-cloud-iphone-blue-iphone-baby-blue-cute-blue-blue-clouds-iphone.jpg' }} 
      style={styles.background}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Kids Entertainment App</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.genresContainer}>
          {genres.map(genre => (
            <TouchableOpacity
              key={genre.id}
              style={styles.genreCard}
              onPress={() => navigateToGenre(genre)}
            >
              <Text style={styles.genreTitle}>{genre.title}</Text>
              <Text style={styles.genreDescription}>{genre.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  scrollView: {
    flexGrow: 1,
  },
  genresContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  genreCard: {
    backgroundColor: 'transparent',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    height:130,
    width: 350,
    elevation: 7, 
  },
  genreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
  },
  genreDescription: {
    fontSize: 16,
    color: 'black',
  },
});

export default HomeScreen;
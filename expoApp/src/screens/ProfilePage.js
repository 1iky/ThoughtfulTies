import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const GalleryItem = ({ imageSource }) => (
  <Image source={imageSource} style={styles.galleryImage} />
);

export default function ProfilePage() {
  const galleryData = [
    { id: '1', image: require('../../assets/images/user.jpeg') },
    { id: '2', image: require('../../assets/images/user.jpeg') },
    { id: '3', image: require('../../assets/images/user.jpeg') },
  ];

  const hobbies = ['Reading', 'Painting', 'Cooking', 'Cleaning', 'Bingo'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.appTitle}>Profile</Text>
        <Image source={require('../../assets/images/user.jpeg')} style={styles.profilePic} />
        <Text style={styles.name}>Bob Ross</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsItem}>86</Text>
          <Text style={styles.detailsItem}>         Male</Text>
          <Text style={styles.detailsItem}>New York</Text>
        </View>
        <View style={styles.hobbiesContainer}>
          {hobbies.map((hobby, index) => (
            <View key={index} style={styles.hobbyBubble}>
              <Text style={styles.hobbyText}>{hobby}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Gallery Container */}
      <Text style={styles.sectionTitle}>Gallery</Text>
      <View style={styles.galleryContainer}>
        <FlatList
          data={galleryData}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => <GalleryItem imageSource={item.image} />}
        />
      </View>

      {/* Bottom Header */}
      <View style={styles.bottomBubble}>
        <View style={styles.bottomHeader}>
          <TouchableOpacity style={styles.bottomButton}>
            <Image source={require('../../assets/images/user.jpeg')} style={styles.bottomButtonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}>
            <Image source={require('../../assets/images/user.jpeg')} style={styles.bottomButtonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}>
            <Image source={require('../../assets/images/user.jpeg')} style={styles.bottomButtonImage} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },

  appTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },

  profilePicContainer: {
    backgroundColor: '#8e70f5',
    borderRadius: 75,
    padding: 20, // Adjust padding as needed
    marginBottom: 10,
  },

  galleryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderBottomColor: '#Dcd7ea',
    borderTopColor: '#Dcd7ea',
    paddingVertical: 1,
    backgroundColor: '#Dcd7ea',
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
  },


  bottomBubble: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#8e70f5',
    paddingVertical: 1,
    backgroundColor: '#8e70f5',
    borderRadius: 50,
  },

  appTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },

  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%', 
    marginBottom: 25,
    marginTop: 25
  },
  detailsItem: {
    fontSize: 17,
    color: '#777',
  },

  hobbiesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  hobbyBubble: {
    backgroundColor: '#8e70f5',
    paddingVertical: 7, 
    paddingHorizontal: 20,
    borderRadius: 20,  
    marginHorizontal: 10,
    marginBottom: 10,
  },
  hobbyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold', 
  },
  sectionContainer: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  galleryImage: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 20,
  },

  bottomButtonImage: {
    width: 65,
    height: 65,
  },

  bottomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1, 
    margin: 5
    
  },

  bottomButton: {
    paddingVertical: 7, 
    paddingHorizontal: 7,
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5
  },
  
});

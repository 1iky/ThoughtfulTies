import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const GalleryItem = ({ imageSource }) => (
  <Image source={imageSource} style={styles.galleryImage} />
);

export default function ProfilePage() {
  const galleryData = [
    { id: '1', image: require('../../assets/images/user.jpeg') },
    { id: '2', image: require('../../assets/images/cat.jpeg') },
    { id: '3', image: require('../../assets/images/fish.jpeg') },
  ];

  const hobbies = ['Reading', 'Painting', 'Cooking', 'Cleaning', 'Bingo'];

  return (
    <View style={styles.container}>
        <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
            <Text style={styles.appTitle}>Profile</Text>
            <Image source={require('../../assets/images/userIcon.png')} style={styles.profilePic} />
            
            <View style={styles.nameContainer}>
                <Text style={styles.name}>Bob Ross</Text>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailsItem}>86</Text>
                <Text style={styles.detailsItem}>Male</Text>
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
                <Image source={require('../../assets/icons/messages.png')} style={styles.bottomButtonImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
                <Image source={require('../../assets/icons/newLogo.png')} style={styles.bottomButtonImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
                <Image source={require('../../assets/icons/profile.png')} style={styles.bottomButtonImage} />
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 40,
    color: '#000',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 15,
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
    borderTopWidth: 10,
    borderBottomWidth: 10,
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
    padding:10,
    marginTop: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%', 
    marginBottom: 10,
  },
  detailsItem: {
    fontSize: 17,
    color: '#777',
    textAlign: 'center',
  },
  hobbiesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
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
    padding: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 5,
  },
  galleryImage: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 25,
  },
  //image resize
  bottomButtonImage: {
    width: 42,
    height: 42,
    resizeMode: 'contain',
  },
  bottomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1, 
  },
  bottomButton: {
    paddingVertical: 10, 
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    paddingLeft: 5
  },
  nameContainer: {
    color: '#fff',
    padding: 20,
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
  },
  purpleBgContainer: {
    flex: 1,
    color: '#DCD7EA',
    padding: 20,
    borderRadius: 20,
  },
  
});

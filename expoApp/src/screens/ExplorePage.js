import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GalleryItem = ({ imageSource }) => (
  <Image source={imageSource} style={styles.galleryImage} />
);

export default function ExplorePage() {

  const profileData = {
    name: 'Granny Smith',
    age: 78,
    image: require('../../assets/images/userGranny.png'),
  };

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello Jane!</Text>
        <Text style={styles.subHeaderText}>Are you ready to explore some new friendships?</Text>
        <Image source={require('../../assets/icons/newLogo.png')} style={styles.headerImage} />
      </View>

      <Text style={styles.appTitle}>Explore</Text>

      {/* Profile Container */}
      <View style={styles.profileContainer}>
        <View style={styles.cardContainer}>
          <Image source={profileData.image} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{profileData.name}</Text>
            <Text style={styles.profileAge}>{profileData.age} years old</Text>
          </View>
        </View>

        {/* Thumbs Container */}
        <View style={styles.thumb}>
          {/* Thumbs Up Container */}
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.bottomButton}>
              <Image source={require('../../assets/icons/thumbsDown.png')} style={styles.bottomButtonImage} />
            </TouchableOpacity>
          </View>

          {/* Thumbs Down Container */}
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.bottomButton}>
              <Image source={require('../../assets/icons/thumbsUp.png')} style={styles.bottomButtonImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Header */}
      <View style={styles.bottomBubble}>
        <View style={styles.bottomHeader}>
          <TouchableOpacity style={styles.bottomButton}onPress={()=> navigation.navigate('Friends')}>
            <Image source={require('../../assets/icons/messages.png')} style={styles.bottomButtonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}onPress={()=> navigation.navigate('Explore')}>
            <Image source={require('../../assets/icons/newLogo.png')} style={styles.bottomButtonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={()=> navigation.navigate('Profile')}>
            <Image source={require('../../assets/icons/profile.png')} style={styles.bottomButtonImage} />
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
        backgroundColor: '#dcd7ea',  
        borderRadius: 20,
        padding: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },

    appTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
        textAlign: 'center',
        marginTop: 10,
      },
  
    header: {
      backgroundColor: '#8e70f5',
      height: '20%', 
      padding: 20,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
  
    headerText: {
      color: '#fff',
      fontSize: 30, 
      fontWeight: 'bold',
      marginTop: 60,
    },
  
    subHeaderText: {
      color: '#fff',
      fontSize: 14,
      marginTop: 10,
      marginBottom: 5,
    },
  
    headerImage: {
      position: 'absolute',
      top: 30,
      right: 20,
      width: 90, 
      height: 90, 
      borderRadius: 50,
    },
    cardContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImage: {
      width: 300,
      marginTop: 20,
      height: 300,
      borderRadius: 20,
    },
    profileInfo: {
      alignItems: 'center',
      marginTop: 20, 
    },
    profileName: {
      color: '#000000',
      fontSize: 24,
      fontWeight: 'bold',
    },
    profileAge: {
      color: '#000000',
      fontSize: 16,
      marginBottom: 20,
    },
    thumb: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20, 

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
      marginTop: 30,
      marginHorizontal:10,
    },
    bottomButtonContainer: {
      backgroundColor: '#8e70f5',
      //padding: 10,
      alignItems: 'center',
      borderRadius: 50,
      width: 75,
      marginHorizontal: 30,
      width: 110,
    },
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
  });
  
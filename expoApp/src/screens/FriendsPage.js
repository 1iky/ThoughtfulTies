import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GalleryItem = ({ imageSource }) => (
  <Image source={imageSource} style={styles.galleryImage} />
);

const ProfileDivider = () => (
    <View style={{ height: 1, backgroundColor: '#8e70f5', marginVertical: 10 }} />
  );
  

export default function Friends() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();
    const profiles = [
        { id: 1, name: 'Alice Smith', image: require('../../assets/images/friendA.png') },
        { id: 2, name: 'Jane Doe', image: require('../../assets/images/friendB.png') },
        { id: 3, name: 'John Doe', image: require('../../assets/images/friendC.png') },
        { id: 4, name: 'Bob Johnson', image: require('../../assets/images/friendD.png') },
        { id: 5, name: 'Johnson Bob', image: require('../../assets/images/friendE.png') },
      ];

      return (
        <View>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Connect With</Text>
            <Text style={styles.headerText}>Your Friends!</Text>
            <Image source={require('../../assets/icons/purpleLogo.png')} style={styles.headerImage} />
          </View>
    
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder='Search Friends...'
              placeholderTextColor='#777'
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>

          
          <FlatList
            data={profiles}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <View>
                <TouchableOpacity style={styles.profileButton} onPress={()=> navigation.navigate('Chat')}>
                <Image source={item.image} style={styles.profileButtonImage} />
                <Text style={styles.profileButtonText}>{item.name}</Text>
                </TouchableOpacity>
                <ProfileDivider />
            </View>
            )}
        />
    
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
      </View>
      );
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    searchContainer: {
        padding: 10,
        backgroundColor: '#fff',
      },
    
      searchInput: {
        height: 40,
        borderColor: '#8e70f5',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 25,
        marginLeft: 15,
        marginRight: 15,
      },

    header: {
      backgroundColor: '#F5C5AD',
      height: '20%', 
      padding: 20,
      justifyContent: 'flex-end',
      paddingBottom: 10,
      position: 'relative',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
  
    headerText: {
      color: '#fff',
      fontSize: 28, 
      fontWeight: 'bold',
      marginBottom: 2,
    },
  
    headerImage: {
      position: 'absolute',
      top: 50,
      right: 30,
      width: 100, 
      height: 100, 
      borderRadius: 50,
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
        marginTop: 50,
        marginHorizontal:10,
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

      profileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
      },
    
      profileButtonImage: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginRight: 20,
        marginLeft: 30,
      },
    
      profileButtonText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
      },

  });
  
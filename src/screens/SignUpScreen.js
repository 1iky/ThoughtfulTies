import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.purpleContainer}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Image
              source={require('../../assets/icons/back.png')} 
              style={styles.arrow}
          />
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/icons/newLogo.png')} />
        <Text style={styles.appTitle}>Thoughtful Ties</Text>
      </View>
      <View style={styles.whiteContainer}>
        <Text style={styles.title} >Sign Up</Text>
        <Text style={styles.textLabel} >Email Address</Text>
        <TextInput
          style={styles.textInput}
          placeholder='example@gmail.com'
          placeholderTextColor='#999'
        />
        <Text style={styles.textLabel} >Full Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder='First name, Last name'
          placeholderTextColor='#999'
        />
        <Text style={styles.textLabel} >Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Enter your password'
          placeholderTextColor='#999'
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate('Explore')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E70F5',
  },
  purpleContainer: {
    flex: 1, 
    backgroundColor: '#8E70F5',
  },
  whiteContainer: {
    backgroundColor: '#fff',
    height: 525,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    color: '#fff', 
  },
  textLabel: {
    fontSize: 13,
    marginBottom: 3,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000', 
  },
  textInput: {
    borderColor: '#FFFFFF',
    marginBottom: 25,
    padding: 12,
    fontSize: 16,
    borderRadius: 25,
    width: 325,
    color: '#333',
    backgroundColor: '#DCD7EA',
  },
  buttonContainer: {
    backgroundColor: '#F5C5AD',
    padding: 12,
    borderRadius: 40,
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  back: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  arrow: {
    width: 30,
    height: 30,
    marginTop: 60,
    marginLeft: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginLeft: 125,
    marginTop: 10,
  },

});
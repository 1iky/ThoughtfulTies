import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
      <View style={styles.purpleContainer}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <View style={styles.arrowButton}>
            <Text style={styles.back}>Back</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.appTitle}>ThoughtfulTies</Text>
      </View>
      <View style={styles.whiteContainer}>
        <Text style={styles.title} >Log In</Text>
        <Text style={styles.textLabel} >Email Address</Text>
        <TextInput
          style={styles.textInput}
          placeholder='example@gmail.com'
          placeholderTextColor='#999'
        />
        <Text style={styles.textLabel} >Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Enter your password'
          placeholderTextColor='#999'
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Log In</Text>
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 180,
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
    borderRadius: 25,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 500,
  },
  back: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  arrowButton: {
    backgroundColor: '#F5C5AD',
    padding: 15,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 10,
    marginLeft: 20,
    marginTop: 45,
  }
});
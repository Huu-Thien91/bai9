// SignInScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');

  const handleSignIn = async () => {
    const phoneRegex = /^[0-9]{10}$/; // Giả sử số điện thoại có 10 chữ số
    if (phoneRegex.test(inputPhoneNumber)) {
      try {
        await AsyncStorage.setItem('phoneNumber', inputPhoneNumber); // Lưu số điện thoại vào AsyncStorage
        navigation.navigate('Home'); // Chuyển sang màn hình Home
      } catch (error) {
        console.error('Lỗi lưu số điện thoại: ', error);
      }
    } else {
      Alert.alert('Lỗi', 'Số điện thoại không đúng định dạng. Vui lòng nhập lại.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        value={inputPhoneNumber}
        onChangeText={setInputPhoneNumber}
        keyboardType="phone-pad"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;

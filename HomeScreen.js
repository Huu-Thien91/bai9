// HomeScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const loadPhoneNumber = async () => {
      try {
        const storedPhoneNumber = await AsyncStorage.getItem('phoneNumber'); // Lấy số điện thoại từ AsyncStorage
        if (storedPhoneNumber) {
          setPhoneNumber(storedPhoneNumber); // Cập nhật số điện thoại vào state
        }
      } catch (error) {
        console.error('Lỗi lấy số điện thoại: ', error);
      }
    };

    loadPhoneNumber(); // Gọi hàm để lấy số điện thoại khi component render
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HomeScreen!</Text>
      <Text style={styles.phoneText}>Số điện thoại của bạn là: {phoneNumber}</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  phoneText: {
    fontSize: 20,
    color: '#333',
  },
});

export default HomeScreen;

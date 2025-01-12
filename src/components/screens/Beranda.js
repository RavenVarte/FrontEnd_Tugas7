import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BerandaScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../../assets/beranda.jpg')} // Ganti dengan path gambar Anda
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.subtitle}>INDOOR & OUTDOOR</Text>
        <Text style={styles.title}>ENJOY A LUXURY EXPERIENCE</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Todos')} >
        <Text style={styles.buttonText}>EXPLORE ROOM</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Transparansi gelap di atas gambar
    paddingHorizontal: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 2,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

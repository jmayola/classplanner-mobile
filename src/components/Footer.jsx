// Footer.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 Class Planner. Todos los derechos reservados.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    color: '#333',
    textAlign: 'center',
  },
});

export default Footer;

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/ClassPlanner.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    marginBottom: 50,
    alignItems: 'flex-end',
    paddingTop: 10,
  },
  logo: {
    width: 100,
    height: 90,
  },
});

export default Header;

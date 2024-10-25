import React from 'react';
import { View, Image } from 'react-native';

const Header = () => {
  return (
    <View className="bg-white border-b border-b-gray-300 mb-12 flex-end pt-2">
      <Image
        source={require('../../assets/ClassPlanner.png')} 
        className="w-24 h-24" 
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;

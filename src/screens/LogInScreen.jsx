import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LogInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View className="flex-1 items-center justify-center p-5 bg-white">
      <Image
        source={require('../../assets/ClassPlanner.png')}
        className="w-[60%]"
        resizeMode="contain"
      />
      <Text className="text-3xl mb-8 text-center text-[#333] font-bold">Iniciar Sesión</Text>
      <View className="w-full items-center">
        <TextInput
          className="bg-[#E9E9E9] rounded-full p-4 px-5 mb-4 w-[85%]" // 85% width
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          className="bg-[#E9E9E9] rounded-full p-4 px-5 mb-4 w-[85%]" // 85% width
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        className="bg-blue-500 rounded-full py-4 px-2 w-1/2 items-center justify-center mt-2" // 50% width
        onPress={handleLogin}
      >
        <Text className="text-white text-lg font-bold">Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInScreen;

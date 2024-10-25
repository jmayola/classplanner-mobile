import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeScreen = ({ navigation }) => {
  const users = [
    { username: 'Aldo Avalos' },
    { username: 'Diego Callamullo' },
    { username: 'Pablo Gareis' },
  ];

  const classes = [
    { id: '1', materia: 'Plataformas Móviles', curso: '7°2°' },
    { id: '2', materia: 'Organización y Métodos', curso: '7°2°' },
    { id: '3', materia: 'Modelos y Sistemas', curso: '7°2°' },
  ];

  return (
    <View className="flex-1 p-5 bg-white">
      <Header />
      <Text className="text-4xl mb-8 text-center font-bold">
        ¡Bienvenido {users[0].username}!
      </Text>
      <Text className="text-2xl mb-3 text-left">Las clases que dictás:</Text>
      <FlatList
        data={classes}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="p-4 bg-gray-200 rounded-[20px] mb-5"
            onPress={() => navigation.navigate('ClassDetailsScreen', { classId: item.id })}
          >
            <Text className="text-lg font-bold text-gray-800">{item.materia}</Text>
            <Text className="text-base text-gray-600 mt-1">{item.curso}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        className="mt-5"
      />
      <Footer />
    </View>
  );
};

export default HomeScreen;

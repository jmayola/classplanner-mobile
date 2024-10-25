// StudentList.jsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const StudentsListScreen = () => {
  const students = [
    { id: '1', name: 'Juan Pérez' },
    { id: '2', name: 'María Gómez' },
    { id: '3', name: 'Luis Fernández' },
  ];

  return (
    <View className="p-5 flex-1">
      <Text className="text-2xl mb-5">Lista de Estudiantes</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="p-4 border-b border-gray-300">{item.name}</Text>
        )}
      />
    </View>
  );
};

export default StudentsListScreen;

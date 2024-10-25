// Grades.jsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Gradescreen = () => {
  const gradesData = [
    { id: '1', name: 'Juan Pérez', grade: 'A' },
    { id: '2', name: 'María Gómez', grade: 'B+' },
    { id: '3', name: 'Luis Fernández', grade: 'C' },
    { id: '4', name: 'Ana Martínez', grade: 'A-' },
    { id: '5', name: 'Carlos López', grade: 'B' },
  ];

  return (
    <View className="p-5 flex-1">
      <Text className="text-2xl mb-5">Calificaciones de Estudiantes</Text>
      <FlatList
        data={gradesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row justify-between p-4 border-b border-gray-300">
            <Text className="text-lg">{item.name}</Text>
            <Text className="text-lg font-bold">{item.grade}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Gradescreen;

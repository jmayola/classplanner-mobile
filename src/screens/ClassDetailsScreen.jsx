import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StudentsListScreen from './StudentsListScreen';
import GradesScreen from './GradesScreen';

const ClassDetailsScreen = ({ navigation, route }) => {
  // const { materia, curso } = route.params;
  const [activeTab, setActiveTab] = useState('students');

  return (
    <View className="flex-1 p-5 bg-white">
      <View className="flex-row items-center justify-between mb-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold">materia</Text>
        <View className="w-6" />
      </View>
      {/* <Text className="text-lg text-gray-600 mb-5">{curso}</Text> */}

      <View className="flex-row justify-around mb-5">
        <TouchableOpacity
          className={`p-2 border-b-2 ${activeTab === 'students' ? 'border-blue-500' : 'border-transparent'}`}
          onPress={() => setActiveTab('students')}
        >
          <Text className="text-lg">Estudiantes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`p-2 border-b-2 ${activeTab === 'grades' ? 'border-blue-500' : 'border-transparent'}`}
          onPress={() => setActiveTab('grades')}
        >
          <Text className="text-lg">Notas</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1">
        {activeTab === 'students' ? <StudentsListScreen /> : <GradesScreen />}
      </View>
    </View>
  );
};

export default ClassDetailsScreen;

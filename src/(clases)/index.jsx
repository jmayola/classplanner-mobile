import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { colorScheme } from 'nativewind'

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center dark:text-white text-black dark:bg-gray-900 bg-gray-200">
      <Text className="text-xl border-b-2 border-slate-700">Clases</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default HomeScreen
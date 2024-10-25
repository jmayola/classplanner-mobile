import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const index = () => {
  return (
    <View className="flex-1 bg-gray-300 items-center justify-around">
      <Text className="text-4xl p-5 rounded-xl border-b-2 border-gray-500">Hola mis kiddos</Text>
      <View className="bg-slate-300 rounded-2xl">
      <Link className="text-xl bg-slate-500 font-semibold p-5 rounded-xl dark:bg-stone-800 dark:text-sky-50" href="(clases)"><Text >Ya les levante el native wind</Text></Link>
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

export default index
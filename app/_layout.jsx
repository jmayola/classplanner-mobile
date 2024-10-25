import { Stack } from "expo-router";
// Import your global CSS file
import "../global.css";
import React from 'react'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{title:"Classplanner - Inicio", headerStyle: {backgroundColor:"#5312ee"}}} />
        <Stack.Screen name="(clases)/index" options={{title:"Classplanner - Clases", headerStyle: {backgroundColor:"#5aaeee"}}} />
    </Stack>
  )
}

export default _layout

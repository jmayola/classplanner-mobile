import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const HomeScreen = ({ navigation }) => {
  const users = [
    { username: 'Aldo Avalos'},
    { username: 'Diego Callamullo'},
    { username: 'Pablo Gareis'},
  ];

  const classes = [
    { id: '1', materia: 'Plataformas Móviles', curso: '7°2°' },
    { id: '2', materia: 'Organización y Métodos', curso: '7°2°' },
    { id: '3', materia: 'Modelos y Sistemas', curso: '7°2°' },
  ];

  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <Text style={styles.welcomeText}>¡Bienvenido {users[0].username}!</Text>
      <Text style={styles.subtitle}>Las clases que dictás:</Text>
      <FlatList
        data={classes}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.classCard} onPress={() => navigation.navigate('ClassDetailsScreen', { classId: item.id })}>
            <Text style={styles.className}>{item.materia}</Text>
            <Text style={styles.subject}>{item.curso}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        style={styles.subjectcontainer}
      />
      {/* <Footer/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 26,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'left',
  },
  classCard: {
    padding: 15,
    backgroundColor: '#e9e9e9',
    borderRadius: 15,
    marginBottom: 15,
  },
  className: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subject: {
    fontSize: 15,
    color: '#666',
    marginTop: 5,
  },
  subjectcontainer:{
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default HomeScreen;

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { FlatList, Button, StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, Pressable, TouchableHighlight } from 'react-native';

const [people, setPeople] = useState([
  { name: 'Sankalp', key: '1'},
  { name: 'Batman', key: '2'},
  { name: 'Superman', key: '3'},
  { name: 'Flash', key: '4'},
  { name: 'Spiderman', key: '5'},
  { name: 'Ironman', key: '6'},
  { name: 'Captain America', key: '7'}
]);

export default class App extends React.Component {
  render() {    //*************** render causing problems *****************
    // Since the breaking news is not part of the news list, it can be shown individually
  
    return (
      <View style={styles.container}>
        <LinearGradient 
          colors={['#D0764E', '#13151E']} 
          style={styles.linearGradient}
          >

        {/* <FlatList
          data={people}
          renderItem={({item}) => 
          <TouchableOpacity onPress={() => pressHandler(item.key)} >
            <Text style={styles.item}> {item.name} </Text>
          </TouchableOpacity>
          }
        /> */}

        <ScrollView>
          <View>
            <Text style={styles.topNews}> {people.name} </Text> 
          </View>

          { people.map(item => (
            <View key={item.key}>
              <TouchableOpacity onPress={() => pressHandler(item.key)} >
                <Text style={styles.item}> {item.name} </Text>
              </TouchableOpacity>
            </View>
        ))}
        </ScrollView>

        </LinearGradient>
      </View>

    );
  }
}

const pressHandler = (key) => {            //print the key when an item is pressed
  console.log(key)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#D0764E',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    backgroundColor: '#ff5733'
  },
  item: {
    overflow: 'hidden',
    marginTop: 24,
    padding: 30,
    backgroundColor: '#E14616',
    fontSize: 20,
    borderColor: '#E14616',
    borderWidth: 1,
    borderRadius: 10,
  },
  topNews: {
    overflow: 'hidden',
    marginTop: 24,
    padding: 95,
    backgroundColor: '#E14616',
    fontSize: 20,
    borderColor: '#E14616',
    borderWidth: 1,
    borderRadius: 10,
  },
  linearGradient: {
    //borderRadius: 5,
    //alignItems: 'center',
    //justifyContent: 'center',
    height: 200,
    width: 350,
  }
});









//----------original App.js----------

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
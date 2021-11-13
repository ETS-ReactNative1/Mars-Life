/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
 import  React from 'react';
 import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
export default function HomeScreen({navigation}){
 
  const weatherHandler = () => {
    navigation.navigate('weatherScreen');
  }

  const newsHandler = () => {
    navigation.navigate('news')
  }

  const photoHandler = () => {
    navigation.navigate('photos')
  }
  

   return (
    <ImageBackground
    style = {style.background}
    source = {require('./assets/HomeBack.png')}>
       <View style = {style.body}>
        <View style = {style.header}>
          <Text style = {style.headerText}> Mars Life </Text>
        </View>
 
         <Image
          style = {style.mars}
          source = {require('./assets/marsv3.png')}></Image>


          <View style = {style.container}>


           <View style = {style.select}>
             <View style = {style.selectInner}>
              <TouchableOpacity onPress={weatherHandler}>
                <View style = {style.selectHeader}>
                  <Text style = {style.selectText}>Weather</Text>
                </View>
                  <Ionicons style = {style.selectIcon} name="cloud-outline" size = {75} color = {"#F1FAEE"}></Ionicons>
              </TouchableOpacity>             
            </View>
           </View>    
 
          
            <View style = {style.select}>
              <View style = {style.selectInner}>
              <TouchableOpacity onPress = {photoHandler}>
                <View style = {style.selectHeader}>
                  <Text style = {style.selectText}>Photos</Text>
                </View>
                <Ionicons style = {style.selectIcon} name="images-sharp" size = {75} color = {"#F1FAEE"}></Ionicons>
               </TouchableOpacity>              
              </View>
            </View>  
 
            <View style = {style.select2}>
              <View style = {style.selectInner}>
              <TouchableOpacity onPress = {newsHandler}>
                <View style = {style.selectHeader}>
                  <Text style = {style.selectText}>News</Text>
                </View>

                <View>
                  <Ionicons style = {style.selectIcon} name="newspaper-outline" size = {75} color = {"#F1FAEE"}></Ionicons>
                </View>

                
               </TouchableOpacity>
              </View>
            </View>
         </View>
      </View>
    </ImageBackground>
   );
  }
 
const style = StyleSheet.create({
 
  body: {
    flex: 1,
  },
  header: {
    marginTop: 40,
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  headerText: {
    fontSize: 50,
    color: '#F1FAEE',
  },

  mars:{
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    height: '40%',
    width: '75%'
    },
  container:{
    width: '100%',
    height: '45%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  container2:{
    width: '100%',
    height: '43%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  select:{
    width: '47%',
    height: '48%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    margin: 5,
  },

  select2:{
    width: '96%',
    height: '48%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    margin: 5,
  },
  selectInner:{
    flex: 1,
    backgroundColor: '#323547',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectHeader:{
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectText: {
    fontSize: 30,
    color: '#F1FAEE',
    fontWeight: '800'
  },  
  background:{
    flex: 1,
    resizeMode: 'stretch'
  },

});
 
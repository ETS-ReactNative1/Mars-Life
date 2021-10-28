/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 *
 */
 
 import  React, { useState } from 'react';
 import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
 
export default class App extends React.Component{
 
 
 
  render(){
   return (
    <ImageBackground
      style = {style.background}
      source = {require('./assets/HomeBack2.png')}>
      <View style = {style.body}>
        <View style = {style.header}>
          <Text style = {style.headerText}> Weather</Text>
        </View>
        <ScrollView>

          <Image
            style = {style.mars}
            source = {require('./assets/Mars.png')}></Image>

            <View style = {style.solTemp}>
              <Text style = {style.solTempText}>-20 F</Text>
            </View>
           
            <View style = {style.sol}>
              <Text style = {style.solText}> Sol XXXX  </Text>
            </View>
           
            <View style = {style.date}>
              <Text style = {style.dateText}> 21 October 2021 </Text>
            </View>
            <View style = {style.sideline}></View>

           
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-1</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.week}>
                <Text style = {style.weekText}>-sdfgsdfg sfdgsdfgr</Text>
              </View>
            </View>
 
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-2</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.temp}>
                <Text style = {style.weekText}>-40</Text>
              </View>
            </View>
 
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-3</Text> 
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.temp}>
                <Text style = {style.weekText}>-40</Text>
              </View>
            </View>
 
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-4</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.temp}>
                <Text style = {style.weekText}>-40</Text>
              </View>
            </View>
 
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-5</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.temp}>
                <Text style = {style.weekText}>-40</Text>
              </View>
            </View>
 
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-6</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.temp}>
                <Text style = {style.weekText}>-40</Text>
              </View>
            </View>
 
            <View style = {style.container}>
              <View style = {style.week}>
                <Text style = {style.weekText}> Sol XXXX-7</Text>
              </View>
              <Image style = {style.sun} source = {require('./assets/sun.png')}></Image>
              <View style = {style.temp}>
                <Text style = {style.weekText}>-60</Text>
              </View>
            </View>
            <View style = {style.sideline}/>

            <View style = {style.fact}>
              <Text style = {style.factText}> Fun fact, it's literally always sunny on Mars.</Text>
            </View>
            <View style = {style.sideline}/>

            <View style = {style.minMaxOuter}>
              <View style = {style.minMaxInner}> 
                <Text style = {style.minMaxText}>Minimum Temp: -80 F </Text>
              </View>
              <View style = {style.minMaxInner}>
                <Text style = {style.minMaxText}>Maximum Temp: -20 F</Text>
              </View>
            </View>

            </ScrollView>
      </View>
    </ImageBackground>
   );
  }
}
const style = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'center'
  },
  body: {
    flex: 1,
  },
  header: {
    marginTop: 20,
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
  },
  solTemp: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#323547',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    height: '8%',
    width: '40%',
    marginBottom: 10
  },
  solTempText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 60,
    color: '#F1FAEE'
  },
  sol: {
    marginTop: 1,
    width: '40%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    justifyContent: 'center',
    alignItems:'center',
    alignSelf: 'center',
    backgroundColor:'#323547',
  },
  solText: {
    fontSize: 30,
    color: '#F1FAEE',
    fontWeight: '800'
  },
 
 
  container: {
    marginTop: 14,
    width:'70%',
    height:'8%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#323547',
    flexDirection: 'row',
    flex: 1
  },
  solHeader: {
    height: '5%',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  solText:{
    fontSize: 30,
    justifyContent: 'center',
    color: '#F1FAEE',
  },

  containerInner: {
    margin:1,
    width: '90%',
    height: '3.25%',
  },
  innerText: {
    fontSize: 10,
    justifyContent: 'center',
    color: '#F1FAEE',
 
  },
  date: {
    marginTop: 20,
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height:'6%',
    width: '50%',
    backgroundColor: '#323547'
  },
  dateText: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#F1FAEE',
  },
  sun: {
    height: '90%',
    width: '20%',
    justifyContent: 'center'

  },
  week: {
    height: '10%',
    width: '20%',
    alignItems: 'center',
    alignContent: 'center',

  },
  weekText: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    color: '#F1FAEE',
  },
  temp: {
    height: '15%',
    width:'40%'
  },

  sideline: {
    marginTop: 10,
    height: '.2%',
    width: '70%',
    backgroundColor: '#F1FAEE',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  upline: {
    height: '90%',
    width: '0.5%',
    backgroundColor: 'white',
  },

  fact: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height:'6%',
    width: '70%',
    backgroundColor: '#323547'
  },
  factText: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#F1FAEE',
  },
  minMaxOuter:{
    //paddingVertical: 200,
    paddingVertical: 200,
    width: '70%',
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#323547',
    borderStartColor: '#323547',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323547',
    flexDirection: 'row',
    flex: 1,
    marginTop: 15,
    marginBottom: 15
  },
  minMaxInner: {
    width: '50%',
    height: '100%',
    marginLeft:5     
  },
  minMaxText:{
    color: 'white',
  }


});
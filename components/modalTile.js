import  React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity,Dimensions, Image, ScrollView} from 'react-native';
import * as Font from 'expo-font';
import Icons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

export default class modal extends React.Component{

  render() {
    const[modalOpen, setModalOpen] = useState(false);

    return (
      
      <View>
        <View style = {style.header}>
          <TouchableOpacity>
          <Icons name={'arrow-back'} size={width*0.075} color='#000' style={style.button} onPress = {() => setModalOpen(false)}/>
          </TouchableOpacity>
          <Text style = {style.headerText}>Weather</Text>
          <TouchableOpacity>
            <Icons name={'menu'} size={width*0.075} color='#fff' style={style.button}/>
          </TouchableOpacity>
        </View>

        <View style = {style.leftJustify}>
        <View style = {style.minMaxOuter}>
          <View style = {style.minMaxInner}>
          <Text style = {style.atmospheric}>Weather</Text>
          </View>
        </View>
        <View style = {style.sideline}/>

        <View style = {style.minMaxOuter}>
          <View style = {style.minMaxInner}>
          <Text style = {style.atmospheric}>Photos</Text>
          </View>
        </View>
        <View style = {style.sideline}/>

        <View style = {style.minMaxOuter}>
          <View style = {style.minMaxInner}>
          <Text style = {style.atmospheric}>News</Text>
          </View>
        </View>
        <View style = {style.sideline}/>

        <View style = {style.minMaxOuter}>
          <View style = {style.minMaxInner}>
          <Text style = {style.atmospheric}>Map</Text>
          </View>
        </View>
      </View>
      </View>
      
    );
  }
}

const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row'

  },
  leftJustify: {
    marginLeft: '20%',
    width: '100%'
  },
  container:
  {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  words:
  {
    fontSize: 40,
    color: 'white'
  },
  minMaxOuter:{
    paddingVertical: 5,
    width: '70%',
    borderWidth: 8,
    borderColor: '#323547',
    borderStartColor: '#323547',
    borderLeftColor: '#F1FAEE',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323547',
    flexDirection: 'row',
    flex: 1,
  },

  atmosphericInner: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  atmospheric: {
    color: '#F1FAEE',
    fontSize: 40,
  //   fontFamily: 'Nunito'
  },
  
  sideline: {
    height: 2,
    width: '70%',
    backgroundColor: '#F1FAEE',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  button: {
    overflow: 'hidden',
    color: 'white',
    backgroundColor: '#FD773B',
    padding: width*.01,
    borderColor: '#B35335',
    borderRadius: 10,
    borderWidth: 2,
  },
  });
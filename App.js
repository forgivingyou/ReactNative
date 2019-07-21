import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import {Audio} from 'expo';

const listBackgroundColors = {
  1: "#D63031",
  2: "#0A79DF",
  3: "#45CE30",
  4: "#F4C724",
  5: "#616C6F",
  6: "#E74292",
  7: "#EA7773",
  8: "#25CCF7",
  9: "#758AA2",
  10: "#FF362E"
}
const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav')
}
export default function App() {

  palySound = async number => {
    const soundObject = new Audio.Sound();
    try{
      let path = soundList[number]
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()
      .then(async playbackStatus => {
       setTimeout(() => {
         soundObject.unloadAsync();
       }, playbackStatus.playableDurationMillis);
      })
      .catch(error =>{
        console.log(error)
      })
    }catch(error){
      console.log(error)
    }
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.gridConatiner}>
        <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
        />
        <View style={styles.rowContainer}>
          <TouchableOpacity

          style={[{backgroundColor: listBackgroundColors[1]},styles.item]}
          onPress ={() => {
            this.palySound("one");
          }}
          >
            <Text style={styles.itemText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity

          style={[{backgroundColor: listBackgroundColors[2]},styles.item]}
          onPress ={() => {
            this.palySound("two");
          }}
          >
            <Text style={styles.itemText}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity

          style={[{backgroundColor: listBackgroundColors[3]},styles.item]}
          onPress ={() => {
            this.palySound("three");
          }}
          >
            <Text style={styles.itemText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity

          style={[{backgroundColor: listBackgroundColors[4]},styles.item]}
          onPress ={() => {
            this.palySound("four");
          }}
          >
            <Text style={styles.itemText}>4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity

          style={[{backgroundColor: listBackgroundColors[5]},styles.item]}
          onPress ={() => {
            this.palySound("five");
          }}
          >
            <Text style={styles.itemText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity

          style={[{backgroundColor: listBackgroundColors[6]},styles.item]}
          onPress ={() => {
            this.palySound("six");
          }}
          >
            <Text style={styles.itemText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity

          style={[{backgroundColor: listBackgroundColors[7]},styles.item]}
          onPress ={() => {
            this.palySound("seven");
          }}
          >
            <Text style={styles.itemText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity

          style={[{backgroundColor: listBackgroundColors[8]},styles.item]}
          onPress ={() => {
            this.palySound("eight");
          }}
          >
            <Text style={styles.itemText}>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity

          style={[{backgroundColor: listBackgroundColors[9]},styles.item]}
          onPress ={() => {
            this.palySound("nine");
          }}
          >
            <Text style={styles.itemText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity

          style={[{backgroundColor: listBackgroundColors[10]},styles.item]}
          onPress ={() => {
            this.palySound("ten");
          }}
          >
            <Text style={styles.itemText}>10</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  grideContainer: {
    flex: 1,
    margin: 5,

  },
  logo: {
    alignSelf: "center",
    marginTop: 15
  },
  rowContainer: {
    flexDirection: "row"
  },
  item:{
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  itemText:{
    color: "#FFF",
    fontSize: 20
  }
});

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      uri : require('./src/images/dice1.png')
    };
  }

  getRandomvalue = () => {
    return Math.floor(Math.random() * 6) + 1;
  }
  playButtonPressed = () => {
   // Alert.alert("heyyy: " + this.getRandomValue());
  var rNumber = this.getRandomvalue();

  switch(rNumber){
    case 1:
      this.setState({uri :require('./src/images/dice1.png')})
      break;
    case 2:
      this.setState({uri :require('./src/images/dice2.png')})
      break;
    case 3:
      this.setState({uri :require('./src/images/dice3.png')})
      break;
    case 4:
      this.setState({uri :require('./src/images/dice4.png')})
      break;
    case 5:
      this.setState({uri :require('./src/images/dice5.png')})
      break;
    case 6:
      this.setState({uri :require('./src/images/dice6.png')})
      break;
   }
  };
  
  render() {
    return (
      <View style={styles.container}>
       <Image style= {styles.gameimage1}
       source={this.state.uri}
       />
       <Image style= {styles.gameimage2}
       source={this.state.uri}
       />
       <Image style= {styles.gameimage3}
       source={this.state.uri}
       />
       <Image style= {styles.gameimage4}
       source={this.state.uri}
       />
       <Image style= {styles.gameimage5}
       source={this.state.uri}
       />
       <Image style= {styles.gameimage6}
       source={this.state.uri}
       />
       <Image style= {styles.gameimage7}
       source={this.state.uri}
       />
       <Image style= {styles.gameimage8}
       source={this.state.uri}
       />
       <Image style= {styles.gameimage9}
       source={this.state.uri}
       />
       <TouchableOpacity onPress={this.playButtonPressed}>
       <Text style={styles.gamebutton}>Play Game</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292'
  },
  gamebutton: {
    marginTop: 100,
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical:8,
    width: 150,
    marginLeft: 100,
    paddingLeft:30,
    borderRadius: 5,
    borderColor: "#FFF",
    alignItems: "center",

  },
  gameimage1: {
    width: 50,
    height: 50,
    marginLeft: 100, 
    marginTop: 150
  },
  gameimage2: {
    width: 50,
    height: 50,
    marginLeft: 100,
    marginTop: 10
  },
  gameimage3: {
    width: 50,
    height: 50,
    marginLeft: 235,
    marginTop: -65
  },
  gameimage4: {
    width: 50,
    height: 50,
    marginLeft: 100,
    marginTop: 25
  },
  gameimage5: {
    width: 50,
    height: 50,
    marginLeft: 100,
    marginTop: 10
  },
  gameimage6: {
    width: 50,
    height: 50,
    marginLeft: 100,
    marginTop: 10
  },
  gameimage7: {
    width: 50,
    height: 50,
    marginLeft: 175,
    marginTop: -190
  },
  gameimage8: {
    width: 50,
    height: 50,
    marginLeft: 175,
    marginTop: 5
  },
  gameimage9: {
    width: 50,
    height: 50,
    marginLeft: 235,
    marginTop: 7
  },
});

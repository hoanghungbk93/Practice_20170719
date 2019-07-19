// App.js

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { addPlace } from './actions/place';
import {increment} from './actions/calculator'
class App extends Component {

  state = {
    placeName: '',
    places: [],
    number : 0
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
    this.props.incre(this.props.number)
}

placeNameChangeHandler = (value) => {
  this.setState({
    placeName: value
  });    
}

placesOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
      data = { this.props.places }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <ListItem 
          placeName={ info.item.value }
        />
      )}
    />
  )
}

render() {
  return (
    <View style={ styles.container }>
      <View style = { styles.inputContainer }>
        <TextInput
          placeholder = "Seach Places"
          style = { styles.placeInput }
          value = { this.state.placeName }
          onChangeText = { this.placeNameChangeHandler }
        ></TextInput>
        <Button title = 'Add' 
          style = { styles.placeButton }
          onPress = { this.placeSubmitHandler }
        />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>
        <Text>{this.props.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    number : state.number.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    },
    incre: (number) => {
      dispatch(increment(number))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
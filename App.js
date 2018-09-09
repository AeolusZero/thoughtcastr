import React from 'react';  //to use React objects, you have to do this import operation.  Basically any file that uses React starts with this command.
import { StyleSheet, Text, View } from 'react-native';
import Button from '@material-ui/core/Button';

export default class App extends React.Component {  //
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hello yes hello</Text>
        <Greeting name="Harrison" lastName="Holland"></Greeting>
        <Button variant="contained" color="primary">Press Me</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Greeting extends React.Component { // we got this from the website facebook.github.io/react-native/docs/props
  render() {
    return ( // whatever is inside the Return method will be treated like HTML
      <Text>Hello {this.props.name}!</Text>  //Whatever is inside the curly brackets will be treated like JavaScript
    );
  }
}

// A state is just a sort of configuration of an object.
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



const App = () => {
  return (
        <View style={styles.view}>
            <Text>Xebia Engineering is Awesome</Text>
        </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

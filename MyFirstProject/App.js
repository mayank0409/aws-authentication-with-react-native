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

import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import awsConfig from "./aws-exports";

Amplify.configure(awsConfig);

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

export default withAuthenticator(App);

import React, {Component} from "react";
import Amplify from "aws-amplify";
import {Button, TextInput, View} from "react-native";

import awsConfig from "./aws-exports";

Amplify.configure(awsConfig);

export default class Login extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: "",
        password: "",
      },

      error: {
        email: null,
        password: null,
      },
    };
  }

// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }

    if (this.state !== nextState) {
      return true;
    }

    return false;
  }

// ----------------------------------------
// ----------------------------------------
// METHODS
// ----------------------------------------

  onValueChange(key, value) {
    const {
      data,
    } = this.state;

    data[key] = value;

    this.setState({
      data,
    });
  }

// ----------------------------------------

  login() {
    const {
      email,
      password,
    } = this.state.data;

    const error = {
      email: this.getEmailError(email),
      password: this.getPasswordError(password),
    };

    this.setState({
      error,
    });

    Amplify.Auth.signIn(email, password)
      .then(/* perform the required action. For example: Navigate to a new screen if authentication is successfull */)
      .catch(err => alert(err.message));
     }
    render(){
        return(
            <View>
                <TextInput 
                    style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, textAlign: "center" }}
                    placeholder="Email"
                    value={ this.state.data.email }
                    error={ this.state.error.email }
                    onChangeText={ (value) => this.onValueChange("email", value) }
                />
                <TextInput 
                    style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginTop: 20, textAlign: "center" }}
                    placeholder="Password"
                    value={ this.state.data.password }
                    error={ this.state.error.password }
                    onChangeText={ (value) => this.onValueChange("password", value) }
                />
                <Button 
                    title="Login"
                    onPress={ () => this.login() }
                />
            </View>
        )
    }

}

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RegisterScreen = ({ navigation }) => {
	// The component 'RegisterScreen' will have the prop 'navigation'
	// This prop will give us the ability to:
	// [a] navigate to this screen from another screen
	// [b] navigate from this screen to another screen
	return (
		<View>
			<Text> This is the register screen </Text>
		</View>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({});

// Below are foundational imports that come with the app
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Below is the import for reacte native elements -
// it's similar to material ui in the sense that it imports
// pre-styled elements
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = () => {
	return (
		<View>
			<StatusBar style="light" />
			{/* The status bar is the top row that has the time, battery, wifi logo etc */}
			<Image
				//Image is a react-native-element.
				// Here we declare that we are importing an image.
				source={{
					uri:
						"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
				}}
				//  The image will come from this url.
				style={{ width: 200, height: 200 }}
				// The image will have a width and height of 200px.
			/>
			<View style={styles.inputContainer}>
				{/* This view will have a style called inputContainer */}
				<Input placeholder="Email" />
				{/* Input is a react native element. 
					The Input field will have the placeholder text Email */}
			</View>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({});

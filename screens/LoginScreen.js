// Below are foundational imports that come with the app
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

// Below is the import for reacte native elements -
// it's similar to material ui in the sense that it imports
// pre-styled elements
import { Button, Input, Image } from "react-native-elements";

//!------------------------------------------------------------IMPORTS

const LoginScreen = () => {
	//
	const [email, setEmail] = useState("");
	// (email) The constant email contains a string
	// (setEmail) And we declare that we will mainpulate this string
	// By wrapping the string in a UseState()
	const [password, setPassword] = useState("");
	// (password) The constant password contains a string
	// (setPassword) And we declare that we will mainpulate this string
	// By wrapping the string in a UseState()
	// const signIn = () => {

	// }

	return (
		<KeyboardAvoidingView style={styles.container}>
			{/* 'KeyboardAvoidingView' is specific type of view (div).
				Normally, the keyboard is by default always visible on the phone app.
				This view ensures that the keyboard on the phone
				only becomes visible when the user clicks the input field.
				And that it stays hidden at other times.
				Here, we are wrapping the whole component 
				with this particular type of view.
				This view will have a style called 'container'.
			*/}
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
				<Input
					//Input is a react native element.
					placeholder="Email"
					// The Input field will have the placeholder text Email
					autoFocus
					// when the screen loads, it automatically puts the focus on the input field
					type="Email"
					//
					value={email}
					//
					onChangeText={(text) => setEmail(text)}
					// onChangeText={(text) --> onChangeText captures the text that was typed into the input field
					// => setEmail (text)} --> 	then it fires of a function that stores this text in the constant Email
				/>
				<Input
					//Input is a react native element.
					placeholder="Password"
					// The Input field will have the placeholder text Password
					secureTestEntry
					// This will hide the password when its being typed in
					type="password"
					//
					value={password}
					//
					onChangeText={(text) => setPassword(text)}
					// onChangeText={(text) --> onChangeText captures the text that was typed into the input field
					// => setPassword (text)} --> then it fires of a function that stores this text in the constant password
				/>
			</View>
			<Button
				// Button is a react-native element.
				title="Login"
				// It has the text Login
				containerStyle={styles.button}
				// This button will have a style (class) called button.
				// Normally the style (class) would be declared with the key 'style'.
				// Like this --> style={styles.button}.
				// However, since this is a react native element
				// the style (class) has to be declared with the key 'containerStyle'.
				// like this --> containerStyle ={styles.button}
			/>
			<Button
				// Button is a react-native element.
				title="Register"
				// It has the text Register
				type="outline"
				// The button type identifies a specific type of pre-styled css,
				// that will be called with the value 'outline'.
				// onPress={signIn}
				// The function signIn, which is defined above, is fired off once the register button is pressed
				containerStyle={styles.button}
				// This button will have a style (class) called button.
				// Normally the style (class) would be declared with the key 'style'.
				// Like this --> style={styles.button}.
				// However, since this is a react native element
				// the style (class) has to be declared with the key 'containerStyle'.
				// like this --> containerStyle ={styles.button}
			/>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white"
	},
	inputContainer: {},
	button: {}
});

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

// Below is the import for reacte native elements -
// it's similar to material ui in the sense that it imports
// pre-styled elements
import { Button, Input, Image, Text } from "react-native-elements";

//!-------------------------------------------------IMPORTS

const RegisterScreen = ({ navigation }) => {
	// The component 'RegisterScreen' will have the prop 'navigation'
	// This prop will give us the ability to:
	// [a] navigate to this screen from another screen
	// [b] navigate from this screen to another screen
	const [name, setName] = useState("");
	// (email) The constant email contains a string
	// (setEmail) And we declare that we will mainpulate this string
	// By wrapping the string in a UseState()
	const [email, setEmail] = useState("");
	// (email) The constant email contains a string
	// (setEmail) And we declare that we will mainpulate this string
	// By wrapping the string in a UseState()
	const [password, setPassword] = useState("");
	// (password) The constant password contains a string
	// (setPassword) And we declare that we will mainpulate this string
	// By wrapping the string in a UseState()
	const [imageUrl, setImageUrl] = useState("");
	// (imageUrl) The constant imageUrl contains a string
	// (setImageUrl) And we declare that we will mainpulate this string
	// By wrapping the string in a UseState()

	// !-----------------------------------------------USESTATE

	const register = () => {};

	//!-----------------------------------------------FUNCTIONS THAT WILL BE CALLED

	return (
		<KeyboardAvoidingView
			// KeyboardAvoidingView' is specific type of view (div).
			// Normally, the keyboard is by default always visible on the phone app.
			// This view ensures that the keyboard on the phone
			// only becomes visible when the user clicks the input field.
			// And that it stays hidden at other times.
			// Here, we are wrapping the whole component
			// with this particular type of view.
			style={styles.container}
			// This view will have a style called 'container'.
		>
			<StatusBar
				// The status bar is the top row that has the time, battery, wifi logo etc
				style="light"
				// The style light makes icons such as time/battery etc white
			/>

			<Text
				// Text here is a react-native element.
				h3
				// In react-native element we can specify text as h1,h2,h3 etc elements
				// This text will be specified as h3
				style={{ marginBottom: 50 }}
				// The text will have an in-line style
			>
				Create a Signal account
			</Text>

			<View style={styles.inputContainer}>
				<Input
					//Input is a react native element.
					placeholder="Full Name"
					// The Input field will have the placeholder text Full Name
					autoFocus
					// When the screen loads, it automatically puts the focus on the input field
					type="text"
					// The type of info that will be inputed will be text
					value={name}
					// Here we declare that the constant name will be used
					onChangeText={(text) => setName(text)}
					// onChangeText={(text) --> onChangeText captures the text that was typed into the input field
					// => setName (text)} --> 	then it fires of a function that stores this text in the constant name
				/>
				<Input
					//Input is a react native element.
					placeholder="Email"
					// The Input field will have the placeholder text Email
					autoFocus
					// when the screen loads, it automatically puts the focus on the input field
					type="email"
					//
					value={email}
					//
					onChangeText={(text) => setEmail(text)}
					// onChangeText={(text) --> onChangeText captures the text that was typed into the input field
					// => setEmail (text)} --> 	then it fires of a function that stores this text in the constant email
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
				<Input
					//Input is a react native element.
					placeholder="Profile Picture URL (optional)"
					// The Input field will have the placeholder text Full Name
					type="text"
					// The type of info that will be inputed will be text
					value={imageUrl}
					// Here we declare that the constant name will be used
					onChangeText={(text) => setImageUrl(text)}
					// onChangeText={(text) --> onChangeText captures the text that was typed into the input field
					// => setImageUrl (text)} --> 	then it fires of a function that stores this text in the constant imageUrl
					// onSubmitEditing={register}
					// When you hit enter, the register function will be triggered
				/>
			</View>
			<Button
				// Button is a react-native element.
				title="Register"
				// It has the text Register
				raised
				// The button type identifies a specific type of pre-styled css,
				// that will be called with the value raised
				containerStyle={styles.button}
				// This button will have a style (class) called button.
				// Normally the style (class) would be declared with the key 'style'.
				// Like this --> style={styles.button}.
				// However, since this is a react native element
				// the style (class) has to be declared with the key 'containerStyle'.
				// like this --> containerStyle ={styles.button}
				onPress={register}
				// When the button is pressed --> onPress={() =>
				// go into the app.js and navigate to the screen that has the name 'Register' --> navigation.navigate("Register")}
			/>
		</KeyboardAvoidingView>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({});

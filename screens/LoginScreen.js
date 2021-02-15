// below are foundational imports that come with the app
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// below is the import for reacte native elements
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = () => {
	return (
		<View>
			<StatusBar style="light" />
			{/* The status bar is the top row that has the time, battery, wifi logo etc */}
			<Image
				//add the image
				source={{
					uri:
						"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"
				}}
				//  from this url
				style={{ width: 200, height: 200 }}
				// the image will have a width and height of 200px
			/>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({});

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			{/* A view is the same as a div */}
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

// the css is written within a constant styles
// it could be written in a different doc and then imported
// but for this build we are going to keep it here
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
		// the css format is a bit different
		// instead of justify-content its camel cast justifyContent
	}
});

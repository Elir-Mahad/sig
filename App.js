// foundational imports that come with the app
// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// below imports are from react navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import LoginScreen from "./screens/LoginScreen";

//! ------------------------------------------------- IMPORTS

const Stack = createStackNavigator();
// The contsant Stack is going to store all the screens

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* Stack nagivator will hold (wrap) 
				all the screen components which are imported */}
				<Stack.Screen name="Login" component={LoginScreen} />
				{/* this is how you import a component.
			You have to give the component a name and then import it.
			Here the screen LoginScreen will have the name Login */}
				{/* <View style={styles.container}> */}
				{/* A view is the same as a div */}
				{/* <Text> Lets build signal !</Text>
					<StatusBar style="auto" />
				</View> */}
			</Stack.Navigator>
		</NavigationContainer>
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
		// instead of justify-content its camelcase-> justifyContent
	}
});

// On the web, we user react router to go between pages.
// On react native we use react native navigation.
// In mobile, you have different screens(pages)
// that are stacked/layered on top of each other,
// so for example: when you swipe back it shows the screen beneath,
// and when you swiple forward it goes to the next screen on top.

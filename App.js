// below are foundational imports that come with the app
import React from "react";
import { StyleSheet } from "react-native";

// below imports are from react navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

//! ------------------------------------------------- IMPORTS

const Stack = createStackNavigator();
// The contsant Stack is going to store all the screens

export default function App() {
	const globalScreenOptions = {
		// The constant globalScreenOptions stores the below css styles
		headerStyle: { backgroundColor: "#2c68ed" },
		headerTitleStyle: { color: "white" },
		headerTintiColor: "white"
	};

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={globalScreenOptions}>
				{/* Stack nagivator will wrap 
					all the screen components which are imported.
					The styles stored in the constant globalScreenOptions
					will be pushed onto all the screens. 
				 */}
				<Stack.Screen
					// This is how you import a component.
					name="Login"
					// Give the component a name that will appear on header of the app  --> Login
					component={LoginScreen}
					// Import the component --> component={LoginScreen}
				/>
				<Stack.Screen
					// This is how you import a component.
					name="Register"
					// Give the component a name that will appear on header of the app --> Register
					component={RegisterScreen}
					// Import the component --> component={RegisterScreen}
				/>
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

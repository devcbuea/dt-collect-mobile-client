import React, {Component} from 'react'; 
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native'; 
import Swiper from 'react-native-swiper';
import OnboardPage from './OnboardPage';
import { createAppContainer, createStackNavigator } from "react-navigation";
import { List } from "../form/FormList";

class OnboardingScreen extends Component {
	constructor(props) {
	  	super(props);
		var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ';
	  	this.state = {
	  		images: [
	  			require('../../../res/splash0.png'), 
	  			require('../../../res/splash1.png'), 
	  			require('../../../res/splash2.png'), 
	  		], 
	  		headings: [ 'ANALYTICS', 'SHARE DATA', 'BUILD A COMMUNITY'],
	  		subHeadings: [lorem, lorem, lorem],
	  	};
	}

	componentDidMount() {
	}

	render() {
		const {images, headings, subHeadings} = this.state;
		return (
			<Swiper showsButtons={true} loop={false} >
				<OnboardPage image={images[0]} heading={headings[0]} subHeading={subHeadings[0]} index={0} />
				<OnboardPage image={images[1]} heading={headings[1]} subHeading={subHeadings[1]} index={1} />
				<OnboardPage image={images[2]} heading={headings[2]} subHeading={subHeadings[2]} index={2} />
			</Swiper>
		);
	}
}


const RootStack = createStackNavigator(
	{
		Home: OnboardingScreen,
		list: List,
	},
	{
		initialRouteName: 'Home',
	}
);

const AppContainer = createAppContainer(RootStack);

export default class Main extends React.Component {
	render() {
		return <AppContainer />;
	}
}




import React, {Component} from 'react'; 
import {StyleSheet, ScrollView, View, Text} from 'react-native'; 

export default class SplashScreen extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}

	componentDidMount() {

	}

	render() {
		const {headerStyle, footerStyle, rootStyle, headerH1Style, headerH2Style, textColorStyle} = styles;
		return (
			<View style={ headerStyle }>
				<ScrollView contentContainerStyle={rootStyle}>
					<View>
						<Text style={ [headerH1Style, textColorStyle] }>DevCBuea</Text>
					</View>
					<View>
						<Text style={ [headerH2Style, textColorStyle] }>Data Collection Tool</Text>
					</View>
				</ScrollView>
				<View style={ footerStyle }>
					<Text style={[textColorStyle]}>Copyright (c) 2019</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerStyle: {
		flex: 1, 
		backgroundColor: '#4885ed',
	}, 
	footerStyle: {
		marginTop: 10, 
		marginBottom: 10,
		alignItems: 'center',
	    justifyContent: 'center',
	}, 
	rootStyle: {
		flexGrow : 1, 
		justifyContent : 'center', 
		alignItems: 'center' 
	}, 
	headerH1Style: {
		fontSize: 40, 
		fontWeight: 'bold', 
	}, 
	headerH2Style: {
		fontSize: 16,
		marginTop: 5, 
	}, 
	textColorStyle: {
		color: '#fff',
	}
});
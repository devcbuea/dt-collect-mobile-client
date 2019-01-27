import React, {Component} from 'react'; 
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native'; 

export default class OnboardPage extends Component {


	render() {
		const {heading, subHeading, image} = this.props; 
		const {
			rootStyle,  
			headerH1Style, 
			headerH2Style, 
			textColorStyle, 
			splashImgStyle
		} = styles;

		return (
			<View style={ rootStyle }>
				<View>
					<Image source={image} style={splashImgStyle}  />
				</View>
				<View>
					<Text style={ [headerH1Style, textColorStyle] }>{heading}</Text>
				</View>
				<View>
					<Text style={ headerH2Style }>{subHeading}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rootStyle: {
		flex: 1, 
		paddingLeft: 30, 
		paddingRight: 30,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}, 
	headerH1Style: {
		fontSize: 25, 
		fontWeight: 'bold', 
		marginTop: 20, 
		marginBottom: 20
	}, 
	headerH2Style: {
		fontSize: 14,
		lineHeight: 25,
		color: '#878787',
		textAlign: 'center',
	}, 
	textColorStyle: {
		color: '#000000C0',
	}, 
	splashImgStyle: {
		width: 200,
		height: 200,
	}
});
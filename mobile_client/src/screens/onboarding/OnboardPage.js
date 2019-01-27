import React, {Component} from 'react'; 
import {StyleSheet, ScrollView, View, Text, Image, TouchableOpacity} from 'react-native'; 

export default class OnboardPage extends Component {


	render() {
		const {heading, subHeading, image, actionButton} = this.props; 
		const {
			headerStyle, 
			footerStyle, 
			rootStyle, 
			headerH1Style, 
			headerH2Style, 
			textColorStyle, 
			splashImgStyle, 
			btnStyle, 
			btnTextStyle
		} = styles;

		return (
			<View style={ headerStyle }>
				<ScrollView contentContainerStyle={rootStyle}>
					<View>
						<Image source={image} style={splashImgStyle}  />
					</View>
					<View>
						<Text style={ [headerH1Style, textColorStyle] }>{heading}</Text>
					</View>
					<View>
						<Text style={ headerH2Style }>{subHeading}</Text>
					</View>
				</ScrollView>
				<View style={ footerStyle }>
				{actionButton ? 
					<TouchableOpacity style={btnStyle}>
						<Text style={[btnTextStyle]}>Get started</Text>
					</TouchableOpacity>
				: null}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	headerStyle: {
		flex: 1, 
		paddingLeft: 30, 
		paddingRight: 30,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center' 
	}, 
	footerStyle: {
		marginTop: 10, 
		marginBottom: 100,
		alignItems: 'flex-end',
	    justifyContent: 'center',
	}, 
	rootStyle: {
		flexGrow : 1, 
		justifyContent : 'center', 
		alignItems: 'center' , 
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
	}, 
	btnStyle: {
		backgroundColor: '#4885ed', 
		padding: 10, 
		paddingLeft: 30, 
		paddingRight: 30,
		alignItems: 'center',
		borderRadius: 20,
	}, 
	btnTextStyle: {
		color: '#fff', 
		fontSize: 16, 
	}
});
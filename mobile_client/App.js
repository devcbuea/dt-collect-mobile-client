import React, { Component } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';

export default class App extends Component<Props> {
    render() {
        return <OnboardingScreen />;
        // return <SplashScreen />;
    }
}

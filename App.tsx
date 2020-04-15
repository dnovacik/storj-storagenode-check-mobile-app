// libs
import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { View, Image, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { AppLoading, SplashScreen } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'

// components
import App from './src/views/App'
import theme from './src/styled-components/theme'

export default () => {
    const [isSplashReady, setSplashReady] = useState<boolean>(false)
    const [isAppReady, setAppReady] = useState(false)

    const _loadSplashResourcesAsync = async () => {
        const images = [require('./src/assets/splash.png')]

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync()
        })

        return Promise.all(cacheImages)
    }

    const _loadResourcesAsync = async () => {
        const images = [require('./src/assets/icon.png')]

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync()
        })

        const fonts = {
            'Montserrat': require('./src/assets/fonts/Montserrat-Regular.ttf'),
            'Montserrat-Light': require('./src/assets/fonts/Montserrat-Light.ttf'),
            'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
            'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
            'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf')
        }

        await Font.loadAsync(fonts)
        return Promise.all(cacheImages)
    }

    const _handleLoadingError = (error: Error) => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    const _handleSplashFinishLoading = () => {
        setSplashReady(true)
    };

    const _handleFinishLoading = () => {
        SplashScreen.hide()
        setAppReady(true)
    }

    if (!isSplashReady) {
        return (
            <AppLoading
                // @ts-ignore
                startAsync={_loadSplashResourcesAsync}
                onError={_handleLoadingError}
                onFinish={_handleSplashFinishLoading}
                autoHideSplash={false}
            />
        )
    }

    if (!isAppReady) {
        return (
            <View style={{ flex: 1 }}>
                <Image
                    style={{ flex: 1, resizeMode: 'contain', width: undefined, height: undefined }}
                    source={require('./src/assets/splash.png')}
                    onLoad={_loadResourcesAsync}
                    onLoadEnd={_handleFinishLoading}
                    fadeDuration={0}
                />
            </View>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar hidden={true} />
            <App />
        </ThemeProvider>
    )
}

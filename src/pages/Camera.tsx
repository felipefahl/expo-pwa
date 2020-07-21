import React from "react"
import { View } from "react-native"
import { Camera as ExpoCamera } from "expo-camera"


const Camera: React.FC = () => {
    return <View style={{flex: 1}}>
        <ExpoCamera style={{flex: 1}}></ExpoCamera>
    </View>
}

export default Camera;
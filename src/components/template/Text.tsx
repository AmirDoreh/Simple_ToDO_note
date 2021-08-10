import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import {Text} from 'react-native'
import {TextProps} from 'react-native'

interface TProps extends TextProps {
    style?: StyleProp<TextStyle>;
    children: JSX.Element | JSX.Element[] | string;
}

export const BoldText = (props: TProps)=>{
    return <Text {...props} style={[props.style]}>
        {props.children}
    </Text>
}

export const RegularText = (props: TProps)=>{
    return <Text {...props} style={[props.style]}>
        {props.children}
    </Text>
}

export const MediumText = (props: TProps)=>{
    return <Text {...props} style={[props.style]}>
        {props.children}
    </Text>
}

export const LightText = (props: TProps)=>{
    return <Text {...props} style={[props.style]}>
        {props.children}
    </Text>
}
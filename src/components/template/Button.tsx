import React from 'react';
import {StyleProp, TextStyle, ViewStyle, TouchableOpacity} from "react-native";
import { wp } from '../../utils/screenResize'
import { BoldText } from './Text'
import { WHITE } from '../../themes/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ButtonProps {
    onPress?: () => void;
    title?: string;
    disabled?: boolean;
    textStyle?: StyleProp<TextStyle>;
    bgColor?: string;
    icon?: object;
    style?: StyleProp<ViewStyle>;
    iconName?: string;
}

export const AppButton = (props: ButtonProps) => {
    return (
      <TouchableOpacity
        disabled={props.disabled ? true : false}
        style={[{
          marginVertical: wp(1),
          elevation: 0,
          height: 45,
          borderRadius: wp(100),
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.bgColor || 'transparent',
        }, props.style]}
        onPress={props.onPress}>
        {props.iconName && (
            <Icon size={wp(5)} style={{marginRight: wp(1)}} color={WHITE} name={props.iconName} />
        )}
        <BoldText style={[{color: WHITE, fontSize: wp(4), top: -3, alignSelf: 'center'}, props.textStyle]}>
            {props.title}
        </BoldText>
      </TouchableOpacity>
    );
};
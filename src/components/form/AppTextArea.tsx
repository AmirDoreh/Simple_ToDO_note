import React from 'react';
import {TextInput, View} from 'react-native';
import { RegularText } from '../template/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { hp, wp } from '../../utils/screenResize';
import { InputProps } from './interfaces/InputInterface';

const AppTextArea = (props: InputProps) => {
  const onChanged = (text: string) => {
    props.onChangeText(text);
  };

  const keyboardType = () => {
    if (props.type === 'phoneNumber') {
      return 'phone-pad';
    }
    return props.type === 'number' ? 'numeric' : 'default';
  };

  return (
    <View
      style={[{
        marginVertical: 10,
        borderColor: Boolean(props.forceFilling && !props.value) ? 'red' : '#666',
        borderWidth: 0.5,
        borderRadius: 25,
        padding: 15,
        alignItems: 'flex-start',
        height: hp(25),
        backgroundColor: 'white',
      }, props.style]}>
      {props.icon && (
        <Icon
          style={props.icon.style ? props.icon.style :{}}
          color={'black'}
          name={props.icon.name}
        />
      )}
      {props.label && (
        <RegularText
          style={{marginLeft: wp(2), color: 'rgba(7,61,97,0.5)', fontSize: wp(3.8)}}>
          {props.label + ':'}
        </RegularText>
      )}
      <TextInput
        style={{height: hp(15), width: '100%', marginHorizontal: wp(2), paddingHorizontal: wp(4), flex: 2, textAlign: 'right', alignItems: 'flex-start', fontSize: wp(3.8)}}
        multiline={true}
        editable={props.editable}
        secureTextEntry={props.type === 'password'}
        value={props.value}
        placeholderTextColor="#aaa"
        placeholder={props.placeholder}
        onChangeText={onChanged}
        textAlignVertical="top"
        autoCorrect={false}
        keyboardType={keyboardType()}
        textContentType={
          props.type === 'phoneNumber' ? 'telephoneNumber' : 'none'
        }
      />
    </View>
  );
};

export default AppTextArea;

import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { hp, wp } from '../../utils/screenResize';
import { RegularText } from '../template/Text';
import { InputProps } from './interfaces/InputInterface';

const AppTextInput = (props: InputProps) => {
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
        paddingHorizontal: wp(3),
        borderWidth: 0.5,
        borderRadius: wp(50),
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        height: !props.multiline ? wp(12) : hp(10),
        backgroundColor: 'white',
      }, props.style]}>
      {props.icon && (
        <Icon
          style={props.icon.style ? props.icon.style :{}}
          color={'black'}
          name={props.icon.name}
        />
      )}
      {Boolean(props.forceFilling && !props.value) && (
        <Icon
          size={wp(6)}
          color={'red'}
          name={'error-outline'}
        />
      )}
      {props.label && (
        <RegularText
          style={{marginLeft: wp(2), color: 'rgba(7,61,97,0.5)', fontSize: wp(3.8)}}>
          {props.label + ':'}
        </RegularText>
      )}
      <TextInput
        style={[{flex: 1, textAlign: props.type === 'phoneNumber' ? 'left' : 'right', paddingHorizontal: wp(2), ontSize: wp(3.8)}, props.style]}
        editable={props.editable}
        secureTextEntry={props.type === 'password'}
        onChangeText={onChanged}
        placeholderTextColor='#aaa'
        maxLength={props.maxLength ? props.maxLength : 100}
        autoCorrect={false}
        keyboardType={keyboardType()}
        textContentType={
          props.type === 'phoneNumber' ? 'telephoneNumber' : 'none'
        }
        autoCapitalize={props.autoCapitalize}
        {...props}
      />
    </View>
  );
};

export default AppTextInput;

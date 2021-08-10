import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';
import { wp } from '../../utils/screenResize';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { WHITE } from '../../themes/colors';


const BackIcon = (props)=>{
    const navigation = useNavigation()
    return <TouchableOpacity style={{marginLeft:-wp(3)}} onPress={props.onPress ? props.onPress : () => navigation.goBack()}>
        <Icon name={'chevron-left'} color={WHITE} size={wp(11)} />
    </TouchableOpacity>
}

export default React.memo(BackIcon)
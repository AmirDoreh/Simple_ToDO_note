import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { wp } from '../../utils/screenResize';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { YELLOW } from '../../themes/colors';


const ProfileIcon = () => {
    const navigation = useNavigation()
    
    const onPress = () => {
        navigation.navigate('EditProfileScreen')
    }

    return <TouchableOpacity onPress={onPress}>
        <Icon name={'user'} size={wp(6.5)} color={YELLOW} />
    </TouchableOpacity>
}

export default React.memo(ProfileIcon)
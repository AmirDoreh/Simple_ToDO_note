import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { wp } from '../../utils/screenResize';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { YELLOW } from '../../themes/colors';

const DrawerMenuIcon: React.FC = () => {
    const navigation = useNavigation()

    return <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon name={'menu'} color={YELLOW} size={wp(7)} />
    </TouchableOpacity>
}

export default React.memo(DrawerMenuIcon)
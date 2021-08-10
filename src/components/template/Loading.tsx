import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { YELLOW } from '../../themes/colors';
import baseStyles from '../../themes/styles/base';

const Loading: React.FC = () => {
    return <View style={baseStyles.centerView}>
        <ActivityIndicator size="large" color={YELLOW} />
    </View>
}

export default React.memo(Loading)
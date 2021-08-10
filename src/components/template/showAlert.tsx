

import { MessageType, showMessage } from 'react-native-flash-message';

interface AProps {
    type?: MessageType;
    title?: string;
    description?: string;
}
export const showAlert = (props: AProps) => {
    return showMessage({
        type: props.type,
        duration: 3000,
        hideOnPress: props.onPress ? false : true,
        onPress: props.onPress,
        message: props.title,
        description: props.description,
        titleStyle: {fontFamily: 'DIN Next LT Arabic Bold', textAlign: 'right'},
        textStyle: {fontFamily: 'Frutiger LT Arabic 55 Roman', textAlign: 'right'}
    })
}
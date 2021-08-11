

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
        titleStyle: {textAlign: 'right'},
        textStyle: {textAlign: 'right'}
    })
}
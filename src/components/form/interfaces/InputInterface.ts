import { StyleProp, ViewStyle } from 'react-native';

interface IIconProps {
    color?: string;
    name?: string;
    style?: StyleProp<ViewStyle>;
}
  
export interface InputProps {
    onChangeText?: (text: string) => void;
    type?: 'name' | 'number' | 'text' | 'email' | 'phoneNumber' | 'password';
    value?: string;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    placeholder?: string;
    editable?: boolean;
    multiline?: boolean;
    forceFilling?: boolean;
    maxLength?: number;
    icon?: IIconProps;
    label?: string;
    style?: StyleProp<ViewStyle>;
}
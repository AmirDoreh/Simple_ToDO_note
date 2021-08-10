import { LIGHT_GRAY_2 } from './../colors';
import { StyleSheet } from 'react-native';
import * as Colors from '../colors';
import { hp, wp } from '../../utils/screenResize';

const baseStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.BLUE,
    },
    content: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND
    },
    centerView: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    header: {
        width: wp(100),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.BLUE,
        paddingHorizontal: '4%',
        height: wp(14),
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
    },
    headerLeft: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    headerRight: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    headerLogo: {
        width: wp(28),
        aspectRatio: 2.8
    },
    headerTitle: {
        fontSize: wp(4),
        color: Colors.WHITE
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    modalView: {
        flexDirection: 'row',
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    card: {
        marginHorizontal: 10,
        borderRadius: wp(5),
        width: wp(90),
        padding: wp(5),
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: Colors.WHITE,
        marginBottom: wp(5),
        alignSelf: "center",
    },
    cardTitle: {
        fontSize: wp(4),
        color: Colors.BLUE,
        marginBottom: wp(4)
    },
    divider: {
        height: 1,
        backgroundColor: Colors.LIGHT_GRAY,
        width: '100%',
        marginBottom: wp(3)
    },
    addButton: {
        height: 35,
        paddingLeft: wp(3),
        paddingRight: wp(4)
    },
    switchRow: {
        height: 45,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 3,
        backgroundColor: LIGHT_GRAY_2,
        borderRadius: 100,
        marginBottom: hp(2)
    },
    switchItem: {
        height: 39,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    switchItemActive: {
        height: 39,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLUE,
        borderRadius: 100
    },
    switchText: {
        fontSize: wp(4),
        top: -3,
        color: Colors.GRAY,
    },
    switchTextActive: {
        fontSize: wp(4),
        top: -3,
        color: Colors.YELLOW,
    }
});

export default baseStyles;
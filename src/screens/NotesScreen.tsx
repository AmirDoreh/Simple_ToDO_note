import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  RefreshControl,
  LayoutAnimation,
  Text,
} from 'react-native';
import * as Colors from '../themes/colors';
import {useDispatch, useSelector} from 'react-redux';
import {wp} from '../utils/screenResize';
import baseStyles from '../themes/styles/base';
import Loading from '../components/template/Loading';
import { RootState } from '../redux/store';
import { AppButton } from '../components/template/Button';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SELECTED_NOTE } from '../redux/actionTypes';
import { remove_note_action } from '../redux/apiCall/apiActions';

const NotesScreen: React.FC = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.tempStateReducer.notes);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [notesList, setNotesList] = useState(notes);


  const initialScreen = async () => {
    setRefreshing(true)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setRefreshing(false)
    setIsLoading(false)
  }
  useEffect(() => {
    initialScreen()
  }, []);

  const onPress = async (payload) => {
    await dispatch({type: SELECTED_NOTE, payload})
  }

  const onRemove = async (item) => {
    await dispatch(remove_note_action(item.id))
  }

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)} activeOpacity={1} key={item.id} style={baseStyles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text numberOfLines={3} ellipsizeMode="tail" style={baseStyles.cardTitle}>{item.text}</Text>
          <Icon onPress={() => onRemove(item)} name="delete" color={Colors.RED} size={wp(6)} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={'height'}>
      <SafeAreaView style={baseStyles.main}>
        <View style={baseStyles.header}>
          <View style={baseStyles.headerLeft} />
          <Text style={baseStyles.headerTitle}>All Notes</Text>
          <View style={baseStyles.headerRight}>
          </View>
        </View>
        <View style={baseStyles.content}>
          {isLoading ? <Loading />
          : <FlatList
          data={notes}
          refreshControl={
            <RefreshControl
                refreshing={refreshing}
                tintColor={Colors.YELLOW}
                onRefresh={initialScreen}
            />
          }
          ListFooterComponent={<View style={{height: wp(15)}}/>}
          style={{width: '100%', padding: wp(5)}}
          renderItem={_renderItem}
          keyExtractor={(item,index) => `${index}`}
          />}
          <View style={{flexDirection: 'row', position: 'absolute', left: wp(3), bottom: wp(3)}}>
            <AppButton
                bgColor={Colors.YELLOW}
                iconName="add"
                style={baseStyles.addButton}
                title={'Add New Note'}
                onPress={() => navigation.navigate('AddNoteScreen')}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NotesScreen;


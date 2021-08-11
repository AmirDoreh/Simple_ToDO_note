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
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SELECTED_NOTE } from '../redux/actionTypes';
import { remove_note_action } from '../redux/apiCall/apiActions';
import AppTextInput from '../components/form/AppTextInput';
import moment from 'moment'

const NotesScreen: React.FC = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const isFocused = useIsFocused()
  const notes = useSelector((state: RootState) => state.tempStateReducer.notes);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [notesList, setNotesList] = useState([]);


  const initialScreen = async () => {
    setRefreshing(true)
    setIsLoading(true)
    setNotesList(notes.sort((a,b) => (new Date(b.createdAt)) - (new Date(a.createdAt))))
    setRefreshing(false)
    setIsLoading(false)
  }
  useEffect(() => {
    initialScreen()
  }, [isFocused]);

  const setSearch = search => {
    const notes_ = notes
    if (search && search !== '' && search !== ' ') {
        let list_ = notes_.filter(el => el.text.toLowerCase().includes(search.toLowerCase()))
        setNotesList(list_.sort((a,b) => b.createdAt - a.createdAt))
    } else {
      setNotesList(notes_.sort((a,b) => b.createdAt - a.createdAt))
    }
  }

  const onPress = async (payload) => {
    await dispatch({type: SELECTED_NOTE, payload})
    navigation.navigate('AddNoteScreen')
  }

  const onRemove = async (item) => {
    await dispatch(remove_note_action(item.id, notes))
    setNotesList(notesList.filter(el => el.id !== item.id).sort((a,b) => b.createdAt - a.createdAt))
  }

  const _renderItem = ({item, index}) => {
    let timeStamp = moment(item.createdAt).fromNow()
    let timeStampLast = index !== 0 ? moment(notesList[index-1].createdAt).fromNow() : ''
    let TimeStampText = <Text style={{marginLeft: wp(3), color: Colors.GREY_PLACEHOLDER, fontSize: wp(4.5), marginVertical: wp(3)}}>{moment(item.createdAt).fromNow()}</Text>
    return (<>
      {Boolean(index !== 0 && (timeStamp !== timeStampLast)) && TimeStampText}
      <TouchableOpacity onPress={() => onPress(item)} activeOpacity={1} key={item.id} style={baseStyles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text numberOfLines={3} ellipsizeMode="tail" style={baseStyles.cardTitle}>{item.text}</Text>
          <Icon onPress={() => onRemove(item)} name="delete" color={Colors.RED} size={wp(6)} />
        </View>
        <Text style={{alignSelf: 'flex-end', fontSize:wp(3), color: Colors.GREY_PLACEHOLDER}}>{moment(item.createdAt).format('DD/MM/YYYY, hh:mm')}</Text>
      </TouchableOpacity>
    </>)
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
          <AppTextInput
              style={{width: wp(90)}}
              placeholder={'search ...'}
              onChangeText={setSearch}
          />
          {isLoading ? <Loading />
          : <FlatList
          data={notesList}
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
                onPress={async() => {
                  await dispatch({type: SELECTED_NOTE, payload: null})
                  navigation.navigate('AddNoteScreen')
                }}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NotesScreen;


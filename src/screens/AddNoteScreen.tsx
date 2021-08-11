import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import * as Colors from '../themes/colors';
import {useDispatch, useSelector} from 'react-redux';
import {hp, wp} from '../utils/screenResize';
import {
  BackIcon,
  BoldText,
} from '../components';
import {
  add_note_action, edit_note_action,
} from '../redux/apiCall/apiActions';
import baseStyles from '../themes/styles/base';
import { RootState } from '../redux/store';
import { AppButton } from '../components/template/Button';
import AppTextArea from '../components/form/AppTextArea';
import { showAlert } from '../components/template/showAlert';
import { useNavigation } from '@react-navigation/native';

const AddNoteScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const selectedNote = useSelector((state: RootState) => state.tempStateReducer.selectedNote);
  const [abstract, setAbstract] = useState(selectedNote ? selectedNote.text : '');
  const notes = useSelector((state: RootState) => state.tempStateReducer.notes);

  
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
  }, []);

  const onSubmit = async () => {
    if (!abstract) {
      showAlert({title: 'Attention', description: 'Please complete abstract', type: 'danger'})
    } else {
      setIsLoading(true)
      await dispatch(selectedNote ? edit_note_action(selectedNote.id, abstract, notes) : add_note_action(abstract, notes))
      setIsLoading(false)
      navigation.goBack()
    }
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={'height'}>
      <SafeAreaView style={baseStyles.main}>
        <View style={baseStyles.header}>
          <View style={baseStyles.headerLeft}>
            <BackIcon />
          </View>
          <BoldText style={baseStyles.headerTitle}>New Note</BoldText>
          <View style={baseStyles.headerRight}>
          </View>
        </View>
        <View style={baseStyles.content}>
          <ScrollView style={{paddingHorizontal: wp(7.5), paddingVertical: hp(3)}}>

            <AppTextArea
              placeholder="abstract"
              value={abstract}
              onChangeText={setAbstract}
            />
            
            <AppButton
                bgColor={Colors.YELLOW}
                style={{marginTop: hp(3)}}
                title={'Submit'}
                onPress={onSubmit}
            />
            <View style={{height: hp(5)}} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddNoteScreen;


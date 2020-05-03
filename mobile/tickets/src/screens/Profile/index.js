import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import { signOut } from '@store/modules/auth/actions';

export default function Profile() {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const signed = useSelector((state) => state.auth.signed);
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    async function load() {
      const response = await firebase.auth().currentUser;
      setUser(response);
    }
    if (!signed) {
      navigation.navigate('SignIn');
    }
    load();
  }, [signed, isFocused]);

  async function handleLogout() {
    await firebase.auth().signOut();
    dispatch(signOut());
  }

  return user ? (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <OptionButton icon="md-person" label={'Nome: ' + user?.displayName} />

      <OptionButton icon="md-at" label={'E-mail: ' + user?.email} />

      <OptionButton
        icon="ios-chatboxes"
        label={'Verificado: ' + (user?.emailVerified ? 'sim' : 'não')}
      />

      <OptionButton
        icon="md-call"
        label={
          'Telefone: ' +
          (user?.phoneNumber ? user.phoneNumber : 'não cadastrado')
        }
      />
      <OptionButton
        icon="md-exit"
        label={'Sair da conta'}
        onPress={() => handleLogout()}
        isLastOption
      />
    </ScrollView>
  ) : null;
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

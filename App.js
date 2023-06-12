import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';

import Patient from './src/components/patient';
import Formulaire from './src/components/formulaire';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [patients, setPatients] = useState([]);

  return (
    <SafeAreaView>
      <Text style={styles.titre}>
        Docteur Michon {''}
        <Text style={styles.titreBold}>Cabinet</Text>
      </Text>
      <Pressable
        style={styles.btnNewRdv}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.btnTextNewRdv}>Nouveau Rdv</Text>
      </Pressable>

      {patients.length === 0 ? (
        <Text style={styles.noPatients}>Il n'y a pas de patients</Text>
      ) : (
        <FlatList
          style={styles.liste}
          data={patients}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Patient item={item} />;
          }}
        />
      )}

      <Formulaire
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPatients={setPatients}
        patients={patients}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titre: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titreBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNewRdv: {
    backgroundColor: '#6D28D9',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNewRdv: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  noPatients: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  liste: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;

import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulaire = ({modalVisible, setModalVisible, setPatients, patients}) => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [symptome, setSymptome] = useState('');
  const [date, setDate] = useState(new Date());

  const handleRdv = () => {
    //Valider
    if ([nom, email, telephone, symptome, date].includes('')) {
      Alert.alert(' Il y a une erreur', 'Tous les champs sont obligatoires');
      return;
    }
    const nouveauPatient = {
      id: Date.now(),
      nom,
      email,
      telephone,
      date,
      symptome,
    };

    setPatients([...patients, nouveauPatient]);
    setModalVisible(!modalVisible);

    setNom('');
    setEmail('');
    setTelephone('');
    setDate(new Date());
    setSymptome('');
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.titre}>
            Nouveau {''}
            <Text style={styles.titreBold}>Rendez-vous</Text>
          </Text>
          <Pressable
            onLongPress={() => setModalVisible(!modalVisible)}
            style={styles.btnFermer}>
            <Text style={styles.btnFermText}>X Fermer</Text>
          </Pressable>
          <View style={styles.champ}>
            <Text style={styles.label}>Nom patient</Text>
            <TextInput
              style={styles.input}
              placeholder="Nom patient"
              placeholderTextColor={'#666'}
              value={nom}
              onChangeText={setNom}
            />
          </View>
          <View style={styles.champ}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.champ}>
            <Text style={styles.label}>Téléphone</Text>
            <TextInput
              style={styles.input}
              placeholder="Téléphone"
              placeholderTextColor={'#666'}
              keyboardType="phone-pad"
              value={telephone}
              onChangeText={setTelephone}
              maxLength={10}
            />
          </View>
          <View style={styles.champ}>
            <Text style={styles.label}>Date</Text>
            <View style={styles.date}>
              <DatePicker
                date={date}
                locale="fr"
                onDateChange={dateR => setDate(dateR)}
              />
            </View>
          </View>
          <View style={[styles.champ, styles.symptomeInput]}>
            <Text style={styles.label}>Symptômes</Text>
            <TextInput
              style={styles.input}
              placeholder="Symptômes"
              placeholderTextColor={'#666'}
              value={symptome}
              onChangeText={setSymptome}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable onPress={handleRdv} style={styles.btnAjouter}>
            <Text style={styles.btnFermText}>Ajouter Rdv</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titre: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 30,
    color: '#FFF',
  },
  titreBold: {
    fontWeight: '900',
    color: '#FFF',
  },
  champ: {
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    color: '#FFF',
    marginVertical: 13,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  symptomeInput: {
    height: 100,
  },
  date: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  btnFermer: {
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  btnFermText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  btnAjouter: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 40,
    borderRadius: 10,
  },
});
export default Formulaire;

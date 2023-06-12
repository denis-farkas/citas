import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Patient = ({item}) => {
  const {nom, email, telephone, date, symptome} = item;
  const formatDate = date => {
    const newDate = new Date(date);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return newDate.toLocaleDateString('fr-FR', options);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Patient: </Text>
      <Text style={styles.text}>{nom}</Text>
      <Text style={styles.date}>{formatDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    borderBottomColor: '#94a3B8',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    textTransfom: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    color: '#6D28D9',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  date: {
    color: '#374151',
  },
});

export default Patient;

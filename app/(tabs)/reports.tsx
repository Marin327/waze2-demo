import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const signals = [
  { id: 1, type: 'Traffic Jam', location: 'бул. Витоша', description: 'Тежък трафик в посока център', time: '08:00' },
  { id: 2, type: 'Police Check', location: 'ул. Граф Игнатиев', description: 'Полиция проверява документи', time: '08:10' },
  { id: 3, type: 'Accident', location: 'бул. Цариградско шосе', description: 'Катастрофа с 2 коли', time: '08:15' },
  { id: 4, type: 'Road Work', location: 'бул. България', description: 'Ремонт на пътя, затворена лява лента', time: '08:20' },
  { id: 5, type: 'Traffic Jam', location: 'бул. Петър Дертлиев', description: 'Забавяне поради трафик', time: '08:25' },
  { id: 6, type: 'Accident', location: 'ул. Раковски', description: 'Катастрофа с автобус', time: '08:30' },
  { id: 7, type: 'Police Check', location: 'бул. Александър Малинов', description: 'Полиция извършва контрол', time: '08:35' },
  { id: 8, type: 'Road Work', location: 'ул. Цар Самуил', description: 'Асфалтиране на улицата', time: '08:40' },
  { id: 9, type: 'Traffic Jam', location: 'бул. Черни връх', description: 'Задръстване при кръстовището', time: '08:45' },
  { id: 10, type: 'Accident', location: 'бул. Никола Вапцаров', description: 'Катастрофа с три автомобила', time: '08:50' },
  { id: 11, type: 'Police Check', location: 'бул. Цар Борис III', description: 'Полиция проверява превозни средства', time: '08:55' },
  { id: 12, type: 'Traffic Jam', location: 'ул. Леге', description: 'Тежък трафик в посока юг', time: '09:00' },
  { id: 13, type: 'Road Work', location: 'бул. Ген. Данаил Николаев', description: 'Ремонт на осветление', time: '09:05' },
  { id: 14, type: 'Accident', location: 'ул. Гурко', description: 'Катастрофа между мотоциклет и кола', time: '09:10' },
  { id: 15, type: 'Traffic Jam', location: 'бул. Драган Цанков', description: 'Задръстване поради авария', time: '09:15' },
  { id: 16, type: 'Police Check', location: 'ул. Козяк', description: 'Полиция следи за скорост', time: '09:20' },
  { id: 17, type: 'Road Work', location: 'бул. Самоковско шосе', description: 'Поставяне на пътни знаци', time: '09:25' },
  { id: 18, type: 'Traffic Jam', location: 'бул. Цар Освободител', description: 'Трафик поради затворен булевард', time: '09:30' },
  { id: 19, type: 'Accident', location: 'ул. Раковски', description: 'Катастрофа с пешеходец', time: '09:35' },
  { id: 20, type: 'Police Check', location: 'бул. Вл. Варненчик', description: 'Полиция проверява документи', time: '09:40' },
];

export default function Reports() {
  return (
    <ScrollView style={styles.container}>
      {signals.map(signal => (
        <View key={signal.id} style={styles.signalCard}>
          <Text style={styles.type}>{signal.type}</Text>
          <Text style={styles.location}>{signal.location}</Text>
          <Text style={styles.description}>{signal.description}</Text>
          <Text style={styles.time}>{signal.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  signalCard: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#e63946',
  },
  location: {
    fontSize: 14,
    color: '#457b9d',
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    color: '#1d3557',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#a8dadc',
    textAlign: 'right',
  },
});

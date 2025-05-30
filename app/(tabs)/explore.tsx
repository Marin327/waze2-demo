import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

// Активни сигнали - минимум 20
const activeSignals = [
  { id: '1', type: 'Задръстване', location: 'бул. Цариградско шосе', severity: 'Висока', description: 'Задръстване заради катастрофа при изхода на града' },
  { id: '2', type: 'Пътна полиция', location: 'ул. Витоша', severity: 'Средна', description: 'Проверка за алкохол и документи' },
  { id: '3', type: 'Инцидент', location: 'Мост на Възраждане', severity: 'Ниска', description: 'Загасен автомобил в аварийната лента' },
  { id: '4', type: 'Задръстване', location: 'Околовръстен път', severity: 'Висока', description: 'Тежък трафик към западната част на София' },
  { id: '5', type: 'Пътна полиция', location: 'бул. България', severity: 'Средна', description: 'Полиция проверява товарни автомобили' },
  { id: '6', type: 'Ремонт', location: 'ул. Шипка', severity: 'Средна', description: 'Ремонт на асфалт, движението ограничено' },
  { id: '7', type: 'Задръстване', location: 'бул. Александър Малинов', severity: 'Висока', description: 'Пиков трафик в посока центъра' },
  { id: '8', type: 'Пътна полиция', location: 'ул. Пиротска', severity: 'Средна', description: 'Проверка на превозни средства за нарушения' },
  { id: '9', type: 'Инцидент', location: 'бул. Дондуков', severity: 'Средна', description: 'Катастрофа с две коли, бавно движение' },
  { id: '10', type: 'Задръстване', location: 'ул. Ситняково', severity: 'Висока', description: 'Трафик блокиран заради ремонт на тротоар' },
  { id: '11', type: 'Пътна полиция', location: 'бул. Витоша', severity: 'Средна', description: 'Случайна проверка на шофьори' },
  { id: '12', type: 'Инцидент', location: 'ул. Ген. Гурко', severity: 'Ниска', description: 'Лека катастрофа, няма пострадали' },
  { id: '13', type: 'Задръстване', location: 'бул. Цар Борис III', severity: 'Висока', description: 'Тежък трафик в посока изхода на града' },
  { id: '14', type: 'Пътна полиция', location: 'ул. Граф Игнатиев', severity: 'Средна', description: 'Проверка на техническата изправност на автомобилите' },
  { id: '15', type: 'Ремонт', location: 'бул. Стамболийски', severity: 'Средна', description: 'Подмяна на осветителни тела на пътя' },
  { id: '16', type: 'Задръстване', location: 'ул. Ломско шосе', severity: 'Висока', description: 'Проблеми при кръстовището с бул. Ботевградско' },
  { id: '17', type: 'Пътна полиция', location: 'бул. Цариградско шосе', severity: 'Средна', description: 'Проверка за скорост' },
  { id: '18', type: 'Инцидент', location: 'ул. Врабча', severity: 'Ниска', description: 'Повреден автомобил в аварийната лента' },
  { id: '19', type: 'Ремонт', location: 'ул. Раковски', severity: 'Средна', description: 'Ремонт на пътната настилка' },
  { id: '20', type: 'Задръстване', location: 'бул. България', severity: 'Висока', description: 'Пиков трафик заради събитие в зала "Арена Армеец"' },
];

// Полицейски проверки - минимум 20
const policeChecks = [
  { id: '1', location: 'ул. Опълченска', time: '14:00 - 18:00', note: 'Проверка за скорост и алкохол' },
  { id: '2', location: 'бул. Патриарх Евтимий', time: '10:00 - 16:00', note: 'Документи и техническа проверка' },
  { id: '3', location: 'ул. Лъвски дол', time: '12:00 - 20:00', note: 'Проверка на товарни автомобили' },
  { id: '4', location: 'бул. Дондуков', time: '09:00 - 14:00', note: 'Проверка на пътници и водачи' },
  { id: '5', location: 'ул. Пиротска', time: '15:00 - 21:00', note: 'Алкохолна проба и проверки' },
  { id: '6', location: 'бул. Витоша', time: '08:00 - 12:00', note: 'Проверка за скорост' },
  { id: '7', location: 'ул. Граф Игнатиев', time: '11:00 - 17:00', note: 'Проверка на документи' },
  { id: '8', location: 'бул. Цариградско шосе', time: '13:00 - 19:00', note: 'Проверка на товарни камиони' },
  { id: '9', location: 'ул. Врабча', time: '07:00 - 11:00', note: 'Пътна полиция в пикови часове' },
  { id: '10', location: 'бул. България', time: '16:00 - 22:00', note: 'Проверка за спазване на пътните знаци' },
  { id: '11', location: 'ул. Ситняково', time: '10:00 - 15:00', note: 'Проверка на техническа изправност' },
  { id: '12', location: 'бул. Александър Стамболийски', time: '14:00 - 18:00', note: 'Проверка за алкохол' },
  { id: '13', location: 'ул. Цар Симеон', time: '09:00 - 13:00', note: 'Пътна полиция на входа на града' },
  { id: '14', location: 'бул. Ботевградско шосе', time: '15:00 - 20:00', note: 'Проверка на превозни средства' },
  { id: '15', location: 'ул. Ген. Гурко', time: '08:00 - 14:00', note: 'Проверка за документи и алкохол' },
  { id: '16', location: 'бул. Цар Борис III', time: '12:00 - 17:00', note: 'Проверка за скорост' },
  { id: '17', location: 'ул. Шипка', time: '10:00 - 16:00', note: 'Пътна полиция при ремонти' },
  { id: '18', location: 'бул. Дондуков', time: '07:00 - 13:00', note: 'Проверка на товарни автомобили' },
  { id: '19', location: 'ул. Витоша', time: '14:00 - 19:00', note: 'Проверка за алкохол' },
  { id: '20', location: 'бул. България', time: '11:00 - 18:00', note: 'Пътна полиция на ключови места' },
];

// Пътни ремонти - минимум 20
const roadWorks = [
  { id: '1', location: 'бул. Александър Стамболийски', duration: 'до 30 юни', description: 'Ремонт на асфалтовата настилка, ограничение в едната лента' },
  { id: '2', location: 'ул. Цар Симеон', duration: 'до 15 юли', description: 'Подмяна на тротоари и канализация' },
  { id: '3', location: 'бул. Ботевградско шосе', duration: 'до 10 август', description: 'Изграждане на нови пътни знаци и маркировка' },
  { id: '4', location: 'ул. Шипка', duration: 'до 25 юли', description: 'Ремонт на пътното платно' },
  { id: '5', location: 'бул. Цариградско шосе', duration: 'до 20 август', description: 'Подмяна на осветителни тела' },
  { id: '6', location: 'ул. Витоша', duration: 'до 10 септември', description: 'Ремонт на тротоари и пешеходни пътеки' },
  { id: '7', location: 'бул. България', duration: 'до 15 юли', description: 'Асфалтиране и ремонт на уличната мрежа' },
  { id: '8', location: 'ул. Пиротска', duration: 'до 30 юни', description: 'Почистване и подмяна на дъждовна канализация' },
  { id: '9', location: 'бул. Дондуков', duration: 'до 5 август', description: 'Ремонт на мостови съоръжения' },
  { id: '10', location: 'ул. Ген. Гурко', duration: 'до 20 юли', description: 'Подмяна на пътна маркировка' },
  { id: '11', location: 'бул. Цар Борис III', duration: 'до 10 септември', description: 'Ремонт на пешеходни пътеки и знаци' },
  { id: '12', location: 'ул. Ломско шосе', duration: 'до 25 юли', description: 'Асфалтиране на участък с големи дупки' },
  { id: '13', location: 'бул. Витоша', duration: 'до 30 август', description: 'Подмяна на бордюри и тротоари' },
  { id: '14', location: 'ул. Ситняково', duration: 'до 10 август', description: 'Ремонт на канализация и подмяна на асфалт' },
  { id: '15', location: 'бул. Патриарх Евтимий', duration: 'до 5 септември', description: 'Обновяване на улично осветление' },
  { id: '16', location: 'ул. Опълченска', duration: 'до 20 юли', description: 'Подмяна на пътна настилка' },
  { id: '17', location: 'бул. България', duration: 'до 30 юни', description: 'Ремонт на водопровод и асфалт' },
  { id: '18', location: 'ул. Раковски', duration: 'до 15 юли', description: 'Обновяване на тротоари и поставяне на нова маркировка' },
  { id: '19', location: 'бул. Дондуков', duration: 'до 20 август', description: 'Ремонт на мост и пътни знаци' },
  { id: '20', location: 'ул. Врабча', duration: 'до 30 юли', description: 'Ремонт на осветление и асфалт' },
];

const SignalItem = ({ type, location, severity, description }: { type: string; location: string; severity: string; description: string }) => (
  <ThemedView style={styles.signalItem}>
    <ThemedText type="defaultSemiBold">{type} — {location}</ThemedText>
    <ThemedText>Сериозност: {severity}</ThemedText>
    <ThemedText>{description}</ThemedText>
  </ThemedView>
);

const PoliceCheckItem = ({ location, time, note }: { location: string; time: string; note: string }) => (
  <ThemedView style={styles.signalItem}>
    <ThemedText type="defaultSemiBold">{location}</ThemedText>  {/* Тук е поправено */}
    <ThemedText>Часове: {time}</ThemedText>
    <ThemedText>Бележка: {note}</ThemedText>
  </ThemedView>
);
const RoadWorkItem = ({ location, duration, description }: { location: string; duration: string; description: string }) => (
  <ThemedView style={styles.signalItem}>
    <ThemedText type="defaultSemiBold">{location}</ThemedText>
    <ThemedText>Продължителност: {duration}</ThemedText>
    <ThemedText>{description}</ThemedText>
  </ThemedView>
);

export default function Explore() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#a0c4ff', dark: '#1e3a8a' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#3b82f6"
          name="car.fill"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Трафик и сигнали в София</ThemedText>
      </ThemedView>

      <Collapsible title="Активни сигнали">
        <FlatList
          data={activeSignals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SignalItem
              type={item.type}
              location={item.location}
              severity={item.severity}
              description={item.description}
            />
          )}
        />
      </Collapsible>

      <Collapsible title="Полицейски проверки">
        <FlatList
          data={policeChecks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PoliceCheckItem
              location={item.location}
              time={item.time}
              note={item.note}
            />
          )}
        />
      </Collapsible>

      <Collapsible title="Пътни ремонти">
        <FlatList
          data={roadWorks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RoadWorkItem
              location={item.location}
              duration={item.duration}
              description={item.description}
            />
          )}
        />
      </Collapsible>

      <Collapsible title="За приложението">
        <ThemedText style={{ marginBottom: 10 }}>
          Това приложение е създадено с Expo и React Native и предоставя актуална информация за движението в София в реално време. Нашата цел е да помогнем на шофьорите да избягват задръствания, полицейски проверки и пътни ремонти.
        </ThemedText>
        <ThemedText style={{ marginBottom: 10 }}>
          Използваме данни от различни източници и сигнали от потребители, за да осигурим най-точната и навременна информация. Следете разделите за „Активни сигнали“, „Полицейски проверки“ и „Пътни ремонти“ за да сте винаги информирани.
        </ThemedText>
        <ExternalLink href="https://expo.dev/">
          <ThemedText type="link">Научете повече за Expo</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#3b82f6',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  signalItem: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#e0e7ff',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { useState } from 'react';
import { ScreenType } from './constants/constants';
import AddNote from './screens/AddNote';
import AllNotesScreen from './screens/AllNotesScreen';
import BackButton from './components/BackButton';
import { Note } from './constants/constants';

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home)
  const [notes, setNotes] = useState(Array<Note>())
  const updateScreen = (screen: string) => {
    setScreen(screen)
  }
  let content
  if (screen === ScreenType.addNote) {
    content = <AddNote
      onExit={updateScreen}
      onSave={ (note) => setNotes([...notes, { id: Date.now(), note: note }]) }
    />
  } else if (screen === ScreenType.allNotes) {
    content = <AllNotesScreen notes={notes} />
  } else if (screen === ScreenType.home) {
    content = <HomeScreen onExit={updateScreen} />
  }
  console.log(notes)

  return (
    <View style={styles.container}>
      <Header />
      { screen !== ScreenType.home && (
        <BackButton onButtonClick={updateScreen} />
      )}
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

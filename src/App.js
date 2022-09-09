import Header from './components/Header';
import Form from './components/Form';
import NoteList from './components/NoteList';
import { ColorModeScript, extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

function App() {
  return (
    <div className="App">
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Header />
      <Form />
      <NoteList />
    </div>
  );
}

export default App;

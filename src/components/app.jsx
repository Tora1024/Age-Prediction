import './app.css';

import { NameProvider } from '../context/NameContext';
import Header from './Header/Index';
import NameInput from './NameInput/Index';
import AgeDisplay from './AgeDisplay/Index';

function App() {
  return (
    <NameProvider>
      <Header />
      <NameInput />
      <AgeDisplay />
    </NameProvider>
  );
}

export default App;

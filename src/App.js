import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';


function App() {
  return (
    <Container>
      <MainHeader title="budget"/>
      <DisplayBalance title="Your Balance" value="1234.54"/>

      <DisplayBalances/>

      <MainHeader title="History" type="h3"></MainHeader>

      <EntryLine title="something" value="10000"></EntryLine>
      <EntryLine title="something1" value="20000" isExpense></EntryLine>


      <MainHeader title="Add New Transaction" type="h3"></MainHeader>
      <NewEntryForm/>
    </Container>
  );
}

export default App;

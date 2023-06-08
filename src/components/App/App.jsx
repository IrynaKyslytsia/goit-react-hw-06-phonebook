import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container, MainTitle, SecondTitle } from 'components/App/App.styled';

export const App = () => {
   return (
    <Container>
      <MainTitle>Phonebook</MainTitle>  
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

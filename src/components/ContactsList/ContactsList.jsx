import ContactEl from '../ContactEl';
import { ContactsUl } from './ContactsList.styled';

export default function ContactsList({ contacts, onClick }) {
  return (
    <>
      <ContactsUl>
        <ContactEl contacts={contacts} onClick={onClick} />
      </ContactsUl>
    </>
  );
}

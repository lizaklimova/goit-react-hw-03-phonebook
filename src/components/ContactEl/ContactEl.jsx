import { ContactLi, ContactDeleteBtn } from './ContactEl.styled';
export default function ContactEl({ contacts, onClick }) {
  return contacts.map((contact, i) => (
    <ContactLi key={contact.id}>
      <p>
        {i + 1}. {contact.name}: {contact.number}
      </p>
      <ContactDeleteBtn type="button" onClick={() => onClick(contact.id)}>
        Delete ❌
      </ContactDeleteBtn>
    </ContactLi>
  ));
}

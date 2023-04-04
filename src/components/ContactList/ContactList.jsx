export const ContactList = ({ contacts, filter }) => {
  const createMarkupByFoundContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  const arrayOfFoundContacts = createMarkupByFoundContacts();
  return (
    <ul>
      {arrayOfFoundContacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        );
      })}
    </ul>
  );
};

import { nanoid } from 'nanoid';

export const ContactFilter = ({ value, handleFindContacts }) => {
  const IdContacts = nanoid();
  return (
    <>
      <label htmlFor={IdContacts}></label>
      <input
        id={IdContacts}
        type="text"
        name="filter"
        value={value}
        onChange={handleFindContacts}
      ></input>
    </>
  );
};

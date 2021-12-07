import React from "react";

const DeleteStudents = ({ contact, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.Name}</td>
      <td>{contact.PhoneNumber}</td>
      <td>{contact.Email}</td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DeleteStudents;

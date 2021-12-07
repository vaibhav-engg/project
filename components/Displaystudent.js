import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import "./Displaystudent.css";
import data from "./dummy-data.json";
import DeleteStudents from "./DeleteStudents";

const Displaystudent = () => {
  const [students, setStudents] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
  });
  const handleAddFormchange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newstudent = {
      id: nanoid(),
      Name: addFormData.Name,
      PhoneNumber: addFormData.PhoneNumber,
      Email: addFormData.Email,
    };
    const newstudents = [...students, newstudent];
    setStudents(newstudents);
  };
  const handleDeleteClick = (studentsId) => {
    const newstudents = [...students];

    const index = students.findIndex((student) => student.id === studentsId);

    newstudents.splice(index, 1);

    setStudents(newstudents);
  };

  return (
    <div className="student-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {students.map((contact) => (
            <Fragment>
              <DeleteStudents
                contact={contact}
                handleDeleteClick={handleDeleteClick}
              />
            </Fragment>
          ))}
        </tbody>
      </table>
      <h2>Add a Student</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Enter your name.."
          onChange={handleAddFormchange}
        />
        <input
          type="text"
          name="PhoneNumber"
          required="required"
          placeholder="Enter your number.."
          onChange={handleAddFormchange}
        />
        <input
          type="email"
          name="Email"
          required="required"
          placeholder="Enter your Email.."
          onChange={handleAddFormchange}
        />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};

export default Displaystudent;

import React, { useState } from 'react';
import "./Form.css";
import ListView from '../ListView/ListView';

export default function Form() {
  const date = new Date();
  const today = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  const [formList, setFormList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "Male",
    age: "",
    date: today,
    doctor: "Dr. Gulati",
    problem: ""
  });

  const handleInputForm = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim()
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { name, phone, age, problem } = formData;

    if (!name || !phone || !age || !problem) {
      alert("All fields are required!");
      return;
    }

    setFormList([...formList, formData]);
    alert("Appointment booked successfully!");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      gender: "Male",
      age: "",
      date: today,
      doctor: "Dr. Gulati",
      problem: ""
    });
  };

  return (
    <div className='main'>
      {/* Form Section */}
      <div className='form-box'>
        <h2>Appointment Form</h2>
        <form className='form' onSubmit={submitForm}>
          <label>Full Name</label>
          <input
            onChange={handleInputForm}
            type="text"
            name='name'
            value={formData.name}
            className='form-control'
          />

          <label>Contact No.</label>
          <input
            onChange={handleInputForm}
            type="tel"
            name='phone'
            value={formData.phone}
            className='form-control'
          />

          <label>Gender</label>
          <div className='gender'>
            <div>
              <input
                onChange={handleInputForm}
                type="radio"
                name='gender'
                value="Male"
                checked={formData.gender === "Male"}
              />
              <label>Male</label>
            </div>
            <div>
              <input
                onChange={handleInputForm}
                type="radio"
                name='gender'
                value="Female"
                checked={formData.gender === "Female"}
              />
              <label>Female</label>
            </div>
          </div>

          <label>Age</label>
          <input
            onChange={handleInputForm}
            type="number"
            name='age'
            value={formData.age}
            className='form-control'
          />

          <label>Appointment Date</label>
          <input
            onChange={handleInputForm}
            type="date"
            name='date'
            value={formData.date}
            className='form-control'
          />

          <label>Select Doctor</label>
          <select name="doctor" value={formData.doctor} onChange={handleInputForm}>
            <option value="Dr. Gulati">Dr. Gulati</option>
            <option value="Dr. Jastine">Dr. Jastine</option>
            <option value="Dr. Tokyo">Dr. Tokyo</option>
            <option value="Dr. Parekh">Dr. Parekh</option>
            <option value="Dr. Sanjay">Dr. Sanjay</option>
          </select>

          <label>Share your problem</label>
          <textarea
            onChange={handleInputForm}
            name="problem"
            value={formData.problem}
            className='form-control'
            rows="3"
          ></textarea>

          <button type='submit' className='btn'>Book Appointment</button>
        </form>
      </div>

      {/* List View Section */}
      <div className="detail-box">
        {formList.length > 0 && <ListView formList={formList} />}
      </div>
    </div>
  );
}

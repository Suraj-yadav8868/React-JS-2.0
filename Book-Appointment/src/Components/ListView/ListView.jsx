import React from 'react';

export default function ListView({ formList = [] }) {
    return (
        <div>
            {formList?.map((form, index) => (
                <div key={index}>
                    <p><strong>Name:</strong> {form.name}</p>
                    <p><strong>Phone:</strong> {form.phone}</p>
                    <p><strong>Gender:</strong> {form.gender}</p>
                    <p><strong>Age:</strong> {form.age}</p>
                    <p><strong>Date:</strong> {form.date}</p>
                    <p><strong>Doctor:</strong> {form.doctor}</p>
                    <p><strong>Problem:</strong> {form.problem}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

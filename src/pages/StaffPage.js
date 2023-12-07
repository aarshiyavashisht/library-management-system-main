import React, { useState, useEffect } from 'react';

const StaffPage = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/staff');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStaff(data);
      } catch (error) {
        console.error('Error fetching staff:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Staff Members</h2>
      <ul>
        {staff.map(staffMember => (
          <li key={staffMember.staff_id}>
            {staffMember.staff_name} - {staffMember.position} - {staffMember.email} - {staffMember.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffPage;

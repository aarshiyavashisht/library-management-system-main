import React, { useState, useEffect } from 'react';

const MembersPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/MembersPage');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Members</h2>
      <ul>
        {members.map(member => (
          <li key={member.member_id}>
            {member.member_name} - {member.email} - {member.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersPage;

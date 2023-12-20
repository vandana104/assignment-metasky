
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// 
interface User {
  id: string; 
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  dob: {
    age: number;
  };

}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=100');
        const apiUsers: User[] = response.data.results.map((apiUser: any) => ({
          id: apiUser.login.uuid,
          name: apiUser.name,
          email: apiUser.email,
          dob: apiUser.dob,
        }));
        setUsers(apiUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  

  return (
    <div>
      
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sl.no</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell></TableCell>
                <TableCell>{`${user.name.title} ${user.name.first} ${user.name.last}`}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.dob.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavBar from "../Navbar/navbar"
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
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
  const [dupUsers, setDupUsers] = useState<User[]>([]);
  const filteredUser = useSelector(
    (state: RootState) => state.auth.filteredData,
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=100",
        );
        const apiUsers: User[] = response.data.results;
        console.log(apiUsers);
        setUsers(apiUsers);
        setDupUsers(apiUsers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setUsers(filteredUser);

    // if(filteredUser)
  }, [filteredUser]);

  return (
    <div>
      <NavBar users={dupUsers} />
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
            {users.map((user, index) => (
              <TableRow key={user.email}>
                <TableCell>{index + 1}</TableCell>
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
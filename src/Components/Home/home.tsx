import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavBar from "../Navbar/navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
//
interface User {
  id: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  username: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  dob: { age: string };
  login: {
    username: string;
  };
  email: string;
  phone: string;
  location: {
    country: string;
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
              <TableCell>Age</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone number</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.email}>
                <TableCell>{index + 1}</TableCell>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <Avatar src={user.picture.large} alt="User" />
                  {`${user.name.title} ${user.name.first} ${user.name.last}`}
                </TableCell>
                <TableCell>{user.dob.age}</TableCell>
                <TableCell>{user.login.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.location.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;

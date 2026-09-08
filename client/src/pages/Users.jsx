import { useEffect, useState } from "react";

import axios from "axios";

import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/users");
        const data = response.data;

        const normalUsers = data.filter((user) => user.role !== "admin");
        setUsers(normalUsers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await axios.delete(`http://localhost:5000/delete-user/${id}`);

      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 700,
          color: "#3d6e00",
        }}
      >
        Users 👥
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "15px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#efffdc",
              }}
            >
              <TableCell>
                <b>Name</b>
              </TableCell>

              <TableCell>
                <b>Email</b>
              </TableCell>

              <TableCell>
                <b>Role</b>
              </TableCell>

              <TableCell>
                <b>Total Products</b>
              </TableCell>

              <TableCell>
                <b>Cart Items</b>
              </TableCell>

              <TableCell>
                <b>Total Amount</b>
              </TableCell>

              <TableCell>
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name || "-"}</TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>{user.role}</TableCell>

                <TableCell>{user.totalProducts}</TableCell>

                <TableCell>
                  {user.products.length > 0 ? (
                    user.products.map((product, index) => (
                      <Box
                        key={index}
                        sx={{
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                          }}
                        >
                          {product.name}
                        </Typography>

                        <Typography variant="body2">
                          Qty: {product.qty}
                        </Typography>

                        <Typography variant="body2">
                          Price: ₹{product.price}
                        </Typography>

                        <Typography variant="body2">
                          Total: ₹{product.total}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography variant="body2">No items</Typography>
                  )}
                </TableCell>

                <TableCell>₹{user.cartAmount}</TableCell>

                <TableCell>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Users;

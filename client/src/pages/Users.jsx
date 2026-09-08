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
} from "@mui/material";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/users");

        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Users;

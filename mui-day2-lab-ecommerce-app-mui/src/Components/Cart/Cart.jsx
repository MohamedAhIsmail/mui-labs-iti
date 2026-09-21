import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Fjallraven Backpack",
      price: 109.95,
      quantity: 2,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Shirt",
      price: 22.3,
      quantity: 1,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Gold Necklace",
      price: 695.0,
      quantity: 1,
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
  ]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 2 }}>
        Your Cart
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 4, fontStyle: "italic" }}
      >
        Note: This is a static cart page my fullApp is under development.
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" color="text.secondary" align="center">
          Your cart is empty
        </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    boxShadow: 3,
                    borderRadius: 2,
                    transition: "transform 0.2s",
                    "&:hover": { transform: "scale(1.02)", boxShadow: 5 },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 80, height: 80, objectFit: "contain", mr: 2 }}
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent sx={{ flex: 1, p: 0 }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price.toFixed(2)}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => removeItem(item.id)}
                        sx={{ ml: "auto" }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, textAlign: "right" }}>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Total: ${totalPrice.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2, borderRadius: 20, px: 4 }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Product({ product }) {
  const { title, price, description, image, rating } = product;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
        borderRadius: 2, 
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.02)", 
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 200,
          objectFit: "contain",
          padding: 1,
        }}
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", lineHeight: 1.2 }}
        >
          {title.split(" ").slice(0, 3).join(" ")}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography variant="h6" color="primary">
            ${price}
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center", color: "text.secondary" }}
          >
            <StarIcon sx={{ color: "gold", mr: 0.5 }} />
            {rating.rate}
          </Typography>
        </div>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          sx={{
            textTransform: "none",
            borderRadius: 20,
            px: 3,
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#115293" },
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
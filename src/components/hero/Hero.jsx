import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

function Hero() {
  const img = require("../assets/images/Rectangle5.png");
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 0,
        height: { sm: "550px", xs: "257px" },
        background: "#222222",
      }}
    >
      <CardMedia
        component={"img"}
        image={img}
        height={"100%"}
        alt={"Hero image"}
      />

      <Stack
        justifyContent={"center"}
        sx={{
          padding: { md: "0 77px" },
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <Typography
          component={"h1"}
          variant={"h2"}
          color={"#ffffff"}
          sx={{
            textAlign: { xs: "center", md: "start" },
            width: { md: "30%" },
            fontSize: { xs: "36.46px", sm: "72px" },
          }}
        >
          Watch something incredible
        </Typography>
      </Stack>
    </Card>
  );
}

export default Hero;

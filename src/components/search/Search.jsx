import React from "react";
import { Box, Input, Typography } from "@mui/material";

function Search({ setSearch }) {
  const handleChange = (ev) => {
    const value = ev.target.value.trim();
    setSearch(() => value);
  };
  return (
    <Box sx={{ paddingRight: { xs: "27px", sm: "77px", md: "57px" } }}>
      <Typography
        sx={{ fontSize: { xs: 16, sm: 24, md: 34 } }}
        mb={2}
        component={"p"}
      >
        Search
      </Typography>
      <Input
        type="search"
        variant={"div"}
        onChange={handleChange}
        sx={{
          border: "1px solid #000000",
          "&::before": { borderBottom: "none" },
          width: { xs: "100%", sm: "70%", md: "100%" },
          height: { xs: "34px", md: "54px" },
          fontSize: { xs: "18px", sm: "25px" },
          paddingLeft: "15px",
        }}
      ></Input>
    </Box>
  );
}

export default Search;

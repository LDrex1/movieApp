import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function MovieRow({ movieList }) {
  const [marginLeft, setMarginLeft] = useState(0);
  const handleMouseOver = (ev) => {
    const { clientX } = ev;

    const edgeDistance = (window.innerWidth - clientX) / window.innerWidth;
    const edgeRatio = edgeDistance < 0.5 ? edgeDistance : edgeDistance - 1;
    if (Math.abs(edgeRatio) <= 0.1) {
      console.log(marginLeft);
      //   let ml = ev.target.style.marginLeft;
      //   console.log(ev.target);
      //   console.log(edgeRatio);

      //   console.log(ev.target.style.marginLeft);
      //   edgeRatio < 0 &&
      //     (ml = (ml && `${+ml.match(/\d+/).join("") - 2}px`) || "2px");
      //   edgeRatio > 0 &&
      //     (ml = (ml && `${+ml.match(/\d+/).join("") + 2}px`) || "3px");
      //   console.log(ml);
      //   ev.target.style.marginLeft = ml;
      //   console.log(ev.target.style.marginLeft);
      setMarginLeft(
        (prevMargin) =>
          (edgeRatio < 0 && (prevMargin += 2)) || (prevMargin -= 2)
      );
    }
  };

  return (
    <>
      {movieList.length ? (
        <Stack
          component={"div"}
          direction={"row"}
          spacing={2}
          sx={{ mb: 4, mt: 1, marginLeft: marginLeft }}
          onMouseMove={handleMouseOver}
        >
          {movieList.map(({ Title: title, Poster: poster, imdbID }) => (
            <Card
              key={imdbID}
              sx={{
                width: { xs: "200px", sm: "300px" },
                minWidth: { xs: "200px", sm: "300px" },
                height: { xs: "200px", sm: "300px" },
                aspectRatio: 1,
                position: "relative",
                borderRadius: "12px",
              }}
            >
              <CardMedia component={"img"} image={poster} alt={"posterImage"} />
              <CardContent
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography component={"h4"} variant={"h5"} color={"white"}>
                  {title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      ) : (
        <Typography component={"p"} variant={"h5"} color={"#222222"}>
          Category not Found
        </Typography>
      )}
    </>
  );
}

export default MovieRow;

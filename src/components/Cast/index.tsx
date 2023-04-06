import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";

type Cast = {
  name: string;
  id: number;
  character: string;
  profilePath: string;
};

interface Props {
  cast: Cast[];
}

export const CastInfo = ({ cast }: Props) => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: "center", marginTop: "20px" }}
      >
        Cast
      </Typography>
      <ImageList
        gap={10}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cast.map((item) => {
          console.log(item.profilePath);
          if (item.profilePath.endsWith("jpg")) {
            return (
              <ImageListItem key={item.id} sx={{ width: 185 }}>
                <img src={item.profilePath} alt={item.name} loading="lazy" />
                <ImageListItemBar title={item.name} subtitle={item.character} />
              </ImageListItem>
            );
          }
          return null;
        })}
      </ImageList>
    </Box>
  );
};

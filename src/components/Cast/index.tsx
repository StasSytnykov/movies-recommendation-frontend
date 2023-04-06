import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { useIntl } from "react-intl";

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
  const intl = useIntl();
  return (
    <Box>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: "center", marginTop: "20px" }}
      >
        {intl.formatMessage({
          id: "movieCard.cast",
        })}
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

import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { useIntl } from "react-intl";
import { TypographyStyle, ImageListSyle, ImageListItemStyle } from "./styles";

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
      <Typography variant="h4" component="div" sx={TypographyStyle}>
        {intl.formatMessage({
          id: "movieCard.cast",
        })}
      </Typography>
      <ImageList gap={10} sx={ImageListSyle}>
        {cast.map((item) => {
          if (item.profilePath.endsWith("jpg")) {
            return (
              <ImageListItem key={item.id} sx={ImageListItemStyle}>
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

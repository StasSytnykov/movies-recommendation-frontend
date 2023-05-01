import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import { Form, Field } from "react-final-form";
import { Values } from "../../conteiners/SelectedMovies";
import { formValidation } from "./formValidation";
import { useIntl, FormattedMessage } from "react-intl";
import { PaperStyles, InputBaseStyle, TypographyStyle } from "./styles";

interface Props {
  onSubmit: (values: Values) => void;
}

export const ConfirmFilmInput = ({ onSubmit }: Props) => {
  const intl = useIntl();

  return (
    <Form
      onSubmit={onSubmit}
      validate={formValidation.validateForm}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Paper sx={PaperStyles}>
            <Field
              name="listName"
              render={({ input, meta }) => (
                <>
                  <InputBase
                    sx={InputBaseStyle}
                    placeholder={intl.formatMessage({
                      id: "input.placeholder",
                    })}
                    inputProps={{ "aria-label": "Sharing movies" }}
                    {...input}
                  />

                  {meta.error && meta.touched && (
                    <Typography variant="caption" sx={TypographyStyle}>
                      <FormattedMessage id="input.message" />
                    </Typography>
                  )}
                </>
              )}
            />

            <IconButton type="submit" sx={{ p: "10px" }} aria-label="share">
              <ShareIcon color="primary" />
            </IconButton>
          </Paper>
        </form>
      )}
    />
  );
};

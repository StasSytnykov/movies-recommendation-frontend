import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import { Form, Field } from "react-final-form";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useIntl } from "react-intl";
import { StyledPaper } from "./styles";
import { searchFormValidation } from "./searchFormValidation";

interface Values {
  moviesQuery: string;
}

export const SearchBar = () => {
  const intl = useIntl();
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (values: Values) => {
    if (location.pathname === "/") {
      navigate(`search?query=${values.moviesQuery}`);
    } else {
      setSearchParams({ query: values.moviesQuery });
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={searchFormValidation.validateForm}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="moviesQuery"
            render={({ input, meta }) => (
              <StyledPaper>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  fullWidth
                  placeholder={`${intl.formatMessage({
                    id: "appBar.searchBar.inputLabel",
                  })}`}
                  inputProps={{ "aria-label": "Search movie" }}
                  {...input}
                />

                {meta.error && meta.touched && (
                  <Typography variant="caption" sx={{ color: "red" }}>
                    {intl.formatMessage({
                      id: "input.message",
                    })}
                  </Typography>
                )}

                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </StyledPaper>
            )}
          />
        </form>
      )}
    />
  );
};

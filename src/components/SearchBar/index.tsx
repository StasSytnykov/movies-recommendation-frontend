import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Box, TextField, Button } from "@mui/material";
import { useIntl } from "react-intl";

interface IFormInput {
  searchText: string;
}
export const SearchBar = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      searchText: "",
    },
  });
  const intl = useIntl();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Controller
          name="searchText"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label={intl.formatMessage({
                id: "searchBar.inputLabel",
              })}
              size="small"
            />
          )}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ ml: "20px", width: "150px" }}
        >
          {intl.formatMessage({
            id: "searchBar.inputBtn",
          })}
        </Button>
      </Box>
    </form>
  );
};

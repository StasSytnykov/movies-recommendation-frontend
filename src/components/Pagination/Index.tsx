import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";

interface Props {
  setPage: (page: number) => void;
  page: number;
}

const MAX_PAGES = 500;

export const BasicPagination = ({ setPage, page }: Props) => {
  const onPageClick = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Pagination
        count={MAX_PAGES}
        color="primary"
        onChange={onPageClick}
        page={page}
      />
    </Stack>
  );
};

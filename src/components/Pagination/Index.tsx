import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";

interface Props {
  totalPages: number;
  setPage: (page: number) => void;
  page: number;
}

export const BasicPagination = ({ totalPages, setPage, page }: Props) => {
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
        count={totalPages}
        color="primary"
        onChange={onPageClick}
        page={page}
      />
    </Stack>
  );
};

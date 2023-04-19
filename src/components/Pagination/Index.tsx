import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";

interface Props {
  onPageClick: (event: React.ChangeEvent<unknown>, page: number) => void;
  page: number;
}

const MAX_PAGES = 500;

export const BasicPagination = ({ onPageClick, page }: Props) => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Pagination
        count={MAX_PAGES}
        color="primary"
        onChange={onPageClick}
        page={page}
        size="small"
      />
    </Stack>
  );
};

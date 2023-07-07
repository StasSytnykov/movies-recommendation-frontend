import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";

interface Props {
  onPaginationClick: (event: React.ChangeEvent<unknown>, page: number) => void;
  page: number;
}

const MAX_PAGES = 500;

export const BasicPagination = ({ onPaginationClick, page }: Props) => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Pagination
        count={MAX_PAGES}
        color="primary"
        onChange={onPaginationClick}
        page={page}
        size="small"
      />
    </Stack>
  );
};

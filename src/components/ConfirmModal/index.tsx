import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { notify } from "../../utils/notify";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 300,
  },
  [theme.breakpoints.up("sm")]: {
    width: 400,
  },
}));

interface Props {
  open: boolean;
  onCloseModal: () => void;
  url: string;
}

export const ConfirmModal = ({ open, onCloseModal, url }: Props) => {
  const [copied, setCopied] = useState(false);
  const intl = useIntl();
  console.log(copied);
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <FormattedMessage id="modal.title" />
        </Typography>
        <IconButton
          onClick={onCloseModal}
          type="button"
          sx={{ position: "absolute", top: 5, right: 5 }}
          aria-label="close"
        >
          <CloseIcon color={"primary"} />
        </IconButton>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            inputProps={{ "aria-label": "link" }}
            defaultValue={url}
            disabled={true}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            href={url}
            target={"_blank"}
            sx={{ p: "10px" }}
            aria-label="link"
          >
            <InsertLinkIcon color={"primary"} />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
            <IconButton
              onClick={() =>
                notify(
                  intl.formatMessage({
                    id: "modal.copied",
                  })
                )
              }
              type="button"
              sx={{ p: "10px" }}
              aria-label="copy"
            >
              <ContentCopyIcon color={"primary"} />
            </IconButton>
          </CopyToClipboard>
        </Paper>
      </StyledBox>
    </Modal>
  );
};

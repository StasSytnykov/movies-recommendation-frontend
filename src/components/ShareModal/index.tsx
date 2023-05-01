import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FormattedMessage, useIntl } from "react-intl";
import { notify } from "../../utils/notify";
import {
  BoxStyles,
  StyledBox,
  IconButtonStyles,
  PaperStyles,
  InputBaseStyles,
  DividerStyles,
  IconButtonShareStyles,
} from "./styles";

interface Props {
  open: boolean;
  onCloseModal: () => void;
  url: string;
}

export const ShareModal = ({ open, onCloseModal, url }: Props) => {
  const intl = useIntl();
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox sx={BoxStyles}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <FormattedMessage id="modal.title" />
        </Typography>
        <IconButton
          onClick={onCloseModal}
          type="button"
          sx={IconButtonStyles}
          aria-label="close"
        >
          <CloseIcon color={"primary"} />
        </IconButton>
        <Paper component="form" sx={PaperStyles}>
          <InputBase
            sx={InputBaseStyles}
            inputProps={{ "aria-label": "link" }}
            defaultValue={`${window.location.origin}${url}`}
            disabled={true}
          />
          <Divider sx={DividerStyles} orientation="vertical" />
          <IconButton
            href={url}
            target={"_blank"}
            sx={IconButtonShareStyles}
            aria-label="link"
          >
            <InsertLinkIcon color={"primary"} />
          </IconButton>
          <Divider sx={DividerStyles} orientation="vertical" />
          <CopyToClipboard text={`${window.location.origin}${url}`}>
            <IconButton
              onClick={() =>
                notify(
                  intl.formatMessage({
                    id: "modal.copied",
                  })
                )
              }
              type="button"
              sx={IconButtonShareStyles}
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

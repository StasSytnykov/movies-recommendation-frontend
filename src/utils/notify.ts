import { toast } from "react-toastify";

const CUSTOM_ID = "custom-id-yes";

export const notify = (text: string) => {
  toast(text, {
    toastId: CUSTOM_ID,
  });
};

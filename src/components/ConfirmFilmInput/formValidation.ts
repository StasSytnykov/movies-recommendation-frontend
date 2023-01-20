import { Validators } from "@lemoncode/fonk";
import { createFinalFormValidation } from "@lemoncode/fonk-final-form";

const validationSchema = {
  field: {
    listName: [
      {
        validator: Validators.required,
        message: "Required",
      },
    ],
  },
};

export const formValidation = createFinalFormValidation(validationSchema);

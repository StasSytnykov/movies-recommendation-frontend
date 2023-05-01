import { Validators } from "@lemoncode/fonk";
import { createFinalFormValidation } from "@lemoncode/fonk-final-form";

const validationSchema = {
  field: {
    moviesQuery: [
      {
        validator: Validators.required,
        message: "Required",
      },
    ],
  },
};

export const searchFormValidation = createFinalFormValidation(validationSchema);

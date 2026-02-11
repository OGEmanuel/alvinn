export type FormFieldApi<TValue> = {
  name: string;
  state: {
    value: TValue;
    meta: {
      isTouched: boolean;
      isValid: boolean;
      errors: ({ message?: string | undefined } | undefined)[];
    };
  };
  handleBlur: () => void;
  handleChange: (value: TValue) => void;
};

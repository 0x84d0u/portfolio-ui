export type * from './__types';

import { FormWrapper } from "./FormWrapper";
import { FormControl  } from "./FormControl";

export const Form = {
    Wrapper: FormWrapper,
    Control: FormControl,
}

import { InputField } from './InputField';
import { CheckboxField } from './CheckboxField';
import { FieldLabel } from './FieldLabel';

export const Field = {
    Label: FieldLabel,
    Input: InputField,
    Checkbox: CheckboxField
}

'use client'

import { useActionState, useState } from 'react';

export type FormAction<T extends Record<string, any>> = (
    values: T,
) => Promise<Partial<FormState<T>['errors']> | null>

type UseFormProps<T extends Record<string, any>> = {
    action: FormAction<T>,
    initialValues: T
};

type FormState<T extends Record<string, any>> = {
    isSuccess: boolean;
    errors: {
        form: string[];
    } & Record<keyof T, string[]>;
};

export type StatefulAction<T extends Record<string, any>> = (
    prevState: FormState<T>,
    formData: FormData
) => Promise<FormState<T>>

export type UseFormReturn<T extends Record<string, any>> = FormState<T> & {
    values: T,
    isError: boolean;
    isPending: boolean,
    action: StatefulAction<T>,
}


export const useForm = <T extends Record<string, any>>({
    action,
    initialValues
}: UseFormProps<T>) => {


    const buildInitialErrors = (): FormState<T>["errors"] => {
        const fieldErrors = Object.keys(initialValues).reduce(
            (acc, key) => {
                acc[key as keyof T] = [];
                return acc;
            },
            {} as Record<keyof T, string[]>
        );
        return { ...fieldErrors, form: [] };
    };



    const [values, setValues] = useState<T>(initialValues);

    const statefulAction: StatefulAction<T> = async (_prevState, formData) => {
        const data = Object.fromEntries(formData.entries()) as T;
        setValues(data);
        const results = await action(data);
        if (results === null) return {
            isSuccess: true,
            errors: buildInitialErrors()
        } 
        return {
            isSuccess: false,
            errors: {
                ...buildInitialErrors(),
                ...results
            },
        };
    };

    const [state, formAction, isPending] = useActionState(statefulAction, {
        errors: buildInitialErrors(),
        isSuccess: false,
    });

    return {
        values: values,
        errors: state.errors,

        action: formAction,

        isError: Object.values(state.errors).some((arr) => arr.length > 0),
        isSuccess: state.isSuccess,
        isPending: isPending,
    };
};
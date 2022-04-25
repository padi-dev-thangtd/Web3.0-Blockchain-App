import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export function FormProviderWrapper({
  children,
  onSubmit = (data) => console.log(data),
  className = null,
}) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}

import { cn } from '@/lib/utils';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '../field';
import { Input } from '../input';
import { type ComponentProps } from 'react';
import { FormFieldApi } from '@/lib/constants';

interface InputFieldProps<TValue = string> extends ComponentProps<'input'> {
  field: FormFieldApi<TValue>;
  isInvalid?: boolean;
  label?: string;
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconPosition2?: 'left' | 'right';
  optional?: boolean;
  orientation?: 'vertical' | 'horizontal' | 'responsive' | null;
  wrapperClassName?: string;
  errorClassName?: string;
  numberOnly?: boolean;
  children?: React.ReactNode;
}

const InputField = <TValue = string,>(props: InputFieldProps<TValue>) => {
  const {
    field,
    label,
    placeholder,
    className,
    isInvalid,
    type = 'text',
    icon,
    icon2,
    iconPosition,
    iconPosition2,
    optional,
    orientation = 'vertical',
    wrapperClassName,
    errorClassName,
    numberOnly,
    children,
    disabled,
  } = props;

  return (
    <Field
      data-invalid={isInvalid}
      orientation={orientation}
      className={cn('gap-1.5', wrapperClassName)}
    >
      {(label || optional) && (
        <FieldSet className="flex-row items-center justify-between">
          {label && (
            <FieldLabel
              htmlFor={field.name}
              className="text-sm/5 font-medium tracking-tight text-[#575554]"
            >
              {label}
            </FieldLabel>
          )}
          {optional && (
            <span className="text-sm/5 -tracking-[0.02em] text-[#A3A19D]">
              Optional
            </span>
          )}
        </FieldSet>
      )}
      <FieldGroup className="relative flex-row gap-0">
        {numberOnly ? (
          <Input
            id={field.name}
            name={field.name}
            value={field.state.value as string}
            onBlur={field.handleBlur}
            onChange={e => {
              const value = e.target.value.replace(/[^0-9.]/g, '');
              field.handleChange(value as TValue);
            }}
            aria-invalid={isInvalid}
            placeholder={placeholder}
            type={type}
            className={cn(
              'text-sm/custom -tracking-custom-sm h-11.5 rounded-[20px] border-[0.7px] border-white/10 bg-white/4 shadow-none placeholder:text-white/40',
              className,
              iconPosition === 'left' && 'pl-10.5',
            )}
          />
        ) : (
          <Input
            id={field.name}
            name={field.name}
            value={field.state.value as string}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value as TValue)}
            aria-invalid={isInvalid}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            className={cn(
              'text-sm/custom -tracking-custom-sm h-11.5 rounded-[20px] bg-white/4 text-white shadow-none not-placeholder-shown:border-white/80 not-placeholder-shown:outline-[0.7px] not-placeholder-shown:outline-white/80 placeholder:text-white/40 placeholder-shown:border-[0.7px] placeholder-shown:border-white/10 focus-visible:ring-0 focus-visible:ring-transparent',
              className,
              iconPosition === 'left' && 'pl-10.5',
            )}
          />
        )}
        <span
          className={cn(
            'absolute flex items-center',
            iconPosition === 'left'
              ? 'top-1/2 left-3.5 -translate-y-1/2'
              : 'top-1/2 right-3.5 -translate-y-1/2',
          )}
        >
          {icon}
        </span>
        {iconPosition2 && (
          <span
            className={cn(
              'absolute flex items-center',
              iconPosition2 === 'left'
                ? 'top-1/2 left-3.5 -translate-y-1/2'
                : 'top-1/2 right-3.5 -translate-y-1/2',
            )}
          >
            {icon2}
          </span>
        )}
        {children && <FieldDescription>{children}</FieldDescription>}
      </FieldGroup>
      {isInvalid && (
        <FieldError
          className={cn(errorClassName)}
          errors={field.state.meta.errors}
        />
      )}
    </Field>
  );
};

export default InputField;

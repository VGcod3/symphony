import { Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useId, useState } from 'react';

export type ListOfErrors = Array<string | null | undefined> | null | undefined;

export const ErrorList = ({ id, errors }: { errors?: ListOfErrors; id?: string }) => {
  const errorsToRender = errors?.filter(Boolean);
  if (!errorsToRender?.length) return null;

  return (
    <ul id={id} className='flex flex-col gap-1'>
      {errorsToRender.map((e) => (
        <li key={e} className='text-rose-500 text-sm'>
          {e}
        </li>
      ))}
    </ul>
  );
};

export function Field({
  labelProps,
  inputProps,
  errors,
  className,
}: {
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  errors?: ListOfErrors;
  className?: string;
}) {
  const fallbackId = useId();
  const id = inputProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;

  return (
    <div className={className}>
      <Label htmlFor={id} {...labelProps} />
      <Input
        id={id}
        aria-invalid={errorId ? true : undefined}
        aria-describedby={errorId}
        {...inputProps}
      />
      <div className='pt-1'>
        {errors?.length ? <ErrorList id={errorId} errors={errors} /> : null}
      </div>
    </div>
  );
}

export function PasswordField({
  labelProps,
  inputProps,
  errors,
  className,
}: {
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  errors?: ListOfErrors;
  className?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const fallbackId = useId();
  const id = inputProps.id ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className={className}>
      <Label htmlFor={id} {...labelProps} />
      <Input
        id={id}
        aria-invalid={errorId ? true : undefined}
        aria-describedby={errorId}
        {...inputProps}
        type={showPassword ? 'text' : 'password'}
      />

      <div className='pt-1'>
        {errors?.length ? <ErrorList id={errorId} errors={errors} /> : null}
      </div>

      <Button
        type='button'
        className={`absolute top-7 right-1 w-8 h-8 p-0 flex items-center align-middle`}
        variant='ghost'
        size='sm'
        onClick={toggleShowPassword}>
        {showPassword ? (
          <Eye className='w-5 h-5 text-neutral-400' strokeWidth={1.5} />
        ) : (
          <EyeOff className='w-5 h-5 text-neutral-400' strokeWidth={1.5} />
        )}
      </Button>
    </div>
  );
}

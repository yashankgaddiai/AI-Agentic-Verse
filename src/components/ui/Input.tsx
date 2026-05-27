import { InputHTMLAttributes, forwardRef, useId } from "react";
import { cn } from "../../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="space-y-2 w-full group">
        {label && (
          <label htmlFor={inputId} className="font-bold text-xs uppercase tracking-widest text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={cn(
            "w-full bg-transparent border-0 border-b border-zinc-200 px-0 py-3 focus:ring-0 focus:border-zinc-900 text-lg transition-all placeholder:text-zinc-300",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <p id={errorId} className="text-xs font-bold text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

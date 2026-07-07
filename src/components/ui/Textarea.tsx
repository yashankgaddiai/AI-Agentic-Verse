import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2 w-full group">
        {label && (
          <label className="font-bold text-xs uppercase tracking-widest text-zinc-400 group-focus-within:text-zinc-900 transition-colors">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full bg-transparent border-0 border-b border-zinc-200 px-0 py-3 focus:ring-0 focus:border-zinc-900 text-lg transition-all placeholder:text-zinc-300 min-h-[120px] resize-none",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs font-bold text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;

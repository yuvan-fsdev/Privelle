import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagneGold focus-visible:ring-offset-2 focus-visible:ring-offset-matteBlack disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
      sm: 'min-h-11 px-4 py-2 text-sm',
      md: 'min-h-11 px-6 py-3 text-base',
      lg: 'min-h-12 px-8 py-4 text-lg',
    };

    const variantStyles = {
      primary:
        'bg-champagneGold text-matteBlack hover:shadow-luxury hover:scale-105 hover:shadow-lg active:scale-100',
      secondary:
        'border border-ivoryWhite/40 bg-ivoryWhite/5 text-ivoryWhite hover:border-champagneGold hover:bg-champagneGold/10 active:scale-95',
      ghost:
        'bg-transparent text-ivoryWhite hover:text-champagneGold hover:bg-white/5 active:bg-white/10',
      outline:
        'bg-transparent text-champagneGold border-2 border-champagneGold hover:bg-champagneGold/10 hover:shadow-luxury active:bg-champagneGold/20',
    };

    const buttonClassName = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

    if (asChild && React.isValidElement(children)) {
      const child = React.Children.only(children) as React.ReactElement<{
        className?: string;
      }>;

      return React.cloneElement(child, {
        ...(props as Record<string, unknown>),
        className: cn(buttonClassName, child.props.className),
      });
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const rippleButtonVariants = cva(
  "relative overflow-hidden transition-all duration-200 ease-out transform active:scale-95 font-semibold text-sm leading-5 h-11 px-6 py-3 border rounded-lg shadow-button",
  {
    variants: {
      variant: {
        login: "bg-secondary text-secondary-foreground border-white/30 hover:bg-secondary/90 hover:shadow-lg",
        register: "bg-primary text-primary-foreground border-white/30 hover:bg-primary/90 hover:shadow-lg",
        info: "bg-primary text-primary-foreground border-white/30 hover:bg-primary/90 hover:shadow-lg px-8 mt-2"
      },
      size: {
        default: "min-w-[140px]",
        register: "min-w-[145px]",
        info: "min-w-auto"
      }
    },
    defaultVariants: {
      variant: "login",
      size: "default"
    }
  }
);

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rippleButtonVariants> {
  children: React.ReactNode;
}

const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ className, variant, size, children, onClick, ...props }, ref) => {
    const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      
      const newRipple = {
        id: Date.now(),
        x,
        y
      };

      setRipples(prev => [...prev, newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      createRipple(event);
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        className={cn(rippleButtonVariants({ variant, size, className }))}
        onClick={handleClick}
        {...props}
      >
        {children}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ping"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '20px',
              height: '20px',
              transform: 'scale(0)',
              animation: 'ripple 0.6s linear forwards'
            }}
          />
        ))}
      </button>
    );
  }
);

RippleButton.displayName = "RippleButton";

export { RippleButton, rippleButtonVariants };
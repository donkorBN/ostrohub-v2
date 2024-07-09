import { HTMLAttributes, ReactNode } from "react";
import { ParagraphProps, TypographyProps } from "@/types";

const headingStyles = {
  h1: "text-[2.5em] md:text-[4rem] font-extrabold leading-[1em] md:leading-[4.67rem]",
  h2: "text-[2em] md:text-[3.5rem] font-semibold leading-[1em] md:leading-[2.5rem]",
  h3: "text-[1.5em] md:text-[3rem] font-semibold md:leading-[2rem]",
  h4: "text-lg font-semibold leading-[1.5rem]",
}

const Typo = ({ level, className, children, ...props }: { level: keyof typeof headingStyles; children: ReactNode } & HTMLAttributes<HTMLHeadingElement>) => {
  const classes = `text-black font-monument ${headingStyles[level]} ${className || ''}`;
  return (
    <div className={classes} {...props}>
      <div className="sr-only">{children}</div>
      {children}
    </div>
  );
};

const h1 = ({ children, ...props }: TypographyProps) => (
  <Typo level="h1" {...props}>
    {children}
  </Typo>
)

const h2 = ({ children, ...props }: TypographyProps) => (
  <Typo level="h2" {...props}>
    {children}
  </Typo>
)

const h3 = ({ children, ...props }: TypographyProps) => (
  <Typo level="h3" {...props}>
    {children}
  </Typo>
)

const h4 = ({ children, ...props }: TypographyProps) => (
  <Typo level="h4" {...props}>
    {children}
  </Typo>
)

const p = ({ children, isGray, className, ...props }: ParagraphProps) => {
  return isGray ? (
    <>
      <p className="sr-only">{children}</p>
      <p {...props} className={`text-gray-100 text-base ${className || ''}`}>
        {children}
      </p>
    </>
  ) : (
    <>
      <p className="sr-only">{children}</p>
      <p {...props} className={`text-base ${className || ''}`}>
        {children}
      </p>
    </>
  );
}

export default function Typography() {
  return (
    <p></p>
  )
}

Typography.h1 = h1;
Typography.h2 = h2;
Typography.h3 = h3;
Typography.h4 = h4;
Typography.p = p;
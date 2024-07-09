import { HTMLAttributes, ReactNode } from "react";

export type TypographyProps ={
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>

export type ParagraphProps = {
  children: ReactNode;
  className?: string;
  isGray?: boolean;
} & HTMLAttributes<HTMLParagraphElement>

export type PageLayout = 
| "blank"
| "public"
| "auth"
| "dashboard";

export type PageMeta = {
  pageKey: string;
  layout: PageLayout;
  allowAccess?: "all" | "noauth" | "auth";
  // Add any other prop you want to access
};
import { Suspense } from 'react';
import CssLoader from './_components/css-loader';
import { RSCLayoutProps } from './_types';

export default function RSCLayout({ children }: RSCLayoutProps) {
  return <Suspense fallback={<CssLoader />}>{children}</Suspense>;
}

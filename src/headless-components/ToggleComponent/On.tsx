import { HTMLAttributes } from 'react';
import useToggleComponent from './hook';

function On({ children, ...restProps }: HTMLAttributes<HTMLDivElement>) {
   const { state } = useToggleComponent();

   if (!state) {
      return null;
   }

   return <div {...restProps}>{children}</div>;
}
export default On;

import { HTMLAttributes } from 'react';
import useAccordionContext from './hook';

type AccordionBodyProps = HTMLAttributes<HTMLDivElement>;

function AccordionBody({ children, ...props }: AccordionBodyProps) {
   const { isOpen } = useAccordionContext();

   if (!isOpen) return null;

   return <div {...props}>{children}</div>;
}

export default AccordionBody;

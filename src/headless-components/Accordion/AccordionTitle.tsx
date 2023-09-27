import { HTMLAttributes } from 'react';
import useAccordionContext from './hook';

type AccordionTitle = HTMLAttributes<HTMLDivElement>;

function AccordionTitle({ children, ...props }: AccordionTitle) {
   const { toggle } = useAccordionContext();

   const handleClick = toggle;

   return (
      <div {...props} onClick={handleClick}>
         {children}
      </div>
   );
}

export default AccordionTitle;

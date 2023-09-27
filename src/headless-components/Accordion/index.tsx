import { HTMLAttributes, useState } from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionBody from './AccordionBody';
import AccordionContext from './context';

type AccordionProps = HTMLAttributes<HTMLDivElement> & {
   isOpen?: boolean;
};

function Accordion({ children, isOpen: defaultState = false, ...props }: AccordionProps) {
   const [isOpen, setIsOpen] = useState(defaultState);

   const toggle = () => setIsOpen((prevState) => !prevState);

   return (
      <AccordionContext.Provider value={{ isOpen, toggle }}>
         <div {...props}>{children}</div>
      </AccordionContext.Provider>
   );
}

Accordion.Title = AccordionTitle;
Accordion.Body = AccordionBody;

export default Accordion;

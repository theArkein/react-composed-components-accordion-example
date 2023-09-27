import { useContext } from 'react';
import AccordionContext from '../context';

function useAccordionContext() {
   const context = useContext(AccordionContext);

   if (!context) {
      throw new Error(
         `Accordion compound components cannot be rendered outside the Accordion component`,
      );
   }

   return context;
}

export default useAccordionContext;

import { createContext } from 'react';

type AccordionContextReturnType = {
   isOpen: boolean;
   toggle: () => void;
};

const AccordionContext = createContext<AccordionContextReturnType | undefined>(undefined);

export default AccordionContext;

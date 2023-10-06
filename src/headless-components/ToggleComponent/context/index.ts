import { createContext } from 'react';

type ToggleComponentContextReturnType = {
   state: boolean;
};

const ToggleComponentContext = createContext<ToggleComponentContextReturnType | undefined>(
   undefined,
);

export default ToggleComponentContext;

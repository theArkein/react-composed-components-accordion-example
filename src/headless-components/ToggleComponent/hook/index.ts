import { useContext } from 'react';
import ToggleComponentContext from '../context';

function useToggleComponent() {
   const context = useContext(ToggleComponentContext);

   if (!context) {
      throw new Error(
         `ToggleComponent compound components cannot be rendered outside the ToggleComponent`,
      );
   }

   return context;
}

export default useToggleComponent;

import { PropsWithChildren } from 'react';
import ToggleComponentContext from './context';
import On from './On';
import Off from './Off';

type ToggleComponentProps = {
   state: boolean;
} & PropsWithChildren;

function ToggleView({ state, children }: ToggleComponentProps) {
   return (
      <ToggleComponentContext.Provider value={{ state: state }}>
         {children}
      </ToggleComponentContext.Provider>
   );
}

ToggleView.On = On;
ToggleView.Off = Off;

export default ToggleView;

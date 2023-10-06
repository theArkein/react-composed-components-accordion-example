import ToggleView from 'headless-components/ToggleComponent';
import useToggle from 'hooks/useToggle';

function CleanConditionalRenderer() {
   const [state, toggleState] = useToggle(true);
   const [nestedState, toggleNestedState] = useToggle(true);

   return (
      <>
         <button onClick={toggleState}>Toggle Main View</button>
         <ToggleView state={state}>
            <ToggleView.On>Toggle View: ON</ToggleView.On>
            <ToggleView.Off>
               <ToggleView state={nestedState}>
                  <button onClick={toggleNestedState}>Toggle Nested View</button>
                  <ToggleView.On>Nested Toggle View: ON</ToggleView.On>
                  <ToggleView.Off>Nested Toggle View: OFF</ToggleView.Off>
               </ToggleView>
            </ToggleView.Off>
         </ToggleView>
      </>
   );
}

export default CleanConditionalRenderer;

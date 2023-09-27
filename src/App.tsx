import Accordion from 'headless-components/Accordion';

export default function App() {
   return (
      <>
         <Accordion>
            <Accordion.Title className="p-4 bg-zinc-200 font-semibold cursor-pointer">
               Item 1
            </Accordion.Title>
            <Accordion.Body className="p-4 bg-zinc-100">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id quia atque quam,
               deleniti ducimus, amet consequatur, ipsam nemo repudiandae mollitia placeat quisquam
               et fugiat? Assumenda tenetur necessitatibus facilis nisi?
            </Accordion.Body>
         </Accordion>
      </>
   );
}

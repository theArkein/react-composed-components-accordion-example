import Accordion from 'headless-components/Accordion';

function ComposedComponent() {
   return (
      <div>
         <h1>Composition Pattern</h1>
         <p>
            Breaking components down into smaller, reusable parts that can be composed together to
            form more complex UIs
         </p>
         <ul>
            Advantages of composition pattern
            <li>Redueced props in the Main component</li>
            <li>Explicit Control of props by sub components</li>
            <li>Clean Structure</li>
            <li>Maintainable</li>
         </ul>
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
      </div>
   );
}

export default ComposedComponent;

function IndexPage() {
   return (
      <div className="flex flex-col gap-4">
         <h1 className="font-semibold">Pages</h1>
         <ul>
            <li>
               <a href="/composed-component-pattern">Composed Components</a>
            </li>
            <li>
               <a href="/clean-conditional-rendering">Clean Conditional Renders</a>
            </li>
         </ul>
      </div>
   );
}

export default IndexPage;

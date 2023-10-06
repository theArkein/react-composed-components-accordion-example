import { useNavigate, useOutlet } from 'react-router-dom';

function PageLayout() {
   const outlet = useOutlet();
   const navigate = useNavigate();

   return (
      <>
         <button onClick={() => navigate(-1)}>Go Back</button>
         <div className="mt-5">{outlet}</div>
      </>
   );
}

export default PageLayout;

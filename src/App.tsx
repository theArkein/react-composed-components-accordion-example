import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PageLayout from 'layouts/PageLayout';

const ComposedComponentPattern = lazy(() => import('pages/composed-component-pattern'));
const CleanConditionRendering = lazy(() => import('pages/clean-conditional-rendering'));
const IndexPage = lazy(() => import('pages/index'));

export default function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route element={<PageLayout />}>
               <Route path="/composed-component-pattern" element={<ComposedComponentPattern />} />
               <Route path="/clean-conditional-rendering" element={<CleanConditionRendering />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

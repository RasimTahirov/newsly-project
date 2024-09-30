import { Route, Routes } from 'react-router-dom';

import CategoryNewsWrapper from '../../components/Categories/CategoryNewsWrapper/CategoryNewsWrapper';

const AppRoutesCategory = () => {
  return (
    <Routes>
      <Route path="/news/:category" element={<CategoryNewsWrapper />} />
    </Routes>
  );
};

export default AppRoutesCategory;

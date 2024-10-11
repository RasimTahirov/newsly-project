import { Route, Routes } from 'react-router-dom';

import News from '../../pages/News/News';

const AppRoutesNav = () => {
  return (
    <Routes>
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default AppRoutesNav;

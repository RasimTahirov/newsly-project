import { Navigate, Route, Routes } from 'react-router-dom';

import News from '../../pages/News/News';

const AppRoutesNav = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/news" replace />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default AppRoutesNav;

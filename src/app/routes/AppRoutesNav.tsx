import { Navigate, Route, Routes } from 'react-router-dom';

import News from '../../pages/News/News';
import Weather from '../../pages/Weather/Weather';

const AppRoutesNav = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/news" replace />} />
      <Route path="/news" element={<News />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
};

export default AppRoutesNav;

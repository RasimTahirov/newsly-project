import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import News from '../../pages/News/News';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};

export default AppRoutes;

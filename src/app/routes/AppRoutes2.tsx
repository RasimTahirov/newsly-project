import { Route, Routes } from 'react-router-dom';
import FilmsNews from '../../components/FilmsNews/FilmsNews';

const AppRoutes2 = () => {
  return (
    <Routes>
      <Route path="/movies" element={<FilmsNews />} />
    </Routes>
  );
};

export default AppRoutes2;

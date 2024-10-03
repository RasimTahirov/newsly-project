import { useParams } from 'react-router-dom';

import CategoryNews from '../CategoryNews/CategoryNews';

const CategoryNewsWrapper = () => {
  const { category } = useParams<{ category: string }>();

  return <CategoryNews category={category || 'general'} />;
};

export default CategoryNewsWrapper;

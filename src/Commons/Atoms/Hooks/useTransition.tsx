import { useNavigate } from 'react-router';

export const useTransition = () => {
  const navigate = useNavigate();
  return { navigate: navigate };
};
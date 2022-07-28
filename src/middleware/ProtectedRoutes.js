import { Navigate, Outlet } from 'react-router-dom';
import useLocalState from '../util/useLocalStorage';
const ProtectedRoutes = () => {
    const [jwt, setJwt] = useLocalState("","jwt");
  return jwt? <Outlet /> : <Navigate to="/" />;
}
 
export default ProtectedRoutes
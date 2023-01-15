import { useAuth } from "../../context/Auth/index";
import { useLocation, Navigate } from "react-router-dom";
export default function RequireAuth({ element }) {
  let { user } = useAuth();
  let location = useLocation();

  if (!user.id) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return element;
}

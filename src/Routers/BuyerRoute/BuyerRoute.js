import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useBuyer from "../../Hooks/useBuyer";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const [isBuyer] = useBuyer(user?.email);
  const location = useLocation();
  if (loading) {
    return (
      <progress className="progress flex justify-center w-full"></progress>
    );
  }
  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;

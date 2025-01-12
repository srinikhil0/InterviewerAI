import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserRole } from '../../types/blog';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

interface ProtectedRouteProps {
  children: React.ReactElement;
  allowedRoles?: UserRole[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkUserRole = async () => {
      if (!user || !allowedRoles) {
        setIsAuthorized(!!user);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();
        const hasAccess = allowedRoles.includes(userData?.role as UserRole);
        setIsAuthorized(hasAccess);
      } catch (error) {
        console.error('Error checking user role:', error);
        setIsAuthorized(false);
      }
    };

    checkUserRole();
  }, [user, allowedRoles]);

  if (isAuthorized === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 
                    flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
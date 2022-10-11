import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";
import s from "./App.module.css";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
   
    return isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
      <div className={s.container}>
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="register" 
                       element={
                        <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
                       } />
                <Route path="login" 
                       element={
                        <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
                       } />
                <Route path="contacts"
                       element={
                        <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
                       } />
            </Route>
        </Routes>  
      </div>
    );
};




// import { lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import { SharedLayout } from "./SharedLayout/SharedLayout";
// import s from "./App.module.css";

// const HomePage = lazy(() => import("../pages/Home"));
// const RegisterPage = lazy(() => import("../pages/Register"));
// const LoginPage = lazy(() => import("../pages/Login"));
// const ContactsPage = lazy(() => import("../pages/Contacts"));

// export function App() {
   
//     return (
//       <div className={s.container}>
//         <Routes>
//             <Route path="/" element={<SharedLayout />}>
//                 <Route index element={<HomePage />} />
//                 <Route path="register" element={<RegisterPage />} />
//                 <Route path="login" element={<LoginPage />} />
//                 <Route path="contacts" element={<ContactsPage />} />
//             </Route>
//         </Routes>  
//       </div>
//     );
// };



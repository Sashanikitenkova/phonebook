import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { AppBar } from "components/AppBar/AppBar";

export const SharedLayout = () => {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        <AppBar />
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
        </div>
    )
}


// import { Suspense } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import s from "./SharedLayout.module.css";

// export const SharedLayout = () => {
//     return (
//         <>
//         <header>
//             <nav>
//               <NavLink className={({ isActive }) => (isActive ? s.active : s.link)} to="/">Home</NavLink>
//               <NavLink className={({ isActive }) => (isActive ? s.active : s.link)} to="/register">Register</NavLink>
//               <NavLink className={({ isActive }) => (isActive ? s.active : s.link)} to="/login">Log in</NavLink>
//             </nav>
//         </header>
//         <Suspense fallback={<div>Loading page...</div>}>
//             <Outlet />
//         </Suspense>
//         </>
//     )
// }
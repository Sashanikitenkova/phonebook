import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { AppBars } from "components/AppBars/AppBars";

export const SharedLayout = () => {
    return (
        <div>
        <AppBars />
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
        </div>
    )
}
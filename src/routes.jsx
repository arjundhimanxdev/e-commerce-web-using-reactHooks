import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayoutPage } from "./layout";
import { AboutMePage, HomePage, ContactUsPage} from "./pages";


const AppRoutes = () => {
  return (
    <>
    <Suspense
        fallback={
                <h1 className="text-3xl font-bold">Loading...</h1>
        }>
            <Routes>
                <Route element={<AppLayoutPage/>}>
                   <Route path="/" element={<HomePage/>}/>
                   <Route path="about" element={<AboutMePage/>}/>
                   <Route path="contact" element={<ContactUsPage/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>

        </Suspense>
    </>
  )
}

export default  AppRoutes;
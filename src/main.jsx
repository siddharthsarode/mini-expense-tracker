import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: "/",
//                 element: <Home />,
//             },
//             {
//                 path: "/exp-add",
//                 element: <ExpenseForm />,
//             },
//             {
//                 path: "/exp-history",
//                 element: <ExpenseHistory />,
//             },
//             {
//                 path: "/exp-charts",
//                 element: <ExpenseCharts />,
//             },
//         ],
//     },
// ]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <RouterProvider router={router} /> */}
        <App />
    </StrictMode>
);

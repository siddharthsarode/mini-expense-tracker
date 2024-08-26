import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import demoData from "./data.js";
import ExpenseHistory from "./components/ExpenseHistory/ExpenseHistory.jsx";
import Document from "./components/Document/Document.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import ExpenseCharts from "./components/ExpenseCharts.jsx";

function App() {
    const [expenses, setExpenses] = useLocalStorage("expenses", []);
    // console.log(expenses);
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route
                        path={"/exp-add"}
                        element={<ExpenseForm setExpenses={setExpenses} />}
                    />
                    <Route
                        path={"/exp-history"}
                        element={
                            <ExpenseHistory
                                setExpenses={setExpenses}
                                expenses={expenses}
                            />
                        }
                    />
                    <Route
                        path="/exp-charts"
                        element={<ExpenseCharts expenses={expenses} />}
                    />
                    <Route path="/doc" element={<Document />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

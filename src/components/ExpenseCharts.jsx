import React from "react";
import PieChart from "./Charts/PieChart";
import ExpenseBarChart from "./Charts/ExpenseBarChart";
import { Link } from "react-router-dom";

// Register the elements you need

function ExpenseCharts({ expenses }) {
    // console.log(expenses);
    const data = expenses.reduce((acc, curr) => {
        let existingData = acc.find((item) => item.category === curr.category);

        if (existingData) {
            existingData.totalAmount += parseFloat(curr.amount);
        } else {
            acc.push({
                category: curr.category,
                totalAmount: parseFloat(curr.amount),
            });
        }
        return acc;
    }, []);
    // console.log(data);
    return (
        <>
            {expenses.length === 0 ? (
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-10 col sm-12 col-lg-10 mx-auto d-flex justify-content-center align-items-center"
                            style={{ height: "calc(100vh - 120px)" }}
                        >
                            <div className="d-flex flex-column align-items-center">
                                <p className="display-5">No Data Available</p>
                                <Link
                                    to="/exp-add"
                                    className="btn btn-dark"
                                    style={{
                                        width: "fit-content",
                                    }}
                                >
                                    Click To Add
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="row border py-3">
                        <div className="col-md-10 col-sm-12 col-lg-10 mx-auto">
                            <h2>Bar Chart of your expense</h2>
                        </div>
                        <div className="col-md-10 col-sm-12 col-lg-10 mx-auto">
                            <ExpenseBarChart data={data} />
                        </div>
                    </div>
                    <div
                        className="row mt-5 border py-3"
                        style={{ height: "100vh" }}
                    >
                        <div className="col-md-10 col-sm-12 col-lg-10 mx-auto">
                            <h2>Pie Chart of your expense</h2>
                        </div>
                        <div className="col-md-10 col-sm-12 col-lg-10 mx-auto d-flex justify-content-center align-items-center">
                            <PieChart data={data} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ExpenseCharts;

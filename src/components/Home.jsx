import React from "react";
import PrimaryButton from "./PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import expImg from "/img/exp.jpg";

function Home() {
    return (
        <div className="container mt-4">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="">
                        <h1 className="display-1 fw-bold">Welcome...</h1>
                        <p>
                            Track your spending effortlessly and visualize your
                            expenses with our intuitive, multi-page Expense
                            Tracker app.
                        </p>
                        <Link to={"/exp-add"}>
                            <PrimaryButton text={"Lets Start"} />
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 mt-sm-4 mt-lg-0 mt-4">
                    <div>
                        <img
                            src={expImg}
                            width="100%"
                            height="400"
                            alt="expense Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

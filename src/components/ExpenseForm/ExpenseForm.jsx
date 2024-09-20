import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SelectMenu from "../SelectMenu";

function ExpenseForm({ setExpenses }) {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        amount: "",
        date: "",
    });
    const [error, setError] = useState({});

    const formConfig = {
        title: [
            { required: true, msg: "Title is Required." },
            { minLength: 3, msg: "Title must have min 3 char" },
        ],
        category: [{ required: true, msg: "Category is Required." }],
        amount: [
            { required: true, msg: "Amount is Required" },
            { pattern: /^\d+(.\d+)?$/, msg: "Invalid Amount" },
        ],
        date: [{ required: true, msg: "Date is Required." }],
    };

    const formValidate = (formData) => {
        let errors = {};
        Object.entries(formData).forEach(([key, value]) => {
            // console.log(key, value);
            formConfig[key]?.some((rule) => {
                if (rule.required && !value) {
                    errors[key] = rule.msg;
                    return true;
                }

                if (rule.minLength > value.length) {
                    errors[key] = rule.msg;
                    return true;
                }

                if (rule.pattern && !rule.pattern.test(value)) {
                    errors[key] = rule.msg;
                    return true;
                }
            });
        });

        setError(errors);
        return errors;
    };

    const handleInputChange = (event) => {
        setFormData((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const errorObj = formValidate(formData);
        if (Object.entries(errorObj).length > 0) return;

        setExpenses((prevState) => {
            return [...prevState, { ...formData, id: crypto.randomUUID() }];
        });
        setFormData({ title: "", category: "", amount: "", date: "" });
    };

    const goBackPage = () => {
        window.history.back();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-sm-12 mx-auto pb-3">
                    <h1 className="fs-2 mb-4 mt-5">Add a new expense</h1>
                    <form onSubmit={handleFormSubmit}>
                        <div className={styles.controls}>
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className={styles.control}>
                                        <label>
                                            Expense Title{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                        />
                                        {error && (
                                            <small className="error-text">
                                                {error.title}
                                            </small>
                                        )}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className={styles.control}>
                                        <label>
                                            Category{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>

                                        <SelectMenu
                                            value={formData.category}
                                            name="category"
                                            onChange={handleInputChange}
                                            defaultText={"Select Category"}
                                            options={[
                                                "Food",
                                                "Transport",
                                                "Entertainment",
                                                "Health",
                                                "Utilities",
                                            ]}
                                        />
                                        {error && (
                                            <small className="error-text">
                                                {error.category}
                                            </small>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-12 col-md-6">
                                    <div className={styles.control}>
                                        <label>
                                            Amount{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="number"
                                            name="amount"
                                            value={formData.amount}
                                            onChange={handleInputChange}
                                        />
                                        {error && (
                                            <small className="error-text">
                                                {error.amount}
                                            </small>
                                        )}
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className={styles.control}>
                                        <label>
                                            Date{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                        />
                                        {error && (
                                            <small className="error-text">
                                                {error.date}
                                            </small>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <PrimaryButton
                                    text="Go Back"
                                    type="button"
                                    onClick={goBackPage}
                                />
                                <button type="submit">Add Expense</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ExpenseForm;

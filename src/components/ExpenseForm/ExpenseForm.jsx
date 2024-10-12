import styles from "./ExpenseForm.module.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

import { useForm } from "react-hook-form";

function ExpenseForm({ setExpenses }) {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (formData) => {
        setExpenses((prevState) => {
            return [...prevState, { ...formData, id: crypto.randomUUID() }];
        });
        reset(); // clear form input  field
    };

    // const formConfig = {
    //     title: [
    //         { required: true, msg: "Title is Required." },
    //         { minLength: 3, msg: "Title must have min 3 char" },
    //     ],
    //     category: [{ required: true, msg: "Category is Required." }],
    //     amount: [
    //         { required: true, msg: "Amount is Required" },
    //         { pattern: /^\d+(.\d+)?$/, msg: "Invalid Amount" },
    //     ],
    //     date: [{ required: true, msg: "Date is Required." }],
    // };

    // const formValidate = (formData) => {
    //     let errors = {};
    //     Object.entries(formData).forEach(([key, value]) => {
    //         // console.log(key, value);
    //         formConfig[key]?.some((rule) => {
    //             if (rule.required && !value) {
    //                 errors[key] = rule.msg;
    //                 return true;
    //             }

    //             if (rule.minLength > value.length) {
    //                 errors[key] = rule.msg;
    //                 return true;
    //             }

    //             if (rule.pattern && !rule.pattern.test(value)) {
    //                 errors[key] = rule.msg;
    //                 return true;
    //             }
    //         });
    //     });

    //     setError(errors);
    //     return errors;
    // };

    // const handleInputChange = (event) => {
    //     setFormData((prevState) => {
    //         return { ...prevState, [event.target.name]: event.target.value };
    //     });
    // };

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     const errorObj = formValidate(formData);
    //     if (Object.entries(errorObj).length > 0) return;

    //     setExpenses((prevState) => {
    //         return [...prevState, { ...formData, id: crypto.randomUUID() }];
    //     });
    //     setFormData({ title: "", category: "", amount: "", date: "" });
    // };

    const goBackPage = () => {
        window.history.back();
    };

    const todayDate = new Date().toISOString().split("T")[0];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-sm-12 mx-auto pb-3">
                    <h1 className="fs-2 mb-4 mt-5">Add a new expense</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                            {...register("title", {
                                                required: "This is a required",
                                                minLength: {
                                                    value: 3,
                                                    message:
                                                        "Title must have min 3 char",
                                                },
                                            })}
                                        />
                                        {errors.title && (
                                            <small className="error-text">
                                                {errors.title.message}
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
                                        <select
                                            {...register("category", {
                                                required: "This is required",
                                            })}
                                        >
                                            <option value="">
                                                Select category
                                            </option>
                                            <option value="Food">Food</option>
                                            <option value="Health">
                                                Health
                                            </option>
                                            <option value="Entertainment">
                                                Entertainment
                                            </option>
                                            <option value="Utilities">
                                                Utilities
                                            </option>
                                            <option value="Utilities">
                                                Travel
                                            </option>
                                        </select>

                                        {errors.category && (
                                            <small className="error-text">
                                                {errors.category.message}
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
                                            type="text"
                                            {...register("amount", {
                                                required: "This is a required",
                                                pattern: {
                                                    value: /^\d+(.\d+)?$/,
                                                    message: "Invalid amount",
                                                },
                                            })}
                                        />
                                        {errors.amount && (
                                            <small className="error-text">
                                                {errors.amount.message}
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
                                            {...register("date", {
                                                required: "This is a required",
                                                max: {
                                                    value: todayDate,
                                                    message:
                                                        "You cannot select future date",
                                                },
                                            })}
                                        />
                                        {errors.date && (
                                            <small className="error-text">
                                                {errors.date.message}
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
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Adding" : "Add Expense"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ExpenseForm;

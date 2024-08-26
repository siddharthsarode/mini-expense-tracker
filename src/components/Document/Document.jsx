import React from "react";
import styles from "./Document.module.css";

function Document() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Expense Tracker Guide</h1>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Viewing Your Expenses</h2>
                <p>
                    When you open the app, you'll see a table listing all your
                    expenses, showing the <strong>Title</strong>,{" "}
                    <strong>Category</strong>, <strong>Amount</strong>, and{" "}
                    <strong>Date</strong> for each entry.
                    <br />
                    If there are no expenses listed, you'll be prompted to add
                    your first expense by clicking the{" "}
                    <em>"Add a first Expense"</em> link.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Adding a New Expense</h2>
                <p>
                    To add a new expense, click the <em>"Click To Add"</em> link
                    when no expenses are present. This will take you to the form
                    where you can enter the details of your expense.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Sorting Your Expenses</h2>
                <p>
                    You can sort the expenses in the table to organize your
                    data:
                    <ul className={styles.list}>
                        <li>
                            <strong>Title</strong>: Click the up arrow (▲) to
                            sort by title in ascending order (A-Z). Click the
                            down arrow (▼) to sort in descending order (Z-A).
                        </li>
                        <li>
                            <strong>Amount</strong>: Click the up arrow (▲) to
                            sort by amount from lowest to highest. Click the
                            down arrow (▼) to sort from highest to lowest.
                        </li>
                    </ul>
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Filtering Your Expenses</h2>
                <p>
                    <strong>By Title</strong>: Use the "Filter by title" input
                    box to type in a keyword. The table will instantly show only
                    the expenses that match your search.
                    <br />
                    <strong>By Category</strong>: Use the dropdown menu to
                    filter expenses by category. Select a category like "Food,"
                    "Transport," or "Entertainment," and the table will show
                    only the expenses that belong to that category.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Editing an Expense</h2>
                <p>
                    Right-click on any expense row to bring up the context menu.
                    <br />
                    Select "Edit" from the menu. An edit form will appear,
                    allowing you to update the title, amount, or other details
                    of the selected expense.
                    <br />
                    After making your changes, save the form, and the table will
                    update with the new information.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Deleting an Expense</h2>
                <p>
                    Right-click on any expense row to bring up the context menu.
                    <br />
                    Select "Delete" from the menu. This will remove the expense
                    from the table permanently.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Clearing Sorting</h2>
                <p>
                    If you have sorted your expenses and want to return to the
                    original order, click <strong>"Clear Sort"</strong> at the
                    bottom left of the table. This will reset any sorting you've
                    applied.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Viewing the Total</h2>
                <p>
                    At the bottom of the table, you will see a{" "}
                    <strong>"Total"</strong> row that sums up all the amounts of
                    the listed expenses. This gives you a quick overview of your
                    total spending.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.subheading}>Going Back</h2>
                <p>
                    If you need to return to a previous page, use the{" "}
                    <strong>"Back"</strong> button located at the top of the
                    table.
                </p>
            </section>
        </div>
    );
}

export default Document;

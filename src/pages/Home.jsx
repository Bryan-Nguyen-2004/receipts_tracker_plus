import { useState, useEffect } from "react";

export default function Home({ user }) {
    // user has keys {id, aud, role, email, email_confirmed_at, phone, confirmation_sent_at, confirmed_at, last_sign_in_at, app_metadata, user_metadata, identities, created_at, updated_at})
    const { id, email, created_at, updated_at } = user;
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url =
            `https://test-webapp-0law.onrender.com/user/${id}/transactions/?transaction_id=-1&page=1&page_size=10&sort_by=date&sort_order=asc&date_from=1000-01-01&date_to=9999-12-31&merchant=%25`;
        const headers = {
            accept: "application/json",
            access_token: "24tkvO0BQSYaWtDf",
        };

        fetch(url, { 
            method: 'GET', 
            headers: {
                accept: "application/json",
                access_token: "24tkvO0BQSYaWtDf",
            }})
            .then((response) => response.json())
            .then((data) => {
                setTransactions(data.transactions);
                setError(null);
            })
            .catch((error) => {
                setError(error);
            });
    }, [id]);

    return (
        <div>
            <h1>{email}</h1>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>{transaction.merchant}</li>
                ))}
            </ul>
            {error && <div>Error: {error.message}</div>}
        </div>
    );
}

import "./App.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Home from "./pages/Home";

const supabase = createClient(
    "https://cfxlwtygdlsmzjcsbret.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmeGx3dHlnZGxzbXpqY3NicmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2ODkyODcsImV4cCI6MjAxNDI2NTI4N30.LyQ1ym4Mckmty5qpL8dLx9FFwhjNDGVFvwuCYDjFj7Y"
);

export default function App() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (!session) {
        return (
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        );
    } else {
        // Extract user information from the session
        const user = session.user;
        // Pass the user information as a prop to the Home component
        return <Home user={user} />;
    }
}

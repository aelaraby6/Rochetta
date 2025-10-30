import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './ContextObjects'; 
import api from '../api'; 

const getInitialAuthState = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return {
        token: token,
        user: user ? JSON.parse(user) : null,
        isLoggedIn: !!token,
        loading: false,
        error: null,
    };
};

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [state, setState] = useState(getInitialAuthState);

    const login = async (email, password) => {
        setState(prev => ({ ...prev, loading: true, error: null }));
        try {
            const res = await api.post("/auth/login", { email, password });
            const { data: userData, token } = res.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("isLoggedIn", "true"); 

            setState(prev => ({ ...prev, user: userData, token: token, isLoggedIn: true, loading: false }));

         
            navigate("/");
            return { success: true };
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Invalid email or password. Please try again.";
            setState(prev => ({ ...prev, loading: false, error: errorMessage }));
            console.error("Login Error:", err);
            return { success: false, error: errorMessage };
        }
    };

    const signup = async (name, email, password) => {
        setState(prev => ({ ...prev, loading: true, error: null }));
        try {
            const res = await api.post("/auth/signup", { name, email, password });
            const { data: userData, token } = res.data;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("isLoggedIn", "true");

            setState(prev => ({ ...prev, user: userData, token: token, isLoggedIn: true, loading: false }));
            
            navigate("/profile");
            return { success: true };
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Signup failed. Try again.";
            setState(prev => ({ ...prev, loading: false, error: errorMessage }));
            console.error("Signup Error:", err);
            return { success: false, error: errorMessage };
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
        
        localStorage.removeItem("cart"); 
        
        setState({ token: null, user: null, isLoggedIn: false, loading: false, error: null });
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ state, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
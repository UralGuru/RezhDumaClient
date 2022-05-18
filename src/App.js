import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import { Context } from '.';
import Button from './components/shared/Button/Button';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import NavBar from './layouts/NavBar/NavBar';

import NewsPage from './pages/NewsPage/NewsPage'
import DocumentsPage from './pages/DocumentsPage/DocumentsPage'
import HistoryPage from './pages/HistoryPage/HistoryPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import PollsPage from './pages/PollsPage/PollsPage'
import VotingsPage from './pages/VotingsPage/VotingsPage'
import MainPage from './pages/MainPage/MainPage'
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import MainLayout from './layouts/MainLayout';
import Profile from './pages/Profile/Profile';
import Request from './pages/Request/Request';
import NewsItem from './pages/NewsItem/NewsItem';
import FAQPage from './pages/FAQPage/FAQPage';
import NewsItemLayout from './pages/NewsItem/NewsItemLayout/NewsItemLayout';
import AuthRequired from './pages/AuthRequired/AuthRequired';
import HistoryItemLayout from "./pages/HistoryItem/HistoryItemLayout/HistoryItemLayout";
import HistoryItem from "./pages/HistoryItem/HistoryItem";
import AdminRequired from './pages/AdminRequired/AdminRequired';
import Requests from './pages/AdminPages/Requests/Requests';
import AdminProfile from './pages/AdminPages/AdminProfile/AdminProfile';


function App() {
    const {userStore} = useContext(Context);
    
    useEffect(() => {
        if (localStorage.getItem('refresh-token')) {
            userStore.checkAuth();
        }
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    
                    {/* public routes */}
                    <Route index element={<MainPage />}/>
                    <Route path="login" element={<Login />}/>
                    <Route path="registration" element={<Registration />}/>
                    <Route path="profile" element={<Profile />}/>
                    <Route path="newsitem" element={<NewsItemLayout />}>
                        <Route path=":id" element={<NewsItem />}/>
                    </Route>
                    <Route path="historyitem" element={<HistoryItemLayout />}>
                        <Route path=":id" element={<HistoryItem />}/>
                    </Route>
                    <Route path="faq" element={<FAQPage />}/>
                    
                    {/* navbar routes */}
                    <Route path="news" element={<NewsPage />}/>
                    <Route path="documents" element={<DocumentsPage />}/>
                    <Route path="history" element={<HistoryPage />}/>
                    <Route path="votings" element={<VotingsPage />}/>
                    <Route path="polls" element={<PollsPage />}/>
                    <Route path="projects" element={<ProjectsPage />}/>
                    
                    {/* authorizated routes */}
                    <Route element={<AuthRequired />}>
                        <Route path="request" element={<Request />}/>
                    </Route>

                    {/* admin routes */}
                    <Route element={<AdminRequired />}>
                        <Route path="profile_admin" element={<AdminProfile/>}/>
                        <Route path="requests" element={<Requests/>}/>
                    </Route>

                    <Route path="*" element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default observer(App);
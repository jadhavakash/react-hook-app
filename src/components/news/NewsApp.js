import React, { createContext, useEffect, useState }  from 'react'
import axios from 'axios';
import {NewsContextProvider} from './NewsContext';
import News from './News'
const NewsApp = () => {
    return (
        <NewsContextProvider>
            <News/>
        </NewsContextProvider>
    )
}

export default NewsApp;

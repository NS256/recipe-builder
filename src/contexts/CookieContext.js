//context to store globally if cookies are allowed or not to feed into other functions

import { useState, createContext, useContext } from 'react';


export const CookieAllowedContext = createContext();
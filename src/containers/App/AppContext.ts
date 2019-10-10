import React from 'react';
import { TAppContext } from './types';

const AppContext = React.createContext<TAppContext>({});

AppContext.displayName = 'AppContext';

export default AppContext;

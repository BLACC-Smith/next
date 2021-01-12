import React, { createContext, useReducer, useCallback } from 'react';
import appReducer from './appReducer';

const initialState = { user: null, accessToken: null };

export const MainContext = createContext(initialState);

const MainContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	const updateUser = useCallback((payload) => {
		console.log('updating user');
		dispatch({ type: 'UPDATE_USER', payload });
	}, []);
	const updateAccessToken = (payload) => {
		dispatch({ type: 'UPDATE_ACCESS_TOKEN', payload });
	};

	return (
		<MainContext.Provider
			value={{
				user: state.user,
				updateUser,
				accessToken: state.accessToken,
				updateAccessToken,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};
export default MainContextProvider;

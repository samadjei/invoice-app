import { createContext, useState, useContext } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
	const [theme, setTheme] = useState('light');
	const [invoiceOpen, setInvoiceOpen] = useState(false);
	const [sideBarIcon, setSideBarIcon] = useState(false);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		setSideBarIcon(!sideBarIcon);
	};

	return (
		<Context.Provider
			value={{
				theme,
				invoiceOpen,
				sideBarIcon,
				toggleTheme,
			}}
		>
			{children}
		</Context.Provider>
	);
};

// allows us to use our state like a hook
export const useStateContext = () => useContext(Context);
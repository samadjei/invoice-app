import React, { forwardRef } from 'react';

const STYLES = ['btn--primary', 'btn--secondary', 'btn--tertiary', 'btn--item', 'btn--delete', 'btn--grey', 'btn--draft'];
const SIZES = ['btn--desktop', 'btn--tablet', 'btn--mobile', 'btn--item-long', 'btn--discard', 'btn--mini'];

interface ButtonProps {
	onClick: () => void;
	href: string;
	buttonStyle: string;
	buttonSize: string;
	type: "button" | "reset" | "submit" | undefined;
	children: any;
}

const Button: React.FC<ButtonProps> = forwardRef(({ onClick,buttonStyle, buttonSize, type, children }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	return (
		<button className={`btn ${checkButtonStyle} ${checkButtonSize}`}  type={type} onClick={onClick}>
			{children}
		</button>
	);
});

Button.displayName = 'Button';

export default Button;

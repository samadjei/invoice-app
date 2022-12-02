import React from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/logo.svg';
import Moon from '../../public/assets/icon-moon.svg';
import Avatar from '../../public/assets/image-avatar.jpg';


const SideBar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__logo sidebar__logo-bg">
				<div className="sidebar__logo-light"></div>
				<Image src={Logo} alt="Invoice App Logo" width={28} height={28} />
			</div>
			<div className="sidebar__bottom">
				<Image className='sidebar__moon' src={Moon} alt="Moon Icon" />
				<hr className="sidebar__hr" />
				<Image className="sidebar__avatar" src={Avatar} alt="Avatar Image" />
			</div>
		</div>
	);
};

export default SideBar

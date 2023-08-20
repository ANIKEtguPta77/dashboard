import {
	HiChartPie,
	HiTag,
	HiUserCircle,
	HiOutlineCog,
	HiOutlineQuestionMarkCircle,
	
} from 'react-icons/hi'

import { AiFillSchedule } from "react-icons/ai";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiChartPie />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiTag />
	},
	{
		key: 'schedules',
		label: 'Schedules',
		path: '/schedules',
		icon: <AiFillSchedule/>
	},
	{
		key: 'users',
		label: 'Users',
		path: '/users',
		icon: <HiUserCircle />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'help',
		label: 'Help',
		path: '/help',
		icon: <HiOutlineCog />
	},
	{
		key: 'contact us',
		label: 'Contact Us',
		path: '/contact',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
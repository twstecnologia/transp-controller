'use client'

import Link from 'next/link'
import { useState } from 'react';

import IconHome from '../IconHome/index.t';
import LogoSideBar from '../icons/LogoSideBar';
import IconRoutes from '../icons/IconRoutes';
import IconDriver from '../icons/IconDriver';
import IconLogout from '../icons/IconLogout';
import IconRegister from '../icons/IconRegister';
import IconMap from '../icons/IconMap';
import IconPakage from '../icons/IconPakage';
import IconReport from '../icons/IconReport';


export default function SideBar(){

	const [isSubmenuOpen, setSubmenuOpmen] = useState(false)

	function logout() {
		const clearUser = ""
	}

	function dropdown() {
		setSubmenuOpmen(!isSubmenuOpen)
	}

	return (
		<>
			<span
				className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
				>
				<i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
			</span>

			<div
			className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
			>

				<div className="text-gray-100 text-xl">
					<div className="p-2.5 mt-1 flex items-center">
						<LogoSideBar />
						<h1 className="font-bold text-gray-200 text-[15px] ml-3">Transp Controller</h1>
						<i
							className="bi bi-x cursor-pointer ml-28 lg:hidden"
		
						></i>
					</div>
					<div className="my-2 bg-gray-600 h-[1px]"></div>
				</div>

				<Link href='/home'>

					<div
						className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
					>
						<IconHome />
						<span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
					</div>

				</Link>




				<Link href='/driver-report'>

					<div
							className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
					>
						<IconReport />
						<span className="text-[15px] ml-4 text-gray-200 font-bold">Relatório</span>
					</div>

				</Link>




				<div
				className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
				onClick={dropdown}
				>

					<IconRegister />

					<div className="flex justify-between w-full items-center">
						<span className="text-[15px] ml-4 text-gray-200 font-bold">Cadastro</span>
						<span className="text-sm rotate-180" id="arrow">
							<i className="bi bi-chevron-down"></i>
						</span>
					</div>

				</div>

				<div
				className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${isSubmenuOpen ? '' : 'hidden'}`}
				id="submenu"
				>

					<Link href='/driver'>
						
						<h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 flex ">
						<IconDriver />
							Driver
						</h1>

					</Link>

					<Link href='/rotas'>

						<h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 flex">
						<IconRoutes />
							Rotas
						</h1>

					</Link>

					<Link href='/package/create'>
						
						<h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 flex">
							<IconPakage />
							Pacote avulso
						</h1>

					</Link>

					<Link href='/city/create'>

						<h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1 flex">
							<IconMap />
							Cidade
						</h1>

					</Link>

				</div>

				<Link href='/' onClick={logout}>

					<div className="my-4 bg-gray-600 h-[1px]"></div>

					<div
					className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
					
					>
						
						<IconLogout />
						<span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
					</div>
				</Link>


				</div>
		</>

	)


}
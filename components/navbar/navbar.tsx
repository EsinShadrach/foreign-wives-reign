"use client";
import ghanaLogo from "@/public/ghana-wives-logo.png";
import kenyaLogo from "@/public/kenya-logo-hi-def.png";
import NavLink from "@/utils/NavLink";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import routes from "@/data/routes.json";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
	const [opened, setOpened] = useState<boolean>(false);
	const headerRef = useRef<HTMLHeadingElement>(null);
	const [navbarScheme, setNavbarScheme] = useState<{
		logo?: StaticImageData | string | null;
		baseColor: string;
		textColor: string;
		afterColor: string;
		hover: string;
		linkColor: string;
		buttonText: string;
	}>({
		logo: ghanaLogo, // Default Logo and color scheme so nextJS doesn't break 🙂
		baseColor: "bg-black",
		textColor: "text-white",
		hover: "hover:bg-black/10",
		afterColor: "after:bg-black",
		linkColor: "text-white",
		buttonText: "Login",
	});
	const path = usePathname();

	useEffect(() => {
		if (path === "/ghana-wives") {
			setNavbarScheme({
				logo: ghanaLogo,
				baseColor: "bg-white",
				textColor: "text-black",
				hover: "hover:bg-white",
				afterColor: "after:bg-white",
				linkColor: "text-white",
				buttonText: "Login",
			});
			return;
		}

		if (path === "/kenya-wife") {
			setNavbarScheme({
				logo: kenyaLogo,
				baseColor: "bg-[#75A843]",
				textColor: "text-white",
				hover: "hover:bg-white",
				afterColor: "after:bg-white",
				linkColor: "text-white",
				buttonText: "Login",
			});
		}
	}, [path]);

	useEffect(() => {
		function handleClicks(e: MouseEvent): void {
			if (headerRef.current?.contains(e.target as Node)) {
				return;
			}
			setOpened(false);
		}
		window.addEventListener("click", handleClicks);
		return () => {
			window.removeEventListener("click", handleClicks);
		};
	}, []);

	return (
		<header
			ref={headerRef}
			className="fixed top-0 z-[60] w-full py-4 text-white bg-black/20 backdrop-blur-md"
		>
			<nav className="container flex items-center justify-between px-3 mx-auto">
				<Link href="/" onClick={() => setOpened(false)}>
					<Image
						src={navbarScheme.logo as StaticImageData}
						alt={"I am an apple"}
						width={50}
						height={50}
						priority={true}
						quality={100}
					/>
				</Link>
				<div className="hidden md:block">
					<ul className="flex items-center gap-6">
						{routes.map((route, index) => (
							<li key={index}>
								<NavLink href={route.href}>
									{({ isActive }) => (
										<div
											className={`relative text-base font-medium text-whitesmoke text-center after:content-[''] after:absolute after:h-1 after:left-0 after:-bottom-1 after:-z-10 after:rounded-md hover:after:w-full after:transition-all after:duration-300 ${
												navbarScheme.linkColor +
												" " +
												navbarScheme.afterColor
											} ${
												isActive
													? "after:w-full "
													: "hover:text-[#fbbc0f] after:w-0"
											}`}
										>
											{route.name}
										</div>
									)}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<button
					onClick={() => setOpened(!opened)}
					className={`relative flex gap-2 flex-col p-1.5 rounded-md transition-all duration-300 h-8 md:hidden ${
						opened
							? `${navbarScheme.baseColor} bg-opacity-20`
							: "bg-black/10 justify-center hover:bg-black/20"
					}`}
				>
					<div
						className={`${
							opened
								? "rotate-45 translate-y-2.5"
								: "translate-y-0 rotate-0"
						} h-0.5 ${
							navbarScheme.baseColor
						} w-6 transition-all duration-300`}
					/>
					<div
						className={`${
							opened ? "-rotate-45" : "rotate-0"
						} h-0.5 ${
							navbarScheme.baseColor
						} w-6 transition-all duration-300`}
					/>
				</button>
				<div className="hidden md:block">
					<Link href="/auth/login">
						<div
							className={`rounded-md py-1.5 px-7 transition-all duration-300 shadow-md active:scale-90 ${navbarScheme.baseColor} ${navbarScheme.textColor} hover:bg-opacity-90`}
						>
							{navbarScheme.buttonText}
						</div>
					</Link>
				</div>
			</nav>
			<div
				className={`transition-all duration-300 w-full -z-10 md:hidden grid overflow-hidden ${
					opened ? "grid-rows-[1fr] p-3" : "grid-rows-[0fr]"
				}`}
			>
				<div className="min-h-0 transition-all duration-300">
					<ul className="space-y-2">
						{routes.map((route, index) => (
							<li key={index}>
								<NavLink href={route.href}>
									{({ isActive }) => (
										<div
											onClick={() => setOpened(false)}
											className="flex items-center gap-1.5 group"
										>
											<div
												className={`${
													navbarScheme.baseColor
												} w-1 rounded-full transition-all duration-300  ${
													isActive
														? "h-6"
														: "group-hover:h-6 h-1"
												}`}
											/>
											<div
												className={`font-semibold rounded-md p-2 transition-all duration-300 w-full max-w-md ${
													navbarScheme.linkColor
												} ${
													isActive
														? navbarScheme.baseColor
														: `${navbarScheme.hover} hover:bg-opacity-20`
												}`}
											>
												{route.name}
											</div>
										</div>
									)}
								</NavLink>
							</li>
						))}
					</ul>
					<div className="w-full max-w-md">
						<Link
							href="/auth/login"
							className={`w-full rounded-md shadow-[5px_5px_10px_rgba(0,_0,_0,_0.25)] flex justify-center items-center py-2 active:scale-95 transition-all duration-300 mt-3 ${navbarScheme.baseColor} ${navbarScheme.textColor} hover:bg-opacity-90`}
						>
							{navbarScheme.buttonText}
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function NavLink({ href, children, ...props }: NavLinkProps) {
	const [isActive, setIsActive] = useState<boolean>(false);
	const path = usePathname();
	useEffect(() => {
		path === href ? setIsActive(true) : setIsActive(false);
	}, [href, path]);

	return (
		<Link {...props} href={href}>
			{children({ isActive })}
		</Link>
	);
}

export default NavLink;

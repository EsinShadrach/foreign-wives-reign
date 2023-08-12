interface NavLinkProps extends LinkProps {
	href: string;
	children: ({ isActive }: { isActive: boolean }) => React.ReactNode;
}

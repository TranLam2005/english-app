function Layout({children}: Readonly<{children: React.ReactNode}>): React.ReactNode {
    return ( 
        <div className="w-full flex items-center justify-center">{children}</div>
     );
}

export default Layout;
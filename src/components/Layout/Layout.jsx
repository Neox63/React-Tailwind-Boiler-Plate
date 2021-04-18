const Layout = ({ children, className = ''}) => {
    return (
        <>
            <main className={`h-full flex justify-center items-center ${className}`}>
                { children }
            </main>
        </>
    )
}

export default Layout;

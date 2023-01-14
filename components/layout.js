

export default function Layout({ children }) {
    return (
        <>

            <main class="grid mx-10 md:mx-24 lg:mx-32 xl:mx-48 2xl:mx-80">
                {children}
            </main>

        </>
    );
}
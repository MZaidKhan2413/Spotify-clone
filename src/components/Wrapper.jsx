export default function Wrapper({ children }) {
    return (
        <main className="wrapper d-flex p-2">
            {children}
        </main>
    )
}
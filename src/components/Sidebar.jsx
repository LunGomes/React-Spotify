import CardSidebar from "./CardSidebar";

export default function Sidebar({ children }) {
    return (
        <aside className="bg-vermelho  rounded-lg ml-6 mb-2 w-3/12 flex justify-center items-center">
            {children}
            <CardSidebar/>
        </aside>
    )
}
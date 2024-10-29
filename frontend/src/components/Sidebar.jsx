import CardSidebar from "./CardSidebar";

export default function Sidebar({ children }) {
    return (
        <aside className="bg-vermelho rounded-t-2xl w-3/12 flex justify-center items-center">
            {children}
            <CardSidebar/>
        </aside>
    )
}
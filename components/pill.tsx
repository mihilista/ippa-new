export default function Pill({children}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-200 text-black rounded-full inline-flex justify-center py-2.5 px-7 font-medium">
            {children}
        </div>
    )
}
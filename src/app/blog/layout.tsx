export default function BlogLayout({
    children,
    
}: {
    children: React.ReactNode;
    
}) {
    return (
        <>
            <main className="pt-[var(--size-hd)]">{children}</main>
        </>
    );
}

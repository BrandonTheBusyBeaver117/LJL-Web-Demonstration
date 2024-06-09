// Wrapper class for dashboard components

const Card = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex justify-center items-center">
        {children}
    </div>
}

export default Card
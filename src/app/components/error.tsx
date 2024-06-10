
export type ErrorProps = {
    disabledSupplier: () => boolean
    message: string,
    children?: React.ReactNode
}


const Error: React.FC<ErrorProps> = ({ disabledSupplier, message, children }) => {

    if (disabledSupplier()) return <></>

    return <div className=" bg-red-500 text-white p-2 rounded mb-4">
        {message}
        {children}
    </div>

}

export default Error 
type DashboardProps = {
    params: {
        id: string
    }
}


const dashboard = ({ params } : DashboardProps) => {
    console.log(params)
    return <>
        <h1>this is [Someone]'s home page</h1>
        <div>
            
        </div>
        </>
}

export default dashboard
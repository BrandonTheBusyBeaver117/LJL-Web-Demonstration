type DashboardProps = {
    params: {
        id: string
    }
}


const dashboard = ({ params } : DashboardProps) => {
    console.log(params)
    return <>
        <h1>this is {params.id}'s home page</h1>
        
        </>
}

export default dashboard
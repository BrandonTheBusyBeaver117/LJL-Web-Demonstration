type DashboardProps = {
    params: {
        id: string
    }
}


const dashboard = ({ params } : DashboardProps) => {
    console.log(params)
    return <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>this is {params.id}'s home page</h1>
        
        </main>
}

export default dashboard
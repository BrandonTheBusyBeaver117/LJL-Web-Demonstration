import Image from "next/image";

type DashboardProps = {
    params: {
        id: string
    }
}


const dashboard = ({ params }: DashboardProps) => {
    console.log(params)

    const name = "[Someone]"
    return <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">

        <div id="intro wrapper" className="flex flex-col items-center text-4xl">
            <h1 className="m-5">Hello {name}!</h1>
            <h1>Welcome to your dashboard!</h1>
        </div>


        <div className="flex flex-col items-center text-2xl">
            <h2 className="m-5">Chances of allowing Brandon to intern at LJL:</h2>
            <div id="image wrapper">
                <Image
                    className="relative"
                    src="/upwardtrend.jpg"
                    alt="chart"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    </div>
}

export default dashboard
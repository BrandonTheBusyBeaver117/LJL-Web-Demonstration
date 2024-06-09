import Image from "next/image";

type DashboardProps = {
    params: {
        id: string
    }
}


const dashboard = ({ params }: DashboardProps) => {
    console.log(params)

    const name = "[Someone]"
    return <div className=" bg-green-100 flex flex-col items-center justify-evenly grow rounded-3xl border-4 border-green-600">

        <div id="intro wrapper" className="flex flex-col items-center text-4xl grow-[3] basis-0">
            <h1 className="m-5">Hello {name}!</h1>
            <h1>Welcome to your dashboard!</h1>
        </div>


        <div className="flex flex-col items-center text-2xl grow-[5] basis-0">
            <h2 className="m-5">Chances of allowing Brandon to intern at LJL:</h2>
            <div id="image wrapper" className="flex flex-col items-center">
                <Image
                    className="relative"
                    src="/upwardtrend.jpg"
                    alt="chart"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '50%', height: 'auto' }}
                />
            </div>
        </div>
    </div>
}

export default dashboard
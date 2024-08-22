import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data

    return (
        <div
            key={id}
            className="p-4 border border-x-teal-50 rounded-md"
        >
            <h3 className="mb-6 text-center">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto"
            />

            <div className="flex gap-5 mt-6">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-3 transition duration-150 rounded-lg bg-slate-500 hover:bg-500/80"
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-3 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                    Live demo
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox
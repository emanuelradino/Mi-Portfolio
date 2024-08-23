import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub?: string; // Opcional
        urlDemo?: string;  // Opcional
    };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlDemo, urlGithub } = data;

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-md"
        >
            <h3 className="mb-7 md:mb-5 text-center text-lg font-semibold">{title}</h3>
            
            <div className="flex justify-center mb-6">
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="rounded-2xl h-auto object-cover"
                />
            </div>

            <div className="flex gap-5 justify-center">
                {urlGithub && (
                    <Link
                        href={urlGithub}
                        target="_blank"
                        className="p-3 transition duration-150 rounded-lg bg-slate-500 text-white hover:bg-slate-600"
                        aria-label={`${title} GitHub`}
                    >
                        GitHub
                    </Link>
                )}

                {urlDemo && (
                    <Link
                        href={urlDemo}
                        target="_blank"
                        className="p-3 transition duration-150 rounded-lg bg-secondary text-white hover:bg-secondary/80"
                        aria-label={`${title} Live Demo`}
                    >
                        Live Demo
                    </Link>
                )}
            </div>
        </div>
    );
}

export default PortfolioBox;

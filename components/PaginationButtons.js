import { useRouter } from "next/router";
import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
function PaginationButtons() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
    const nextN = startIndex/10+2
    return (
        <div className="flex max-w-lg  text-blue-700 mb-10">
            {startIndex>=10 &&(
                <Link href={`search?term=${router.query.term}&start=${startIndex-10}`}>
                    <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                        <ChevronLeftIcon  className="h-5"/>
                        <p>Page {nextN-2}</p>
                    </div>
                </Link>
            )}
            <Link href={`search?term=${router.query.term}&start=${startIndex+10}`}>
                <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                    <ChevronRightIcon className="h-5" />
                    <p>Page {nextN}</p>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButtons

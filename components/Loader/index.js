import Image from 'next/image';

export function Loader() {
    return (
        <div className="loader">
            <Image
                src="/star-wars-icon-png-15.jpg"
                alt="Loading..."
                width={128}
                height={128}
            />
            <p>Loading..</p>
        </div>
    )
}
import Image from 'next/image';

interface Anime {
    title: string;
    description: string;
    genres: string[];
    episodes: number;
    score: number;
    img: string;
}

const CardSerie = ({ anime }: { anime: Anime }) => {
    return (
        <article>
            <div>
                <Image
                    src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/d458b9695157881b8b257226a2f68bb3.jpg"
                    alt={anime.title}
                />
                <div>
                    <h4>{anime.title}</h4>
                    <p></p>
                </div>
            </div>
            <div className="hidden absolute bottom-0 left-0 w-full bg-black opacity-50 p-4 blur-lg -z-10">
                <h4></h4>
                <p></p>
                <p></p>
                <p></p>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </article>
    );
};

export default CardSerie;

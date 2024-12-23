const InfoSerie = ({ sinopsis = 'nada' }) => {
    return (
        <div className=" absolute bottom-10 left-10 z-50 w-80">
            <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 p-4 blur-lg -z-10"></div>
                <div className="text-slate-50 flex flex-col gap-4 z-50">
                    <img src="" alt="" />
                    <div>
                        <span>14+</span>
                        <span>-Subtitulado</span>
                    </div>
                    <p>{sinopsis}</p>
                    <div className="flex gap-4">
                        <button className="bg-primary hover:bg-opacity-90 text-black font-bold px-5 py-2">
                            4 VER DE NUEVO
                        </button>
                        <button className="border-2 px-2 text-primary border-primary text-black font-bold">
                            o
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSerie;

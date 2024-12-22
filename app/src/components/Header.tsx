import CrunchyrollIcon from '@/assets/icons/CrunchyrollIcon';
import TriangleIcon from '@/assets/icons/TriangleIcon';
import CrownIcon from '@/assets/icons/CrownIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import TasksIcon from '@/assets/icons/TasksIcon';
import Image from 'next/image';
const Header = () => {
    return (
        <header className="bg-dark w-screen text-white fixed top-0 left-0 right-0 h-[3.75rem] z-[999]">
            <div className="w-full h-full md:px-[5rem] xl:px-[98px] flex items-center justify-between">
                <div className="h-full flex items-center gap-6">
                    <div>
                        <CrunchyrollIcon className="text-primary w-[8.5rem]" />
                    </div>
                    <nav className="h-full">
                        <div className="h-full flex items-center justify-between gap-4">
                            <div className="h-full flex gap-1 px-2 items-center cursor-pointer hover:bg-black">
                                <span className="text-[.9rem]">Explorar</span>
                                <TriangleIcon className="size-[1.5rem] text-slate-500" />
                            </div>
                            <div className="h-full flex gap-1 px-2 items-center cursor-pointer hover:bg-black">
                                <a href="#juegos">
                                    <span className="text-[.9rem]">Juegos</span>
                                </a>
                            </div>
                            <div className="h-full flex gap-1 px-2 items-center cursor-pointer hover:bg-black">
                                <span className="text-[.9rem]">Noticias</span>
                                <TriangleIcon className="size-[1.5rem] text-slate-500" />
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="h-full flex items-center">
                    <div className="flex items-center gap-2 hover:bg-black h-full px-2">
                        <CrownIcon className="text-secondary w-[1.5rem]" />
                        <div>
                            <p className="text-secondary text-[10px]">
                                PROBAR GRATIS
                            </p>
                            <p className="text-white text-[10px]">PREMIUM</p>
                        </div>
                    </div>
                    <div className="hover:bg-black px-5 h-full flex items-center">
                        <SearchIcon className="text-white w-[1.5rem]" />
                    </div>
                    <div className="hover:bg-black px-5 h-full flex items-center">
                        <TasksIcon className="text-white w-[1.5rem]" />
                    </div>
                    <div className="flex gap-1 items-center justify-center hover:bg-black px-4 h-full">
                        <div className="relative">
                            <Image
                                src="https://pm1.aminoapps.com/8576/61b086cbd41039b7f6164c0fcf17a7ee1caa54f1r1-1080-1080v2_00.jpg"
                                alt="foto de perfil"
                                className="rounded-full size-9 object-cover hover:ring-2 ring-primary hover:ring-offset-2 ring-offset-dark cursor-pointer"
                                width={32}
                                height={32}
                            />
                            <span className="absolute -top-[2px] -right-[2px] size-4 bg-primary rounded-full border-[1px] border-black cursor-pointer drop-shadow-xl"></span>
                        </div>
                        <TriangleIcon className="size-[1.5rem] text-slate-500" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

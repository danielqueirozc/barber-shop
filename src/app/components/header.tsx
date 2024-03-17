import Image from "next/image";

import location from '@/app/assets/icons/Location.svg';
import call from '@/app/assets/icons/Call.svg';

export function Header() {
    return (
        <header className="w-full max-w-[1920px] py-4 px-[100px] flex justify-between flex-wrap bg-dark">
            <div className="flex gap-4 h-6">
                <strong className="text-active text-xs">
                     WE ARE OPEN
                </strong>

                <strong className="text-light-activ text-xs">
                    7 DAYS A WEEK
                </strong>
            </div>

            <div className="flex items-center gap-12 max-w-[369] h-6">
                <div className="flex items-center gap-4">
                    <Image src={location} alt="icon-location" />
                    <strong className="text-xs">
                        9400 Penatibus Road
                    </strong>
                </div>

                <div className="flex items-center gap-4">
                    <Image src={call} alt="icon-call" />
                    <strong className="text-xs">
                        1-366-253-7950
                    </strong>
                </div>
            </div>
        </header>
    );
}
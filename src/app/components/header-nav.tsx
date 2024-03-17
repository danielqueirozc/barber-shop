import Image from 'next/image';

import logoImage from '@/app/assets/logo.svg';
import cart from '@/app/assets/icons/Cart.svg';

export function HeaderNav() {
    return (
        <header className='max-w-[1920px] h-28 flex items-center justify-between py-6 px-[100px]'>
            <Image src={logoImage} alt='logo do site' />

                <ul className='h-6 flex items-center gap-12'>
                    <li>
                        <a href="#">
                            <strong className='text-xs text-active'>
                                THE HOME
                            </strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <strong className='text-xs'>
                                SERVICES AND PRICES
                            </strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <strong className='text-xs'>
                                SERVICES AND PRICES 
                            </strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <strong className='text-xs'>
                                FRACHISE
                            </strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <strong className='text-xs'>
                                OUR TEAM
                            </strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <strong className='text-xs'>
                                OUR TEAM
                            </strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <strong className='text-xs'>
                                PORTFOLIO
                            </strong>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <strong className='text-xs'>
                                PORTFOLIO
                            </strong>
                        </a>
                    </li>
                </ul>

            <div className='h-6 flex items-center gap-4 py-4'>
                <Image src={cart} alt='carrinho de compras' />

                <strong>CARD</strong>

                <div className='w-6 h-6 flex items-center justify-center rounded-[32px] bg-active '>
                    <span>0</span>
                </div>
            </div>
        </header>
    );
}
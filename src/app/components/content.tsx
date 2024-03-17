import Image from 'next/image';

import facebookIcon from '@/app/assets/icons/Facebbok.svg';
import tiktokIcon from '@/app/assets/icons/TikTok.svg';

export function Content() {
    return (
        <main className='w-[542px] h-[562px] flex flex-col gap-20'>
            <div className='h-[442px] flex flex-col gap-12'>
                <div className='h-[338px] flex flex-col gap-6'>
                    <h1 className='text-[80px] font-bold'>The Barbershop</h1>
                    <h2>Expert Haircuts and Grooming Services</h2>
                    <p>
                        At The Finest Barbershop, we offer a wide range of professional hair cutting and grooming services for men.
                        Our experienced barbers use the latest techniques and tools to give you the perfect look. 
                        Whether you're in need of a classic haircut, straight razor shave, or beard trim, we've got you covered.
                    </p>
                </div>

                <div>
                    <button>
                        book a haircut
                    </button>
                    <button>
                        Start shopping
                    </button>
                </div>
            </div>  

            <div>
                <div>
                    <Image src={facebookIcon} alt='facebook icon' />
                </div>
                
                <div>
                    <Image src={tiktokIcon} alt='tiktok icon' />
                </div>
            </div>          
        </main>
    );
}
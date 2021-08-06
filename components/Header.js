import Image from 'next/image'
import HeaderItems from './HeaderItems'
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchCircleIcon, UserIcon } from '@heroicons/react/outline'

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
           <div className="flex flex-grow justify-evenly max-w-2xl">
           <HeaderItems Icon={HomeIcon} title='HOME' />
           <HeaderItems Icon={LightningBoltIcon} title='TRENDING' />
           <HeaderItems Icon={BadgeCheckIcon} title='VERIFIED' />
           <HeaderItems Icon={CollectionIcon} title='COLLECTION' />
           <HeaderItems Icon={SearchCircleIcon} title='SEARCH' />           
           <HeaderItems Icon={UserIcon} title='ACCOUNT' />           

           </div>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                height={100}
                width={200}
            />
        </header>
    )
}

export default Header

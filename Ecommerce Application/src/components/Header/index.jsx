const Header = () => (
    <div>
        <div className="flex justify-between p-1 px-10 text-sm bg-green-900 text-white font-medium">
            <p>            </p>
            <p className="ml-11">Free Shipping on orders above 999/-</p>
            <p>Call us on : +91 98768 05120</p>
        </div>
        <div className="px-10 py-4 flex justify-between items-center">
            <div className=" flex items-center gap-1.5">
                <img className="w-14 h-14" src = "https://res.cloudinary.com/adnansayyed2321/image/upload/v1729397693/eefc66cd70960daab6449206c3540858_z7xawf.png" alt ="chaperoneplants"/>
                <h2 className="text-2xl font-semibold text-green-800">Chaperone</h2>
            </div>
            <ul className="flex gap-10 text-base font-semibold">
                <li className="hover:text-amber-500">Home</li>
                <li className="hover:text-amber-500">Plants & Ports</li>
                <li className="hover:text-amber-500">Tools</li>
                <li className="hover:text-amber-500">Our Services</li>
                <li className="hover:text-amber-500">Blog</li>
                <li className="hover:text-amber-500">Our Story</li>
                <li className="hover:text-amber-500">FAQs</li>
            </ul>
            <div className="flex justify-center items-end gap-8 text-xs font-medium">
                <button className="flex flex-col justify-center items-center gap-1">
                    <img className="w-5 h-5 " src = "https://res.cloudinary.com/adnansayyed2321/image/upload/v1729401719/user_2_uzskax.png"/>
                    My Profile
                </button>
                
                <button className="flex flex-col justify-center items-center gap-1">
                    <img className="w-6 h-6 " src = "https://res.cloudinary.com/adnansayyed2321/image/upload/v1729401667/shopping-cart_ph1bqm.png"/>
                    Cart
                </button>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 border-b-2 border-slate-400 pb-1">
            <img className="w-4 h-4" src ="https://res.cloudinary.com/adnansayyed2321/image/upload/v1729414744/image_1_cspseu.png" alt=""/>
            <input className="w-64" placeholder="Search plant" type = "search"/>
            <img className="w-6 h-6" src ="https://res.cloudinary.com/adnansayyed2321/image/upload/v1729414874/image_91_p4qdct.png" alt=""/>
        
            </div>
            </div>
    </div>
)

export default Header
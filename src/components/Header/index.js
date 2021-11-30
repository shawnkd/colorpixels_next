import 'tailwindcss/tailwind.css'
import {Button} from "degen"



export default function Header() {
    return(
        <div className="p-5 items-end ">
            {/* <div>
                <NavLink className='content-start' href={'/'}>
                    <a>Home</a>
                </NavLink>
            </div> */}
            <div>
                <Button className=""> Connect Wallet</Button>
            </div>
        </div>
    )
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const Logo = () => {

    return ( 
        <div className="hidden md:flex items-center pag-x-2">
            <Avatar>
                <AvatarFallback className="bg-black text-white text-xs text-muted">DPS</AvatarFallback>
            </Avatar>
        </div>
     );
}
 
export default Logo;
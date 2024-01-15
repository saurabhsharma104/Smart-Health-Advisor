import NavBarPage from "./navbar";

const MarketingPageLayout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div  className="h-full dark:bg-[#1f1f1f]">
            <NavBarPage/>
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
     );
}
 
export default MarketingPageLayout;
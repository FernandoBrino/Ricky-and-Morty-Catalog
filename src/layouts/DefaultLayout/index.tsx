import { FC, ReactNode } from "react";
import { DefaultLayoutContainer, Footer, Header, MainContent, Menu } from "./styles";
import logoRickyMorty from "@/assets/ricky-and-morty.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


interface DefaultLayoutProps {
    children: ReactNode
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({children}) => {
    const { replace } = useRouter();

    function handleReturnHome() {
        replace("/");
    }

    return (
        <DefaultLayoutContainer>
            <Header>
                <Image 
                    src={logoRickyMorty} 
                    alt="" 
                    width={120} 
                    height={120} 
                    onClick={handleReturnHome}
                />
                
                <Menu>
                    <Link href="/">Home</Link>
                    <Link href="/favorites">Favorites</Link>
                </Menu>
            </Header>

            <MainContent>
                {children}
            </MainContent>

            <Footer>
                
            </Footer>
        </DefaultLayoutContainer>
    )
}
import { FC, ReactNode } from "react";
import { DefaultLayoutContainer, Footer, Header, MainContent, Menu, SearchInput } from "./styles";
import logoRickyMorty from "@/assets/ricky-and-morty.svg";
import Image from "next/image";
import Link from "next/link";
import { BiSearchAlt } from 'react-icons/bi';
import { useTheme } from 'styled-components'


interface DefaultLayoutProps {
    children: ReactNode
}

export const DefaultLayout: FC<DefaultLayoutProps> = ({children}) => {
    const {green} = useTheme();

    return (
        <DefaultLayoutContainer>
            <Header>
                <Image src={logoRickyMorty} alt="" width={120} height={120}/>
                
                <Menu>
                    <Link href="/">Home</Link>
                    <Link href="/favorites">Favoritos</Link>
                </Menu>
            </Header>

            <MainContent>
                <SearchInput>
                    <input type="text"/>
                    <BiSearchAlt size={24} color={green}/>
                </SearchInput>

                {children}
            </MainContent>

            <Footer>
                Created by Fernando Brino
            </Footer>
        </DefaultLayoutContainer>
    )
}
import Michael from "@/assets/Michael.jpeg"
import Image from "next/image"
import { CardContainer, Description } from "./styles"
import {BsStarFill} from "react-icons/bs"

export const Card = () => {
    return (
        <CardContainer href={`/character/1`}>
            <Image src={Michael} width={250} height={200} alt="" />

            <Description>
                <h1>Michael Denny and the Denny Singers</h1>

                <div className="status">
                    <p>Alive - Human</p>
                </div>

                <div>
                    <span className="subtitle">Last known location:</span>
                    <p>Interdimensional Cable</p>
                </div>

                <div>
                    <span className="subtitle">First seen in:</span>
                    <p>Rixty Minutes</p>
                </div>
            </Description>
        </CardContainer>
    )
}
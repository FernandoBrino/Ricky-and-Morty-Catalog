import { BsStarFill } from "react-icons/bs"
import { CardContainer, Description } from "./styles"
import Link from "next/link"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export const CardSkeleton = () => {
    return (
        <CardContainer status={"Unknown"}>
            <BsStarFill 
                className="favorite" 
                size={24} 
                color={"white"}
            />
            <Link href="/" >
                <Skeleton width={250} height={200} baseColor={"#d3d3d3"}/>

                <Description status={"Unknown"}>
                    <h1>
                        <Skeleton baseColor={"#d3d3d3"}/>
                    </h1>

                    <div className="status">
                        <p><Skeleton baseColor={"#d3d3d3"}/> - <Skeleton baseColor={"#d3d3d3"}/></p>
                    </div>

                    <div>
                        <span className="subtitle">Last known location:</span>
                        <p><Skeleton baseColor={"#d3d3d3"}/></p>
                    </div>

                    <div>
                        <span className="subtitle">First seen in:</span>
                        <p><Skeleton baseColor={"#d3d3d3"}/></p>
                    </div>
                </Description>
            </Link>
        </CardContainer>
    )
}
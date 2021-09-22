import "./InformationBlock.scss"

type InformationBlockType = {
    icon: string,
    name: string,
    gender: string,
    location: string,
    episodeNumber: number,
    species: string
}
export const InformationBlock = (props: InformationBlockType) => {
    return (
        <div className={"InformationBlock-wrapper"}>
            <div className={"InformationBlock-icon"}>
                <img
                    src={props.icon}
                />
            </div>
            <div className={"InformationBlock-personageName"}>
                {props.name}
            </div>
            <div className={"InformationBlock-aboutPersonage"}>
                <div>{props.gender}</div>
                <div>{props.species}</div>
                <div>{props.location}</div>
                <div>Number of episodes:{props.episodeNumber}</div>

            </div>

        </div>
    )
}
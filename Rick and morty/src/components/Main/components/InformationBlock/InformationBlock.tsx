import "./InformationBlock.scss"

export const InformationBlock = (props: any) => {
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
                <div>number of episodes:{props.episodeNumber}</div>
            </div>

        </div>
    )
}
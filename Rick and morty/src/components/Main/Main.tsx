import "./Main.scss"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {
    setGenderActionCreator,
    setNameActionCreator, setPersonagesData,
    setStatusActionCreator
} from "../../redux/personages";
import {InformationBlock} from "./components/InformationBlock/InformationBlock";
import {Paginator} from "./components/Paginator/Paginator";

export const Main = () => {
    const dispatch = useDispatch()
    const {personagesData, name, status, gender, currentPage} = useSelector((state: any) => state.personagesReducer)
    const refInput: any = useRef()
    const refStatus: any = useRef()
    const refGender: any = useRef()
    useEffect(() => {
        dispatch(setPersonagesData(name || "", status, gender, currentPage || 1))

    }, [name, status, gender, currentPage]);



    if (!personagesData) {
        return (
            <>

            </>
        )
    }

    const personagesList = personagesData.results.map((e: any, i: any) => {
        return <InformationBlock key={i} icon={e.image} name={e.name} species={e.species} gender={e.name}
                                 episodeNumber={e.episode.length} location={e.location.name}/>
    })

    return (
        <div className={"Main-wrapper"}>
            <div className={"Main-header"} id={"top"}>
                Rick and Morty
            </div>
            <div className={"Main-page"}>

                <div className={"Main-inputs"}>
                    <input className={"Main-input"} ref={refInput} placeholder={"Name"} value={name}
                           onChange={() => {
                               dispatch(setNameActionCreator(refInput.current.value))
                           }
                           }/>
                    <select className="Main-select" ref={refStatus}
                            onChange={() => dispatch(setStatusActionCreator(refStatus.current.value))}>
                        <option selected disabled>Status</option>
                        <option value={"Alive"}>Alive</option>
                        <option value={"Dead"}>Dead</option>
                        <option value={"Unknown"}>Unknown</option>

                    </select>

                    <select className="Main-select" ref={refGender}
                            onChange={() => dispatch(setGenderActionCreator(refGender.current.value))}>

                        <option selected disabled>Gender</option>
                        <option value={"Female"}>Female</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Genderless"}>Genderless</option>

                        <option value={"Unknown"}>Unknown</option>
                    </select>
                    {personagesData?<div className={"Main-personagesList"}>
                        {personagesList}
                    </div>:null}
                </div>
                <div className={"Main-paginator"}>
                    <Paginator />
                </div>
            </div>
        </div>
    )
}
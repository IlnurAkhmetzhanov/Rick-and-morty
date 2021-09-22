import "./Main.scss"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {
    setGenderActionCreator,
    setNameActionCreator, setPersonagesData,
    setStatusActionCreator
} from "../../redux/personages";
import {InformationBlock} from "./components/InformationBlock/InformationBlock";

export const Main = () => {
    const dispatch = useDispatch()
    const {personagesData, name, status, gender} = useSelector((state: any) => state.personagesReducer)
    const refInput: any = useRef()
    const refStatus: any = useRef()
    const refGender: any = useRef()
    useEffect(() => {
        dispatch(setPersonagesData(name, status, gender))

    }, [name, status, gender]);
    return (
        <div className={"Main-wrapper"}>
            <div className={"Main-page"}>
                <div className={"Main-header"}>
                    Rick and Morty
                </div>
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
                    <InformationBlock name={"Азат"} gender={"Татарин"} location={"Рыбушкино"} species={""}
                                      icon={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
                </div>
            </div>
        </div>
    )
}
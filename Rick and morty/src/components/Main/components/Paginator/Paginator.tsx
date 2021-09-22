import {useDispatch, useSelector} from "react-redux";
import {InformationBlock} from "../InformationBlock/InformationBlock";
import {useState} from "react";
import {PaginatorBlock} from "./components/PaginatorBlock";
import "./Paginator.scss"
import {setCurrentPageActionCreator} from "../../../../redux/personages";


export const Paginator = () => {
    const dispatch = useDispatch()

    const {personagesData, currentPage} = useSelector((state: any) => state.personagesReducer)
    const pagesPoint = new Array(personagesData.info.pages)
    for (let i = 0; i < personagesData.info.pages; i++) {
        pagesPoint[i] = i
    }
    const pagesList = pagesPoint.map((e: any) => {
        return <PaginatorBlock key={e + 1} pageNumber={e + 1}/>
    })


    return (

        <div className={"Paginator-wrapper"}>
            <div className={"Paginator-pageMinus"}
                 onClick={() => currentPage - 1 > 0 && dispatch(setCurrentPageActionCreator(currentPage - 1))}>-
            </div>
            {pagesList}
            <div className={"Paginator-pagePlus"}
                 onClick={() => currentPage + 1 <= personagesData.info.pages && dispatch(setCurrentPageActionCreator(currentPage + 1))}>+
            </div>


        </div>
    )
}
import "./PaginatorBlock.scss"
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPageActionCreator} from "../../../../../redux/personages";

type PaginatorBlockProps = {
    pageNumber: number
}

export const PaginatorBlock = (props: PaginatorBlockProps) => {
    const dispatch = useDispatch()
    const {currentPage} = useSelector((state: any) => state.personagesReducer)
    return (
        <a href={"#top"}
           className={`PaginatorBlock-wrapper__${props.pageNumber === currentPage ? "active" : "passive"}`}
           onClick={() => dispatch(setCurrentPageActionCreator(props.pageNumber))}>
            {props.pageNumber}
        </a>
    )
}
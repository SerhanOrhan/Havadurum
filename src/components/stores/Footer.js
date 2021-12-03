import { useDispatch, useSelector } from "react-redux";
import { setDarkmode } from "../stores/store"


function Footer() {
    const dispatch = useDispatch()
    const { dark } = useSelector(state => state.store)
    return (
        <div>
            <button className="dark-mode" onClick={() => dispatch(setDarkmode())}>{dark ? 'Light moda geç' : ' Dark moda geç'}</button>
        </div>
    )
}

export default Footer

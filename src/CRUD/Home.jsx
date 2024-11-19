import { Link } from "react-router-dom"
import style from "./home.module.css"

const Home=()=>{



    return(
        <div id={style.home}>
           <article>
            <Link to="/">Create-User</Link>
            <Link to="/User">User</Link>
            </article>
        </div>
    )
}
export default Home
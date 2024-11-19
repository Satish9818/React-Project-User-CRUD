

import Btn from "./Btn"
import LogoBlock from "./LogoBlock"
import MenuBlock from "./MenuBlock"
import style from "./findcoder.module.css"

const FindCoder=()=>{



    return(
        <div >
            <section id={style.nav}>
            <article>
                <div className={style.Logo}><LogoBlock/></div>
                <div className={style.Menu}><MenuBlock/></div>
                <div className={style.Btn}><Btn/></div>
            </article>
            </section>
        </div>
    )
}

export default FindCoder
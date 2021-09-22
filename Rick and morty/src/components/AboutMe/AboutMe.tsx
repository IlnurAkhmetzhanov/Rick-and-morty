import "./AboutMe.scss"

export const AboutMe = () => {
    return (
        <div className={"AboutMe-wrapper"}>
            <div className={"Main-header"}>
                Rick and Morty
            </div>
            <div className={"AboutMe-content"}>
                <div className={"AboutMe-icon"}>
                    <img
                        src={require('./assets/icon.jpg').default}

                    />
                </div>
                <div className={"AboutMe-text"}>
                    <h2>Обо мне</h2>
                    <div className={"AboutMe-AboutMe"}>Привет, меня зовут - Азат). Я - студент 3-го курса "НИУ Московского Авиационного института"
                    направления "Информатика и вычислительная техника". Проходил двухмесячную стажировку по
                    фронтенд-разработке в компании "LLC Chesstery".<br/>
                    Люблю: Js, Ts, React, Redux, спорт, активный отдых, мороженое, плэстейшен.<br/>
                    Не люблю: Рыбу, грубость, равнодушие
                    </div>
                </div>


            </div>
        </div>
    )
}
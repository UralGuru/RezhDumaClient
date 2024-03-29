import React from "react";
import Container from "../../../components/shared/Container/Container";
import styles from './IntroPage.module.css'

const IntroPage = (props) => {
    return(
        <div className={styles.intro}>
            <Container>
                <div className={styles.page_heading}>
                    <div><br />Электронный портал</div>
                    <div>
                        Администрации города Реж<br />
                        Свердловской области
                    </div>
                    {/* TODO: Реализовать поиск по странице */}
                    {/* <input 
                        className={styles.search_btn} 
                        type="text"
                        placeholder="Поиск по сайту     &#10140;"
                    /> */}
                </div>
            </Container>
        </div>
    );
}

export default IntroPage;
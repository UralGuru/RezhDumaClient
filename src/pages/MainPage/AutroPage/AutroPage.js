import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../../components/shared/Container/Container";
import styles from './AutroPage.module.css'
import {REQUEST_ROUTE} from '../../../utils/constants'

const AutroPage = (props) => {
    const navigate = useNavigate();

    return(
        <div className={styles.autro}>
            <Container>
                <div className={styles.inner}>
                    <div>
                        Есть вопросы?<br/>
                        Задайте их депутату режской думы...
                    </div>
                    <button 
                        className={styles.request_btn} 
                        onClick={() => navigate(REQUEST_ROUTE)}
                        >Отправить обращение
                    </button>
                </div>
            </Container>
        </div>

    );
}

export default AutroPage;
import React from 'react';
import imgPages from './../ManualImages/linkToManualImg';
import s from './manualText.module.css';

const ManualTextAdmin = () => {
    return (
        <>
            <div className={s.header}>
                <h2>Руководство пользования для администратора</h2>
            </div>

            <div className={s.sectionTableTitle}>ОПИСАНИЕ РАЗДЕЛОВ САЙТА</div>
            <ul>
                <li><a href="#first">Главная страница</a></li>
                <li><a href="#news">Новости</a></li>
                <li><a href="#voting">Голосования</a></li>
                <li><a href="#docs">Документы</a></li>
                <li><a href="#projects">Проекты</a></li>
                <li><a href="#histories">История</a></li>
            </ul>
            <div className={s.sectionTableTitle}>ЛИЧНЫЙ КАБИНЕТ</div>
            <ul>
                <li><a href="#auto">Авторизация</a></li>
                <li><a href="#regis">Регистрация</a></li>
                <li><a href="#entry">Вход</a></li>
                <li><a href="#lk_link">Переход в личный кабинет</a></li>
                <li><a href="#lk">Содержание личного кабинета</a></li>
                <li><a href="#letter">Ответы на обращения</a></li>
            </ul>
            <div className={s.sectionTableTitle}>СОЗДАНИЕ И РЕДАКТИРОВАНИЕ ЗАПИСЕЙ</div>
            <ul>
                <li><a href="#news_admn">Новости</a></li>
                <li><a href="#votings_admn">Голосования</a></li>
                <li><a href="#documents_admn">Документы</a></li>
                <li><a href="#project_admn">Проекты</a></li>
                <li><a href="#history_admn">История</a></li>
            </ul>

            <div>
                <div className={s.sectionTitleName}>ОПИСАНИЕ РАЗДЕЛОВ САЙТА</div>
                <div>
                    <div className={s.sectionTitle} id={'first'}>Главная страница</div>
                    <p>
                        Этой страницей сайт встречает пользователя. На ней можно
                        узнать последние события в городе: новости, голосования, проекты,
                        над которыми работает администрация, документвы и история
                        города. Внизу сайта расположены контакты.
                    </p>
                    <img className={s.sectionImg} src={imgPages.HomePageImg} alt="HomePageImg"/>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'news'}>Новости</div>
                    <p>
                        В этом разделе расположены все новости от свежих к старым.
                        Новости выкладывают депутаты. Новости могут быть без изображений, чтобы
                        прочитать новость полностью нужно нажать на кнопку «Читать дальше».
                    </p>
                    <img className={s.sectionImg} src={imgPages.NewsPageImg} alt="NewsPageImg"/>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'voting'}>Голосования</div>
                    <p>
                        В этом разделе расположены голосования, которые
                        выкладывают депутаты для получения информации от жителей. Это могут
                        быть опросы о качестве проделанной работы, об оценке качества
                        инфраструктуры города, голосования о дальнейшей работе и т.д. В
                        голосованиях могут участвовать только авторизированные пользователи.
                    </p>
                    <img className={s.sectionImg} src={imgPages.VotingPageImg} alt="VotingPageImg"/>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'docs'}>Документы</div>
                    <p>
                        Этот раздел содержит документы и приказы принятые администрацией города.
                    </p>
                    <img className={s.sectionImg} src={imgPages.DocumentPageImg} alt="DocumentPageImg"/>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'projects'}>Проекты</div>
                    <p>
                        Этот раздел содержит информацию о грядущих проектах города, что
                        будет в скором времени или над чем работают депутаты.
                    </p>
                    <img className={s.sectionImg} src={imgPages.ProjectPageImg} alt="ProjectPageImg"/>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'histories'}>История</div>
                    <p>
                        В этом разделе хранится история города, значимые события.
                    </p>
                    <img className={s.sectionImg} src={imgPages.HistoryPageImg} alt="HistoryPageImg"/>
                </div>


                <div>
                    <div className={s.sectionTitleName}>ЛИЧНЫЙ КАБИНЕТ</div>
                    <div className={s.sectionTitle} id={'auto'}>Авторизация</div>
                    <p>
                        Авторизация – представление пользователя системе управления сайтом.
                        После ввода логина и пароля система проверяет, есть ли такой пользователь в
                        списке зарегистрированных пользователей, и если да, то открывает доступ к
                        личному кабинету и возможности голосовать в одноименном разделе, если же
                        пользователя нет в системе, нужно пройти регистрацию на сайте.
                    </p>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'regis'}>Регистрация</div>
                    <p>
                        1. Нажать на кнопку «Авторизироватья» в правом вверхнем углу;<br/>
                        2. Нажать на кнопку «Регистрация»;<br/>
                        3. Ввести электронную почту – нужно вводить существующую
                        почту;<br/>
                        4. Ввести ФИО в соответствующие поля;<br/>
                        5. Ввести номер телефона;<br/>
                        6. Ввести пароль два раза в соответсвующие поля;<br/>
                        7. Нажать на кнопку «Зарегистрироваться»;<br/>
                        8. После этого на вашу электронную почту придет письмо с
                        подтверждением, нужно перейти по ссылке, которая содержится в
                        этом письме.<br/>
                        9. Чтобы получить статус депутата, нужно получить этот статус в БД.
                        Для этого нужно сообщить администратору сайта свою почту, на
                        которую регистрировали аккаунт. Администратор саморучно
                        присвоит этому аккаунту статус депутата.<br/>
                        10.После присвоения статуса, нужно перезайти в аккаунт.
                    </p>
                    <img className={s.sectionImg} src={imgPages.CRegistrationImg} alt="CRegistrationImg"/>
                    <img className={s.sectionImg} src={imgPages.CRegistrationBlankImg} alt="CRegistrationBlankImg"/>
                    <img className={s.sectionImg} src={imgPages.CAuthImg} alt="CAuthImg"/>
                    <img className={s.sectionImg} src={imgPages.CEmailLinkImg} alt="CEmailLinkImg"/>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'entry'}>Вход</div>
                    <p>
                        1. Нажать на кнопку «Авторизироватья» в правом вверхнем углу;<br/>
                        2. Ввести логин – почта, которую указывали при регистрации;<br/>
                        3. Пароль – ввести пароль пользователя;<br/>
                        4. Нажать на кнопку «Войти»;<br/>
                        <img className={s.sectionImg} src={imgPages.CEntryLinkImg} alt="CEntryLinkImg"/>
                        <img className={s.sectionImg} src={imgPages.CEntryImg} alt="CEntryImg"/>
                    </p>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'lk_link'}>Переход в личный кабинет</div>
                    <p>
                        Чтобы перейти в личный кабинет пользователя нужно нажать на свое
                        ФИО, которое появится на месте авторизации
                    </p>
                    <img className={s.sectionImg} src={imgPages.CAuthTrueImg} alt="CAuthTrueImg"/>
                    <img className={s.sectionImg} src={imgPages.CAuthListImg} alt="CAuthListImg"/>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'lk'}>Содержание личного кабинета</div>
                    <p>
                        После авторизации на сайте станут доступны дополнительные
                        возможности, такие как просмотр списка полученных обращений,
                        возможность ответа на них, возможность создание и редактирование записей
                        во всех разделах сайта.<br/>
                        Личный кабинет содержит несколько разделов:
                        <ol>
                            <li>«Список часто задаваемых вопросов» – данный
                                раздел нужен для ознакомления на какие вопросы уже даны ответы.</li>
                            <li>«Просмотреть обращения граждан» - нужно для
                                изучения обращений поступивших в думу.</li>
                            <li>«Вопросы и заявки» – раздел дублирует 2 пункт.</li>
                            <li>«Статистика» – раздел отражает статистику о
                                заданных вопросах, в каком районе, в какой сфере, а так же общее
                                количество обращений. Страница состоит из графиков и счетчиков
                                (Рис. 8)</li>
                        </ol>
                    </p>
                    <img className={s.sectionImg} src={imgPages.LkAdmin} alt="LkAdmin"/>
                    <img className={s.sectionImg} src={imgPages.Statistics} alt="Statistics"/>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'letter'}>Ответы на обращения</div>
                    <p>
                        После нажатия на кнопку «Посмотреть обращения граждан» появится
                        страница со всеми обращениями.<br/>
                        Для удобного поиска и фильтрации обращений, на странице есть поиск и фильтры. <br/>
                        Чтобы ответить на сообщение нужно нажать на кнопку «Ответить».<br/>
                        Для редактрования ответа нужно нажать на кнопку «Редактировать».<br/>
                        <img className={s.sectionImg} src={imgPages.Questions} alt="Questions"/>

                        Этапы заполнения формы ответа на обращение:
                        <ol>
                            <li>Выбрать интересующее обращение и нажать на кнопку «ответить»</li>
                            <li>Появится форма ответа. Нужно написать ответ на обращение в
                                соответствующем поле количеством символов не более 250.</li>
                            <li>Можно отметить вопрос как часто задаваемый,
                                тогда вопрос и ответ на него появятся в списке часто задаваемых
                                вопросов;</li>
                            <li>Нажать на кнопку «Отправить», обращение будет
                                отображаться как просмотренное, у человека, который отправил
                                данное обращение, будет отображаться ответ.</li>
                        </ol>
                    </p>
                    <img className={s.sectionImg} src={imgPages.Response} alt="Response"/>
                </div>

                <div>
                    <div className={s.sectionTitleName}>СОЗДАНИЕ И РЕДАКТИРОВАНИЕ ЗАПИСЕЙ</div>
                    <div className={s.sectionTitle} id={'news_admn'}>Новости</div>
                    <p>
                        Чтобы создать новую запись нужно нажать на кнопку «Создать новость»
                        в разделе «Новости». Смысл этого раздела в том, чтобы рассказывать
                        жителям последние события, происходящие в городе.
                        <img className={s.sectionImg} src={imgPages.CreateNews} alt="CreateNews"/>

                        В появившейся форме нужно заполнить все поля:
                        <ol>
                            <li>Заголовок</li>
                            <li>Текст новости</li>
                            <li>Выбрать тип</li>
                            <li>Прикрепить файлы. Фотографии в формате JPEG, видео в формате MP4. Это будет превью новости</li>
                        </ol>
                        <img className={s.sectionImg} src={imgPages.CreateNewsItem} alt="CreateNewsItem"/>
                    </p>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'votings_admn'}>Голосования</div>
                    <p>
                        В соответствующем разделе можно создать и редактировать
                        голосования. Для этого нужно нажать на кнопку «Создать голосование» .
                        Смысл этого раздела в том, чтобы получать информацию от жителей.
                        <img className={s.sectionImg} src={imgPages.CreateVotings} alt="CreateVotings"/>

                        Создание голосования:
                        <ol>
                            <li>Написать тему опроса</li>
                            <li>Написать вопрос</li>
                            <li>Написать варианты ответа. Для добавления нового варианта нужно нажать на кнопку «Добавить вариант ответа», чтобы удалить последний вариант ответа нужно нажать на кнопку «Удалить вариант ответа»</li>
                            <li>В опросе можно задать несколько вопросов, для добавления нового вопроса с вариантами ответов нужно нажать на кнопку «Добавить вопрос», для удаления последнего вопроса использовать кнопку «Удалить вопрос»</li>
                            <li>Опрос можно ограничить по времени</li>
                            <li>В пареметрах можно указать тип вариантов ответа, можно ли выбирать несколько или выбрать только один</li>
                            <li>Нажать на кнопку «Создать опрос»</li>
                            <li>Опрос появится у всех пользователей на странице сайта с голосованиями</li>
                        </ol>
                        <img className={s.sectionImg} src={imgPages.CreateVotingItem} alt="CreateVotingItem"/>
                    </p>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'documents_admn'}>Документы</div>
                    <p>
                        В соответствующем разделе можно создать новую запись. Для этого
                        нужно нажать на кнопку «Создать документ» (Рис. 15). Смысл этого раздела в
                        том, чтобы структурированно показать жителям все законпроекты,
                        документацию, приказы и приложения.
                        <img className={s.sectionImg} src={imgPages.CreateDocs} alt="CreateDocs"/>

                        В появившейся форме нужно заполнить все поля:
                        <ol>
                            <li>Заголовок - будь то приказ/постановление/решение...</li>
                            <li>Заголовок документа(приказа/постановления/решения...)</li>
                            <li>Прикрепить файлы. Фотографии в формате JPEG, видео в формате MP4, файл в формате PDF. Файл будет открыт в «читалке» это позволит не скачивать файл, а сразу его прочитать</li>
                            <li>Нажать на кнопку «Создать»</li>
                            <li>Документ смогут просматривать все пользователи</li>
                        </ol>
                        <img className={s.sectionImg} src={imgPages.CreateDocItem} alt="CreateDocItem"/>
                    </p>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'project_admn'}>Проекты</div>
                    <p>
                        В соответствующем разделе можно создать новую запись. Для этого
                        нужно нажать на кнопку «Создать проект» (Рис. 17). Смысл этого раздела в
                        том, чтобы показать жителям грядущие проекты, которые будут реализованы
                        в скором будущем, или которые находятся в расмотрении.
                        <img className={s.sectionImg} src={imgPages.CreateProjects} alt="CreateProjects"/>

                        В появившейся форме нужно заполнить все поля:
                        <ol>
                            <li>Заголовок</li>
                            <li>Текст</li>
                            <li>Прикрепить файлы. Фотографии в формате JPEG, видео в форматеMP4. Файлы будут выступать в роли превью для записи</li>
                            <li>Нажать на кнопку «Создать»</li>
                            <li>Проекты смогут просматривать все пользователи</li>
                        </ol>
                    </p>
                </div>
                <div>
                    <div className={s.sectionTitle} id={'history_admn'}>История</div>
                    <p>
                        В соответствующем разделе можно создать новую запись. Для этого
                        нужно нажать на кнопку «Создать историю» (Рис. 19). Смысл этого раздела в
                        том, чтобы сохранить историю города, рассказать, что было до и запечатлеть
                        значимые события.
                        <img className={s.sectionImg} src={imgPages.CreateHistory} alt="CreateHistory"/>

                        В появившейся форме нужно заполнить все поля:
                        <ol>
                            <li>Заголовок</li>
                            <li>Текст</li>
                            <li>Прикрепить файлы. Фотографии в формате JPEG, видео в форматеMP4. Файлы будут выступать в роли превью для записи</li>
                            <li>Нажать на кнопку «Создать»</li>
                            <li>Историю смогут просматривать все пользователи</li>
                        </ol>

                    </p>
                </div>
            </div>
        </>
    );
};

export default ManualTextAdmin;
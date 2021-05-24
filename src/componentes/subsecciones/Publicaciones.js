import React, { useState, useEffect } from "react";
import Publicaciones_publicacion from "../subcomponentes/Publicaciones_publicacion";
// import "../../css/publicaciones.css";
import { NavLink } from "react-router-dom";

const Publicaciones = ({ idioma }) => {
  const [texto, setTexto] = useState({});

  useEffect(() => {
    if (idioma) {
      setTexto({
        publicaciones: "Publications",
        Coordinador: "Coordinator:",
        Contacto: "Contact:",
      });
    } else {
      setTexto({
        publicaciones: "Publicaciones",
        Coordinador: "Coordinador:",
        Contacto: "Contacto:",
      });
    }
  }, [idioma]);

  return (
    <div className="animate__animated animate__fadeIn">
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">{texto.publicaciones}</h1>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <NavLink exact to="/Publications">
                      Home
                    </NavLink>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {texto.publicaciones}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="contact">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="contact-map box">
                <div id="map" class="contact-map">
                  <h3 className="anio">2021</h3>
                  <hr />
                  <Publicaciones_publicacion
                    encabezado1="Nondeterministic Finite Automata for Modeling an Ecuadorian Sign Language Interpreter"
                    encabezado2="Guerra, J., Vallejo-Huanga, D., Jaramillo, N., Macas, R. & Díaz, D., 2021, Advances in Artificial Intelligence, Software and Systems Engineering - Proceedings of the AHFE 2020 Virtual Conferences on Software and Systems
                      Engineering, and Artificial Intelligence and Social Computing. Ahram, T. (ed.). Springer, p. 369-376 8 p. (Advances in Intelligent Systems and Computing; vol. 1213 AISC)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />

                  {/* 2020 */}
                  <br />
                  <h3 className="anio">2020</h3>
                  <hr />
                  <Publicaciones_publicacion
                    encabezado1="Cybersecurity attacks on smart home during Covid-19 pandemic"
                    encabezado2="Andrade, R. O., Ortiz-Garces, I. & Cazares, M., jul 2020, Proceedings of the World Conference on Smart Trends in Systems, Security and Sustainability, WS4 2020. Yang, X-S., Fong, S. J., Toapanta, S. M., Andronache, I. & Phillips, N. (eds.). Institute of Electrical and Electronics Engineers Inc., p. 398-404 7 p. 9210363. (Proceedings of the World Conference on Smart Trends in Systems, Security and Sustainability, WS4 2020)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Latent Semantic Index: A Microservices Architecture"
                    encabezado2="Proaño, J., Reinoso, A. & Juma, J., 1 ene 2020, Smart Technologies, Systems and Applications - 1st International Conference, SmartTech-IC 2019, Proceedings. Narváez, F. R., Vallejo, D. F., Morillo, P. A. & Proaño, J. R. (eds.). Springer, p. 142-153 12 p. (Communications in Computer and Information Science; vol. 1154 CCIS)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Psycho web: A machine learning platform for the diagnosis and classification of mental disorders"
                    encabezado2="Morillo, P., Ortega, H., Chauca, D., Proaño, J., Vallejo-Huanga, D. & Cazares, M., 1 ene 2020, Advances in Neuroergonomics and Cognitive Engineering - Proceedings of the AHFE 2019 International Conference on Neuroergonomics and Cognitive Engineering, and the AHFE International Conference on Industrial Cognitive Ergonomics and Engineering Psychology, 2019. Ayaz, H. (ed.). Springer Verlag, p. 399-410 12 p. (Advances in Intelligent Systems and Computing; vol. 953)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="System of recommendation and automatic correction of web accessibility using artificial intelligence"
                    encabezado2="Morillo, P., Chicaiza-Herrera, D. & Vallejo-Huanga, D., 1 ene 2020, Advances in Usability and User Experience - Proceedings of the AHFE 2019 International Conferences on Usability and User Experience, and Human Factors and Assistive Technology. Ahram, T. & Falcão, C. (eds.). Springer Verlag, p. 479-489 11 p. (Advances in Intelligent Systems and Computing; vol. 972)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Virtual rehabilitation platform for left-handed people working in industrial environments"
                    encabezado2="Chantera, M., Morillo, P. & Vallejo-Huanga, D., 2020, Advances in Usability, User Experience, Wearable and Assistive Technology - Proceedings of the AHFE 2020 Virtual Conferences on Usability and User Experience, Human Factors and Assistive Technology, Human Factors and Wearable Technologies, and Virtual Environments and Game Design. Ahram, T. & Falcão, C. (eds.). Springer, p. 900-906 7 p. (Advances in Intelligent Systems and Computing; vol. 1217 AISC)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />
                  {/* 2019 */}
                  <br />
                  <h3 className="anio">2019</h3>
                  <hr />
                  <Publicaciones_publicacion
                    encabezado1="A comprehensive study of IOT for Alzheimer's disease"
                    encabezado2="Andrade, R. O., Yoo, S. G. & Cazares, M. F., 1 ene 2019, Multi Conference on Computer Science and Information Systems, MCCSIS 2019 - Proceedings of the International Conference on e-Health 2019. Macedo, M. & Rodrigues, L. (eds.). IADIS Press, p. 175-182 8 p. (Multi Conference on Computer Science and Information Systems, MCCSIS 2019 - Proceedings of the International Conference on e-Health 2019)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="A dataset of attributes from papers of a machine learning conference"
                    encabezado2="Vallejo-Huanga, D., Morillo, P. & Ferri, C., 1 jun 2019, En: Data in Brief. 24, p. 103836 103836.
                      Resultado de la investigación: Contribución a una revista › Artículo › revisión exhaustiva"
                    encabezado3="Acceso abierto"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Detection of phishing attacks with machine learning techniques in cognitive security architecture"
                    encabezado2="Ortiz Garces, I., Cazares, M. F. & Andrade, R. O., dic 2019, Proceedings - 6th Annual Conference on Computational Science and Computational Intelligence, CSCI 2019. Institute of Electrical and Electronics Engineers Inc., p. 366-370 5 p. 9070902. (Proceedings - 6th Annual Conference on Computational Science and Computational Intelligence, CSCI 2019)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Diseño De Una Arquitectura Heterogénea Para La Gestión Eficiente De Recursos Fpgas En Un Cloud Privado"
                    encabezado2="Proaño Orellana, J. R., 26 jun 2019, Diseño De Una Arquitectura Heterogénea Para La Gestión Eficiente De Recursos Fpgas En Un Cloud Privado. Editorial Abya-Yala"
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Capítulo"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Estimation of people flow in public transportation network through the origin-destination problem for the South-Eastern corridor of Quito city in the smart cities context"
                    encabezado2="Zapata, L. P., Flores, M., Larios, V., Maciel, R. & Antunez, E. A., oct 2019, 5th IEEE International Smart Cities Conference, ISC2 2019. Institute of Electrical and Electronics Engineers Inc., p. 181-186 6 p. 9071778. (5th IEEE International Smart Cities Conference, ISC2 2019)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Fault-tolerant model based on fuzzy control for mobile devices"
                    encabezado2="Vallejo-Huanga, D., Proaño, J., Morillo, P. & Ortega, H., 1 ene 2019, Communications in Computer and Information Science. Botto-Tobar, M., D’Armas, M., Zúñiga Sánchez, M., Zúñiga-Prieto, M. & Pizarro, G. (eds.). Springer Verlag, p. 488-499 12 p. (Communications in Computer and Information Science; vol. 895)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Capítulo › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="How to govern VSE teams: Experiences through a model and case study"
                    encabezado2="Arévalo, R. & Montenegro, C., 1 ene 2019, Communications in Computer and Information Science. Botto-Tobar, M., D’Armas, M., Zúñiga Sánchez, M., Zúñiga-Prieto, M. & Pizarro, G. (eds.). Springer Verlag, p. 220-232 13 p. (Communications in Computer and Information Science; vol. 895)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Capítulo › revisión exhaustiva"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Knowledge Extraction And Improved Data Fusion For Sales Prediction In Local Agricultural Markets"
                    encabezado2="Padilla Arias, W. R., 2 ene 2019, En: Sensors. 19, 2, 286."
                    encabezado3="Resultado de la investigación: Contribución a una revista › Artículo › revisión exhaustiva"
                  />
                  <Publicaciones_publicacion
                    encabezado1="MARRSIDS: Monitoring Assistant to Reduce the Risk of Sudden Infant Death Syndrome"
                    encabezado2="Gallo, X. L., Lechon, S., Mora, S. & Vallejo-Huanga, D., 1 abr 2019, 2019 22nd Symposium on Image, Signal Processing and Artificial Vision, STSIVA 2019 - Conference Proceedings. Institute of Electrical and Electronics Engineers Inc., 8730261. (2019 22nd Symposium on Image, Signal Processing and Artificial Vision, STSIVA 2019 - Conference Proceedings)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Capítulo › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Mentoría: Una Experiencia De Aprendizaje Personalizado"
                    encabezado2="Cazares Zabala, M. F., 28 ago 2019, Mentoría: Una Experiencia De Aprendizaje Personalizado. Editorial Abya-Yala"
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Capítulo"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Modeling the prevalence of respiratory chronic diseases risk using satellite images and environmental data"
                    encabezado2="Alvarez-Mendoza, C. I., Teodoro, A., Ordonez, J., Benitez, A., Freitas, A. & Fonseca, J., 1 ene 2019, Remote Sensing Technologies and Applications in Urban Environments IV. Erbertseder, T., Chrysoulakis, N., Zhang, Y. & Baier, F. (eds.). SPIE, 1115705. (Proceedings of SPIE - The International Society for Optical Engineering; vol. 11157)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Spatial analysis of millennium educational units in Ecuador and its coverage over poverty areas"
                    encabezado2="Navas, G. E., Paz, R. L. & Vaca, F., 1 ene 2019, En: Granja. 30, 2, p. 111-121 11 p."
                    encabezado3="Resultado de la investigación: Contribución a una revista › Artículo › revisión exhaustiva"
                  />

                  <Publicaciones_publicacion
                    encabezado1="Systematic mapping study of architectural trends in Latin America"
                    encabezado2="Alomoto, D., Carrera, A. & Navas, G., 1 ene 2019, Technology Trends - 4th International Conference, CITT 2018, Revised Selected Papers. Botto-Tobar, M., D’Armas, M., Zúñiga Sánchez, M., Zúñiga-Prieto, M. & Pizarro, G. (eds.). Springer Verlag, p. 312-326 15 p. (Communications in Computer and Information Science; vol. 895)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />
                  <br />
                  <h3 className="anio">2018</h3>
                  <hr />
                  <Publicaciones_publicacion
                    encabezado1="Ciencia De Datos. Minería De Datos. Big Data Técnicas Analíticas De Aprendizaje Estadístico. Un Enfoque Práctico."
                    encabezado2="Padilla Arias, W. R., 28 may 2018, Publicaciones Altaria, S.L."
                    encabezado3="Resultado de la investigación: Informe/libro › Libro"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Comparison of satellite remote sensing data in the retrieve of PM10 air pollutant over Quito, Ecuador"
                    encabezado2="Alvarez-Mendoza, C. I., Teodoro, A., Torres, N., Vivanco, V. & Ramirez-Cando, L., 1 ene 2018."
                    encabezado3="Resultado de la investigación: Contribución a una conferencia › Documento"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Data association methodology to improve spatial predictions in alternative marketing circuits in Ecuador"
                    encabezado2="Padilla, W. R. & García, J., 1 ene 2018, En: Computational Intelligence and Neuroscience. 2018, 6587049."
                    encabezado3="Resultado de la investigación: Contribución a una revista › Artículo › revisión exhaustiva"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Eventos Máximos Diarios De Radiación Solar En Tierra Y Extraterrestre Sobre Quito, Ecuador."
                    encabezado2="Serrano Vincenti, M. S., Alvarez Mendoza, C. I. & Navas Ruilova, G. E., 30 abr 2018, Eventos Máximos Diarios De Radiación Solar En Tierra Y Extraterrestre Sobre Quito, Ecuador.. Editorial Abya-Yala"
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Capítulo"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Geoportal Salesiano En El Ecuador Un Camino De La Catedral Al Bazar"
                    encabezado2="Navas Ruilova, G. E., 2 ago 2018, Geoportal Salesiano En El Ecuador Un Camino De La Catedral Al Bazar. Editorial Abya-Yala"
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Capítulo"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Improving Forecasting Using Information Fusion In Local Agricultural Markets"
                    encabezado2="Padilla Arias, W. R., 8 jun 2018, Improving Forecasting Using Information Fusion In Local Agricultural Markets. Herrero, A., Quintian, H., Antonio Saez, J., Corchado, E., de Cos Juez, F. J., Villar, J. R. & de la Cal, E. A. (eds.). Springer Verlag, p. 479-489 11 p. (Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics); vol. 10870 LNAI)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Information Fusion And Machine Learning In Spatial Prediction For Local Agricultural Markets"
                    encabezado2="Padilla Arias, W. R., 20 jun 2018, Information Fusion And Machine Learning In Spatial Prediction For Local Agricultural Markets: The PAAMS Collection - International Workshops of PAAMS 2018, Proceedings. Corchado, J. M., Julian, V., Osaba Icedo, E., Bajo, J., Hoffa-Dabrowska, P., Silveira, R. A., Fernandez, A., Giroux, S., Navarro Martínez, E. M., Mathieu, P., Castro, A. J., Sanchez-Pi, N., del Val, E., Unland, R. & Fuentes-Fernandez, R. (eds.). Springer Verlag, p. 235-246 12 p. (Communications in Computer and Information Science; vol. 887)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Capítulo"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Model Learning and Spatial Data Fusion for Predicting Sales in Local Agricultural Markets"
                    encabezado2="Padilla, W. R., Jesus, G. H. & Molina, J. M., 5 sep 2018, 2018 21st International Conference on Information Fusion, FUSION 2018. Institute of Electrical and Electronics Engineers Inc., p. 2407-2414 8 p. 8455594. (2018 21st International Conference on Information Fusion, FUSION 2018)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Power And Performance Optimization In Fpga-Accelerated Clouds"
                    encabezado2="Proaño Orellana, J. R., 25 sep 2018, En: Concurrency Computation Practice and Experience. 30, 18, e4526."
                    encabezado3="Resultado de la investigación: Contribución a una revista › Artículo › revisión exhaustiva"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Software Development Governance for VSE-SCRUM Teams: Model and Evaluation in a Developing Country"
                    encabezado2="Arevalo Campos, A. R., 6 ene 2018."
                    encabezado3="Resultado de la investigación: Contribución a una conferencia › Documento › revisión exhaustiva"
                  />
                  <br />
                  <h3 className="anio">2017</h3>
                  <hr />
                  <Publicaciones_publicacion
                    encabezado1="ADoCS: Automatic designer of conference schedules"
                    encabezado2="Vallejo, D., Morillo, P. & Ferri, C., 1 ene 2017, 15th Conference of the European Chapter of the Association for Computational Linguistics, EACL 2017 - Proceedings of the Software Demonstrations. Penas, A. & Martins, A. (eds.). Association for Computational Linguistics (ACL), p. 41-44 4 p. (15th Conference of the European Chapter of the Association for Computational Linguistics, EACL 2017 - Proceedings of the Software Demonstrations)."
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Contribución de conferencia › revisión exhaustiva"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Empirical Modeling And Simulation Of An Heterogeneous Cloud Computing Environment"
                    encabezado2="Proaño Orellana, J. R., 6 nov 2017, En: Parallel Computing. 71, 2018"
                    encabezado3="Resultado de la investigación: Contribución a una revista › Artículo › revisión exhaustiva"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Hacia La Construcción De Un Dispositivo De Asistencia Para Personas No Videntes En El Juego De Cuarenta"
                    encabezado2="Ortega Martinez, H. R. & Tufiño Cardenas, R. E., 29 sep 2017, En: Enfoque Ute. 8, 4"
                    encabezado3="Resultado de la investigación: Contribución a una revista › Artículo › revisión exhaustiva"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Migración De Fuentes Sísmicas A Lo Largo Del Cinturón De Fuego Del Pacífico"
                    encabezado2="Alvarez Mendoza, C. I., Lopez Mosquera, A. M. & Villarreal Chuga, E. M., 1 jun 2017, En: La Granja. 25, 1"
                    encabezado3="Resultado de la investigación: Contribución a una revista › Artículo › revisión exhaustiva"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Semi-Supervised Clustering Algorithms For Grouping Scientific Articles"
                    encabezado2="Vallejo Huanga, D. F. & Morillo Alcivar, P. A., 9 jun 2017, En: Procedia Computer Science. 108, 2017"
                    encabezado3="Resultado de la investigación: Contribución a una revista › Artículo › revisión exhaustiva"
                  />

                  <br />
                  <h3 className="anio">2016</h3>
                  <hr />
                  <Publicaciones_publicacion
                    encabezado1="Automatic Identification Of A Playing Card Through Knn Using A Raspberry Pi 3"
                    encabezado2="Tufiño Cardenas, R. E. & Ortega Martinez, H. R., nov 2016."
                    encabezado3="Resultado de la investigación: Contribución a una conferencia › Documento › revisión exhaustiva"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Cialco: Canales alternativos de comercialización"
                    encabezado2="Padilla Arias, W. R., 31 dic 2016, Cialco: Alternative Marketing Channels. Springer International Publishing"
                    encabezado3="Resultado de la investigación: Capítulo del libro/informe/acta de congreso › Capítulo"
                  />

                  <br />
                  <h3 className="anio">2015</h3>
                  <hr />
                  <Publicaciones_publicacion
                    encabezado1="Grid Platform for Medical Federated Queries Supporting Semantic and Visual Annotations"
                    encabezado2="De La Cruz, A., Gualán, R., Guillermo, J., Pérez, W., Ramirez Montalvan, W. A. & Solano-Quinde, L., 22 dic 2015."
                    encabezado3="Resultado de la investigación: Contribución a una conferencia › Documento"
                  />
                  <Publicaciones_publicacion
                    encabezado1="Plataforma para la Búsqueda por Contenido Visual y Semántico de Imágenes Médicas"
                    encabezado2="Ramirez Montalvan, W. A., 31 dic 2015."
                    encabezado3="Resultado de la investigación: Contribución a una conferencia › Documento"
                  />
                  <br />
                  {/* <Publicaciones_publicacion
                      encabezado1=""
                      encabezado2=""
                      encabezado3=""
                    /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
};

export default Publicaciones;

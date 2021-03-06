import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Project_proyectos from "../subcomponentes/Project_proyectos";

import proyecto1 from "../../img/projects/Project_1.png";
import proyecto2 from "../../img/projects/Project_2.png";
import proyecto3 from "../../img/projects/Project_3.png";
import proyecto5 from "../../img/projects/Project_5.png";
import proyecto6 from "../../img/projects/Project_6.png";

import { Accordion, Card, Button } from "react-bootstrap";

const Project = ({ idioma }) => {
  const [texto, setTexto] = useState({});
  useEffect(() => {
    if (idioma) {
      setTexto({
        title: "Projects",
        contact: "Under construction...",
        Coordinador: "Coordinator:",
        Contacto: "Contact:",
        disculpe: "Sorry for the inconvenience.",
        descripciones: {
          uno: "Distributing papers into sessions in scientific conferences is a task consisting in grouping papers with common topics and considering the size restrictions imposed by the conference schedule. This problem can be seen as a semi-supervised clustering of scientific papers based on their features. This paper presents a web tool called ADoCS that solves the problem of configuring conference schedules by an automatic clustering of articles by similarity using a new algorithm considering size constraints.",
          dos: "Ecuador was one of the first Latin American countries to have a proven case of the new coronavirus SARS-CoV-2. The social networks were the media most used by citizens to replicate news about the pandemic, and issue comments about the handling of the health crisis. This article aims to present a web tool for sentiment analys is on Twitter with three different ways to analyze the corpus and polarities: a word-dictionary-based model, a custom trained supervised machine learning model, and an open-source library to process textual data and allows obtaining a polarity metric from a tweet. Then, to define the final polarity of each tweet, an ensemble machine learning model is used for combining the predictions from the three techniques through a hard majority voting ensemble. The web sys-tem was developed with free software tools and is accompanied by visualizations and statistical graphics.",
          tres: "The huge amount of textual information that exists on social networks added by users through comments, has aroused a great interest in companies and research groups, which seek to use this information to identify trends and acceptance levels of brands, products, and services. A technique to know the level of acceptance or rejection of a particular topic, in an automated way, is the Sentiment Analysis. Some informatics tools incorporate this technique, however, there are few contributions to texts in Spanish. It is because of the difficulty of identifying different contexts, dialects, complex grammatical structures, and semantic language variances in each region. This article presents a web tool for the analysis of sentiments in texts written in Spanish that include Ecuadorian dialect or idioms. The tool was developed in R-Shiny with an approach lexicon-based. The tool allows the customization of the lexicons based on context and facilitates the automatic download of tweets according to search criteria such as the place, dates, and topic. To evaluate the effectiveness of the application, their result was compared with two commercial tools (Azure Text Analytics and IBM Watson NLU) and a manual score carried out by a group of people. The tests include the analysis of three corpora created from tweets. The results show the effectiveness of the tool to identify the sentiment polarity, especially in texts that include dialects, colloquial words, and negative expressions.",
          cuatro:
            "This paper presents a stand-alone application for text interpretation to Ecuadorian Sign Language (LSEC), modeled by a nondeterministic finite automaton (NFA), lexical analysis and regular expressions. This application will allow you to interpret a text entered by a user and present it through GIF graphic resources, thus allowing you to establish unidirectional communication between a hearing person and a person with hearing impairment. Our application is developed under MVC architecture. The state machine and lexical analyzer are in the model layer, which will be handled by the controller layer and that will allow the user to receive the inputs and send the outputs through the view layer. We evaluate the effectiveness of the tool using an LSEC dictionary with a total of 275 words and idioms, for different users with hearing impairment, and the results showed that our application is robust and fast.",
          cinco:
            "Natural Language Processing, NLP, is one of the most popular fields of Artificial Intelligence and its applications are diverse. This article presents a recommender system, through a web application, that extracts the lyrics of a song entered in audio format and uses NLP techniques to process the textual corpus of the lyrics and recommend a title for the song. The level of effectiveness of the system was analyzed, measuring the percentage of similarity between the ground truth, which is the original title of the song, and our recommendation. For the experiments, a dataset of 30 songs was used divided into three taxonomies, small, medium, and large, that change according to the length of tokens of the original title. The results show an accuracy of 70% for small titles and 20% for medium and long titles. It is also shown that the web tool is enabled to formulate control of lexical content in songs since it does not use the original title of the song as input.",
          seis: "Cancer is one of the diseases with the highest incidence in humans and several drugs have been developed to combat it and alleviate its symptoms. Most of these drugs are thermolabile, i.e., require special temperature conditions for their conservation. On the other hand, Machine Learning algorithms provide computers with the ability to identify a pattern through the use of data and are frequently used to make predictions. This article presents a web application with supervised machine learning algorithms for predicting the deterioration of thermolabile cancer drugs. For the algorithm's training, a dataset from an Ecuadorian pharmaceutical distribution company was used, with temperature parameters measured during the distribution of the drugs in the cold chain. The results showed that, for the test set, the Artificial Neural Network algorithm had the best performance with an F1-score of 67% and an AUC of 85%, while the Na??ve Bayes algorithm was the worst performer with an F1-score of 40% and AUC of 58%. In addition, the operation of the web application and its predictive capacity was verified, through tests with three scenarios that characterize drug shipments with taxonomies derived from the minimum, average, and maximum statistics of the dataset.",
        },
        mas_informacion: "More information: ",
      });
    } else {
      setTexto({
        title: "Proyectos",
        contact: "En construcci??n...",
        Coordinador: "Coordinador:",
        Contacto: "Contacto:",
        disculpe: "Disculpe las molestias.",
        descripciones: {
          uno: "La distribuci??n de las ponencias en las sesiones de los congresos cient??ficos es una tarea que consiste en agrupar las ponencias con temas comunes y tener en cuenta las restricciones de tama??o impuestas por el programa del congreso. Este problema puede verse como una agrupaci??n semi-supervisada de ponencias cient??ficas basada en sus caracter??sticas. Este trabajo presenta una herramienta web llamada ADoCS que resuelve el problema de la configuraci??n de los horarios de las conferencias mediante una agrupaci??n autom??tica de art??culos por similitud utilizando un nuevo algoritmo que considera las restricciones de tama??o.",
          dos: "Ecuador fue uno de los primeros pa??ses latinoamericanos en tener un caso comprobado del nuevo coronavirus SARS-CoV-2. Las redes sociales fueron el medio m??s utilizado por los ciudadanos para replicar las noticias sobre la pandemia, y emitir comentarios sobre el manejo de la crisis sanitaria. El objetivo de este art??culo es presentar una herramienta web para el an??lisis de sentimientos en Twitter con tres formas diferentes de analizar el corpus y las polaridades: un modelo basado en un diccionario de palabras, un modelo de aprendizaje autom??tico supervisado entrenado a medida y una biblioteca de c??digo abierto que procesa los datos textuales y permite obtener una m??trica de polaridad a partir de un tweet. A continuaci??n, para definir la polaridad final de cada tuit, se utiliza un modelo de aprendizaje autom??tico conjunto para combinar las predicciones de las tres t??cnicas mediante un conjunto de votaci??n por mayor??a dura. El sistema web se ha desarrollado con herramientas de software libre y se acompa??a de visualizaciones y gr??ficos estad??sticos.",
          tres: "La enorme cantidad de informaci??n textual que existe en las redes sociales a??adida por los usuarios a trav??s de los comentarios, ha despertado un gran inter??s en empresas y grupos de investigaci??n, que buscan utilizar esta informaci??n para identificar tendencias y niveles de aceptaci??n de marcas, productos y servicios. Una t??cnica para conocer el nivel de aceptaci??n o rechazo de un determinado tema, de forma automatizada, es el An??lisis de Sentimiento. Algunas herramientas inform??ticas incorporan esta t??cnica, sin embargo, hay pocas aportaciones a textos en espa??ol. Esto se debe a la dificultad de identificar los diferentes contextos, dialectos, estructuras gramaticales complejas y variantes sem??nticas del lenguaje en cada regi??n. Este art??culo presenta una herramienta web para el an??lisis de sentimientos en textos escritos en espa??ol que incluyen dialectos o modismos ecuatorianos. La herramienta fue desarrollada en R-Shiny con un enfoque basado en el l??xico. La herramienta permite la personalizaci??n de los l??xicos en funci??n del contexto y facilita la descarga autom??tica de tuits seg??n criterios de b??squeda como el lugar, las fechas y el tema. Para evaluar la eficacia de la aplicaci??n, su resultado se compar?? con dos herramientas comerciales (Azure Text Analytics e IBM Watson NLU) y con una puntuaci??n manual realizada por un grupo de personas. Las pruebas incluyen el an??lisis de tres corpus creados a partir de tuits. Los resultados muestran la eficacia de la herramienta para identificar la polaridad del sentimiento, especialmente en textos que incluyen dialectos, palabras coloquiales y expresiones negativas.",
          cuatro:
            "Este trabajo presenta una aplicaci??n aut??noma para la interpretaci??n de textos a la Lengua de Signos Ecuatoriana (LSEC), modelada mediante un aut??mata finito no determinista (NFA), an??lisis l??xico y expresiones regulares. Esta aplicaci??n permitir?? interpretar un texto introducido por un usuario y presentarlo a trav??s de recursos gr??ficos GIF, permitiendo as?? establecer una comunicaci??n unidireccional entre una persona oyente y una persona con discapacidad auditiva. Nuestra aplicaci??n est?? desarrollada bajo arquitectura MVC. La m??quina de estados y el analizador l??xico se encuentran en la capa de modelo, que ser?? manejada por la capa de controlador y que permitir?? al usuario recibir las entradas y enviar las salidas a trav??s de la capa de vista. Evaluamos la eficacia de la herramienta utilizando un diccionario LSEC con un total de 275 palabras y frases hechas, para diferentes usuarios con discapacidad auditiva, y los resultados mostraron que nuestra aplicaci??n es robusta y r??pida.",
          cinco:
            "El Procesamiento del Lenguaje Natural, PLN, es uno de los campos m??s populares de la Inteligencia Artificial y sus aplicaciones son diversas. Este art??culo presenta un sistema recomendador, a trav??s de una aplicaci??n web, que extrae la letra de una canci??n introducida en formato de audio y utiliza t??cnicas de PLN para procesar el corpus textual de la letra y recomendar un t??tulo para la canci??n. Se analiz?? el nivel de eficacia del sistema, midiendo el porcentaje de similitud entre la verdad b??sica, que es el t??tulo original de la canci??n, y nuestra recomendaci??n. Para los experimentos se utiliz?? un conjunto de datos de 30 canciones divididas en tres taxonom??as, peque??a, mediana y grande, que cambian seg??n la longitud de los tokens del t??tulo original. Los resultados muestran una precisi??n del 70% para los t??tulos peque??os y del 20% para los t??tulos medianos y largos. Tambi??n se demuestra que la herramienta web est?? capacitada para formular el control del contenido l??xico de las canciones, ya que no utiliza el t??tulo original de la canci??n como entrada.",
          seis: "El c??ncer es una de las enfermedades con mayor incidencia en el ser humano y se han desarrollado varios f??rmacos para combatirlo y aliviar sus s??ntomas. La mayor??a de estos f??rmacos son termol??biles, es decir, requieren condiciones especiales de temperatura para su conservaci??n. Por otro lado, los algoritmos de Machine Learning proporcionan a los ordenadores la capacidad de identificar un patr??n mediante el uso de datos y se utilizan frecuentemente para realizar predicciones. Este art??culo presenta una aplicaci??n web con algoritmos de aprendizaje autom??tico supervisado para la predicci??n del deterioro de los medicamentos oncol??gicos termol??biles. Para el entrenamiento del algoritmo se utiliz?? un conjunto de datos de una empresa ecuatoriana de distribuci??n farmac??utica, con par??metros de temperatura medidos durante la distribuci??n de los medicamentos en la cadena de fr??o. Los resultados mostraron que, para el conjunto de pruebas, el algoritmo de la Red Neural Artificial tuvo el mejor rendimiento con una puntuaci??n F1 del 67% y un AUC del 85%, mientras que el algoritmo Na??ve Bayes fue el de peor rendimiento con una puntuaci??n F1 del 40% y un AUC del 58%. Adem??s, se verific?? el funcionamiento de la aplicaci??n web y su capacidad de predicci??n, a trav??s de pruebas con tres escenarios que caracterizan los env??os de medicamentos con taxonom??as derivadas de las estad??sticas m??nimas, medias y m??ximas del conjunto de datos.",
        },
        mas_informacion: "M??s informaci??n: ",
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
                <h1 class="title-single">{texto.title}</h1>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <NavLink exact to="/Projects">
                      Home
                    </NavLink>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {texto.title}
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
                <div id="map" class="contact-map texto-justificado">
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          ADoCS: Automatic Designer of Conference Schedules
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <Project_proyectos
                            title="ADoCS: Automatic Designer of Conference Schedules"
                            abstract={texto.descripciones?.uno}
                            link="https://www.aclweb.org/anthology/E17-3011.pdf"
                            foto={proyecto1}
                            app="https://ceferra.shinyapps.io/ADoCS/"
                            mas={texto.mas_informacion}
                          />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                          Sentiment Analysis in Contrast to Official Data During the COVID ??? 19 Pandemic in Ecuador
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <Project_proyectos
                            title="Sentiment Analysis in Contrast to Official Data During the COVID ??? 19 Pandemic in Ecuador"
                            abstract={texto.descripciones?.dos}
                            link="https://analisis-sentimiento.herokuapp.com/"
                            foto={proyecto2}
                            app="https://analisis-sentimiento.herokuapp.com/"
                            mas={texto.mas_informacion}
                          />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                          Sentiment Analysis Tool for Spanish Tweets in the Ecuadorian Context
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <Project_proyectos
                            title="Sentiment Analysis Tool for Spanish Tweets in the Ecuadorian Context"
                            abstract={texto.descripciones?.tres}
                            link="https://dl.acm.org/doi/10.1145/3446132.3446424"
                            foto={proyecto3}
                            app="https://sentimentalupstool.shinyapps.io/SentimentAnalysisTrend/"
                            mas={texto.mas_informacion}
                          />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                          AuTGeLy: Automatic Title Generator based on Song Lyrics Extractions
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          <Project_proyectos
                            title="AuTGeLy: Automatic Title Generator based on Song Lyrics Extractions"
                            abstract={texto.descripciones?.cinco}
                            link="https://title-song-recommender.herokuapp.com/"
                            foto={proyecto5}
                            app="https://title-song-recommender.herokuapp.com/"
                            mas={texto.mas_informacion}
                          />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                          Prediction of Anticancer Drug Deterioration with Machine Learning Algorithms
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>
                          <Project_proyectos
                            title="Prediction of Anticancer Drug Deterioration with Machine Learning Algorithms"
                            abstract={texto.descripciones?.seis}
                            link="https://acardenas-sla-algorithms.shinyapps.io/ML_Algorithms-Thermo_Dataset/"
                            foto={proyecto6}
                            app="https://acardenas-sla-algorithms.shinyapps.io/ML_Algorithms-Thermo_Dataset/"
                            mas={texto.mas_informacion}
                          />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                          Nondeterministic Finite Automata for Modeling an Ecuadorian Sign Language Interpreter
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="5">
                        <Card.Body>
                          <Project_proyectos
                            title="Nondeterministic Finite Automata for Modeling an Ecuadorian Sign Language Interpreter"
                            abstract={texto.descripciones?.cuatro}
                            link="https://link.springer.com/chapter/10.1007%2F978-3-030-51328-3_51"
                            foto={""}
                            app="https://github.com/dievalhu/LSEC_Ecuadorian_Sign_Language/tree/master/src/model"
                            mas={texto.mas_informacion}
                          />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <br />
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

export default Project;

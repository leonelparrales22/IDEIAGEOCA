import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Project_proyectos from "../subcomponentes/Project_proyectos";

import proyecto1 from "../../img/projects/Project_1.png";
import proyecto2 from "../../img/projects/Project_2.png";
import proyecto3 from "../../img/projects/Project_3.png";

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
        },
        mas_informacion: "More information: ",
      });
    } else {
      setTexto({
        title: "Proyectos",
        contact: "En construcción...",
        Coordinador: "Coordinador:",
        Contacto: "Contacto:",
        disculpe: "Disculpe las molestias.",
        descripciones: {
          uno: "La distribución de las ponencias en las sesiones de los congresos científicos es una tarea que consiste en agrupar las ponencias con temas comunes y tener en cuenta las restricciones de tamaño impuestas por el programa del congreso. Este problema puede verse como una agrupación semi-supervisada de ponencias científicas basada en sus características. Este trabajo presenta una herramienta web llamada ADoCS que resuelve el problema de la configuración de los horarios de las conferencias mediante una agrupación automática de artículos por similitud utilizando un nuevo algoritmo que considera las restricciones de tamaño.",
          dos: "Ecuador fue uno de los primeros países latinoamericanos en tener un caso comprobado del nuevo coronavirus SARS-CoV-2. Las redes sociales fueron el medio más utilizado por los ciudadanos para replicar las noticias sobre la pandemia, y emitir comentarios sobre el manejo de la crisis sanitaria. El objetivo de este artículo es presentar una herramienta web para el análisis de sentimientos en Twitter con tres formas diferentes de analizar el corpus y las polaridades: un modelo basado en un diccionario de palabras, un modelo de aprendizaje automático supervisado entrenado a medida y una biblioteca de código abierto que procesa los datos textuales y permite obtener una métrica de polaridad a partir de un tweet. A continuación, para definir la polaridad final de cada tuit, se utiliza un modelo de aprendizaje automático conjunto para combinar las predicciones de las tres técnicas mediante un conjunto de votación por mayoría dura. El sistema web se ha desarrollado con herramientas de software libre y se acompaña de visualizaciones y gráficos estadísticos.",
          tres: "La enorme cantidad de información textual que existe en las redes sociales añadida por los usuarios a través de los comentarios, ha despertado un gran interés en empresas y grupos de investigación, que buscan utilizar esta información para identificar tendencias y niveles de aceptación de marcas, productos y servicios. Una técnica para conocer el nivel de aceptación o rechazo de un determinado tema, de forma automatizada, es el Análisis de Sentimiento. Algunas herramientas informáticas incorporan esta técnica, sin embargo, hay pocas aportaciones a textos en español. Esto se debe a la dificultad de identificar los diferentes contextos, dialectos, estructuras gramaticales complejas y variantes semánticas del lenguaje en cada región. Este artículo presenta una herramienta web para el análisis de sentimientos en textos escritos en español que incluyen dialectos o modismos ecuatorianos. La herramienta fue desarrollada en R-Shiny con un enfoque basado en el léxico. La herramienta permite la personalización de los léxicos en función del contexto y facilita la descarga automática de tuits según criterios de búsqueda como el lugar, las fechas y el tema. Para evaluar la eficacia de la aplicación, su resultado se comparó con dos herramientas comerciales (Azure Text Analytics e IBM Watson NLU) y con una puntuación manual realizada por un grupo de personas. Las pruebas incluyen el análisis de tres corpus creados a partir de tuits. Los resultados muestran la eficacia de la herramienta para identificar la polaridad del sentimiento, especialmente en textos que incluyen dialectos, palabras coloquiales y expresiones negativas.",
          cuatro:
            "Este trabajo presenta una aplicación autónoma para la interpretación de textos a la Lengua de Signos Ecuatoriana (LSEC), modelada mediante un autómata finito no determinista (NFA), análisis léxico y expresiones regulares. Esta aplicación permitirá interpretar un texto introducido por un usuario y presentarlo a través de recursos gráficos GIF, permitiendo así establecer una comunicación unidireccional entre una persona oyente y una persona con discapacidad auditiva. Nuestra aplicación está desarrollada bajo arquitectura MVC. La máquina de estados y el analizador léxico se encuentran en la capa de modelo, que será manejada por la capa de controlador y que permitirá al usuario recibir las entradas y enviar las salidas a través de la capa de vista. Evaluamos la eficacia de la herramienta utilizando un diccionario LSEC con un total de 275 palabras y frases hechas, para diferentes usuarios con discapacidad auditiva, y los resultados mostraron que nuestra aplicación es robusta y rápida.",
        },
        mas_informacion: "Más información: ",
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
                          Sentiment Analysis in Contrast to Official Data During the COVID – 19 Pandemic in Ecuador
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <Project_proyectos
                            title="Sentiment Analysis in Contrast to Official Data During the COVID – 19 Pandemic in Ecuador"
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
                          Nondeterministic Finite Automata for Modeling an Ecuadorian Sign Language Interpreter
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
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

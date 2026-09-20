// Capacitación Cristiana Bíblica - Datos del Curso
// Compilado por Pastor Esteban West

export interface SeccionLeccion {
  titulo: string;
  contenido: string;
}

export interface EjemploPractico {
  titulo: string;
  contenido: string;
}

export interface RecursoMultimedia {
  tipo: 'audio' | 'video' | 'documento' | 'infografia' | 'evaluacion' | 'diapositivas';
  titulo: string;
  descripcion: string;
  url?: string;
}

export interface EnriquecimientoLeccion {
  ejemplos?: EjemploPractico[];
  recursos?: RecursoMultimedia[];
}

export interface Leccion {
  id: string;
  titulo: string;
  subtitulo: string;
  versiculo: string;
  ministro: string;
  introduccion: string;
  secciones: SeccionLeccion[];
  reflexion: string;
}

export interface Nivel {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  color: string;
  colorSolid: string;
  icono: 'Eye' | 'BookOpen' | 'HeartPulse' | 'Church';
  imagen: string;
  lecciones: Leccion[];
}

export interface RecursoGeneral {
  tipo: 'documento' | 'audio' | 'video' | 'carpeta';
  titulo: string;
  descripcion: string;
  url: string;
}

export interface Curso {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imagenHero: string;
  niveles: Nivel[];
}

export const cursoData: Curso = {
  "titulo": "Capacitación Cristiana Bíblica",
  "subtitulo": "Un viaje de transformación del alma",
  "descripcion": "Un programa formativo que te guía desde el despertar ante los sistemas del mundo, hasta el descubrimiento de tu propósito y ministerio en Dios. Cuatro niveles de profundidad creciente, con contenido basado en las enseñanzas de ministros y expertos cristianos de renombre.",
  "imagenHero": "https://media.base44.com/images/public/6aae368f66d1339fdac61628/04cbbebf6_generated_image.png",
  "niveles": [
    {
      "id": 1,
      "titulo": "Despertando a la Realidad",
      "subtitulo": "La Matrix y los sistemas del mundo.",
      "descripcion": "Abrimos los ojos ante los conceptos de vida que el mundo ha implantado en nuestra mente. Analizamos los sistemas, filosofías y creencias que, lejos de llevar al hombre a su salvación, lo conducen a una sutil autodestrucción.",
      "color": "from-cyan-500 to-blue-700",
      "colorSolid": "#0ea5e9",
      "icono": "Eye",
      "imagen": "https://media.base44.com/images/public/6aae368f66d1339fdac61628/aa925a133_generated_image.png",
      "lecciones": [
        {
          "id": "1-1",
          "titulo": "La Matrix: Conceptos de vida implantados",
          "subtitulo": "El sistema global y sus verdades invisibles",
          "versiculo": "No améis al mundo, ni las cosas que están en el mundo. — 1 Juan 2:15",
          "ministro": "Armando Alducín",
          "introduccion": "Existe un sistema global de engaños que moldea silenciosamente nuestra forma de pensar, sentir y vivir. Las grandes corporaciones, los intereses económicos, la publicidad y el consumismo apuntan a una sutil autodestrucción del hombre en lugar de su salvación. El apóstol Juan nos advierte sobre el 'mundo' y sus sistemas, y el pastor Armando Alducín ha denunciado con claridad cómo las ideologías modernas esclavizan a las masas sin que estas lo perciban.",
          "secciones": [
            {
              "titulo": "¿Qué es la Matrix espiritual?",
              "contenido": "La Matrix no es solo una película; es una metáfora poderosa de cómo el sistema mundial opera. Es un conjunto de ideas, valores y prácticas que se presentan como 'normales' o 'deseables', pero que en realidad alejan al hombre del plan de Dios. Incluye los intereses de las grandes corporaciones, el consumismo desmedido, la publicidad que crea necesidades artificiales, y los objetivos de empresas que priorizan la ganancia sobre el bienestar humano. Las farmacéuticas, por ejemplo, no siempre buscan la salud real sino la dependencia del paciente. Todo apunta a una sutil autodestrucción del hombre en vez de su salvación."
            },
            {
              "titulo": "Los intereses detrás del sistema",
              "contenido": "Dante Gebel ha señalado cómo la cultura del espectáculo y los medios moldean los valores de la juventud. Detrás de cada tendencia hay intereses económicos y políticos. El sistema necesita consumidores insatisfechos, personas que nunca tengan suficiente, que vivan comparándose y persiguiendo una felicidad que nunca llega. Este es el corazón del consumismo: hacerte creer que necesitas algo externo para ser completo, cuando la verdadera plenitud solo se halla en Dios."
            },
            {
              "titulo": "El llamado a despertar",
              "contenido": "Jesús dijo: 'Conoceréis la verdad, y la verdad os hará libres' (Juan 8:32). El primer paso de toda transformación es el despertar. Reconocer que hemos sido programados por el mundo es el inicio de la libertad. No se trata de vivir con miedo o paranoia, sino de desarrollar discernimiento espiritual para no ser arrastrados por corrientes que se oponen al diseño de Dios para el hombre."
            }
          ],
          "reflexion": "¿Qué conceptos de vida he adoptado del mundo sin cuestionarlos? ¿Vivo para consumir o consumo para vivir? Pídele a Dios sabiduría para discernir qué en tu vida proviene de Él y qué proviene del sistema."
        },
        {
          "id": "1-2",
          "titulo": "Falsos conocimientos científicos",
          "subtitulo": "Creencias presentadas como ciencia comprobada",
          "versiculo": "La ciencia falsamente llamada ciencia — 1 Timoteo 6:20",
          "ministro": "Guillermo Maldonado",
          "introduccion": "No todo lo que se enseña como 'ciencia' está verdaderamente comprobado. Muchas creencias se presentan como hechos científicos irrefutables cuando en realidad son hipótesis no demostradas al 100%. El cristiano debe desarrollar pensamiento crítico y no aceptar pasivamente todo lo que se etiqueta como 'científico'.",
          "secciones": [
            {
              "titulo": "Ciencia vs. cientificismo",
              "contenido": "La ciencia verdadera es un don de Dios; es la búsqueda honesta del conocimiento mediante la observación y la experimentación. El cientificismo, en cambio, es una ideología que eleva la ciencia a religión, descartando todo lo que no puede medirse en un laboratorio. El apóstol Pablo advirtió a Timoteo sobre la 'ciencia falsamente llamada ciencia'. Guillermo Maldonado enseña que cuando la ciencia se convierte en dogma que excluye a Dios, deja de ser ciencia y se transforma en fe ciega."
            },
            {
              "titulo": "Teorías presentadas como hechos",
              "contenido": "Existen teorías que se enseñan en escuelas y universidades como si fueran verdades absolutas, cuando en realidad son hipótesis con importantes vacíos. El origen de la vida, la macroevolución, y ciertas narrativas sobre el origen del universo se presentan como hechos comprobados cuando muchas de sus premisas no han sido demostradas científicamente. El cristiano no rechaza la ciencia, sino que la valora en su justa medida y reconoce sus límites."
            },
            {
              "titulo": "El diseño inteligente",
              "contenido": "Cada día más científicos reconocen la evidencia de un diseño inteligente en la naturaleza. La complejidad irreductible de sistemas biológicos, el ADN como código de información, y la afinación del universo apuntan a un Diseñador. La ciencia, bien entendida, no contradice la fe sino que la confirma. Como dijo Kepler: 'La ciencia es pensar los pensamientos de Dios después de Él.'"
            }
          ],
          "reflexion": "¿He aceptado ideas como verdades absolutas solo porque vinieron de una 'autoridad científica'? Desarrolla el hábito de cuestionar, investigar y buscar a Dios como fuente última de toda verdad."
        },
        {
          "id": "1-3",
          "titulo": "Movimientos de moda como propuesta de vida",
          "subtitulo": "Consumismo, música, Hollywood y modelos falsos",
          "versiculo": "No os conforméis a este siglo, sino transformaos — Romanos 12:2",
          "ministro": "Dante Gebel",
          "introduccion": "La cultura de la moda propone modelos de vida que se presentan como ideales a seguir: el consumismo, la música, Hollywood y diversos patrones de conducta. Pero detrás de muchos de estos modelos hay vacío, adicción y frustración. Dante Gebel, conocido por su capacidad de conectar con la juventud, ha advertido cómo estos patrones moldean identidades rotas.",
          "secciones": [
            {
              "titulo": "El consumismo como religión",
              "contenido": "El consumismo no es solo comprar cosas; es una cosmovisión que enseña que el valor de una persona se mide por lo que posee. Crea ansiedad, envidia y deudas. La Biblia advierte: 'La codicia es idolatría' (Colosenses 3:5). El consumismo convierte los bienes en ídolos y a las personas en consumidores perpetuos, nunca satisfechos."
            },
            {
              "titulo": "La música y los mensajes subliminares",
              "contenido": "La música no es neutral; lleva mensajes, valores y emociones. Muchos géneros populares promueven la violencia, la hipersexualización, el materialismo y el desprecio por la vida. No se trata de demonizar toda la música, sino de discernir qué mensajes alimentan el alma y cuáles la envenenan. 'Todo me es lícito, mas no todo conviene' (1 Corintios 6:12)."
            },
            {
              "titulo": "Hollywood y los modelos de vida falsos",
              "contenido": "Hollywood proyecta vidas que parecen perfectas pero que en la realidad están llenas de divorcios, adicciones y depresión. Los ídolos del entretenimiento son modelos rotos presentados como ideales. Imitarlos es construir sobre arena. Jesús nos invita a construir sobre la roca de Su palabra (Mateo 7:24-27)."
            }
          ],
          "reflexion": "¿Qué modelos de vida estoy imitando? ¿Provienen de Dios o de la cultura de la moda? Identifica un patrón de vida que necesitas abandonar y reemplázalo por un principio bíblico."
        },
        {
          "id": "1-4",
          "titulo": "Movimientos políticos globales y sus filosofías",
          "subtitulo": "Propuestas sociales que esclavizan en lugar de liberar",
          "versiculo": "Mi reino no es de este mundo — Juan 18:36",
          "ministro": "Armando Alducín",
          "introduccion": "Diversos movimientos políticos globales se presentan como soluciones a los problemas de la sociedad, pero en la práctica no han resuelto los problemas reales y, muchas veces, han esclavizado más a las masas, empujándolas a seguir patrones ciegos que llevan al fanatismo. Armando Alducín ha explicado con claridad las ideologías detrás de estos movimientos.",
          "secciones": [
            {
              "titulo": "Ideologías que prometen y no cumplen",
              "contenido": "A lo largo de la historia, diversas ideologías políticas han prometido utopías: igualdad perfecta, libertad absoluta, prosperidad para todos. Pero ninguna ha logrado su promesa. El comunismo, el capitalismo salvaje, el relativismo y otros ismos han generado más sufrimiento que bienestar. La razón es simple: todo sistema que ignora la naturaleza pecaminosa del hombre está condenado al fracaso."
            },
            {
              "titulo": "El fanatismo político como religión secular",
              "contenido": "Cuando la política se convierte en la esperanza última, se transforma en religión. Los líderes políticos se vuelven mesías y sus seguidores, fanáticos. La Biblia nos enseña que ningún sistema humano puede salvar al hombre; solo el Reino de Dios trae justicia verdadera. Nuestra esperanza no está en un partido, sino en el Rey de reyes."
            },
            {
              "titulo": "La responsabilidad del cristiano",
              "contenido": "El cristiano no se desentiende de la política, pero tampoco la idolatra. Ejerce su ciudadanía con sabiduría, vota con conciencia, ora por los gobernantes (1 Timoteo 2:1-2) y sabe que su ciudadanía final está en los cielos (Filipenses 3:20). No permite que ninguna ideología tome el lugar que solo Dios debe ocupar en su corazón."
            }
          ],
          "reflexion": "¿He puesto mi esperanza en un sistema político, un líder o una ideología? Recuerda que solo el Reino de Dios es eterno. Ora por tus gobernantes y mantén tu corazón libre de fanatismos."
        },
        {
          "id": "1-5",
          "titulo": "Filosofías de vida egoístas",
          "subtitulo": "El yo como centro del universo",
          "versiculo": "Nada hagáis por contienda o por vanagloria; antes bien con humildad, estimando cada uno a los demás como superiores a él mismo — Filipenses 2:3",
          "ministro": "Bernardo Stamateas",
          "introduccion": "Vivimos en la era del 'yo'. Filosofías como el individualismo extremo, el narcisismo y el relativismo moral colocan al ser humano en el centro de todo. Bernardo Stamateas, experto en sanidad interior, ha mostrado cómo el egoísmo destruye relaciones y empobrece el alma.",
          "secciones": [
            {
              "titulo": "El individualismo como enfermedad del alma",
              "contenido": "La filosofía 'yo primero, yo siempre, yo sobre todo' parece empoderar, pero en realidad aísla. El ser humano fue creado para la comunión, no para el aislamiento. Cuando todo gira en torno al propio yo, las relaciones se rompen, la empatía desaparece y la soledad se instala. Jesús enseñó exactamente lo contrario: 'El que quiera ser el mayor, que sea el siervo de todos' (Marcos 9:35)."
            },
            {
              "titulo": "El relativismo moral",
              "contenido": "El relativismo enseña que cada uno tiene 'su verdad' y que no existe una verdad absoluta. Esto suena tolerante, pero en la práctica destruye todo marco de referencia. Si nada es verdad, nada es mentira; si todo vale, nada tiene valor. La Biblia, en cambio, presenta una verdad objetiva y amorosa: la persona y las enseñanzas de Jesucristo."
            },
            {
              "titulo": "El camino de la entrega",
              "contenido": "Jesús dijo: 'El que halla su vida, la perderá; y el que por causa de mí pierde su vida, la hallará' (Mateo 10:39). La verdadera vida no se encuentra aferrándose al yo, sino entregándolo a Dios y a los demás. La paradoja del Evangelio es que solo perdiéndonos en amor nos encontramos verdaderamente."
            }
          ],
          "reflexion": "¿En qué áreas de mi vida me he puesto a mí mismo en el centro? Pídele a Dios un corazón humilde y servicial, que mire a los demás con amor genuino."
        },
        {
          "id": "1-6",
          "titulo": "Movimientos religiosos y sus intereses",
          "subtitulo": "Cuando la religión se vuelve negocio",
          "versiculo": "Mi casa será llamada casa de oración, mas vosotros la habéis hecho cueva de ladrones — Mateo 21:13",
          "ministro": "Luis Palau",
          "introduccion": "No todo lo que se llama religión viene de Dios. Muchos movimientos religiosos tienen detrás intereses políticos y económicos que distorsionan el mensaje del Evangelio. Luis Palau, evangelista de millones, siempre enfatizó un Evangelio centrado en Cristo y no en los intereses de los hombres.",
          "secciones": [
            {
              "titulo": "La religión como instrumento de control",
              "contenido": "A lo largo de la historia, la religión ha sido usada para controlar, manipular y explotar. Algunos líderes religiosos se enriquecen a costa de la fe de los demás, prometen bendiciones a cambio de dinero, y usan el miedo para mantener a las personas sumisas. Jesús confrontó duramente a los líderes religiosos de su época por cargar al pueblo con pesos imposibles mientras ellos vivían en lujo (Mateo 23:4)."
            },
            {
              "titulo": "El Evangelio vs. el negocio religioso",
              "contenido": "El verdadero Evangelio no se vende ni se compra. La salvación es un regalo gratuito (Efesios 2:8-9). Cuando una religión reduce la fe a transacciones económicas, traiciona el corazón del mensaje de Cristo. Luis Palau predicó siempre un Evangelio puro, sin manipulación, centrado en el amor de Dios manifestado en la cruz."
            },
            {
              "titulo": "Discernimiento espiritual",
              "contenido": "El cristiano debe ejercer discernimiento. No todo lo que se presenta como 'de Dios' lo es. Jesús advirtió: 'Guardaos de los falsos profetas, que vienen a vosotros con vestidos de ovejas, pero por dentro son lobos rapaces' (Mateo 7:15). El fruto de un ministerio genuino es amor, humildad, verdad y transformación de vidas, no enriquecimiento personal."
            }
          ],
          "reflexion": "¿He puesto mi confianza en una institución religiosa o en Cristo mismo? Examina con honestidad si tu fe está centrada en Jesús o en los intereses de los hombres."
        },
        {
          "id": "1-7",
          "titulo": "Creencias en lo oculto",
          "subtitulo": "Espiritismo, astrología y poderes oscuros",
          "versiculo": "No se hallará en ti quien consulte a los muertos, ni adivino, ni agorero — Deuteronomio 18:10",
          "ministro": "Guillermo Maldonado",
          "introduccion": "El ocultismo se ha popularizado enormemente: horóscopos, cartas del tarot, consultas a mediums, hechicería, y prácticas espirituales de origen oscuro. La Biblia es clara y contundente al respecto. Guillermo Maldonado ha enseñado extensamente sobre la realidad del mundo espiritual y los peligros del ocultismo.",
          "secciones": [
            {
              "titulo": "La realidad del mundo espiritual",
              "contenido": "La Biblia enseña que existe un mundo espiritual real, con ángeles y demonios, y que las prácticas ocultas abren puertas a influencias espirituales destructivas. No es superstición; es una realidad que Dios toma muy en serio. Las prácticas ocultas son una búsqueda de poder y conocimiento fuera de Dios, y eso tiene consecuencias espirituales profundas."
            },
            {
              "titulo": "Por qué Dios prohíbe el ocultismo",
              "contenido": "Dios prohíbe el ocultismo no por capricho, sino porque nos protege. Quien consulta a mediums, astrología o prácticas esotéricas se coloca bajo influencias que no controla y que traen ataduras, opresión y confusión. Dios, como nuestro Creador, sabe que la comunión con Él es la única fuente segura de guía espiritual. 'Yo soy el Señor tu Dios... no tendrás dioses ajenos' (Éxodo 20:2-3)."
            },
            {
              "titulo": "La libertad en Cristo",
              "contenido": "Cristo vino a destruir las obras del diablo (1 Juan 3:8). Si has estado involucrado en prácticas ocultas, hay libertad y restauración en Jesús. La confesión, el arrepentimiento y la renuncia rompen toda atadura. 'Si el Hijo os libertare, seréis verdaderamente libres' (Juan 8:36). No hay poder oscuro que pueda resistir el nombre de Jesús."
            }
          ],
          "reflexion": "¿He participado en alguna práctica oculta, por 'inocente' que parezca? Renuncia a ella en el nombre de Jesús y entrégale a Dios toda área de tu vida espiritual."
        },
        {
          "id": "1-8",
          "titulo": "Evidencia científica de la Creación",
          "subtitulo": "Diseño biológico y cosmológico",
          "versiculo": "Los cielos cuentan la gloria de Dios — Salmo 19:1",
          "ministro": "Billy Graham",
          "introduccion": "Lejos de contradecir la fe, la ciencia moderna revela cada vez más la evidencia de un Diseñador. A nivel biológico y cosmológico, el universo muestra señales inequívocas de diseño. Billy Graham siempre sostuvo que la ciencia y la fe, bien entendidas, son amigas, no enemigas.",
          "secciones": [
            {
              "titulo": "Evidencia biológica: el diseño del cuerpo",
              "contenido": "El cuerpo humano es una obra de ingeniería asombrosa. El ADN contiene una cantidad de información codificada que supera a cualquier programa de computadora. La célula, con su maquinaria molecular, opera como una fábrica miniaturizada. La complejidad irreductible de sistemas como el ojo, el sistema de coagulación de la sangre o el flagelo bacteriano, no puede explicarse por procesos graduales: todos sus componentes deben estar presentes simultáneamente para funcionar. Esto apunta a un Diseñador inteligente."
            },
            {
              "titulo": "Evidencia cosmológica: un universo afinado",
              "contenido": "El universo está 'afinado' con una precisión asombrosa. Si la fuerza de gravedad, la carga del electrón, la tasa de expansión del universo o cualquiera de decenas de constantes variara en una fracción minúscula, la vida sería imposible. Los cosmólogos llaman a esto el 'ajuste fino' del universo. Tal precisión no es producto del azar, sino de una Mente soberana que diseñó un hogar para la vida."
            },
            {
              "titulo": "Fe y ciencia, aliadas",
              "contenido": "Billy Graham decía: 'La Biblia nos dice cómo ir al cielo, no cómo son los cielos.' La ciencia responde al 'cómo', la fe al 'por qué'. Ambas son dones de Dios. Negar la evidencia del diseño es cerrar los ojos ante lo evidente. El creyente no teme a la ciencia; la abraza como una ventana más para contemplar la grandeza del Creador."
            }
          ],
          "reflexion": "Observa la naturaleza a tu alrededor: una flor, el cielo estrellado, tu propio cuerpo. Toma un momento para agradecer a Dios por Su diseño perfecto y confía en que Aquel que diseñó el universo cuida de ti."
        }
      ]
    },
    {
      "id": 2,
      "titulo": "El Plan de Salvación",
      "subtitulo": "Rompiendo paradigmas y restaurando el diseño original",
      "descripcion": "Una vez que los ojos se abren, descubrimos que Dios tiene un plan de salvación para el hombre. En este nivel rompemos los paradigmas de la Matrix, conocemos la verdad histórica y arqueológica de la Biblia, y aprendemos a vivir el equilibrio bíblico que Jesús propuso.",
      "color": "from-amber-500 to-orange-700",
      "colorSolid": "#f59e0b",
      "icono": "BookOpen",
      "imagen": "https://media.base44.com/images/public/6aae368f66d1339fdac61628/b0dec133e_generated_image.png",
      "lecciones": [
        {
          "id": "2-1",
          "titulo": "El Plan de Salvación",
          "subtitulo": "El diseño de Dios para rescatar al hombre",
          "versiculo": "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito — Juan 3:16",
          "ministro": "Billy Graham",
          "introduccion": "El plan de salvación es el corazón del mensaje cristiano. Dios, en Su amor, diseñó un camino para rescatar al hombre del pecado y restaurarlo a Su comunión. Billy Graham predicó este mensaje a millones en todo el mundo, con una claridad y sencillez que transformaron vidas.",
          "secciones": [
            {
              "titulo": "El problema: el pecado separa al hombre de Dios",
              "contenido": "Dios es santo y el pecado rompe la comunión con Él. 'Todos pecaron, y están destituidos de la gloria de Dios' (Romanos 3:23). El pecado no es solo hacer cosas malas; es una condición del corazón que nos aleja de nuestro Creador. Sus consecuencias son la muerte espiritual, la separación eterna de Dios. Ningún esfuerzo humano, ninguna buena obra, puede salvar al hombre de esta condición."
            },
            {
              "titulo": "La solución: Cristo en la cruz",
              "contenido": "Dios, en Su amor, envió a Su Hijo Jesucristo para pagar el precio del pecado. Jesús vivió una vida sin pecado, murió en la cruz cargando nuestros pecados, y resucitó al tercer día, venciendo a la muerte. 'Cristo murió por nuestros pecados, conforme a las Escrituras... y resucitó al tercer día' (1 Corintios 15:3-4). La salvación no se compra ni se merece; se recibe por gracia, mediante la fe en Jesús."
            },
            {
              "titulo": "La respuesta: arrepentimiento y fe",
              "contenido": "La salvación es un regalo que se recibe con las manos vacías de la fe. Arrepentimiento significa cambiar de mente y de dirección: dejar el camino del pecado y volver a Dios. Fe significa confiar completamente en lo que Cristo hizo en la cruz, no en nuestras propias obras. 'Si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo' (Romanos 10:9)."
            }
          ],
          "reflexion": "¿Has recibido personalmente el regalo de la salvación? Si no lo has hecho, hoy puedes hacerlo. Reconoce tu necesidad de Dios, arrepiéntete de tus pecados y confía en Jesús como tu Salvador. Es la decisión más importante de tu vida."
        },
        {
          "id": "2-2",
          "titulo": "Rompiendo Paradigmas de la Matrix",
          "subtitulo": "El control global y el despertar espiritual",
          "versiculo": "El dios de este siglo cegó el entendimiento — 2 Corintios 4:4",
          "ministro": "Armando Alducín",
          "introduccion": "Existe un plan de control global de las grandes élites que necesitan tener subyugada a la humanidad para sus fines egoístas. Abrir los ojos a esta realidad es parte del despertar espiritual. No vivimos en paranoia, sino en discernimiento.",
          "secciones": [
            {
              "titulo": "El príncipe de este mundo",
              "contenido": "La Biblia identifica a Satanás como el 'dios de este siglo' y el 'príncipe de este mundo' (Juan 12:31, 2 Corintios 4:4). Él opera a través de sistemas, estructuras e ideologías para cegar el entendimiento de los hombres y mantenerlos lejos de Dios. No se trata de teorías de conspiración, sino de una realidad espiritual que la Escritura revela con claridad."
            },
            {
              "titulo": "Sistemas de control",
              "contenido": "A lo largo de la historia, diversos sistemas han buscado controlar a la humanidad: económicos, políticos, mediáticos y religiosos. Las grandes élites operan con intereses que, muchas veces, no buscan el bienestar del hombre sino su sumisión. El consumismo, la deuda, el miedo y la distracción son herramientas de control. El cristiano despierto reconoce estos sistemas y no se deja arrastrar por ellos."
            },
            {
              "titulo": "La verdadera libertad",
              "contenido": "La libertad no se logra con más información, sino con la verdad que es Cristo. 'Si el Hijo os libertare, seréis verdaderamente libres' (Juan 8:36). Romper paradigmas no es solo pensar diferente, es ser transformado por el poder del Evangelio. Solo en Cristo el hombre encuentra libertad verdadera: del pecado, del miedo, de la manipulación y de la mentira."
            }
          ],
          "reflexion": "¿Qué sistema o paradigma del mundo aún me tiene atado? Identifícalo y llévalo a la cruz. Cristo vino a libertar a los cautivos (Lucas 4:18)."
        },
        {
          "id": "2-3",
          "titulo": "Restauración del Plan Original de Dios",
          "subtitulo": "Volver al diseño del Creador",
          "versiculo": "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis — Jeremías 29:11",
          "ministro": "Guillermo Maldonado",
          "introduccion": "La salvación no es solo salir del pecado; es volver al diseño original de Dios para el hombre. Dios creó al hombre con un propósito, y Cristo vino a restaurar ese propósito. Guillermo Maldonado enseña sobre el Reino de Dios y la restauración de todo lo que el pecado dañó.",
          "secciones": [
            {
              "titulo": "El diseño original en el Edén",
              "contenido": "Dios creó al hombre a Su imagen y semejanza (Génesis 1:26). Lo diseñó para la comunión con Él, para el dominio sobre la creación, para el trabajo significativo, para las relaciones sanas y para la plenitud. En el Edén, el hombre vivía en armonía con Dios, consigo mismo, con los demás y con la creación. El pecado rompió esa armonía en todas sus dimensiones."
            },
            {
              "titulo": "Cristo: el segundo Adán",
              "contenido": "Pablo llama a Cristo 'el segundo Adán' (Romanos 5; 1 Corintios 15). Donde el primer Adán fracasó, Cristo triunfó. Él no solo perdona el pecado; restaura lo que el pecado destruyó. En Cristo, recuperamos la comunión con Dios, la dignidad de ser imagen de Dios, el propósito de dominar y bendecir, y la capacidad de amar y ser amados. La salvación es restauración integral."
            },
            {
              "titulo": "Viviendo el diseño restaurado",
              "contenido": "Vivir el plan original significa caminar en comunión diaria con Dios, descubrir y cumplir el propósito para el que fuimos creados, sanar nuestras relaciones, y steward (administrar bien) la creación y los recursos que Dios nos ha dado. No es una utopía futura, sino una realidad que comienza ahora, en Cristo, y se consumará en la eternidad."
            }
          ],
          "reflexion": "¿Qué área de tu vida necesita ser restaurada al diseño de Dios? Tu comunión con Él, tus relaciones, tu propósito? Entrégasela hoy y permite que Cristo restaure lo que el pecado dañó."
        },
        {
          "id": "2-4",
          "titulo": "Conociendo la Verdad",
          "subtitulo": "Evidencia histórica y arqueológica de la Biblia",
          "versiculo": "Toda la Escritura es inspirada por Dios — 2 Timoteo 3:16",
          "ministro": "Luis Palau",
          "introduccion": "La fe cristiana no es ciega; se apoya en evidencias. La Biblia ha sido confirmada una y otra vez por la arqueología y la historia. Luis Palau, con su formación rigurosa, mostraba cómo la fe y la razón caminan juntas.",
          "secciones": [
            {
              "titulo": "La Biblia como documento histórico",
              "contenido": "La Biblia no es un libro de mitos; es un documento histórico con miles de manuscritos que confirman su transmisión fiel. El Nuevo Testamento cuenta con más de 5,800 manuscritos griegos, una cantidad que supera ampliamente a cualquier otro texto antiguo. La precisión de su transmisión es asombrosa, comparada con obras como las de Platón o Julio César, de las que tenemos pocas copias y muy posteriores."
            },
            {
              "titulo": "Evidencia arqueológica",
              "contenido": "La arqueología ha confirmado una y otra vez la exactitud de la Biblia. Se han descubierto ciudades bíblicas, inscripciones, y objetos que confirman los relatos: el túnel de Ezequías, la inscripción de Pilato en Cesarea, el sello de Isaías, los rollos del Mar Muerto (que confirmaron la fidelidad del texto del Antiguo Testamento tras 2,000 años). Cada descubrimiento arqueológico ha fortalecido, no debilitado, la confianza en la Escritura."
            },
            {
              "titulo": "Evidencia de la resurrección",
              "contenido": "La resurrección de Cristo es el evento mejor atestiguado de la antigüedad. La tumba vacía, las apariciones a más de 500 testigos, el cambio radical en los apóstoles (de cobardes a mártires), y el surgimiento de la Iglesia no se explican sin la resurrección. Como dijo el abogado y apologista Simon Greenleaf: cualquier tribunal honesto concluiría que la resurrección es un hecho histórico."
            }
          ],
          "reflexion": "Tu fe no es ciega. Tómate tiempo para estudiar las evidencias. Una fe informada es una fe firme. Lee, investiga y confirma que la Palabra de Dios es verdad."
        },
        {
          "id": "2-5",
          "titulo": "La Importancia de la Biblia",
          "subtitulo": "Los valores que Dios propone para el hombre",
          "versiculo": "Lámpara es a mis pies tu palabra, y lumbrera a mi camino — Salmo 119:105",
          "ministro": "Billy Graham",
          "introduccion": "La Biblia no es solo un libro religioso; es la revelación de Dios y el manual de vida que Él nos ha dado. Contiene los valores, principios y promesas que Dios propone para el hombre. Billy Graham la llamó 'el mapa que guía al viajero, el faro que guía al marinero, el bastón que sostiene al peregrino'.",
          "secciones": [
            {
              "titulo": "La Palabra como guía de vida",
              "contenido": "En un mundo de relativismo y confusión, la Biblia es una brújula confiable. Nos enseña quién es Dios, quiénes somos nosotros, cuál es nuestro propósito y cómo vivir. Sus principios son universales y atemporales: el amor, la justicia, la misericordia, la honestidad, la pureza. 'La ley de Jehová es perfecta, que vuelve el alma' (Salmo 19:7)."
            },
            {
              "titulo": "Valores del Reino",
              "contenido": "La Biblia propone valores que contradicen los del mundo: amar en lugar de odiar, servir en lugar de dominar, dar en lugar de acumular, perdonar en lugar de vengar, humillarse en lugar de exaltarse. El Sermón del Monte (Mateo 5-7) es la carta magna de los valores del Reino. Bienaventurados los pobres en espíritu, los mansos, los que lloran, los que tienen hambre y sed de justicia, los misericordiosos, los limpios de corazón, los pacificadores."
            },
            {
              "titulo": "La Palabra que transforma",
              "contenido": "La Biblia no es solo para leerla, sino para vivirla. 'Sed hacedores de la palabra, y no tan solamente oidores' (Santiago 1:22). La Palabra de Dios, leída con fe y obediencia, transforma la mente, el corazón y la conducta. Es viva y eficaz (Hebreos 4:12). Quien se sumerge en ella sale transformado, porque es Dios mismo hablando a través de sus páginas."
            }
          ],
          "reflexion": "¿Cuánto tiempo dedicas a la Palabra de Dios? Establece un hábito diario de lectura. La Biblia es el alimento de tu alma; sin ella, te debilitas espiritualmente."
        },
        {
          "id": "2-6",
          "titulo": "Rompiendo la Matrix Religiosa",
          "subtitulo": "Mentalidad fanática vs. equilibrio bíblico de Jesús",
          "versiculo": "Yo soy el camino, y la verdad, y la vida — Juan 14:6",
          "ministro": "Bernardo Stamateas",
          "introduccion": "Jesús confrontó con fuerza la religión sin vida. El fanatismo religioso aleja a las personas de Dios en lugar de acercarlas. Jesús propuso un equilibrio bíblico: verdad y gracia, justicia y misericordia. Bernardo Stamateas ha enseñado sobre la diferencia entre una espiritualidad sana y el fanatismo que daña.",
          "secciones": [
            {
              "titulo": "Religión vs. relación",
              "contenido": "La religión es el intento del hombre de llegar a Dios por sus propias obras; el Evangelio es Dios llegando al hombre por gracia. Jesús no vino a fundar una religión, sino a restaurar una relación. Los fariseos eran los más religiosos de su época, y sin embargo Jesús los confrontó con mayor dureza. La religión sin relación con Dios se vuelve vacía, hipócrita y opresiva."
            },
            {
              "titulo": "El fanatismo que daña",
              "contenido": "El fanatismo religioso juzga, excluye, controla y condena. Se enfoca en apariencias, reglas humanas y tradiciones, y descuida lo esencial: la justicia, la misericordia y la fe (Mateo 23:23). El fanatismo aleja a los que buscan a Dios y lastima a los que ya están dentro. Bernardo Stamateas advierte que muchos han abandonado la fe, no por rechazo a Dios, sino por el daño causado por líderes religiosos fanáticos."
            },
            {
              "titulo": "El equilibrio de Jesús",
              "contenido": "Jesús mostró un equilibrio perfecto: 'Lleno de gracia y de verdad' (Juan 1:14). No comprometió la verdad, pero la comunicó con gracia. Comió con pecadores sin aprobar su pecado; confrontó a los hipócritas sin perder la compasión. El cristiano verdadero imita a Cristo: firme en la verdad, tierno en el amor, libre de fanatismo y de relativismo."
            }
          ],
          "reflexion": "¿Mi espiritualidad es más religión o más relación con Dios? Pídele a Dios un corazón como el de Jesús: lleno de gracia y de verdad, libre de fanatismo y de hipocresía."
        }
      ]
    },
    {
      "id": 3,
      "titulo": "Sanidad Integral",
      "subtitulo": "Restaurando el alma, las emociones y las relaciones",
      "descripcion": "La salvación toca todo nuestro ser. En este nivel abordamos la sanidad emocional y espiritual, la autoestima, la personalidad, el lenguaje, las metas, la resolución de conflictos, la resiliencia y las habilidades sociales. Un camino hacia la plenitud.",
      "color": "from-emerald-500 to-teal-700",
      "colorSolid": "#10b981",
      "icono": "HeartPulse",
      "imagen": "https://media.base44.com/images/public/6aae368f66d1339fdac61628/f7d91f46f_generated_image.png",
      "lecciones": [
        {
          "id": "3-1",
          "titulo": "Sanidad Integral, Emocional y Espiritual",
          "subtitulo": "Dios sana el alma herida",
          "versiculo": "Él sana a los quebrantados de corazón, y venda sus heridas — Salmo 147:3",
          "ministro": "Bernardo Stamateas",
          "introduccion": "La sanidad integral es obra de Dios en todo nuestro ser: espíritu, alma y cuerpo. Bernardo Stamateas, referente en sanidad interior, enseña que las heridas del pasado, los traumas y las heridas emocionales pueden ser sanadas por el poder de Dios.",
          "secciones": [
            {
              "titulo": "¿Qué es la sanidad interior?",
              "contenido": "La sanidad interior es el proceso por el cual Dios restaura las heridas del alma: traumas, rechazos, abusos, abandonos, pérdidas. No es magia ni es instantánea siempre; es un camino en el que el Espíritu Santo, la Palabra y la comunidad de fe trabajan juntos para restaurar lo quebrado. Dios se interesa por nuestro dolor; no lo ignora. 'Sanaré a los quebrantados de corazón' es Su promesa."
            },
            {
              "titulo": "Sanidad espiritual",
              "contenido": "La sanidad espiritual comienza con el nuevo nacimiento: cuando recibimos a Cristo, nuestro espíritu muerto revive. Pero es un proceso continuo de ser transformados 'de gloria en gloria' (2 Corintios 3:18). Incluye renunciar a ataduras, perdonar, romper maldiciones generacionales, y llenarse del Espíritu Santo. Un espíritu sano es un espíritu conectado a Dios."
            },
            {
              "titulo": "El proceso de sanidad",
              "contenido": "La sanidad emocional y espiritual no siempre es instantánea; suele ser un proceso. Requiere honestidad (reconocer el dolor), arrepentimiento (donde hubo pecado), perdón (hacia quienes nos hirieron), renuncia (a ataduras y mentiras), y renovación de la mente con la Palabra. A veces se necesita ayuda de un consejero cristiano o de la comunidad. No estamos solos en este camino; Dios usa a personas e instrumentos para sanarnos."
            }
          ],
          "reflexion": "¿Qué herida del pasado necesitas que Dios sane hoy? Identifícala, nómbrala ante Dios y permite que Su amor toque ese lugar. La sanidad es posible en Cristo."
        },
        {
          "id": "3-2",
          "titulo": "La Autoestima",
          "subtitulo": "Valuar lo que Dios valora",
          "versiculo": "Porque somos hechura suya, creados en Cristo Jesús — Efesios 2:10",
          "ministro": "Bernardo Stamateas",
          "introduccion": "La autoestima no es narcisismo; es verse a sí mismo como Dios nos ve. Bernardo Stamateas enseña que una autoestima sana se basa en el valor que Dios nos da, no en la opinión de los hombres.",
          "secciones": [
            {
              "titulo": "El valor que Dios nos da",
              "contenido": "Nuestro valor no viene de lo que tenemos, logramos o de lo que otros piensan de nosotros. Viene de lo que Dios pagó por nosotros: la vida de Su Hijo. 'Con sangre preciosa, como de un cordero sin mancha y sin contaminación, de Cristo' (1 Pedro 1:19). Si Dios nos valoró tanto, ¿cómo no vamos a valorarnos nosotros? La autoestima cristiana se fundamenta en la cruz."
            },
            {
              "titulo": "Aceptarse a sí mismo",
              "contenido": "Aceptarse no es resignarse; es reconocer que somos obra de Dios, con fortalezas y debilidades, y que Dios nos ama tal como somos y nos llama a crecer. Pablo aprendió a abrazar su debilidad porque allí el poder de Dios se perfeccionaba (2 Corintios 12:9). La autoestima sana reconoce la debilidad sin despreciarse, y celebra la fortaleza sin envanecerse."
            },
            {
              "titulo": "Sanar la baja autoestima",
              "contenido": "La baja autoestima suele tener raíces en el rechazo, la crítica, el abuso o las comparaciones. Sanarla requiere renovar la mente con la verdad de Dios: 'Yo soy hijo de Dios' (Juan 1:12), 'soy amado' (1 Juan 3:1), 'soy obra maestra de Dios' (Efesios 2:10). Repetir estas verdades hasta que reemplacen las mentiras que creímos es parte de la renovación de la mente."
            }
          ],
          "reflexion": "¿Cómo te hablas a ti mismo? Reemplaza las palabras de rechazo con las palabras de Dios sobre ti. Eres Su hechura, amado y valioso."
        },
        {
          "id": "3-3",
          "titulo": "Personalidad y Temperamento",
          "subtitulo": "El equilibrio del ser",
          "versiculo": "Conoce el estado de tus ovejas; pon tu corazón a tus rebaños — Proverbios 27:23",
          "ministro": "Bernardo Stamateas",
          "introduccion": "Dios nos creó con una personalidad única. Conocer nuestro temperamento nos ayuda a entender nuestras fortalezas, debilidades y a buscar el equilibrio que el Espíritu Santo produce en nosotros.",
          "secciones": [
            {
              "titulo": "Los cuatro temperamentos",
              "contenido": "Desde la antigüedad se describen cuatro temperamentos: colérico (líder, decidido, pero puede ser iracundo), sanguíneo (alegre, sociable, pero puede ser inconstante), melancólico (profundo, perfeccionista, pero puede deprimirse), y fleumático (tranquilo, estable, pero puede ser apático). Ninguno es mejor que otro; cada uno tiene fortalezas y riesgos. Dios usa cada temperamento cuando es rendido a Él."
            },
            {
              "titulo": "El fruto del Espíritu como equilibrio",
              "contenido": "Cualquier temperamento, sin el control del Espíritu, se desequilibra. El fruto del Espíritu (Gálatas 5:22-23) —amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza— es el equilibrio que Dios produce en cualquier personalidad. El colérico se vuelve paciente, el sanguíneo constante, el melancólico gozoso, el fleumático diligente. La santificación no cambia la personalidad; la equilibra."
            },
            {
              "titulo": "Conocerse para crecer",
              "contenido": "Conocer nuestro temperamento nos ayuda a entender por qué reaccionamos como lo hacemos y dónde necesitamos crecer. No es excusa para el pecado ('soy así, no puedo cambiar'), sino punto de partida para la transformación. Dios nos toma como somos y nos lleva a donde Él quiere que seamos. 'Todo lo puedo en Cristo que me fortalece' (Filipenses 4:13)."
            }
          ],
          "reflexion": "¿Cuál es tu temperamento predominante? Identifica una fortaleza y un riesgo de tu temperamento. Pídele al Espíritu Santo que produzca Su fruto en esa área."
        },
        {
          "id": "3-4",
          "titulo": "Lenguaje Interno y Externo",
          "subtitulo": "El poder de las palabras",
          "versiculo": "La muerte y la vida están en poder de la lengua — Proverbios 18:21",
          "ministro": "Guillermo Maldonado",
          "introduccion": "Lo que nos decimos a nosotros mismos y lo que decimos a otros tiene poder para edificar o destruir. Guillermo Maldonado enseña sobre el poder de la palabra hablada y la fe que se expresa con la boca.",
          "secciones": [
            {
              "titulo": "El lenguaje interno: cómo te hablas",
              "contenido": "El diálogo interno moldea la identidad y el estado emocional. Si te dices 'no sirves', 'eres un fracaso', 'nadie te quiere', tu alma se hunde. Si te dices, con verdad y fe, 'soy hijo de Dios', 'Dios tiene un propósito para mí', 'puedo todo en Cristo', tu alma se eleva. La renovación de la mente (Romanos 12:2) incluye renovar el lenguaje interno, alineándolo con la Palabra de Dios."
            },
            {
              "titulo": "El lenguaje externo: cómo hablas a otros",
              "contenido": "Las palabras pueden sanar o herir. 'La lengua es un fuego, un mundo de maldad' (Santiago 3:6), pero también puede ser instrumento de bendición. Jesús dijo que de la abundancia del corazón habla la boca (Mateo 12:34). Un corazón sano produce palabras sanas: de ánimo, de verdad, de amor, de perdón. El cristiano cuida sus palabras porque sabe que tienen poder."
            },
            {
              "titulo": "Hablar fe y vida",
              "contenido": "Dios habló y el mundo existió (Génesis 1). A Su imagen, nuestras palabras crean realidades. Pablo enseñó: 'Con la boca se confiesa para salvación' (Romanos 10:10). Hablar fe es declarar lo que Dios dice, no lo que vemos. No es negar la realidad, es declarar una realidad mayor: la de Dios. 'Sea hecho conforme a tu fe' (Mateo 8:13)."
            }
          ],
          "reflexion": "¿Qué te dices a ti mismo en los momentos difíciles? ¿Qué dices a los demás? Pídele a Dios que tus palabras sean fuente de vida, no de muerte."
        },
        {
          "id": "3-5",
          "titulo": "Proyectos, Metas y Planes",
          "subtitulo": "Vivir con propósito",
          "versiculo": "El corazón del hombre piensa su camino; mas Jehová endereza sus pasos — Proverbios 16:9",
          "ministro": "Luis Palau",
          "introduccion": "Dios es un Dios de propósitos y planes. Nos creó con capacidad de soñar, planificar y construir. Luis Palau vivió una vida de metas claras y propósito eterno, demostrando que un cristiano con visión logra mucho para el Reino.",
          "secciones": [
            {
              "titulo": "Soñar con Dios",
              "contenido": "Dios pone sueños en el corazón de Sus hijos. 'Escribe la visión, y hazla manifiesta sobre tablas, para que corra el que lea en ella' (Habacuc 2:2). Soñar con Dios no es fantasía; es discernir lo que Él quiere hacer a través de nosotros. Los sueños que nacen de la comunión con Dios tienen poder para transformar realidades."
            },
            {
              "titulo": "Metas sabias",
              "contenido": "Una meta es un sueño con fecha. La sabiduría bíblica nos enseña a planificar: '¿Quién de vosotros, queriendo edificar una torre, no se sienta primero y calcula los gastos?' (Lucas 14:28). Las metas deben ser específicas, alcanzables, y rendidas a Dios. 'Puedes hacer planes, pero el Señor determina tus pasos' (Proverbios 16:9, NTV)."
            },
            {
              "titulo": "Perseverar en el propósito",
              "contenido": "Tener metas es fácil; perseverar es difícil. Pablo escribió: 'Una cosa hago: olvidando ciertamente lo que queda atrás, y extendiéndome a lo que está delante, prosigo a la meta' (Filipenses 3:13-14). La perseverancia se alimenta del propósito. Cuando sabes por qué haces lo que haces, puedes soportar cualquier cómo. Y cuando el propósito viene de Dios, Él mismo da las fuerzas para alcanzarlo."
            }
          ],
          "reflexion": "¿Tienes metas claras para tu vida? Escribe una meta para este año en cada área: espiritual, personal, familiar, laboral. Entrégasela a Dios y da el primer paso esta semana."
        },
        {
          "id": "3-6",
          "titulo": "Resolución de Conflictos",
          "subtitulo": "Sanar las relaciones rotas",
          "versiculo": "Si es posible, en cuanto dependa de vosotros, estad en paz con todos los hombres — Romanos 12:18",
          "ministro": "Bernardo Stamateas",
          "introduccion": "Los conflictos son parte de la vida, pero no tienen que destruirnos. La Biblia nos enseña a resolverlos con sabiduría, humildad y amor. Bernardo Stamateas aborda cómo sanar conflictos internos y entre personas.",
          "secciones": [
            {
              "titulo": "Conflictos internos",
              "contenido": "Muchos conflictos externos nacen de conflictos internos no resueltos: heridas, miedos, inseguridades. 'Cualquiera que se enoja contra su hermano, será culpable' (Mateo 5:22). Sanar el conflicto interno requiere honestidad ante Dios, perdón hacia uno mismo, y rendición de las emociones al Señor. Un corazón en paz construye relaciones en paz."
            },
            {
              "titulo": "Conflictos entre personas",
              "contenido": "Jesús nos dejó un modelo claro de resolución de conflictos (Mateo 18:15-17): ir a la persona en privado, hablar con humildad y verdad, buscar la reconciliación. No difamar, no acumular resentimiento, no vengarse. 'Airaos, pero no pequéis; no se ponga el sol sobre vuestro enojo' (Efesios 4:26). La meta no es tener razón, sino restaurar la relación."
            },
            {
              "titulo": "El poder del perdón",
              "contenido": "El perdón es el corazón de la resolución de conflictos. No es olvidar, ni justificar el mal, ni confiar de inmediato. Es liberar a la otra persona de la deuda que tiene contigo y entregar la justicia a Dios. 'Perdonándoos unos a otros, como también Cristo os perdonó' (Efesios 4:32). Perdonar libera al ofensor, pero sobre todo libera al ofendido."
            }
          ],
          "reflexion": "¿Hay un conflicto sin resolver en tu vida? Da el primer paso hoy. Ve a la persona, habla con humildad, busca la paz. Y si necesitas perdonar, hazlo en libertad."
        },
        {
          "id": "3-7",
          "titulo": "Resiliencia",
          "subtitulo": "Cómo enfrentar las crisis de la vida",
          "versiculo": "Todo lo puedo en Cristo que me fortalece — Filipenses 4:13",
          "ministro": "Billy Graham",
          "introduccion": "La vida trae crisis: pérdidas, enfermedades, fracasos, traiciones. La resiliencia es la capacidad de levantarse y seguir adelante. Billy Graham enfrentó crisis a lo largo de su ministerio y siempre mostró una fe firme y resiliente.",
          "secciones": [
            {
              "titulo": "La resiliencia desde la fe",
              "contenido": "La resiliencia del mundo es fuerza de voluntad; la resiliencia del cristiano es fuerza de Dios. No depende de nosotros, sino de Aquel que nos sostiene. 'El Señor es mi fortaleza y mi escudo; en Él confió mi corazón' (Salmo 28:7). La verdadera resiliencia se apoya en Dios, no en el propio esfuerzo. Cuando no podemos más, Él puede."
            },
            {
              "titulo": "El propósito en el dolor",
              "contenido": "Dios no siempre quita la crisis, pero siempre da un propósito en ella. 'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien' (Romanos 8:28). El dolor no es el final; puede ser el inicio de algo nuevo. José fue vendido, encarcelado, olvidado; pero todo era parte del plan de Dios para salvar a su familia y a una nación (Génesis 50:20)."
            },
            {
              "titulo": "Levantarse una vez más",
              "contenido": "Resiliencia no es no caer nunca; es levantarse una vez más cada vez que caes. 'Porque siete veces cae el justo, y vuelve a levantarse' (Proverbios 24:16). La diferencia entre el que se rinde y el que triunfa no es el número de caídas, sino la decisión de levantarse. En Cristo, siempre hay fuerza para levantarse. Su gracia es suficiente."
            }
          ],
          "reflexion": "¿Qué crisis estás enfrentando? Recuerda que no estás solo. Dios es tu fortaleza. Apóyate en Él, busca el propósito en el dolor y decídete a levantarte una vez más."
        },
        {
          "id": "3-8",
          "titulo": "Desarrollo Cultural e Intelectual",
          "subtitulo": "Aprender para servir mejor",
          "versiculo": "El corazón del entendido adquiere sabiduría — Proverbios 18:15",
          "ministro": "Luis Palau",
          "introduccion": "Dios nos dio mente para usarla. El desarrollo cultural e intelectual nos abre puertas para aprender, crecer y resolver las problemáticas sociales que enfrentamos. Luis Palau, con su formación intelectual rigurosa, demostró que la fe y el pensamiento profundo van de la mano.",
          "secciones": [
            {
              "titulo": "La mente como don de Dios",
              "contenido": "Dios nos creó con capacidad de pensar, aprender y crear. El mandato cultural (Génesis 1:28) incluye cultivar la tierra, desarrollar la cultura y el conocimiento. 'Amarás al Señor tu Dios... con toda tu mente' (Mateo 22:37). La fe no es enemiga del pensamiento; la fe verdadera lo profundiza. Un cristiano que no piensa es un cristiano vulnerable a todo engaño."
            },
            {
              "titulo": "Aprender toda la vida",
              "contenido": "El aprendizaje no termina con la escuela. La sabiduría se adquiere leyendo, estudiando, conversando, observando. 'El sabio escucha y aumenta su saber' (Proverbios 1:5). Leer buenos libros, formarse, cultivar la curiosidad, son formas de honrar a Dios con la mente. Un cristiano cultivo es una luz más brillante en su mundo."
            },
            {
              "titulo": "Pensar para servir",
              "contenido": "El desarrollo intelectual no es para vanagloria, sino para servir mejor. Cuanto más sabemos, mejor podemos ayudar a los demás, resolver problemas, tomar decisiones sabias y aportar a la sociedad. Daniel y sus amigos fueron formados en la cultura babilónica para servir en palacio (Daniel 1). Dios usa mentes preparadas para Su propósito."
            }
          ],
          "reflexion": "¿Qué estás aprendiendo ahora mismo? Dedica tiempo esta semana a leer un libro, escuchar una conferencia o aprender una habilidad nueva. Tu mente es un don; úsala para Dios."
        },
        {
          "id": "3-9",
          "titulo": "Habilidades Sociales",
          "subtitulo": "Relacionarse a pesar de las diferencias",
          "versiculo": "Si es posible, en cuanto dependa de vosotros, estad en paz con todos los hombres — Romanos 12:18",
          "ministro": "Dante Gebel",
          "introduccion": "Dios nos creó para la comunión. Las habilidades sociales nos permiten relacionarnos con los demás, aún a pesar de las diferencias. Dante Gebel, que conecta con audiencias muy diversas, muestra cómo el amor rompe barreras.",
          "secciones": [
            {
              "titulo": "La empatía como base",
              "contenido": "La empatía es la capacidad de ponerse en el lugar del otro. 'Regocijaos con los que se regocijan; llorad con los que lloran' (Romanos 12:15). La empatía no es estar de acuerdo con todos, sino comprenderlos. Un cristiano empático escucha antes de hablar, comprende antes de juzgar, y ama antes de corregir. La empatía abre corazones."
            },
            {
              "titulo": "Comunicación sana",
              "contenido": "Una buena comunicación es clara, honesta y respetuosa. 'Sea vuestra palabra siempre con gracia, sazonada con sal' (Colosenses 4:6). Aprender a escuchar de verdad, a hablar sin atacar, a expresar las necesidades sin manipular, son habilidades que se cultivan. La comunicación sana construye puentes; la comunicación tóxica los destruye."
            },
            {
              "titulo": "Diversidad sin división",
              "contenido": "En Cristo no hay judío ni griego, esclavo ni libre, hombre ni mujer (Gálatas 3:28). La diversidad no es amenaza; es riqueza. Aprender a relacionarnos con personas distintas —de otras culturas, edades, opiniones— nos enriquece y nos hace más como Cristo, que amó a todos. La unidad no es uniformidad; es armonía en la diversidad."
            }
          ],
          "reflexion": "¿Con qué tipo de personas te cuesta más relacionarte? Pídele a Dios un corazón empático. Da un paso esta semana para acercarte a alguien distinto a ti."
        },
        {
          "id": "3-10",
          "titulo": "Inteligencia Emocional",
          "subtitulo": "Las inteligencias que Dios nos dio",
          "versiculo": "El de entendimiento cuida sus caminos — Proverbios 16:17",
          "ministro": "Bernardo Stamateas",
          "introduccion": "Dios nos capacitó con diversas inteligencias: intelectual, emocional, social, espiritual. La inteligencia emocional es la capacidad de reconocer, entender y gestionar las emociones propias y ajenas. Bernardo Stamateas enseña cómo una vida emocional sana es clave para el bienestar.",
          "secciones": [
            {
              "titulo": "Conocer las emociones",
              "contenido": "Las emociones no son buenas ni malas en sí; son señales. La tristeza, la ira, el miedo, la alegría, todas comunican algo. Ignorarlas o reprimirlas no las elimina; las esconde hasta que explotan. 'El corazón conoce la amargura de su alma' (Proverbios 14:10). Reconocer lo que sentimos, nombrarlo y entender de dónde viene, es el primer paso de la inteligencia emocional."
            },
            {
              "titulo": "Gestionar las emociones",
              "contenido": "Sentir no es pecar; actuar de manera destructiva por lo que sentimos, sí. 'Airaos, pero no pequéis' (Efesios 4:26). Gestionar las emociones no es reprimirlas, sino procesarlas con sabiduría: expresarlas sanamente, llevarlas a Dios, no tomar decisiones destructivas en momentos de intensidad. El fruto del Espíritu incluye dominio propio (Gálatas 5:23)."
            },
            {
              "titulo": "Inteligencias múltiples",
              "contenido": "Dios nos dio diversas inteligencias: intelectual, emocional, social, espiritual, creativa, práctica. No todos somos fuertes en todas, pero todos tenemos una combinación única. Descubrir y desarrollar nuestras inteligencias es parte de ser buenos administradores de lo que Dios nos dio. 'Cada uno según el don que ha recibido' (1 Pedro 4:10)."
            }
          ],
          "reflexion": "¿Qué emoción te cuesta más gestionar? Llévala a Dios. Pídele sabiduría para reconocerla, procesarla y expresarla de manera sana."
        }
      ]
    },
    {
      "id": 4,
      "titulo": "La Biblia y el Ministerio",
      "subtitulo": "Conocer la Palabra y servir con propósito",
      "descripcion": "En el nivel final profundizamos en la Biblia y su estructura, descubrimos los ministerios y el llamado de Dios, aprendemos sobre el liderazgo y la iglesia como entorno de sanidad. Aquí se completa el ciclo: del despertar al servicio.",
      "color": "from-violet-500 to-purple-700",
      "colorSolid": "#8b5cf6",
      "icono": "Church",
      "imagen": "https://media.base44.com/images/public/6aae368f66d1339fdac61628/4b2b6e264_generated_image.png",
      "lecciones": [
        {
          "id": "4-1",
          "titulo": "La Biblia y su estructura",
          "subtitulo": "Antiguo y Nuevo Testamento",
          "versiculo": "Toda la Escritura es inspirada por Dios, y útil para enseñar — 2 Timoteo 3:16",
          "ministro": "Luis Palau",
          "introduccion": "La Biblia es una biblioteca de 66 libros, escrita por más de 40 autores a lo largo de 1,500 años, con una unidad asombrosa que solo se explica por su Autor divino. Conocer su estructura nos ayuda a comprenderla y vivirla.",
          "secciones": [
            {
              "titulo": "El Antiguo Testamento",
              "contenido": "El Antiguo Testamento tiene 39 libros, organizados en: La Ley (Génesis a Deuteronomio) —los fundamentos de la creación, el pueblo de Israel y la ley. Los Históricos (Josué a Ester) —la historia de Israel. Los Poéticos (Job a Cantares) —la sabiduría y la adoración. Los Proféticos (Isaías a Malaquías) —el mensaje de Dios a Su pueblo. El Antiguo Testamento apunta, en todo, a la venida de Cristo."
            },
            {
              "titulo": "El Nuevo Testamento",
              "contenido": "El Nuevo Testamento tiene 27 libros: Los Evangelios (Mateo a Juan) —la vida, muerte y resurrección de Jesús. Hechos —el nacimiento y la expansión de la Iglesia. Las Epístolas (Romanos a Judas) —la enseñanza apostólica para la Iglesia. Apocalipsis —la victoria final de Cristo. El Nuevo Testamento cumple lo prometido en el Antiguo."
            },
            {
              "titulo": "Un solo libro, un solo mensaje",
              "contenido": "A pesar de su diversidad, la Biblia tiene un solo mensaje central: la redención del hombre por medio de Cristo. Jesús mismo lo dijo: 'Escudriñad las Escrituras... ellas son las que dan testimonio de mí' (Juan 5:39). Desde Génesis hasta Apocalipsis, la Biblia cuenta la historia de Dios rescatando al hombre. Conocer su estructura nos ayuda a no perdernos en los detalles y a ver el panorama completo."
            }
          ],
          "reflexion": "¿Conoces la estructura de la Biblia? Tómate tiempo para hojear el índice de tu Biblia y familiarizarte con los libros. Un mapa mental de la Escritura te ayudará a comprenderla mejor."
        },
        {
          "id": "4-2",
          "titulo": "Patriarcas, Profetas y la Vida de Jesús",
          "subtitulo": "Los personajes centrales de la Biblia",
          "versiculo": "Acordaos de vuestros guías, que os hablaron la palabra de Dios — Hebreos 13:7",
          "ministro": "Billy Graham",
          "introduccion": "La Biblia está llena de vidas que nos enseñan. Los patriarcas, los profetas y, sobre todo, Jesús, son modelos de fe, de caídas y de levantamientos. Billy Graham siempre apuntó a Cristo como el centro de toda la Escritura.",
          "secciones": [
            {
              "titulo": "Los Patriarcas",
              "contenido": "Abraham, Isaac, Jacob y José son los patriarcas: hombres a quienes Dios llamó y con quienes estableció su pacto. No eran perfectos; tuvieron fallos y dudas. Pero creyeron a Dios y fueron contados justos por su fe (Génesis 15:6). Sus vidas nos enseñan que Dios usa personas imperfectas para Sus propósitos perfectos. Por su linaje vendría el Mesías."
            },
            {
              "titulo": "Los Profetas mayores y menores",
              "contenido": "Los profetas mayores (Isaías, Jeremías, Ezequiel, Daniel) y los menores (doce, de Oseas a Malaquías) fueron voceros de Dios. Llamaron al pueblo a la fidelidad, denunciaron la injusticia, anunciaron el juicio y la restauración, y profetizaron la venida del Mesías. No siempre fueron escuchados; muchos sufrieron. Pero su mensaje perdura y apunta a Cristo."
            },
            {
              "titulo": "La vida de Jesús",
              "contenido": "Jesús es el centro de la Biblia y de la historia. Nació de virgen, vivió sin pecado, enseñó con autoridad, hizo milagros, murió en la cruz por nuestros pecados, resucitó al tercer día y ascendió al cielo. Sus enseñanzas (el Sermón del Monte, las parábolas, los 'Yo soy') son la revelación más clara de quién es Dios y de cómo debemos vivir. Conocer a Jesús es conocer a Dios (Juan 14:9)."
            }
          ],
          "reflexion": "¿Qué personaje bíblico te inspira hoy? Lee su historia esta semana y pídele a Dios que te enseñe a través de su vida. Y sobre todo, conoce más a Jesús, el autor y consumador de la fe."
        },
        {
          "id": "4-3",
          "titulo": "Los Apóstoles y las Enseñanzas Apostólicas",
          "subtitulo": "Los fundadores de la Iglesia",
          "versiculo": "Edificados sobre el fundamento de los apóstoles y profetas — Efesios 2:20",
          "ministro": "Guillermo Maldonado",
          "introduccion": "Jesús eligió a doce apóstoles, los formó y los envió a extender Su Reino. Sus enseñanzas, registradas en el Nuevo Testamento, son el fundamento de la Iglesia. Guillermo Maldonado enseña sobre el ministerio apostólico y la extensión del Reino.",
          "secciones": [
            {
              "titulo": "Los doce apóstoles",
              "contenido": "Jesús eligió a doce hombres comunes: pescadores, un recaudador de impuestos, un zelote. No eran los más instruidos ni los más religiosos; eran personas disponibles. Los formó durante tres años, viviendo con ellos, enseñándoles, enviándolos. Tras la resurrección y Pentecostés, fueron transformados por el Espíritu Santo y se convirtieron en los fundadores de la Iglesia. Todos menos Juan murieron mártires."
            },
            {
              "titulo": "El apóstol Pablo",
              "contenido": "Pablo, aunque no fue uno de los doce originales, fue llamado por el Cristo resucitado y se convirtió en el apóstol a los gentiles. Escribió trece epístolas que forman gran parte del Nuevo Testamento. Su vida es testimonio del poder transformador del Evangelio: de perseguidor a predicador, de fariseo a siervo de Cristo. Sus enseñanzas sobre la gracia, la fe, la justificación y la vida en el Espíritu son fundamentales para la Iglesia."
            },
            {
              "titulo": "Las enseñanzas apostólicas",
              "contenido": "Las epístolas del Nuevo Testamento contienen la enseñanza apostólica para la Iglesia: cómo vivir, cómo relacionarnos, cómo servir, cómo enfrentar las herejías, cómo organizar la iglesia, cómo usar los dones. 'Perseverad en la doctrina de los apóstoles' (Hechos 2:42). La Iglesia que se apega a la enseñanza apostólica se mantiene sana; la que la abandona se desvía."
            }
          ],
          "reflexion": "¿Estás fundamentado en la enseñanza apostólica? Lee una epístola del Nuevo Testamento esta semana. La enseñanza de los apóstoles es la base firme sobre la que crecer."
        },
        {
          "id": "4-4",
          "titulo": "El Apocalipsis",
          "subtitulo": "La victoria final de Cristo",
          "versiculo": "He aquí que viene con las nubes, y todo ojo le verá — Apocalipsis 1:7",
          "ministro": "Armando Alducín",
          "introduccion": "El Apocalipsis es el último libro de la Biblia y uno de los más misteriosos. Muestra la victoria final de Cristo sobre el mal, el juicio, y la esperanza de los cielos nuevos y la tierra nueva. Armando Alducín ha enseñado sobre los tiempos finales con equilibrio bíblico.",
          "secciones": [
            {
              "titulo": "El mensaje central del Apocalipsis",
              "contenido": "A pesar de su simbolismo, el mensaje central del Apocalipsis es claro: Cristo vence. El libro fue escrito para animar a una Iglesia perseguida, recordándole que, sin importar lo que parezca, el Cordero está en el trono y Su victoria es segura. '¡He aquí, el León de la tribu de Judá ha vencido!' (Apocalipsis 5:5). El mal no tiene la última palabra; Cristo la tiene."
            },
            {
              "titulo": "Las cartas a las iglesias",
              "contenido": "Los primeros tres capítulos contienen siete cartas a siete iglesias reales, con mensajes que aplican a toda Iglesia de todos los tiempos. Cristo conoce, aprueba, corrige y llama a cada iglesia. 'El que tiene oído, oiga lo que el Espíritu dice a las iglesias' (Apocalipsis 2:7). Estas cartas son un examen para cada creyente y cada congregación: ¿estamos viviendo lo que Cristo espera?"
            },
            {
              "titulo": "La esperanza final",
              "contenido": "El Apocalipsis termina con la victoria total de Cristo, el juicio de las naciones, la derrota definitiva de Satanás, y los cielos nuevos y la tierra nueva, donde 'Dios estará con ellos, y Él será su Dios. Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor' (Apocalipsis 21:3-4). Esa es nuestra esperanza: no escapar del mundo, sino verlo renovado por Cristo."
            }
          ],
          "reflexion": "¿Vives con la esperanza de la victoria final de Cristo? No te desanimes por lo que ves; recuerda que el Cordero vence. Vive hoy a la luz de la eternidad."
        },
        {
          "id": "4-5",
          "titulo": "El Ministerio y el Llamado de Dios",
          "subtitulo": "Descubrir y servir el propósito de Dios",
          "versiculo": "A cada uno de nosotros fue dada la gracia conforme a la medida del don de Cristo — Efesios 4:7",
          "ministro": "Guillermo Maldonado",
          "introduccion": "Dios llama a cada creyente a un ministerio. No todos son pastores o evangelistas, pero todos tienen un servicio que dar al Reino. Guillermo Maldonado enseña sobre el llamado, los dones y los ministerios del Espíritu.",
          "secciones": [
            {
              "titulo": "El llamado general y el específico",
              "contenido": "Todo creyente tiene un llamado general: amar a Dios, amar al prójimo, hacer discípulos (Mateo 28:19-20). Pero dentro de ese llamado general, Dios da a cada uno un llamado específico, según los dones, las pasiones y las oportunidades. Unos son llamados a predicar, otros a enseñar, otros a servir, otros a administrar, otros a dar, otros a liderar. Descubrir el llamado específico es un camino de comunión con Dios."
            },
            {
              "titulo": "Los dones del Espíritu",
              "contenido": "El Espíritu Santo reparte dones a cada creyente 'como Él quiere' (1 Corintios 12:11): sabiduría, ciencia, fe, sanidades, milagros, profecía, discernimiento, lenguas, interpretación. Estos dones no son para vanagloria, sino para edificar la Iglesia y servir al mundo. Pablo enseña que el uso de los dones sin amor no sirve de nada (1 Corintios 13). Los dones se ejercen en amor."
            },
            {
              "titulo": "Los ministerios de Efesios 4",
              "contenido": "Pablo menciona cinco ministerios que Cristo dio a la Iglesia: apóstoles, profetas, evangelistas, pastores y maestros (Efesios 4:11). Su propósito es 'perfeccionar a los santos para la obra del ministerio, para la edificación del cuerpo de Cristo' (Efesios 4:12). Estos ministerios no son jerarquías de poder, sino funciones de servicio. Cada uno contribuye a la madurez de la Iglesia."
            }
          ],
          "reflexion": "¿Cuál es tu llamado? Pídele a Dios que te revele los dones que te ha dado. Y no solo los descubras: úsalos para servir a la Iglesia y al mundo."
        },
        {
          "id": "4-6",
          "titulo": "Requisitos de un buen Líder según la Biblia",
          "subtitulo": "El liderazgo según el corazón de Dios",
          "versiculo": "No como teniendo señorío sobre los que están a vuestro cuidado, sino siendo ejemplos de la grey — 1 Pedro 5:3",
          "ministro": "Bernardo Stamateas",
          "introduccion": "El liderazgo bíblico es radicalmente distinto al del mundo. No es dominio, sino servicio. Bernardo Stamateas enseña sobre el liderazgo sano, libre de control y manipulación.",
          "secciones": [
            {
              "titulo": "El líder como siervo",
              "contenido": "Jesús redefinió el liderazgo: 'El que quiera hacerse grande entre vosotros, será vuestro servidor' (Mateo 20:26). El líder bíblico no se sirve a sí mismo, sino a los demás. Lava los pies de sus discípulos (Juan 13), da su vida por las ovejas (Juan 10:11). El liderazgo es autoridad para servir, no para dominar. El líder que no sirve no es líder, es dictador."
            },
            {
              "titulo": "Los requisitos de 1 Timoteo 3",
              "contenido": "Pablo enumera los requisitos del líder (1 Timoteo 3:1-7): irreprensible, marido de una sola mujer, sobrio, prudente, decoroso, hospedador, apto para enseñar, no dado al vino, no pendenciero, no codicioso, que gobierne bien su casa, no neófito, que tenga buen testimonio. La lista enfatiza el carácter sobre la capacidad. Un líder sin carácter, por más talentoso que sea, daña a la Iglesia."
            },
            {
              "titulo": "El fruto del líder",
              "contenido": "El verdadero líder se reconoce por su fruto: vidas transformadas, no seguidores manipulados. 'Por sus frutos los conoceréis' (Mateo 7:16). Un buen líder forma a otros líderes, no dependientes. Reproduce, no retiene. Como Pablo a Timoteo: 'Lo que has oído de mí... esto encarga a hombres fieles que sean idóneos para enseñar también a otros' (2 Timoteo 2:2). El liderazgo bíblico se multiplica."
            }
          ],
          "reflexion": "Si eres líder, examina tu corazón: ¿sirves o dominas? Si no lo eres, ora por tus líderes y prepárate, porque Dios puede llamarte a liderar con un corazón de siervo."
        },
        {
          "id": "4-7",
          "titulo": "La Iglesia como entorno de sanidad",
          "subtitulo": "Función y estructura de la comunidad de fe",
          "versiculo": "Y sobre esta roca edificaré mi iglesia, y las puertas del Hades no prevalecerán contra ella — Mateo 16:18",
          "ministro": "Dante Gebel",
          "introduccion": "La Iglesia no es un edificio, es la comunidad de los redimidos. Dios la diseñó como el entorno donde el creyente crece, sana y sirve. Dante Gebel ha mostrado cómo una iglesia viva puede transformar una generación.",
          "secciones": [
            {
              "titulo": "La función de la Iglesia",
              "contenido": "La Iglesia tiene cuatro funciones esenciales: adoración (glorificar a Dios), comunión (cuidarse mutuamente), discipulado (crecer en la fe), y misión (extender el Reino). Hechos 2:42 describe a la primera iglesia: 'Perseveraban en la doctrina de los apóstoles, en la comunión, en el partimiento del pan y en las oraciones.' Una iglesia sana cumple estas cuatro funciones."
            },
            {
              "titulo": "La estructura de la Iglesia",
              "contenido": "Cristo es la cabeza de la Iglesia (Efesios 1:22-23). Bajo Él, los líderes (pastores, ancianos, diáconos) sirven al cuerpo. Cada miembro tiene un lugar y un don. 'De quien todo el cuerpo, bien concertado y unido... efectúa el crecimiento del cuerpo para la edificación de sí mismo en amor' (Efesios 4:16). La estructura no es piramidal para el poder, sino orgánica para el servicio."
            },
            {
              "titulo": "La Iglesia como hospital",
              "contenido": "Jesús dijo: 'Los sanos no tienen necesidad de médico, sino los enfermos' (Mateo 9:12). La Iglesia es un hospital para heridos, no un museo de santos. Allí se sana, se restaura, se acompaña, se perdona. Una iglesia que no sana es una iglesia enferma. Por eso la comunión, la confesión, la oración mutua y el cuidado pastoral son esenciales."
            }
          ],
          "reflexion": "¿Estás integrado a una iglesia local? Si no, busca una donde puedas crecer, sanar y servir. La Iglesia es el entorno que Dios diseñó para tu crecimiento. No puedes crecer solo."
        },
        {
          "id": "4-8",
          "titulo": "Sustentabilidad Financiera de la Iglesia",
          "subtitulo": "Administrar los recursos con sabiduría",
          "versiculo": "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre — 2 Corintios 9:7",
          "ministro": "Bernardo Stamateas",
          "introduccion": "La iglesia necesita recursos para cumplir su misión. La Biblia enseña principios claros sobre el dar, la mayordomía y la administración financiera. Bernardo Stamateas aborda la sana relación entre fe y finanzas.",
          "secciones": [
            {
              "titulo": "El principio del dar",
              "contenido": "Dios es dador por naturaleza, y nos llama a ser como Él. El dar es parte de la adoración y del sostén de la obra. 'Traed todos los diezmos al alfolí... y probadme ahora en esto, si no os abriré las ventanas de los cielos' (Malaquías 3:10). El diezmo y las ofrendas son expresiones de fe y gratitud. No es comprar bendiciones, es participar del sostenimiento del Reino."
            },
            {
              "titulo": "La mayordomía",
              "contenido": "Todo lo que tenemos es de Dios; nosotros somos administradores, no dueños. '¿Qué tienes que no hayas recibido?' (1 Corintios 4:7). La mayordomía bíblica incluye administrar bien el dinero, el tiempo, los talentos. El que es fiel en lo poco, en lo mucho también es fiel (Lucas 16:10). Una iglesia sostenible es una iglesia cuyos miembros son mayordomos fieles."
            },
            {
              "titulo": "Transparencia y ética",
              "contenido": "La iglesia debe administrar sus recursos con transparencia y ética. No manipular, no explotar, no enriquecerse a costa de la fe. Pablo enseñó: 'Porque no codiciamos los de otros... sino que trabajamos... para no ser carga' (1 Tesalonicenses 2:5, 9). Los líderes deben ser ejemplo de honestidad. Una iglesia con finanzas sanas y transparentes es un testimonio al mundo."
            }
          ],
          "reflexion": "¿Cómo administras lo que Dios te ha dado? Examina tu mayordomía del dinero, el tiempo, los talentos. Todo es de Dios; adminístralo para Su gloria."
        },
        {
          "id": "4-9",
          "titulo": "La Formación Cristiana Bíblica",
          "subtitulo": "Discipulado, células y evangelismo",
          "versiculo": "Id, y haced discípulos a todas las naciones — Mateo 28:19",
          "ministro": "Luis Palau",
          "introduccion": "La formación cristiana es el corazón de la misión de la Iglesia. El discipulado, las células de hogar y el evangelismo son los tres pilares para formar creyentes maduros y extender el Reino. Luis Palau dedicó su vida al evangelismo y a la formación de nuevos creyentes.",
          "secciones": [
            {
              "titulo": "El discipulado",
              "contenido": "El discipulado es el proceso de formar a un creyente para que sea como Cristo. No es solo enseñar doctrina, es caminar con alguien, modelar la vida cristiana, ayudarle a crecer. Jesús hizo discipulado con doce hombres durante tres años. Pablo instruyó a Timoteo: 'Lo que has oído de mí... encarga a hombres fieles' (2 Timoteo 2:2). El discipulado es relacional y se reproduce."
            },
            {
              "titulo": "Las células de hogar",
              "contenido": "La iglesia primitiva se reunía en las casas y en el templo (Hechos 2:46). Las células de hogar son pequeños grupos donde se vive la comunión, se estudia la Palabra, se ora, se comparten las cargas. Son el entorno ideal para el cuidado mutuo, el discipulado y el alcance. Una iglesia con células vivas es una iglesia que crece en profundidad y en extensión."
            },
            {
              "titulo": "El evangelismo",
              "contenido": "El evangelismo es compartir las buenas nuevas de Cristo. Es la misión que Jesús encomendó: 'Id por todo el mundo y predicad el evangelio a toda criatura' (Marcos 16:15). No es solo para pastores o evangelistas; es para todo creyente. Se evangeliza con palabras y con obras, con testimonio y con verdad. Cada creyente es un testigo, y el evangelismo es la extensión natural de una vida transformada por Cristo."
            }
          ],
          "reflexion": "¿Estás siendo discipulado? ¿Estás discipulando a alguien? ¿Compartes tu fe? La formación cristiana es un círculo: recibes, creces y compartes. Encuentra tu lugar en ese círculo."
        }
      ]
    }
  ]
};

export const recursosGenerales: RecursoGeneral[] = [
  {
    tipo: 'documento',
    titulo: 'Capacitación Bíblica Didáctica (Manual Completo)',
    descripcion: 'Manual formativo integral en PDF con el desarrollo curricular, fundamentos teológicos y esquemas de estudio.',
    url: 'https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing',
  },
  {
    tipo: 'video',
    titulo: 'La Arquitectura de la Fe',
    descripcion: 'Video de bienvenida y fundamento que presenta la visión tripartita del ser humano (espíritu, alma y cuerpo) y el diseño de Dios.',
    url: 'https://drive.google.com/file/d/1AEXE_Fz9RbJ5ia4XDP3fhYabhFZm9YbG/view?usp=sharing',
  },
  {
    tipo: 'video',
    titulo: 'Sanidad Interior (Masterclass)',
    descripcion: 'Video magistral sobre el proceso bíblico y psicológico de sanidad interior, cierre de puertas y restauración del alma.',
    url: 'https://drive.google.com/file/d/1C9csMx-dO2MPO1CX2m263pjRQBAMRMoQ/view?usp=sharing',
  },
  {
    tipo: 'audio',
    titulo: 'Sanar la mente con ciencia y fe',
    descripcion: 'Audio conferencia introductoria que explica la convergencia entre neurociencia contemporánea y fe bíblica para la renovación del entendimiento.',
    url: 'https://drive.google.com/file/d/1WkGc8F2M7505qTLYDJoAljX-fMqx7agH/view?usp=sharing',
  },
  {
    tipo: 'audio',
    titulo: 'Manual de supervivencia para la mente moderna',
    descripcion: 'Audio guía formativa sobre cómo resistir el bombardeo ideológico y las presiones del sistema mundano (la Matrix).',
    url: 'https://drive.google.com/file/d/1pyFOFNsZFW3jzMHvQidpBQjTJIcZxpGY/view?usp=sharing',
  }
];

export const materialesPorNivel: Record<number, RecursoMultimedia[]> = {
  1: [
    {
      tipo: 'documento',
      titulo: 'Capacitación Bíblica Didáctica (Manual Didáctico)',
      descripcion: 'Desarrollo pedagógico completo de la apologética, ciencia y creación.',
      url: 'https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'La Amargura del Ateísmo y el Vacío Existencial',
      descripcion: 'Análisis del impacto psicológico y espiritual del ateísmo y el secularismo.',
      url: 'https://drive.google.com/file/d/1QWlBufGUhzVWdXcCN7aRH2bqxKNkgyGZ/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'La Puerta del Ocultismo y la Sanidad Espiritual',
      descripcion: 'Estudio de liberación y discernimiento frente a corrientes esotéricas.',
      url: 'https://drive.google.com/file/d/1sddZdMkfslLY2XDAI00sTcmA5kyVdazk/view?usp=sharing',
    },
    {
      tipo: 'audio',
      titulo: 'Manual de supervivencia para la mente moderna',
      descripcion: 'Audio conferencia sobre la preservación de la identidad cristiana.',
      url: 'https://drive.google.com/file/d/1pyFOFNsZFW3jzMHvQidpBQjTJIcZxpGY/view?usp=sharing',
    },
    {
      tipo: 'audio',
      titulo: 'Reprogramar la mente con ciencia y fe',
      descripcion: 'Audio formativo sobre la renovación del pensamiento bíblico.',
      url: 'https://drive.google.com/file/d/1I9bYOsm82ZpRCuOAzHz4Az2E6pfbsNiu/view?usp=sharing',
    },
    {
      tipo: 'audio',
      titulo: 'Liderazgo ético para desmantelar la Matrix',
      descripcion: 'Audio sobre carácter, verdad y oposición a los engaños del sistema.',
      url: 'https://drive.google.com/file/d/1PaXcekcyp4PDD8FUZrJilNQq6AnPbhKm/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: 'La Arquitectura de la Fe',
      descripcion: 'Video introductorio sobre la visión bíblica del ser humano integral.',
      url: 'https://drive.google.com/file/d/1AEXE_Fz9RbJ5ia4XDP3fhYabhFZm9YbG/view?usp=sharing',
    },
    {
      tipo: 'diapositivas',
      titulo: 'Blueprint of the Soul',
      descripcion: 'Presentación PPTX sobre las huellas del Creador en el diseño humano.',
      url: 'https://drive.google.com/file/d/1KOVrLaGJgMeOWeM1Rc--nqLQlciHHapB/view?usp=sharing',
    },
    {
      tipo: 'diapositivas',
      titulo: 'Anatomy of Integral Faith',
      descripcion: 'Presentación PPTX sobre la estructura integral de la fe y la razón.',
      url: 'https://drive.google.com/file/d/1gEHsES5PiehR6hLGVfqkkHrmdLS5IXvw/view?usp=sharing',
    },
    {
      tipo: 'diapositivas',
      titulo: 'Synaptic Architectures of Faith',
      descripcion: 'Presentación PPTX sobre neurobiología y fe trascendente.',
      url: 'https://drive.google.com/file/d/1SHnMiH-vY5X98aryUHUgtqOxpj15whJm/view?usp=sharing',
    },
    {
      tipo: 'infografia',
      titulo: 'Biblia y ciencia moderna',
      descripcion: 'Infografía comparativa de la exactitud bíblica y descubrimientos científicos.',
      url: 'https://drive.google.com/file/d/1fUuM55vMAtXcrDHRt08nOFmT27PIxc2N/view?usp=sharing',
    }
  ],
  2: [
    {
      tipo: 'documento',
      titulo: 'La Gracia Transformadora según Luis Palau',
      descripcion: 'Teología de la gracia incondicional frente al legalismo religioso.',
      url: 'https://drive.google.com/file/d/1uijHN6bQrVeeVb9tzWulmApWnRf0dSlZ/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Capacitación Bíblica Didáctica: Doctrina y Verdad',
      descripcion: 'Manual didáctico sobre inerrancia bíblica, hermenéutica y fundamentos.',
      url: 'https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing',
    },
    {
      tipo: 'audio',
      titulo: 'Liderazgo ético para desmantelar la Matrix',
      descripcion: 'Audio conferencia de alineamiento doctrinal y testimonio cristiano.',
      url: 'https://drive.google.com/file/d/1PaXcekcyp4PDD8FUZrJilNQq6AnPbhKm/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: 'La Arquitectura de la Fe',
      descripcion: 'Fundamentos de la relación con Dios y la regeneración espiritual.',
      url: 'https://drive.google.com/file/d/1AEXE_Fz9RbJ5ia4XDP3fhYabhFZm9YbG/view?usp=sharing',
    },
    {
      tipo: 'diapositivas',
      titulo: 'Anatomy of Integral Faith',
      descripcion: 'Presentación PPTX sobre la solidez de la verdad revelada en Cristo.',
      url: 'https://drive.google.com/file/d/1gEHsES5PiehR6hLGVfqkkHrmdLS5IXvw/view?usp=sharing',
    },
    {
      tipo: 'infografia',
      titulo: 'El camino de la transformación',
      descripcion: 'Infografía esquemática sobre el proceso de crecimiento en la gracia.',
      url: 'https://drive.google.com/file/d/1daWEfm12Nd2rFBKyhqbU53LiAX24I8l7/view?usp=sharing',
    }
  ],
  3: [
    {
      tipo: 'video',
      titulo: 'Sanidad Interior (Masterclass en Video)',
      descripcion: 'Video clase completa sobre el proceso de sanidad integral del alma.',
      url: 'https://drive.google.com/file/d/1C9csMx-dO2MPO1CX2m263pjRQBAMRMoQ/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Las Cuatro Puertas de la Sanidad Integral',
      descripcion: 'Tratado completo del modelo de sanidad en espíritu, alma, cuerpo y relaciones.',
      url: 'https://drive.google.com/file/d/17Gunh557Kd2-FXALqC3f9Xbl9wx1Ukkw/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Las Cuatro Puertas de la Sanidad Interior (Guía)',
      descripcion: 'Guía práctica de aplicación paso a paso para ministración y autocuidado.',
      url: 'https://drive.google.com/file/d/1gsl-uRfx_4mMmLYsv3EGyDExyHv3NIGo/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Cerrando la Puerta del Pecado: Sanidad y Arrepentimiento',
      descripcion: 'Manual sobre arrepentimiento genuino y cierre de accesos espirituales.',
      url: 'https://drive.google.com/file/d/1mA9LFJ1cPiLRxegIdvGiqAOhfWBPN01f/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Restauración Espiritual: Cerrando la Puerta del Pecado',
      descripcion: 'Principios de liberación de la culpa y restauración de la pureza en Cristo.',
      url: 'https://drive.google.com/file/d/1MDvtuoY6JGnKR3t0cdWNRSyzPAfqWCZw/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Sanidad Interior: El Cierre de la Puerta del Pecado',
      descripcion: 'Documento de profundización pastoral y práctica restaurativa.',
      url: 'https://drive.google.com/file/d/1SQ3K_hqgl2ut8aQsPK4Cpzf8r_TAqPWQ/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Sanando el Alma: El Proceso para Cerrar Heridas Emocionales',
      descripcion: 'Pedagogía del perdón, duelo saludable y superación de traumas pasados.',
      url: 'https://drive.google.com/file/d/1tDTxhxmJNw6CHxkNvccMUvonm7jNSBTD/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'La Puerta de la Herencia: Sanidad y Legado Generacional',
      descripcion: 'Estudio de patrones transgeneracionales, herencia familiar y libertad en Cristo.',
      url: 'https://drive.google.com/file/d/1apGnVhDByOik4mZnXh8naiAUjlhBji8k/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Sanidad de la Herencia: Rompiendo Ciclos Transgeneracionales',
      descripcion: 'Manual para cortar ataduras familiares y establecer una bendición generacional.',
      url: 'https://drive.google.com/file/d/1YlfBq_tlAZhtWZLkjkQgxQrEvnxm0QXd/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'La Farmacia Interna: Biología del Bienestar y las Emociones',
      descripcion: 'Bases neurobiológicas, neurotransmisores y manejo de la ansiedad y el estrés.',
      url: 'https://drive.google.com/file/d/1Y_4svqVCmuHbVrCtbOqPMjP93vfyEKa9/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Neurociencia de la Oración: Renovación y Plasticidad Cerebral',
      descripcion: 'Impacto de la oración y la meditación bíblica en las redes sinápticas cerebrales.',
      url: 'https://drive.google.com/file/d/1AAWYKVvBnUg8jbQkGmmN1fqQGqbfySn_/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Manual de Metodología: Fortalecimiento del Rol Paterno',
      descripcion: 'Sanidad emocional en la niñez, paternidad afectiva y afirmación de identidad.',
      url: 'https://drive.google.com/file/d/14ccR9gRq_nbJszUUZ0cGT1o_oA6pYY_Q/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'El Legado Paterno en el Destino de la Hija',
      descripcion: 'Investigación sobre la influencia formativa de la figura paterna en la familia.',
      url: 'https://drive.google.com/file/d/10klRzCaQK51Rcvx1ysIsVIJvGTSJ6W1o/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Crianza y Disciplina según el Temperamento Infantil',
      descripcion: 'Orientación pedagógica para educar con sabiduría respetando el diseño personal.',
      url: 'https://drive.google.com/file/d/1Km7pi9L6Qg8G-Khtm2f2wwIgL6wtxLhy/view?usp=sharing',
    },
    {
      tipo: 'audio',
      titulo: 'Sanar heridas emocionales con neurociencia y perdón',
      descripcion: 'Audio conferencia sobre la ciencia del perdón y la cicatrización emocional.',
      url: 'https://drive.google.com/file/d/1Owa_AbI7zePGy6BVToAq5IfKTdLVzJYs/view?usp=sharing',
    },
    {
      tipo: 'audio',
      titulo: 'Reescribe tu ADN sanando traumas heredados',
      descripcion: 'Audio sobre epigenética espiritual, trauma transgeneracional y gracia redentora.',
      url: 'https://drive.google.com/file/d/19bSkVJGUFJDBXXjHzeUNE59nl-nFsVxM/view?usp=sharing',
    },
    {
      tipo: 'audio',
      titulo: 'Sanar la mente con ciencia y fe',
      descripcion: 'Audio sobre el equilibrio entre la salud mental y la vida del espíritu.',
      url: 'https://drive.google.com/file/d/1WkGc8F2M7505qTLYDJoAljX-fMqx7agH/view?usp=sharing',
    },
    {
      tipo: 'diapositivas',
      titulo: 'Anatomía de la Restauración',
      descripcion: 'Presentación PPTX sobre las etapas de restauración del alma.',
      url: 'https://drive.google.com/file/d/1M70OdP18gYisfmn0fj5n0X5F7yIWuB1w/view?usp=sharing',
    },
    {
      tipo: 'infografia',
      titulo: 'Guía de Sanidad Interior Integral',
      descripcion: 'Infografía visual que sintetiza las 4 puertas de la sanidad.',
      url: 'https://drive.google.com/file/d/1oYzasxFeFgxyG5kjW54wmcZ9KDrfnHFR/view?usp=sharing',
    },
    {
      tipo: 'infografia',
      titulo: 'Guía para la Sanidad Integral',
      descripcion: 'Esquema gráfico del camino hacia la plenitud física, mental y espiritual.',
      url: 'https://drive.google.com/file/d/1g6Y4i3Sh9ATBbj-CJyuIWrAXWx5nJ37R/view?usp=sharing',
    },
    {
      tipo: 'infografia',
      titulo: 'Restaurando el alma: Sanidad integral',
      descripcion: 'Infografía sobre la recuperación de las emociones heridas.',
      url: 'https://drive.google.com/file/d/16aIfn6IjAdfxHl_39uE6iTHKVObZhWLu/view?usp=sharing',
    },
    {
      tipo: 'infografia',
      titulo: 'Sanidad integral: Mente y espíritu',
      descripcion: 'Infografía sobre la armonía entre el cerebro y la dimensión espiritual.',
      url: 'https://drive.google.com/file/d/1DpTDzZ-z0HGIF9-RAyuWuLnizptCE5e2/view?usp=sharing',
    }
  ],
  4: [
    {
      tipo: 'documento',
      titulo: 'Iglesia Hospital: Un Refugio de Gracia para el Alma Deshecha',
      descripcion: 'El modelo ministerial de la iglesia como sanatorio espiritual de gracia.',
      url: 'https://drive.google.com/file/d/16r4cjBHBSMtbiaebxge0lDu7WeyLalYs/view?usp=sharing',
    },
    {
      tipo: 'documento',
      titulo: 'Capacitación Bíblica Didáctica (Manual de Mayordomía y Liderazgo)',
      descripcion: 'Manual de liderazgo formativo, finanzas transparentes y multiplicación.',
      url: 'https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing',
    },
    {
      tipo: 'audio',
      titulo: 'Sanar el cerebro para poder liderar',
      descripcion: 'Audio formativo sobre la salud emocional y la madurez neural del líder cristiano.',
      url: 'https://drive.google.com/file/d/1_j3CzYPxb61EumbtCU8orSF4jLNi9lBU/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: '01 - El Porqué de las Células',
      descripcion: 'Video: Fundamentos y propósito primordial de los grupos pequeños en las casas.',
      url: 'https://drive.google.com/file/d/12wKtuo0t2nT1U-luBrXcmf5QxPhK-EOT/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: '02 - Planeando la Célula 1',
      descripcion: 'Video: Preparación espiritual, operativa y organizativa de la reunión celular.',
      url: 'https://drive.google.com/file/d/15TbzdtD2zbEgVWAqH0hiNWeQlWVvtwju/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: '03 - Planeando la Célula 2',
      descripcion: 'Video: Metodología, dinámicas y seguimiento práctico de la célula.',
      url: 'https://drive.google.com/file/d/10JEvecOlHIx75I-6RIJDwofu-6NbJK9i/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: '04 - Fundamentos Bíblicos de la Célula',
      descripcion: 'Video: Raíces en el Nuevo Testamento y el ministerio en hogares de la iglesia primitiva.',
      url: 'https://drive.google.com/file/d/1skTVlD5iMUom3CfEJy2leLh7sH0Gy3Ca/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: '05 - Los Integrantes de la Célula',
      descripcion: 'Video: Perfil, roles y formación de discípulos en los grupos pequeños.',
      url: 'https://drive.google.com/file/d/1SCss1u3nryp_rl0O_50h5E4ozu9dgUx-/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: '06 - La Importancia de las Metas',
      descripcion: 'Video: Enfoque, visión y metas claras para la multiplicación celular.',
      url: 'https://drive.google.com/file/d/1dNNXI8i1GOgqan5FlnoKbJEh30suXXlm/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: '07 - El Programa de la Célula',
      descripcion: 'Video: Estructura, tiempos y conducción paso a paso de la reunión semanal.',
      url: 'https://drive.google.com/file/d/1AGccPXB4rt8k6aGkpbU-HpaUFtIe63w_/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: '08 - Las Características del Líder',
      descripcion: 'Video: Cualidades de carácter, madurez y corazón de pastor que requiere el líder.',
      url: 'https://drive.google.com/file/d/12qqMpnRJzv2MHQgidbsnKpxT0c-ASKqr/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: '09 - Lo que se espera del Líder (Parte 1)',
      descripcion: 'Video: Responsabilidades, ejemplo de vida y visión pastoral del líder de célula.',
      url: 'https://drive.google.com/file/d/1K2_c73xGGqK8h2BVBqFenDyM8pNoUkbz/view?usp=sharing',
    },
    {
      tipo: 'video',
      titulo: '10 - Lo que se espera del Líder (Parte 2)',
      descripcion: 'Video: Cuidado espiritual de los miembros, pastoreo personalizado y multiplicación.',
      url: 'https://drive.google.com/file/d/13VphPrqjB_fcfkCiNJJkxcGQTYI5cIi5/view?usp=sharing',
    }
  ]
};

export const enriquecimientoPorLeccion: Record<string, EnriquecimientoLeccion> = {
  "1-1": {
    "ejemplos": [
      {
        "titulo": "Ingeniería de la distracción",
        "contenido": "El sistema diseña deliberadamente la distracción permanente: notificaciones, scroll infinito y contenido efímero. Cada segundo de atención capturada se monetiza. El resultado es una mente incapaz de sostener la reflexión profunda, condición necesaria para el discernimiento espiritual. Desconectar una hora al día para orar y meditar en la Palabra es un acto de resistencia ante la Matrix."
      },
      {
        "titulo": "Transhumanismo y los límites divinos a la longevidad",
        "contenido": "El transhumanismo promete superar los límites humanos mediante tecnología, buscando incluso la inmortalidad. Pero Génesis 6:3 fija un techo: 'No contenderá mi espíritu con el hombre para siempre, pues él es carne; mas serán sus días ciento veinte años'. La pretensión de trascender el diseño divino repite el error de la torre de Babel: el hombre intentando alcanzar el cielo por sus propios medios, sin Dios."
      }
    ],
    "recursos": [
      {
        "tipo": "audio",
        "titulo": "Manual de supervivencia para la mente moderna",
        "descripcion": "Audio didáctico sobre cómo resistir el bombardeo ideológico de los sistemas del mundo.",
        "url": "https://drive.google.com/file/d/1pyFOFNsZFW3jzMHvQidpBQjTJIcZxpGY/view?usp=sharing"
      },
      {
        "tipo": "audio",
        "titulo": "Liderazgo ético para desmantelar la Matrix",
        "descripcion": "Audio conferencia sobre la ética cristiana frente a los engaños del sistema secular.",
        "url": "https://drive.google.com/file/d/1PaXcekcyp4PDD8FUZrJilNQq6AnPbhKm/view?usp=sharing"
      },
      {
        "tipo": "audio",
        "titulo": "Reprogramar la mente con ciencia y fe",
        "descripcion": "Audio apologético sobre cómo renovar el entendimiento frente al sistema con base bíblica y científica.",
        "url": "https://drive.google.com/file/d/1I9bYOsm82ZpRCuOAzHz4Az2E6pfbsNiu/view?usp=sharing"
      },
      {
        "tipo": "infografia",
        "titulo": "Biblia y ciencia moderna",
        "descripcion": "Infografía que muestra la convergencia entre la Escritura y los descubrimientos científicos.",
        "url": "https://drive.google.com/file/d/1fUuM55vMAtXcrDHRt08nOFmT27PIxc2N/view?usp=sharing"
      }
    ]
  },
  "1-2": {
    "ejemplos": [
      {
        "titulo": "El ADN como código digital de información",
        "contenido": "En 1954, Watson y Crick descubrieron la estructura de doble hélice del ADN. Lo que revelaron es que el ADN no es una simple sustancia química, sino un código digital de información: cuatro bases (A, T, G, C) que funcionan como letras, organizadas en secuencias que instruyen a la célula. Todo código conocido proviene de una mente; nunca se ha observado que el azar genere información funcional. Esto apunta a un Diseñador inteligente como fuente de la vida."
      },
      {
        "titulo": "Las leyes de Mendel y los límites genéticos",
        "contenido": "Los experimentos de Gregor Mendel demostraron que la herencia sigue patrones definidos: los rasgos se transmiten mediante genes, y hay límites insuperables entre especies. La microevolución (variación dentro de una especie, como razas de perros) es observable y bíblicamente compatible. La macroevolución (una especie transformándose en otra distinta) nunca ha sido observada ni demostrada; los límites genéticos lo impiden. Cada especie reproduce 'según su género', como afirma Génesis 1."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "Capacitación Bíblica Didáctica (Apologética y Ciencia)",
        "descripcion": "Documento PDF de apoyo curricular con el desarrollo completo de apologética y evidencia científica.",
        "url": "https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing"
      },
      {
        "tipo": "audio",
        "titulo": "Reprogramar la mente con ciencia y fe",
        "descripcion": "Audio conferencia que desmonta dogmas materialistas y expone la coherencia científica de la fe.",
        "url": "https://drive.google.com/file/d/1I9bYOsm82ZpRCuOAzHz4Az2E6pfbsNiu/view?usp=sharing"
      },
      {
        "tipo": "diapositivas",
        "titulo": "Anatomy of Integral Faith",
        "descripcion": "Presentación PPTX sobre la anatomía de la fe integral y la racionalidad del diseño.",
        "url": "https://drive.google.com/file/d/1gEHsES5PiehR6hLGVfqkkHrmdLS5IXvw/view?usp=sharing"
      },
      {
        "tipo": "infografia",
        "titulo": "Biblia y ciencia moderna",
        "descripcion": "Infografía que confronta la ciencia materialista con la evidencia del diseño inteligente.",
        "url": "https://drive.google.com/file/d/1fUuM55vMAtXcrDHRt08nOFmT27PIxc2N/view?usp=sharing"
      }
    ]
  },
  "1-3": {
    "ejemplos": [
      {
        "titulo": "El espejismo del hedonismo contemporáneo",
        "contenido": "La cultura contemporánea promueve la búsqueda incesante de placer y éxito material como sustituto del propósito trascendente. Sin embargo, los estudios psicológicos constatan que el vacío existencial y las tasas de depresión aumentan proporcionalmente a la desconexión espiritual. Como observó Salomón en Eclesiastés, 'todo es vanidad y aflicción de espíritu' cuando se vive al margen del Creador."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "La Amargura del Ateísmo y el Vacío Existencial",
        "descripcion": "Documento en PDF que analiza la crisis de sentido y las consecuencias existenciales del secularismo.",
        "url": "https://drive.google.com/file/d/1QWlBufGUhzVWdXcCN7aRH2bqxKNkgyGZ/view?usp=sharing"
      },
      {
        "tipo": "audio",
        "titulo": "Manual de supervivencia para la mente moderna",
        "descripcion": "Audio conferencia sobre la preservación del alma frente a las modas culturales efímeras.",
        "url": "https://drive.google.com/file/d/1pyFOFNsZFW3jzMHvQidpBQjTJIcZxpGY/view?usp=sharing"
      }
    ]
  },
  "1-7": {
    "ejemplos": [
      {
        "titulo": "El engaño del ocultismo secularizado",
        "contenido": "El ocultismo moderno se disfraza con frecuencia de 'energía universal', astrología o autodesarrollo místico. La Biblia advierte categóricamente que estas prácticas abren puertas a potestades contrarias a la verdad de Dios (Deuteronomio 18:10-12). Renunciar explícitamente a todo involucramiento en lo oculto y refugiarse en Jesucristo es el único camino para la libertad interior genuina."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "La Puerta del Ocultismo y la Sanidad Espiritual",
        "descripcion": "Tratado pastoral en PDF sobre discernimiento, liberación y cierre definitivo de puertas espirituales.",
        "url": "https://drive.google.com/file/d/1sddZdMkfslLY2XDAI00sTcmA5kyVdazk/view?usp=sharing"
      }
    ]
  },
  "1-8": {
    "ejemplos": [
      {
        "titulo": "La Segunda Ley de la Termodinámica (ΔS ≥ 0)",
        "contenido": "Esta ley establece que en un sistema cerrado la entropía (desorden) siempre aumenta. Es decir, el universo tiende a la degeneración, no a la organización espontánea. Esto contradice la idea de un universo que se ordena a sí mismo por azar. Si el universo siempre hubiera estado degenerándose, ya habría llegado al desorden total; el hecho de que aún tenga energía utilizable indica que tuvo un comienzo (Génesis 1:1: 'En el principio creó Dios los cielos y la tierra')."
      },
      {
        "titulo": "Análisis lingüístico del Génesis: Bara, Asah y Yatzar",
        "contenido": "El hebreo del Génesis distingue tres verbos: Bara (crear de la nada, exclusivo de Dios), Asah (fabricar a partir de material existente) y Yatzar (moldear, como un alfarero). Génesis 1:1 usa Bara: el universo fue creado de la nada. En Génesis 1:2, la tierra estaba 'desordenada y vacía' (Tohu va-Vohu), lo que sugiere un estado de caos previo a la ordenación divina. Este análisis refuta la idea de que la creación fue un proceso ciego y confirma un Diseñador que ordena con propósito."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "Capacitación Bíblica Didáctica (Apologética y Ciencia)",
        "descripcion": "Documento PDF con el desarrollo riguroso de las evidencias cosmológicas, biológicas y termodinámicas.",
        "url": "https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing"
      },
      {
        "tipo": "diapositivas",
        "titulo": "Blueprint of the Soul",
        "descripcion": "Presentación PPTX sobre el diseño del alma y las evidencias del Creador.",
        "url": "https://drive.google.com/file/d/1KOVrLaGJgMeOWeM1Rc--nqLQlciHHapB/view?usp=sharing"
      },
      {
        "tipo": "diapositivas",
        "titulo": "Synaptic Architectures of Faith",
        "descripcion": "Presentación PPTX sobre la conexión entre la arquitectura cerebral y la búsqueda de Dios.",
        "url": "https://drive.google.com/file/d/1SHnMiH-vY5X98aryUHUgtqOxpj15whJm/view?usp=sharing"
      },
      {
        "tipo": "infografia",
        "titulo": "Biblia y ciencia moderna",
        "descripcion": "Infografía comparativa de la armonía entre la revelación bíblica y la física contemporánea.",
        "url": "https://drive.google.com/file/d/1fUuM55vMAtXcrDHRt08nOFmT27PIxc2N/view?usp=sharing"
      }
    ]
  },
  "2-1": {
    "ejemplos": [
      {
        "titulo": "La teología de la gracia (Tito 3:4-5)",
        "contenido": "Luis Palau definía la gracia a partir de Tito 3:4-5: 'Pero cuando se manifestó la bondad de Dios nuestro Salvador, y su amor para con los hombres, nos salvó... por el lavamiento de la regeneración y por la renovación en el Espíritu Santo'. La gracia es amor, bondad y misericordia inmerecida. No es solo el perdón inicial, sino el motor continuo de la santidad: no tratamos de ser buenos para que Dios nos acepte; somos aceptados por gracia, y desde esa aceptación crecemos en santidad con gozo."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "La Gracia Transformadora según Luis Palau",
        "descripcion": "Estudio teológico en PDF sobre la gracia de Dios, la redención incondicional y la vida en el Espíritu.",
        "url": "https://drive.google.com/file/d/1uijHN6bQrVeeVb9tzWulmApWnRf0dSlZ/view?usp=sharing"
      },
      {
        "tipo": "infografia",
        "titulo": "El camino de la transformación",
        "descripcion": "Infografía visual con las etapas formativas de la vida transformada por la gracia.",
        "url": "https://drive.google.com/file/d/1daWEfm12Nd2rFBKyhqbU53LiAX24I8l7/view?usp=sharing"
      }
    ]
  },
  "2-2": {
    "ejemplos": [
      {
        "titulo": "Desmantelando el legalismo y la religiosidad",
        "contenido": "Romper los paradigmas de la Matrix requiere distinguir entre las tradiciones de los hombres y el mandamiento vivo de Dios. Las estructuras religiosas que imponen cargas pesadas ahogan la vida espiritual; Cristo vino para darnos vida y vida en abundancia a través del Espíritu."
      }
    ],
    "recursos": [
      {
        "tipo": "audio",
        "titulo": "Liderazgo ético para desmantelar la Matrix",
        "descripcion": "Audio conferencia sobre la renovación del carácter y la verdad del Evangelio.",
        "url": "https://drive.google.com/file/d/1PaXcekcyp4PDD8FUZrJilNQq6AnPbhKm/view?usp=sharing"
      },
      {
        "tipo": "documento",
        "titulo": "Capacitación Bíblica Didáctica: Doctrina y Verdad",
        "descripcion": "Manual en PDF sobre los fundamentos doctrinales inmutables de la fe.",
        "url": "https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing"
      }
    ]
  },
  "2-3": {
    "ejemplos": [
      {
        "titulo": "El diseño original en el Edén y la restauración en Cristo",
        "contenido": "En el Edén, Dios diseñó al ser humano para caminar en perfecta armonía con Él, consigo mismo y con su prójimo. La caída fracturó las tres dimensiones (espíritu, alma y cuerpo). La redención en Jesucristo no es solo perdón legal, sino una restauración progresiva hacia el modelo y la estatura de la plenitud de Cristo."
      }
    ],
    "recursos": [
      {
        "tipo": "video",
        "titulo": "La Arquitectura de la Fe",
        "descripcion": "Video de estudio que profundiza en la estructura tripartita del ser humano según 1 Tesalonicenses 5:23.",
        "url": "https://drive.google.com/file/d/1AEXE_Fz9RbJ5ia4XDP3fhYabhFZm9YbG/view?usp=sharing"
      },
      {
        "tipo": "diapositivas",
        "titulo": "Anatomy of Integral Faith",
        "descripcion": "Presentación PPTX sobre la anatomía de la fe viva y el diseño redentor de Dios.",
        "url": "https://drive.google.com/file/d/1gEHsES5PiehR6hLGVfqkkHrmdLS5IXvw/view?usp=sharing"
      }
    ]
  },
  "2-4": {
    "ejemplos": [
      {
        "titulo": "La Estela de Tel Dan y el Rey David",
        "contenido": "Durante décadas los críticos afirmaron que el rey David era un personaje legendario, pues no existía evidencia arqueológica fuera de la Biblia. En 1993 se descubrió la Estela de Tel Dan, una inscripción del siglo IX a.C. que menciona explícitamente la 'Casa de David'. Este hallazgo confirmó que David fue una figura histórica real y que su dinastía existió, tal como relata la Escritura."
      },
      {
        "titulo": "El Cilindro de Ciro",
        "contenido": "El profeta Isaías (44:28; 45:1) nombró a Ciro como libertador de Israel casi 150 años antes de que naciera. El Cilindro de Ciro, descubierto en 1879, confirma el decreto persa que permitió a los judíos regresar a Jerusalén y reconstruir el templo. La profecía bíblica y la arqueología coinciden con precisión asombrosa."
      },
      {
        "titulo": "El osario de Caifás y el papiro Rylands",
        "contenido": "En 1990 se halló un osario (caja de huesos) con la inscripción 'José, hijo de Caifás', coincidiendo con el sumo sacerdote que juzgó a Jesús. Por su parte, el papiro Rylands (P52), fechado hacia el año 125 d.C., es el fragmento más antiguo del Nuevo Testamento y confirma que el Evangelio de Juan circuló a principios del siglo II, refutando la idea de que los Evangelios fueron escritos mucho después."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "Capacitación Bíblica Didáctica: Confiabilidad Arqueológica",
        "descripcion": "Manual en PDF sobre los descubrimientos arqueológicos y documentales que avalan la veracidad bíblica.",
        "url": "https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing"
      }
    ]
  },
  "2-5": {
    "ejemplos": [
      {
        "titulo": "La unidad armónica de 66 libros a lo largo de 1,500 años",
        "contenido": "La Biblia fue escrita por más de 40 autores de diferentes profesiones (reyes, pastores, médicos, pescadores) a lo largo de 1,500 años y en tres continentes. A pesar de esa diversidad, mantiene un único hilo conductor inquebrantable: el plan de redención a través del Mesías. Esta unidad orgánica es una evidencia irrefutable de su inspiración divina por el Espíritu Santo."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "Capacitación Bíblica Didáctica (Manual Completo)",
        "descripcion": "Manual de formación que detalla la estructura, canonicidad y valor perenne de las Sagradas Escrituras.",
        "url": "https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing"
      }
    ]
  },
  "2-6": {
    "ejemplos": [
      {
        "titulo": "Legalismo farisaico vs. transformación interna",
        "contenido": "Jesús confrontó el legalismo farisaico: los fariseos cumplían meticulosamente reglas externas (diezmar la menta y el eneldo) pero descuidaban la justicia y la misericordia (Mateo 23:23). El legalismo mide la espiritualidad por apariencias y reglas humanas, pero no transforma el corazón. El Evangelio, en cambio, opera de adentro hacia afuera: del corazón transformado brotan las obras, no al revés. La gracia produce una santidad alegre y permanente; el legalismo produce agotamiento e hipocresía."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "La Gracia Transformadora según Luis Palau",
        "descripcion": "Estudio teológico que desmantela el moralismo religioso y entroniza la gracia salvadora.",
        "url": "https://drive.google.com/file/d/1uijHN6bQrVeeVb9tzWulmApWnRf0dSlZ/view?usp=sharing"
      },
      {
        "tipo": "infografia",
        "titulo": "El camino de la transformación",
        "descripcion": "Infografía didáctica que ilustra el avance del discípulo desde la religiosidad hacia la libertad en el Espíritu.",
        "url": "https://drive.google.com/file/d/1daWEfm12Nd2rFBKyhqbU53LiAX24I8l7/view?usp=sharing"
      }
    ]
  },
  "3-1": {
    "ejemplos": [
      {
        "titulo": "El modelo de las Cuatro Puertas (Bernardo Stamateas)",
        "contenido": "Stamateas propone que la sanidad integral atraviesa cuatro puertas del ser: la puerta del espíritu (comunión con Dios y renuncia a ataduras), la puerta del alma (pensamientos, emociones, voluntad y memoria — perdonar, renunciar a mentiras, renovar la mente), la puerta del cuerpo (hábitos, descanso, cuidado físico) y la puerta de las relaciones (reconciliación, límites sanos, vínculos restaurados). Sanar una sola puerta sin tocar las demás deja al ser incompleto; la obra de Cristo restaura las cuatro dimensiones."
      }
    ],
    "recursos": [
      {
        "tipo": "video",
        "titulo": "Sanidad Interior (Masterclass en Video)",
        "descripcion": "Video clase magistral sobre la sanidad del alma y el cierre de accesos al dolor y al resentimiento.",
        "url": "https://drive.google.com/file/d/1C9csMx-dO2MPO1CX2m263pjRQBAMRMoQ/view?usp=sharing"
      },
      {
        "tipo": "documento",
        "titulo": "Las Cuatro Puertas de la Sanidad Integral",
        "descripcion": "Manual completo en PDF que analiza las puertas del espíritu, alma, cuerpo y relaciones.",
        "url": "https://drive.google.com/file/d/17Gunh557Kd2-FXALqC3f9Xbl9wx1Ukkw/view?usp=sharing"
      },
      {
        "tipo": "documento",
        "titulo": "Las Cuatro Puertas de la Sanidad Interior (Guía Práctica)",
        "descripcion": "Guía práctica de aplicación personal para cerrar puertas al sufrimiento emocional.",
        "url": "https://drive.google.com/file/d/1gsl-uRfx_4mMmLYsv3EGyDExyHv3NIGo/view?usp=sharing"
      },
      {
        "tipo": "diapositivas",
        "titulo": "Anatomía de la Restauración",
        "descripcion": "Presentación PPTX sobre la anatomía de la restauración emocional y espiritual.",
        "url": "https://drive.google.com/file/d/1M70OdP18gYisfmn0fj5n0X5F7yIWuB1w/view?usp=sharing"
      },
      {
        "tipo": "infografia",
        "titulo": "Guía de Sanidad Interior Integral",
        "descripcion": "Infografía visual detallada de las 4 puertas y los pasos bíblicos para la restauración.",
        "url": "https://drive.google.com/file/d/1oYzasxFeFgxyG5kjW54wmcZ9KDrfnHFR/view?usp=sharing"
      },
      {
        "tipo": "infografia",
        "titulo": "Guía para la Sanidad Integral",
        "descripcion": "Esquema gráfico integral del restablecimiento del espíritu, mente y cuerpo.",
        "url": "https://drive.google.com/file/d/1g6Y4i3Sh9ATBbj-CJyuIWrAXWx5nJ37R/view?usp=sharing"
      }
    ]
  },
  "3-2": {
    "ejemplos": [
      {
        "titulo": "Identidad en Cristo vs. culpa destructiva",
        "contenido": "Una autoestima bíblica no se funda en el orgullo ni en la vanidad, sino en saberse hijo amado de Dios comprado a precio de sangre. Cerrar la puerta del pecado mediante el arrepentimiento y la confesión genuina rompe los ciclos de condenación y vergüenza, devolviendo al creyente su dignidad y valor en Cristo."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "Cerrando la Puerta del Pecado: Sanidad y Arrepentimiento",
        "descripcion": "Tratado en PDF sobre cómo cerrar las brechas espirituales causadas por el pecado.",
        "url": "https://drive.google.com/file/d/1mA9LFJ1cPiLRxegIdvGiqAOhfWBPN01f/view?usp=sharing"
      },
      {
        "tipo": "documento",
        "titulo": "Restauración Espiritual: Cerrando la Puerta del Pecado",
        "descripcion": "Manual sobre arrepentimiento sincero, purificación de la conciencia y libertad.",
        "url": "https://drive.google.com/file/d/1MDvtuoY6JGnKR3t0cdWNRSyzPAfqWCZw/view?usp=sharing"
      },
      {
        "tipo": "documento",
        "titulo": "Sanidad Interior: El Cierre de la Puerta del Pecado",
        "descripcion": "Guía práctica de sanidad interior enfocada en la renuncia al pecado oculto y la recepción del perdón.",
        "url": "https://drive.google.com/file/d/1SQ3K_hqgl2ut8aQsPK4Cpzf8r_TAqPWQ/view?usp=sharing"
      }
    ]
  },
  "3-3": {
    "ejemplos": [
      {
        "titulo": "Rol paterno, crianza y temperamentos (James Dobson)",
        "contenido": "James Dobson, fundador de Enfoque a la Familia, enseñó que el rol del padre es insustituible: provee identidad, seguridad y modelo de carácter. Cada hijo tiene un temperamento distinto (colérico, sanguíneo, melancólico, fleumático) y la crianza sabia se adapta al temperamento, sin comparar ni etiquetar. Disciplinar con amor y firmeza —no con ira ni con indiferencia— forma hijos emocionalmente sanos. La ausencia paterna deja un vacío que solo Dios Padre puede llenar plenamente."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "Manual de Metodología: Fortalecimiento del Rol Paterno y Sanidad Emocional",
        "descripcion": "Manual metodológico en PDF para sanar heridas de infancia y afirmar la paternidad bíblica.",
        "url": "https://drive.google.com/file/d/14ccR9gRq_nbJszUUZ0cGT1o_oA6pYY_Q/view?usp=sharing"
      },
      {
        "tipo": "documento",
        "titulo": "Crianza y Disciplina según el Temperamento Infantil",
        "descripcion": "Guía práctica sobre cómo educar y disciplinar en amor tomando en cuenta la personalidad del hijo.",
        "url": "https://drive.google.com/file/d/1Km7pi9L6Qg8G-Khtm2f2wwIgL6wtxLhy/view?usp=sharing"
      },
      {
        "tipo": "documento",
        "titulo": "El Legado Paterno en el Destino de la Hija",
        "descripcion": "Estudio formativo sobre la trascendencia de la afirmación paterna en el desarrollo femenino.",
        "url": "https://drive.google.com/file/d/10klRzCaQK51Rcvx1ysIsVIJvGTSJ6W1o/view?usp=sharing"
      }
    ]
  },
  "3-4": {
    "ejemplos": [
      {
        "titulo": "El poder de las palabras y la cicatrización del perdón",
        "contenido": "'La muerte y la vida están en poder de la lengua' (Proverbios 18:21). El lenguaje interno (lo que nos decimos a nosotros mismos) moldea nuestras emociones y actitudes. Sustituir los discursos de autocrítica y rencor por la verdad bíblica y ejercer el perdón deliberado activa mecanismos de paz neurológica y espiritual."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "Sanando el Alma: El Proceso para Cerrar Heridas Emocionales",
        "descripcion": "Documento en PDF sobre los pasos clínicos y espirituales para otorgar el perdón y sanar heridas.",
        "url": "https://drive.google.com/file/d/1tDTxhxmJNw6CHxkNvccMUvonm7jNSBTD/view?usp=sharing"
      },
      {
        "tipo": "audio",
        "titulo": "Sanar heridas emocionales con neurociencia y perdón",
        "descripcion": "Audio conferencia sobre la neuroquímica del perdón y la liberación del rencor.",
        "url": "https://drive.google.com/file/d/1Owa_AbI7zePGy6BVToAq5IfKTdLVzJYs/view?usp=sharing"
      },
      {
        "tipo": "infografia",
        "titulo": "Restaurando el alma: Sanidad integral",
        "descripcion": "Infografía visual sobre la recuperación del bienestar interior y el poder sanador del perdón.",
        "url": "https://drive.google.com/file/d/16aIfn6IjAdfxHl_39uE6iTHKVObZhWLu/view?usp=sharing"
      }
    ]
  },
  "3-5": {
    "ejemplos": [
      {
        "titulo": "Rompimiento de maldiciones generacionales y visión de futuro",
        "contenido": "Muchas limitaciones en la vida de una persona provienen de pactos no expresos o patrones de adicción, divorcio y escasez repetidos de generación en generación. Cristo nos redimió de la maldición de la ley (Gálatas 3:13). Al romper esas cadenas, podemos diseñar proyectos, metas y planes alineados al propósito divino."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "La Puerta de la Herencia: Sanidad y Legado Generacional",
        "descripcion": "Estudio bíblico en PDF sobre cómo identificar y sanar ataduras provenientes del linaje familiar.",
        "url": "https://drive.google.com/file/d/1apGnVhDByOik4mZnXh8naiAUjlhBji8k/view?usp=sharing"
      },
      {
        "tipo": "documento",
        "titulo": "Sanidad de la Herencia: Rompiendo Ciclos Transgeneracionales",
        "descripcion": "Guía práctica para cancelar maldiciones y desatar bendición generacional.",
        "url": "https://drive.google.com/file/d/1YlfBq_tlAZhtWZLkjkQgxQrEvnxm0QXd/view?usp=sharing"
      },
      {
        "tipo": "audio",
        "titulo": "Reescribe tu ADN sanando traumas heredados",
        "descripcion": "Audio sobre la epigenética del trauma, la herencia psicológica y la redención del ADN espiritual.",
        "url": "https://drive.google.com/file/d/19bSkVJGUFJDBXXjHzeUNE59nl-nFsVxM/view?usp=sharing"
      }
    ]
  },
  "3-6": {
    "ejemplos": [
      {
        "titulo": "Resolución de conflictos con autoridad espiritual",
        "contenido": "Los conflictos interpersonales no se ganan con agresión ni manipulación, sino con mansedumbre y firmeza espiritual. Cerrar la puerta a la ira y al rencor desactiva las maquinaciones del enemigo (Efesios 4:26-27), restaurando la paz en el hogar y en la congregación."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "La Puerta del Ocultismo y la Sanidad Espiritual",
        "descripcion": "Manual sobre el discernimiento de influencias espirituales en situaciones de conflicto y opresión.",
        "url": "https://drive.google.com/file/d/1sddZdMkfslLY2XDAI00sTcmA5kyVdazk/view?usp=sharing"
      }
    ]
  },
  "3-7": {
    "ejemplos": [
      {
        "titulo": "El patrón de Josafat: Orar, Pausar y Alabar",
        "contenido": "Ante una crisis, el rey Josafat no actuó impulsivamente. Su patrón (2 Crónicas 20) fue: 1) Orar — humillarse y clamar a Dios reconociendo que no tiene fuerza; 2) Pausar — esperar en silencio la respuesta sin precipitarse; 3) Alabar — enviar cantores delante del ejército, agradeciendo antes de ver la victoria. Aplicado hoy: ante una crisis, ora en lugar de reaccionar, pausa en lugar de decidir con miedo, y alaba antes de ver el resultado. La alabanza es declaración de fe que precede a la victoria."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "La Farmacia Interna: Biología del Bienestar y las Emociones",
        "descripcion": "Manual didáctico sobre cómo la paz de Dios activa endorfinas, serotonina y regula el sistema nervioso.",
        "url": "https://drive.google.com/file/d/1Y_4svqVCmuHbVrCtbOqPMjP93vfyEKa9/view?usp=sharing"
      }
    ]
  },
  "3-10": {
    "ejemplos": [
      {
        "titulo": "Neurociencia, neuroplasticidad y oración (Caroline Leaf)",
        "contenido": "La Dra. Caroline Leaf demostró que el cerebro es neuroplástico: se reconfigura según lo que pensamos. Cada pensamiento construye 'árboles neuronales'; los pensamientos repetidos se fortalecen y los que abandonamos se debilitan. La oración y la meditación en la Palabra no son solo ejercicios espirituales: producen cambios físicos medibles en el cerebro, fortaleciendo circuitos de paz, gratitud y esperanza. 'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento' (Romanos 12:2) tiene base neurocientífica: lo que piensas, moldea tu cerebro."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "Neurociencia de la Oración: Renovación y Plasticidad Cerebral",
        "descripcion": "Investigación en PDF sobre la plasticidad sináptica y la renovación biológica y mental mediante la oración.",
        "url": "https://drive.google.com/file/d/1AAWYKVvBnUg8jbQkGmmN1fqQGqbfySn_/view?usp=sharing"
      },
      {
        "tipo": "audio",
        "titulo": "Sanar la mente con ciencia y fe",
        "descripcion": "Audio conferencia magistral sobre la alianza entre la neurociencia y la fe para vencer la ansiedad.",
        "url": "https://drive.google.com/file/d/1WkGc8F2M7505qTLYDJoAljX-fMqx7agH/view?usp=sharing"
      },
      {
        "tipo": "diapositivas",
        "titulo": "Synaptic Architectures of Faith",
        "descripcion": "Presentación PPTX sobre los correlatos neuronales de la comunión con Dios y la paz interior.",
        "url": "https://drive.google.com/file/d/1SHnMiH-vY5X98aryUHUgtqOxpj15whJm/view?usp=sharing"
      },
      {
        "tipo": "infografia",
        "titulo": "Sanidad integral: Mente y espíritu",
        "descripcion": "Infografía que explica la interconexión entre la salud cerebral, las emociones y el espíritu.",
        "url": "https://drive.google.com/file/d/1DpTDzZ-z0HGIF9-RAyuWuLnizptCE5e2/view?usp=sharing"
      }
    ]
  },
  "4-1": {
    "ejemplos": [
      {
        "titulo": "La iglesia en el templo y por las casas (Hechos 2:46)",
        "contenido": "La iglesia del primer siglo creció exponencialmente porque combinaba la celebración comunitaria en el templo con el ministerio cercano en los hogares. El sistema celular es la estructura viva más efectiva para cuidar a cada miembro, discipular y formar nuevos obreros para la mies."
      }
    ],
    "recursos": [
      {
        "tipo": "video",
        "titulo": "01 - El Porqué de las Células",
        "descripcion": "Video: Visión primordial y fundamento bíblico del crecimiento a través de grupos celulares.",
        "url": "https://drive.google.com/file/d/12wKtuo0t2nT1U-luBrXcmf5QxPhK-EOT/view?usp=sharing"
      }
    ]
  },
  "4-2": {
    "ejemplos": [
      {
        "titulo": "Planificación estratégica del grupo celular",
        "contenido": "El éxito de una célula no se improvisa: depende de una oración ferviente previa, un equipo de apoyo comprometido y una estructura clara de bienvenida, edificación y visión evangelística."
      }
    ],
    "recursos": [
      {
        "tipo": "video",
        "titulo": "02 - Planeando la Célula 1",
        "descripcion": "Video instructivo sobre la planeación organizativa y espiritual de la célula.",
        "url": "https://drive.google.com/file/d/15TbzdtD2zbEgVWAqH0hiNWeQlWVvtwju/view?usp=sharing"
      }
    ]
  },
  "4-3": {
    "ejemplos": [
      {
        "titulo": "Multiplicación celular y desarrollo de anfitriones",
        "contenido": "La célula debe cuidar la atmósfera hogareña: el anfitrión abre las puertas de su casa, el líder facilita la lección y el asistente aprende para luego abrir un nuevo grupo, multiplicando el impacto del Reino."
      }
    ],
    "recursos": [
      {
        "tipo": "video",
        "titulo": "03 - Planeando la Célula 2",
        "descripcion": "Video instructivo sobre la dinámica relacional y el rol del anfitrión y los líderes.",
        "url": "https://drive.google.com/file/d/10JEvecOlHIx75I-6RIJDwofu-6NbJK9i/view?usp=sharing"
      }
    ]
  },
  "4-4": {
    "ejemplos": [
      {
        "titulo": "El modelo apostólico del discipulado cercano",
        "contenido": "Jesús invirtió la mayor parte de su ministerio en un grupo de doce personas. Los apóstoles continuaron este modelo delegando responsabilidades y comisionando líderes locales para que nadie se quedara sin atención pastoral."
      }
    ],
    "recursos": [
      {
        "tipo": "video",
        "titulo": "04 - Fundamentos Bíblicos de la Célula",
        "descripcion": "Video sobre las bases teológicas e históricas de los grupos pequeños en la Biblia.",
        "url": "https://drive.google.com/file/d/1skTVlD5iMUom3CfEJy2leLh7sH0Gy3Ca/view?usp=sharing"
      }
    ]
  },
  "4-5": {
    "ejemplos": [
      {
        "titulo": "Los roles complementarios en el cuerpo de Cristo",
        "contenido": "Cada miembro de la célula tiene dones únicos. Cuando los integrantes descubren su vocación (intercesores, facilitadores, anfitriones, evangelistas), la célula florece orgánicamente sin sobrecargar al líder principal."
      }
    ],
    "recursos": [
      {
        "tipo": "video",
        "titulo": "05 - Los Integrantes de la Célula",
        "descripcion": "Video formativo sobre la dinámica de los integrantes, asignación de roles y maduración colectiva.",
        "url": "https://drive.google.com/file/d/1SCss1u3nryp_rl0O_50h5E4ozu9dgUx-/view?usp=sharing"
      }
    ]
  },
  "4-6": {
    "ejemplos": [
      {
        "titulo": "Las Leyes del Liderazgo (John C. Maxwell)",
        "contenido": "Maxwell sintetizó principios como la 'Ley del Tope' (la capacidad del líder es el techo de la organización), la 'Ley de la Influencia' (el liderazgo es influencia, nada más, nada menos), la 'Ley del Proceso' (el liderazgo se desarrolla diariamente, no en un día) y la 'Ley de la Multiplicación' (un líder que forma líderes multiplica su impacto). Para el líder cristiano, estos principios se someten al servicio: 'El que quiera ser grande, sea vuestro servidor' (Mateo 20:26). La influencia bíblica se gana sirviendo, no dominando."
      }
    ],
    "recursos": [
      {
        "tipo": "audio",
        "titulo": "Sanar el cerebro para poder liderar",
        "descripcion": "Audio conferencia sobre la madurez emocional y el autocuidado psicológico del líder espiritual.",
        "url": "https://drive.google.com/file/d/1_j3CzYPxb61EumbtCU8orSF4jLNi9lBU/view?usp=sharing"
      },
      {
        "tipo": "video",
        "titulo": "06 - La Importancia de las Metas",
        "descripcion": "Video sobre visión clara, objetivos de crecimiento y enfoque hacia la multiplicación celular.",
        "url": "https://drive.google.com/file/d/1dNNXI8i1GOgqan5FlnoKbJEh30suXXlm/view?usp=sharing"
      },
      {
        "tipo": "video",
        "titulo": "08 - Las Características del Líder",
        "descripcion": "Video sobre el perfil bíblico, la integridad y el carácter necesario para liderar una célula.",
        "url": "https://drive.google.com/file/d/12qqMpnRJzv2MHQgidbsnKpxT0c-ASKqr/view?usp=sharing"
      },
      {
        "tipo": "video",
        "titulo": "09 - Lo que se espera del Líder (Parte 1)",
        "descripcion": "Video formativo sobre responsabilidades pastorales, testimonio y pastoreo individualizado.",
        "url": "https://drive.google.com/file/d/1K2_c73xGGqK8h2BVBqFenDyM8pNoUkbz/view?usp=sharing"
      },
      {
        "tipo": "video",
        "titulo": "10 - Lo que se espera del Líder (Parte 2)",
        "descripcion": "Video formativo sobre la formación de sucesores y la multiplicación de la célula.",
        "url": "https://drive.google.com/file/d/13VphPrqjB_fcfkCiNJJkxcGQTYI5cIi5/view?usp=sharing"
      }
    ]
  },
  "4-7": {
    "ejemplos": [
      {
        "titulo": "El modelo de Iglesia Hospital / Sanatorio (Dante Gebel)",
        "contenido": "Dante Gebel propone que la iglesia debe funcionar como un hospital espiritual: un lugar donde los heridos entran rotos y salen sanos. Esto exige abandonar la cultura del 'museo de santos' (donde todos aparentan perfección) y abrazar la honestidad: admitir heridas, confesar pecados, recibir oración y acompañamiento. Una iglesia-hospital tiene puertas abiertas, no juzga al recién llegado, ofrece seguimiento pastoral y celebra cada sanidad. 'Los sanos no tienen necesidad de médico, sino los enfermos' (Mateo 9:12)."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "Iglesia Hospital: Un Refugio de Gracia para el Alma Deshecha",
        "descripcion": "Tratado en PDF sobre la iglesia como sanatorio de gracia, perdón y restauración para los quebrantados.",
        "url": "https://drive.google.com/file/d/16r4cjBHBSMtbiaebxge0lDu7WeyLalYs/view?usp=sharing"
      },
      {
        "tipo": "video",
        "titulo": "07 - El Programa de la Célula",
        "descripcion": "Video instructivo sobre el desarrollo de una atmósfera de confianza y hospitalidad sanadora en la reunión.",
        "url": "https://drive.google.com/file/d/1AGccPXB4rt8k6aGkpbU-HpaUFtIe63w_/view?usp=sharing"
      }
    ]
  },
  "4-8": {
    "ejemplos": [
      {
        "titulo": "Mayordomía financiera transparente y voluntaria",
        "contenido": "La sustentabilidad de la iglesia se basa en dar alegre y voluntariamente (2 Corintios 9:7), nunca por manipulación, culpa ni presión. La transparencia es clave: los miembros deben saber cómo se administran los recursos. Los líderes deben ser ejemplo de honestidad, no enriquecerse a costa de la fe. El diezmo y las ofrendas son expresiones de fe y gratitud, no 'compras' de bendición. Una iglesia con finanzas sanas y transparentes es un testimonio poderoso al mundo y un entorno seguro para crecer."
      }
    ],
    "recursos": [
      {
        "tipo": "documento",
        "titulo": "Capacitación Bíblica Didáctica: Mayordomía y Finanzas",
        "descripcion": "Manual en PDF sobre administración bíblica, transparencia financiera y sustentabilidad eclesial.",
        "url": "https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing"
      }
    ]
  },
  "4-9": {
    "ejemplos": [
      {
        "titulo": "Evangelismo de masas y células de hogar (Grupos Presencia)",
        "contenido": "El evangelismo de masas (cruzadas, eventos) alcanza a muchos y despierta interés, pero la consolidación ocurre en las células de hogar: pequeños grupos donde se discipula, se cuidan las personas y se vive la comunión. El modelo de 'Grupos Presencia' combina ambos: la proclamación amplia y el cuidado cercano. La iglesia primitiva se reunía 'en el templo y por las casas' (Hechos 2:46). Ningún creyente se forma solo; cada uno necesita un grupo donde sea conocido, amado y discipulado."
      }
    ],
    "recursos": [
      {
        "tipo": "video",
        "titulo": "01 - El Porqué de las Células (Discipulado)",
        "descripcion": "Video sobre la integración del creyente en el proceso formativo de la célula y el discipulado bíblico.",
        "url": "https://drive.google.com/file/d/12wKtuo0t2nT1U-luBrXcmf5QxPhK-EOT/view?usp=sharing"
      },
      {
        "tipo": "documento",
        "titulo": "Capacitación Bíblica Didáctica (Manual Completo)",
        "descripcion": "Manual formativo curricular con toda la teología y pedagogía del seminario ministerial.",
        "url": "https://drive.google.com/file/d/1ueN_Wc3jmZ5XMXqZ8UEVPDPCpAfVYdWC/view?usp=sharing"
      }
    ]
  }
};

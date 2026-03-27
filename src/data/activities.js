/**
 * activities.js — Base de datos de actividades para Asturias de Verdad
 *
 * Cómo añadir una actividad nueva:
 * 1. Copia un objeto existente de la misma categoría
 * 2. Rellena todos los campos (id debe ser único)
 * 3. Asegúrate de que `category` coincide con una de las claves de CATEGORIES
 *
 * Campos:
 *   id          — string único (usa kebab-case)
 *   title       — nombre del lugar o actividad
 *   category    — una de: 'naturaleza' | 'gastronomia' | 'cultura' | 'deporte' | 'ninos' | 'eventos'
 *   location    — concejo o zona (ej: "Cangas de Onís", "Gijón")
 *   description — 1-2 frases concisas para el local que ya conoce el contexto
 *   tags        — array de etiquetas cortas (ideal para, dificultad, época, etc.)
 *   season      — 'todo el año' | 'primavera' | 'verano' | 'otoño' | 'invierno' | 'primavera-verano'
 */

export const CATEGORIES = {
  naturaleza:  { label: 'Naturaleza',        emoji: '🌿', color: 'forest' },
  gastronomia: { label: 'Gastronomía local', emoji: '🍎', color: 'bark'   },
  cultura:     { label: 'Cultura y tradiciones', emoji: '🎶', color: 'stone' },
  deporte:     { label: 'Deporte y aire libre',  emoji: '🏄', color: 'forest' },
  ninos:       { label: 'Con niños',         emoji: '🧒', color: 'bark'   },
  eventos:     { label: 'Eventos y agenda',  emoji: '📅', color: 'stone'  },
};

export const activities = [

  // ─── NATURALEZA ────────────────────────────────────────────────────────────

  {
    id: 'senda-del-oso',
    title: 'Senda del Oso',
    category: 'naturaleza',
    location: 'Quirós / Proaza',
    description:
      'Ruta lineal de 22 km por el valle del río Trubia, con recinto de osos pardos en semilibertad. Asfaltado liso apto para bici y carrito. Enlaza Tuñón con Entrago.',
    tags: ['bici', 'senderismo', 'familias', 'fácil'],
    season: 'todo el año',
  },
  {
    id: 'ruta-del-cares',
    title: 'Ruta del Cares',
    category: 'naturaleza',
    location: 'Cabrales / Valdeón',
    description:
      'El desfiladero más espectacular de los Picos de Europa. 12 km entre paredes verticales siguiendo el canal de la central hidroeléctrica. Llegar temprano para evitar la aglomeración de julio-agosto.',
    tags: ['senderismo', 'media dificultad', 'espectacular', 'Picos de Europa'],
    season: 'primavera-verano',
  },
  {
    id: 'lago-enol',
    title: 'Lagos de Covadonga',
    category: 'naturaleza',
    location: 'Cangas de Onís',
    description:
      'El Enol y La Ercina a 1.100 m. En temporada alta el acceso en coche está cortado — coger el autobús lanzadera desde el aparcamiento de Covadonga. Fuera de temporada el silencio es total.',
    tags: ['Picos de Europa', 'paisaje', 'fácil', 'senderismo corto'],
    season: 'primavera-verano',
  },
  {
    id: 'playa-gulpiyuri',
    title: 'Playa de Gulpiyuri',
    category: 'naturaleza',
    location: 'Llanes',
    description:
      'Playa interior de 40 metros alimentada por el mar a través de cuevas kársticas. Prácticamente imposible acceder en coche en verano — ir en bici desde Naves o a primera hora. Solo existe con marea alta.',
    tags: ['playa', 'única en Europa', 'marea alta', 'a pie'],
    season: 'verano',
  },
  {
    id: 'playa-ballota',
    title: 'Playa de Ballota',
    category: 'naturaleza',
    location: 'Llanes',
    description:
      'Una de las playas más virgenes del oriente asturiano. Acceso por pista sin asfalta (20 min andando). Nudista en parte. Acantilados verdes, agua clara, sin chiringuito.',
    tags: ['playa virgen', 'sin masificación', 'acantilados', 'andando'],
    season: 'verano',
  },
  {
    id: 'playa-toro',
    title: 'Playa de Toro',
    category: 'naturaleza',
    location: 'Llanes',
    description:
      'Arena blanca escondida entre acantilados, fuera de los radares turísticos más obvios. A 10 minutos andando desde el pueblo de Buelna.',
    tags: ['playa virgen', 'arena blanca', 'poco conocida'],
    season: 'verano',
  },
  {
    id: 'bosque-muniellos',
    title: 'Reserva de Muniellos',
    category: 'naturaleza',
    location: 'Cangas del Narcea',
    description:
      'El robledal atlántico mejor conservado de Europa. Acceso con permiso previo obligatorio (máx. 20 personas/día) — pide cita con semanas de antelación. Vale cada minuto de burocracia.',
    tags: ['reserva natural', 'permiso previo', 'robledal', 'fauna'],
    season: 'primavera-verano',
  },
  {
    id: 'playa-san-antolin',
    title: 'Playa de San Antolín',
    category: 'naturaleza',
    location: 'Llanes',
    description:
      'Larga playa semidesierta con dunas y pinar. El río Bedón desemboca aquí — los niños pueden jugar en el remanso. El camping al lado es un clásico de los asturianos del centro.',
    tags: ['playa', 'familias', 'río', 'camping cerca'],
    season: 'verano',
  },
  {
    id: 'pena-ubiña',
    title: 'Peña Ubiña',
    category: 'naturaleza',
    location: 'Teverga / Lena',
    description:
      'El techo del occidente asturiano con 2.417 m. Ruta desde La Mesa (Teverga) de 6 h AR con ganancia de 1.200 m. Solo para quien esté en forma — la recompensa son vistas a toda la cordillera.',
    tags: ['alta montaña', 'difícil', 'verano', 'experienced'],
    season: 'verano',
  },
  {
    id: 'desfiladero-hermida',
    title: 'Desfiladero de La Hermida',
    category: 'naturaleza',
    location: 'Peñamellera Baja',
    description:
      'Cañón espectacular por el que discurre el río Deva camino de Potes. Solo 20 km pero con paredes de 300 m. Hay pequeñas pozas para bañarse en verano. También acceso a Lebeña y su iglesia mozárabe.',
    tags: ['cañón', 'río', 'baño', 'románico'],
    season: 'todo el año',
  },

  // ─── GASTRONOMÍA LOCAL ─────────────────────────────────────────────────────

  {
    id: 'mercado-el-fontan',
    title: 'Mercado de El Fontán',
    category: 'gastronomia',
    location: 'Oviedo',
    description:
      'El mercado cubierto más antiguo de Oviedo (s. XIX), en el corazón de La Plaza del Fontán. Quesos, embutidos, verduras de huerta local. Los sábados hay más movimiento — llegar antes de las 11.',
    tags: ['mercado', 'queso', 'embutidos', 'sábados'],
    season: 'todo el año',
  },
  {
    id: 'mercado-sur-gijon',
    title: 'Mercado del Sur',
    category: 'gastronomia',
    location: 'Gijón',
    description:
      'Mercado renovado en el barrio de La Arena con una zona de bares de tapas fantástica. El erizos y los berberechos frescos son imprescindibles los viernes-sábados por la mañana.',
    tags: ['mercado', 'marisco', 'tapas', 'pescado fresco'],
    season: 'todo el año',
  },
  {
    id: 'espicha',
    title: 'Espicha de primavera',
    category: 'gastronomia',
    location: 'Todo Asturias',
    description:
      'La "espicha" es el ritual de abrir el barril nuevo. En primavera (marzo-mayo) muchos llagares y sidrerías organizan espichas abiertas con pote asturiano, chorizos a la sidra y queso. Pedir en cada sidrería local.',
    tags: ['sidra', 'tradición', 'marzo-mayo', 'llagar'],
    season: 'primavera',
  },
  {
    id: 'llagar-trabanco',
    title: 'Llagar Trabanco',
    category: 'gastronomia',
    location: 'Gijón / Sariego',
    description:
      'Uno de los llagares más reconocidos de Asturias, con visitas guiadas al proceso de elaboración. La sidra natural D.O.P. "Manzana de Asturias" — pide la reserva para la visita técnica.',
    tags: ['llagar', 'sidra', 'visita guiada', 'D.O.P.'],
    season: 'todo el año',
  },
  {
    id: 'sideria-tierra-astur',
    title: 'Sidrerías tradicionales en la calle Gascona',
    category: 'gastronomia',
    location: 'Oviedo',
    description:
      'La "Bulevar de la Sidra" de Oviedo: 15 sidrerías en 200 metros. No es lugar secreto, pero sí el ritual local del escanciado de pie. Los jueves es cuando viene la gente del barrio, sin turistas.',
    tags: ['sidra', 'escanciado', 'fabada', 'cabrales'],
    season: 'todo el año',
  },
  {
    id: 'mercado-agroalimentario-cangas',
    title: 'Mercado Agroalimentario de Cangas',
    category: 'gastronomia',
    location: 'Cangas del Narcea',
    description:
      'Mercado de productores locales con Denominación de Origen propia: vino Cangas (único D.O. de Asturias), miel de la zona y embutidos del occidente. Los primeros sábados de cada mes.',
    tags: ['vino Cangas', 'D.O.', 'productores locales', 'sábados'],
    season: 'todo el año',
  },
  {
    id: 'queso-cabrales-visita',
    title: 'Cueva de maduración en Arenas',
    category: 'gastronomia',
    location: 'Cabrales',
    description:
      'En agosto se celebra el concurso-subasta del queso Cabrales (precios récord). Pero el resto del año puedes visitar cooperativas queseras en Arenas y comprar directamente al productor.',
    tags: ['queso Cabrales', 'cueva', 'D.O.P.', 'productor directo'],
    season: 'todo el año',
  },
  {
    id: 'pote-asturiano',
    title: 'Casas de comidas: pote y fabada',
    category: 'gastronomia',
    location: 'Interior de Asturias',
    description:
      'Las mejores fabadas no están en las capitales. Busca "casa de comidas" en concejos del interior (Grado, Salas, Tineo). Menú del día con pote asturiano (berzas, morcilla, chorizo) por menos de 12 €.',
    tags: ['fabada', 'pote asturiano', 'menú del día', 'interior'],
    season: 'otoño',
  },

  // ─── CULTURA Y TRADICIONES ─────────────────────────────────────────────────

  {
    id: 'descenso-sella',
    title: 'Descenso Internacional del Sella',
    category: 'cultura',
    location: 'Arriondas → Ribadesella',
    description:
      'El Descenso del Sella (primer sábado de agosto) es mucho más que una carrera de piragüas — es la fiesta del verano asturiano. Llegar a Arriondas el viernes noche para vivir el ambiente de verbena y "güisqui". No confundir con la carrera del domingo (esa es para turistas).',
    tags: ['tradición', 'agosto', 'piragüismo', 'fiesta'],
    season: 'verano',
  },
  {
    id: 'vaqueirada',
    title: 'La Vaqueirada (Vaqueiros de Alzada)',
    category: 'cultura',
    location: 'Luarca / Aristébano',
    description:
      'Fiesta ancestral de los vaqueiros de alzada, los pastores trashumantes de Asturias. Se celebra en el Puertu la última semana de julio. Gaita, danza prima y ropa tradicional — sin folclorismo impostado.',
    tags: ['tradición', 'vaqueiros', 'julio', 'danza prima'],
    season: 'verano',
  },
  {
    id: 'gaita-asturiana',
    title: 'Conciertos de gaita y folk celta',
    category: 'cultura',
    location: 'Todo Asturias',
    description:
      'Asturias tiene una escena folk celta viva. Grupos como Llan de Cubel, La Musgaña o Felpeyu tocan en fiestas de pueblos todo el verano. Consulta la agenda del Ayuntamiento de tu concejo.',
    tags: ['gaita', 'folk celta', 'fiestas patronales', 'verano'],
    season: 'verano',
  },
  {
    id: 'fiesta-san-mateo',
    title: 'Fiestas de San Mateo (Oviedo)',
    category: 'cultura',
    location: 'Oviedo',
    description:
      'Del 19 al 25 de septiembre. Los ovetenses recuperan su ciudad. Verbenas en el Bombé, mercado medieval, bajada de la Balesquida, conciertos gratuitos. La semana cultural más densa del año en Oviedo.',
    tags: ['Oviedo', 'septiembre', 'verbena', 'gratuito'],
    season: 'otoño',
  },
  {
    id: 'fiesta-aste-nagusia-gijon',
    title: 'Semana Grande de Gijón',
    category: 'cultura',
    location: 'Gijón',
    description:
      'Agosto en Gijón: conciertos gratuitos junto al puerto, feria de muestras, fuegos artificiales. El ambiente de Cimadevilla de noche vale la pena aunque no te guste ningún artista del cartel.',
    tags: ['Gijón', 'agosto', 'conciertos', 'Cimadevilla'],
    season: 'verano',
  },
  {
    id: 'museu-etnograficu',
    title: "Muséu del Pueblu d'Asturies",
    category: 'cultura',
    location: 'Gijón',
    description:
      'Museo al aire libre en el Parque Isabel la Católica con hórreos, cabañas y edificios históricos trasladados de toda Asturias. Entrada gratuita los jueves. Ideal para entender cómo vivía la Asturias rural.',
    tags: ['museo', 'gratis los jueves', 'etnografía', 'Gijón'],
    season: 'todo el año',
  },
  {
    id: 'prerromanico-asturiano',
    title: 'Ruta del Prerrománico Asturiano',
    category: 'cultura',
    location: 'Oviedo / Lena / Noreña',
    description:
      'Patrimonio Mundial UNESCO. Santa María del Naranco, San Miguel de Lillo, Santa Cristina de Lena (s. IX). Tres joyas a menos de 30 min de Oviedo que los propios asturianos pocas veces visitan.',
    tags: ['UNESCO', 'prerrománico', 'siglo IX', 'arquitectura'],
    season: 'todo el año',
  },
  {
    id: 'festival-interceltique',
    title: 'Asturias en el Festival Intercéltico',
    category: 'cultura',
    location: 'Gijón / Avilés',
    description:
      'Cada año Asturias participa activamente en festivales celtas internacionales y acoge eventos propios. El Festival de Música Celta de Ortigueira (Galicia) es la cita más próxima pero hay equivalentes en Llanes.',
    tags: ['música celta', 'gaita', 'festival', 'verano'],
    season: 'verano',
  },

  // ─── DEPORTE Y AIRE LIBRE ──────────────────────────────────────────────────

  {
    id: 'surf-rodiles',
    title: 'Surf en Rodiles',
    category: 'deporte',
    location: 'Villaviciosa',
    description:
      'Rodiles es la ola más larga de Asturias (más de 400 m en días buenos). La reserva natural lo protege — acceso a pie desde el aparcamiento. Varios clubs de surf locales dan clases. Mejor en otoño-invierno.',
    tags: ['surf', 'ola larga', 'clases disponibles', 'reserva natural'],
    season: 'otoño',
  },
  {
    id: 'surf-salinas',
    title: 'Surf y baño en Salinas',
    category: 'deporte',
    location: 'Castrillón',
    description:
      'El paseo marítimo más largo de Asturias con oleaje consistente para surf y bodyboard. Los locales de Avilés pasan aquí los fines de semana. La zona del chiringuito Bahía es el punto de encuentro habitual.',
    tags: ['surf', 'paseo marítimo', 'bodyboard', 'fácil acceso'],
    season: 'verano',
  },
  {
    id: 'kayak-ria-villaviciosa',
    title: 'Kayak por la ría de Villaviciosa',
    category: 'deporte',
    location: 'Villaviciosa',
    description:
      'La ría más virgen de Asturias, Reserva Natural. Se puede alquilar kayak en El Puntal o apuntarse a una salida guiada. Con marea subiendo se llega hasta los meandros interiores — avistamiento de aves garantizado.',
    tags: ['kayak', 'ría', 'naturaleza', 'aves'],
    season: 'primavera-verano',
  },
  {
    id: 'escalada-lavandera',
    title: 'Escalada en La Lavandera',
    category: 'deporte',
    location: 'Langreo / San Martín del Rey Aurelio',
    description:
      'Zona de escalada en roca caliza a 20 min de Oviedo. Más de 200 vías de todos los niveles. La comunidad local es muy activa — busca el grupo "Escalada en Asturias" para quedar con locales.',
    tags: ['escalada', 'roca caliza', 'todos los niveles', 'cerca de Oviedo'],
    season: 'todo el año',
  },
  {
    id: 'bolos-celticos',
    title: 'Bolos celtas y deportes rurales',
    category: 'deporte',
    location: 'Todo Asturias',
    description:
      'Los bolos asturianos (tamborín, bolo pasiego, birle) siguen vivos en los pueblos. La Federación Asturiana organiza torneos casi todos los fines de semana en concejos diferentes. Gratis para ver.',
    tags: ['deporte rural', 'tradición', 'gratuito', 'todos los fines de semana'],
    season: 'todo el año',
  },
  {
    id: 'lucha-leonesa',
    title: 'Lucha leonesa en Asturias',
    category: 'deporte',
    location: 'Cuencas mineras / Oviedo',
    description:
      'Deporte de agarre tradicional de la montaña leonesa y asturiana. En las fiestas patronales del interior (especialmente cuencas mineras) hay corros de lucha. Calendario en la Federación Regional.',
    tags: ['deporte rural', 'tradición', 'fiestas patronales', 'corros'],
    season: 'verano',
  },
  {
    id: 'cicloturismo-via-verde-minera',
    title: 'Vía Verde Minera (Valle del Nalón)',
    category: 'deporte',
    location: 'Langreo / Laviana',
    description:
      'Antiguo trazado ferroviario minero reconvertido en vía verde. 7 km sin desnivel a lo largo del río Nalón, con murales y patrimonio industrial. Se puede continuar por carretera hasta Caso.',
    tags: ['bici', 'vía verde', 'patrimonio industrial', 'familias'],
    season: 'todo el año',
  },
  {
    id: 'trail-montaña-central',
    title: 'Trail running en la montaña central',
    category: 'deporte',
    location: 'Quirós / Teverga / Proaza',
    description:
      'La comarca de Quirós concentra los mejores trails de montaña media: Peña Manteca, La Sobia, los valles del Trubia. El Cros del Oso (carrera popular) en noviembre llena el valle de corredores locales.',
    tags: ['trail', 'montaña', 'carreras populares', 'noviembre'],
    season: 'todo el año',
  },

  // ─── CON NIÑOS ─────────────────────────────────────────────────────────────

  {
    id: 'parque-prehistoria-teverga',
    title: 'Parque de la Prehistoria de Teverga',
    category: 'ninos',
    location: 'Teverga',
    description:
      'Réplicas de arte rupestre a escala real en cuevas artificiales (basadas en El Castillo, Altamira y otras). Taller de pigmentos naturales para niños incluido en la entrada. Mejor reservar online.',
    tags: ['prehistoria', 'arte rupestre', 'talleres', 'interior'],
    season: 'todo el año',
  },
  {
    id: 'aquarium-gijon',
    title: 'Acuario de Gijón',
    category: 'ninos',
    location: 'Gijón',
    description:
      'Uno de los mejores acuarios del norte de España, con el oceanarium central de dos plantas. Los lunes en temporada baja suele estar semivacío — mejor experiencia para los niños.',
    tags: ['acuario', 'oceanarium', 'interior', 'lunes tranquilo'],
    season: 'todo el año',
  },
  {
    id: 'museo-jurasico-asturias',
    title: 'Museo del Jurásico de Asturias (MUJA)',
    category: 'ninos',
    location: 'Colunga',
    description:
      'Dinosaurios en Asturias — la costa jurásica de Colunga tiene huellas reales en la playa de La Griega. El museo completa el contexto con réplicas espectaculares. Combinar con la playa si hay marea baja.',
    tags: ['dinosaurios', 'museo', 'costa jurásica', 'playa de huellas'],
    season: 'todo el año',
  },
  {
    id: 'huellas-dinosaurios-costa',
    title: 'Huellas de dinosaurio en la costa',
    category: 'ninos',
    location: 'Colunga / Ribadesella',
    description:
      'Con marea baja puedes ver huellas de saurópodos en la playa de La Griega (Colunga) y en La Isla (Colunga). Consulta las tablas de mareas antes de ir — solo visibles en mareas de coeficiente alto.',
    tags: ['dinosaurios', 'marea baja', 'gratis', 'paleontología'],
    season: 'todo el año',
  },
  {
    id: 'senda-oso-bici-familiar',
    title: 'Senda del Oso en bici',
    category: 'ninos',
    location: 'Proaza / Quirós',
    description:
      'El mejor plan familiar del año: alquila bicis en Tuñón o Entrago, recorre los 22 km del piso de cemento liso junto al río y para a ver los osos pardos en el recinto. Merecido bocadillo en La Foz.',
    tags: ['bici', 'osos pardos', 'carril bici', 'familias'],
    season: 'todo el año',
  },
  {
    id: 'parque-isabel-la-catalana',
    title: 'Parque Isabel la Católica (Gijón)',
    category: 'ninos',
    location: 'Gijón',
    description:
      'Gran pulmón verde urbano con el Museo del Pueblo de Asturias, pista de atletismo, zoo de aves y zona de juegos. Gratis. Los domingos por la mañana es el paseo clásico de las familias gijonesas.',
    tags: ['gratis', 'parque urbano', 'zoo de aves', 'domingos'],
    season: 'todo el año',
  },
  {
    id: 'cueva-tito-bustillo',
    title: 'Cueva de Tito Bustillo',
    category: 'ninos',
    location: 'Ribadesella',
    description:
      'Arte paleolítico en cueva real — pinturas de hasta 35.000 años. Acceso muy limitado (30 personas/visita) — reserva con bastante antelación. El Centro de Arte Rupestre contiguo es gratis y complementa bien.',
    tags: ['cueva', 'arte paleolítico', 'reserva previa', 'Ribadesella'],
    season: 'todo el año',
  },
  {
    id: 'playa-pozos-naturales',
    title: 'Pozos y piscinas naturales en ríos',
    category: 'ninos',
    location: 'Interior de Asturias',
    description:
      'El Ese (Proaza), el Pigüeña (Belmonte), el río Narcea en Cornellana... Asturias tiene docenas de pozos naturales con agua cristalina aptos para niños. Busca "pozos de baño Asturias" para encontrar los de tu zona.',
    tags: ['río', 'baño', 'gratis', 'verano'],
    season: 'verano',
  },

  // ─── EVENTOS Y AGENDA (v1 placeholder) ────────────────────────────────────

  {
    id: 'agenda-proximamente',
    title: 'Agenda de eventos en tiempo real',
    category: 'eventos',
    location: 'Todo Asturias',
    description:
      'Próximamente: calendario actualizado con fiestas patronales, mercados de temporada, espichas abiertas, conciertos de gaita y eventos deportivos rurales. En v2 conectaremos fuentes de datos locales.',
    tags: ['próximamente', 'v2', 'en construcción'],
    season: 'todo el año',
  },
  {
    id: 'ferias-ganado',
    title: 'Ferias de ganado y agroalimentarias',
    category: 'eventos',
    location: 'Pola de Siero / Grado / Tineo',
    description:
      'Las ferias de ganado son el corazón económico del Asturias rural y siguen activas. La feria de Pola de Siero (lunes) y la de Grado (miércoles y domingos) son las más grandes. Madrugón pero vale la pena.',
    tags: ['feria de ganado', 'tradicional', 'lunes/miércoles', 'Pola de Siero'],
    season: 'todo el año',
  },
  {
    id: 'vino-cangas-vendimia',
    title: 'Vendimia del Vino de Cangas',
    category: 'eventos',
    location: 'Cangas del Narcea',
    description:
      'En septiembre-octubre la vendimia del único vino D.O. de Asturias es un momento especial. Algunas bodegas pequeñas aceptan voluntarios o venden uva directamente. Contactar con la DO Cangas.',
    tags: ['vino', 'vendimia', 'septiembre-octubre', 'DO Cangas'],
    season: 'otoño',
  },
];

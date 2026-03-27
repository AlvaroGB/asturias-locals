/**
 * activities.js — Base de datos de actividades para Asturias de Verdad
 *
 * Cómo añadir una actividad nueva:
 * 1. Copia un objeto existente de la misma categoría
 * 2. Rellena todos los campos (id debe ser único)
 * 3. `coords: [lat, lng]` — coordenadas del lugar principal (Google Maps → clic derecho → coordenadas)
 * 4. `familyFriendly: true` si es apto para niños o grupos familiares
 * 5. `indoor: true` si es una actividad de interior (útil para días de lluvia)
 * 6. `category` debe coincidir con una clave de CATEGORIES
 *
 * Categorías disponibles:
 *   'naturaleza' | 'gastronomia' | 'cultura' | 'deporte' | 'ninos' | 'eventos'
 */

export const CATEGORIES = {
  naturaleza:  { label: 'Naturaleza',           emoji: '🌿' },
  gastronomia: { label: 'Gastronomía local',    emoji: '🍎' },
  cultura:     { label: 'Cultura y tradiciones', emoji: '🎶' },
  deporte:     { label: 'Deporte y aire libre',  emoji: '🏄' },
  ninos:       { label: 'Con niños',             emoji: '🧒' },
  eventos:     { label: 'Eventos y agenda',      emoji: '📅' },
};

// Colour palette per category — used in cards, map pins, filter buttons
export const CATEGORY_COLORS = {
  naturaleza:  { bg: 'bg-green-100',  text: 'text-green-800',  border: 'border-green-200',  active: 'bg-green-700',  stripe: 'bg-green-600',  pin: '#2d6a4f' },
  gastronomia: { bg: 'bg-amber-50',   text: 'text-amber-800',  border: 'border-amber-200',  active: 'bg-amber-700',  stripe: 'bg-amber-600',  pin: '#b45309' },
  cultura:     { bg: 'bg-stone-100',  text: 'text-stone-700',  border: 'border-stone-300',  active: 'bg-stone-600',  stripe: 'bg-stone-500',  pin: '#57534e' },
  deporte:     { bg: 'bg-teal-50',    text: 'text-teal-800',   border: 'border-teal-200',   active: 'bg-teal-700',   stripe: 'bg-teal-600',   pin: '#0f766e' },
  ninos:       { bg: 'bg-orange-50',  text: 'text-orange-800', border: 'border-orange-200', active: 'bg-orange-600', stripe: 'bg-orange-500', pin: '#c2410c' },
  eventos:     { bg: 'bg-purple-50',  text: 'text-purple-800', border: 'border-purple-200', active: 'bg-purple-700', stripe: 'bg-purple-600', pin: '#7e22ce' },
};

export const activities = [

  // ─── NATURALEZA ────────────────────────────────────────────────────────────

  {
    id: 'senda-del-oso',
    title: 'Senda del Oso',
    category: 'naturaleza',
    location: 'Quirós / Proaza',
    coords: [43.252, -5.978],
    description:
      'Ruta lineal de 22 km por el valle del río Trubia, con recinto de osos pardos en semilibertad. Asfaltado liso apto para bici y carrito. Enlaza Tuñón con Entrago.',
    tags: ['bici', 'senderismo', 'familias', 'fácil'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'ruta-del-cares',
    title: 'Ruta del Cares',
    category: 'naturaleza',
    location: 'Cabrales / Valdeón',
    coords: [43.267, -4.909],
    description:
      'El desfiladero más espectacular de los Picos de Europa. 12 km entre paredes verticales siguiendo el canal de la central hidroeléctrica. Llegar temprano para evitar la aglomeración de julio-agosto.',
    tags: ['senderismo', 'media dificultad', 'espectacular', 'Picos de Europa'],
    season: 'primavera-verano',
    familyFriendly: false,
    indoor: false,
  },
  {
    id: 'lago-enol',
    title: 'Lagos de Covadonga',
    category: 'naturaleza',
    location: 'Cangas de Onís',
    coords: [43.262, -4.995],
    description:
      'El Enol y La Ercina a 1.100 m. En temporada alta el acceso en coche está cortado — coger el autobús lanzadera. Fuera de temporada el silencio es total.',
    tags: ['Picos de Europa', 'paisaje', 'fácil', 'senderismo corto'],
    season: 'primavera-verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'playa-gulpiyuri',
    title: 'Playa de Gulpiyuri',
    category: 'naturaleza',
    location: 'Llanes',
    coords: [43.417, -4.752],
    description:
      'Playa interior de 40 metros alimentada por el mar a través de cuevas kársticas. Ir en bici desde Naves o a primera hora. Solo existe con marea alta.',
    tags: ['playa', 'única en Europa', 'marea alta', 'a pie'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'playa-ballota',
    title: 'Playa de Ballota',
    category: 'naturaleza',
    location: 'Llanes',
    coords: [43.426, -4.697],
    description:
      'Una de las playas más vírgenes del oriente asturiano. Acceso por pista sin asfaltar (20 min andando). Acantilados verdes, agua clara, sin chiringuito.',
    tags: ['playa virgen', 'sin masificación', 'acantilados', 'andando'],
    season: 'verano',
    familyFriendly: false,
    indoor: false,
  },
  {
    id: 'playa-toro',
    title: 'Playa de Toro',
    category: 'naturaleza',
    location: 'Llanes',
    coords: [43.418, -4.760],
    description:
      'Arena blanca escondida entre acantilados, fuera de los radares turísticos más obvios. A 10 minutos andando desde el pueblo de Buelna.',
    tags: ['playa virgen', 'arena blanca', 'poco conocida'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'bosque-muniellos',
    title: 'Reserva de Muniellos',
    category: 'naturaleza',
    location: 'Cangas del Narcea',
    coords: [43.075, -6.738],
    description:
      'El robledal atlántico mejor conservado de Europa. Acceso con permiso previo obligatorio (máx. 20 personas/día) — pide cita con semanas de antelación.',
    tags: ['reserva natural', 'permiso previo', 'robledal', 'fauna'],
    season: 'primavera-verano',
    familyFriendly: false,
    indoor: false,
  },
  {
    id: 'playa-san-antolin',
    title: 'Playa de San Antolín',
    category: 'naturaleza',
    location: 'Llanes',
    coords: [43.415, -4.662],
    description:
      'Larga playa semidesierta con dunas y pinar. El río Bedón desemboca aquí — los niños pueden jugar en el remanso. El camping al lado es un clásico.',
    tags: ['playa', 'familias', 'río', 'camping cerca'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'pena-ubiña',
    title: 'Peña Ubiña',
    category: 'naturaleza',
    location: 'Teverga / Lena',
    coords: [43.020, -5.943],
    description:
      'El techo del occidente asturiano con 2.417 m. Ruta desde La Mesa de 6 h AR con 1.200 m de desnivel. Solo para quien esté en forma.',
    tags: ['alta montaña', 'difícil', 'verano', 'experienced'],
    season: 'verano',
    familyFriendly: false,
    indoor: false,
  },
  {
    id: 'desfiladero-hermida',
    title: 'Desfiladero de La Hermida',
    category: 'naturaleza',
    location: 'Peñamellera Baja',
    coords: [43.289, -4.582],
    description:
      'Cañón espectacular por el que discurre el río Deva. Paredes de 300 m, pozas para bañarse en verano. También acceso a la iglesia mozárabe de Lebeña.',
    tags: ['cañón', 'río', 'baño', 'románico'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },

  // ─── GASTRONOMÍA LOCAL ─────────────────────────────────────────────────────

  {
    id: 'mercado-el-fontan',
    title: 'Mercado de El Fontán',
    category: 'gastronomia',
    location: 'Oviedo',
    coords: [43.361, -5.846],
    description:
      'El mercado cubierto más antiguo de Oviedo (s. XIX). Quesos, embutidos, verduras de huerta local. Los sábados hay más movimiento — llegar antes de las 11.',
    tags: ['mercado', 'queso', 'embutidos', 'sábados'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: true,
  },
  {
    id: 'mercado-sur-gijon',
    title: 'Mercado del Sur',
    category: 'gastronomia',
    location: 'Gijón',
    coords: [43.528, -5.667],
    description:
      'Mercado renovado en el barrio de La Arena con una zona de bares de tapas fantástica. Erizos y berberechos frescos los viernes-sábados por la mañana.',
    tags: ['mercado', 'marisco', 'tapas', 'pescado fresco'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: true,
  },
  {
    id: 'espicha',
    title: 'Espicha de primavera',
    category: 'gastronomia',
    location: 'Todo Asturias',
    coords: [43.362, -5.849],
    description:
      'El ritual de abrir el barril nuevo. En primavera (marzo-mayo) muchos llagares organizan espichas abiertas con pote asturiano, chorizos a la sidra y queso.',
    tags: ['sidra', 'tradición', 'marzo-mayo', 'llagar'],
    season: 'primavera',
    familyFriendly: true,
    indoor: true,
  },
  {
    id: 'llagar-trabanco',
    title: 'Llagar Trabanco',
    category: 'gastronomia',
    location: 'Sariego',
    coords: [43.473, -5.612],
    description:
      'Uno de los llagares más reconocidos de Asturias, con visitas guiadas al proceso de elaboración de sidra natural D.O.P. Reserva imprescindible.',
    tags: ['llagar', 'sidra', 'visita guiada', 'D.O.P.'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: true,
  },
  {
    id: 'sideria-gascona',
    title: 'Sidrerías en la calle Gascona',
    category: 'gastronomia',
    location: 'Oviedo',
    coords: [43.362, -5.845],
    description:
      'El "Bulevar de la Sidra": 15 sidrerías en 200 metros. El ritual local del escanciado de pie. Los jueves la gente del barrio; sin turistas.',
    tags: ['sidra', 'escanciado', 'fabada', 'cabrales'],
    season: 'todo el año',
    familyFriendly: false,
    indoor: true,
  },
  {
    id: 'mercado-agroalimentario-cangas',
    title: 'Mercado Agroalimentario de Cangas',
    category: 'gastronomia',
    location: 'Cangas del Narcea',
    coords: [43.178, -6.548],
    description:
      'Mercado de productores locales con D.O. propia: vino Cangas (único D.O. de Asturias), miel y embutidos del occidente. Primeros sábados de cada mes.',
    tags: ['vino Cangas', 'D.O.', 'productores locales', 'sábados'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'queso-cabrales-visita',
    title: 'Cueva de maduración en Arenas',
    category: 'gastronomia',
    location: 'Cabrales',
    coords: [43.312, -4.735],
    description:
      'En agosto, concurso-subasta del queso Cabrales con precios récord. El resto del año puedes visitar cooperativas queseras y comprar directamente al productor.',
    tags: ['queso Cabrales', 'cueva', 'D.O.P.', 'productor directo'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: true,
  },
  {
    id: 'pote-asturiano',
    title: 'Casas de comidas: pote y fabada',
    category: 'gastronomia',
    location: 'Interior de Asturias',
    coords: [43.387, -6.077],
    description:
      'Las mejores fabadas no están en las capitales. Busca "casa de comidas" en Grado, Salas, Tineo. Menú del día con pote asturiano por menos de 12 €.',
    tags: ['fabada', 'pote asturiano', 'menú del día', 'interior'],
    season: 'otoño',
    familyFriendly: true,
    indoor: true,
  },

  // ─── CULTURA Y TRADICIONES ─────────────────────────────────────────────────

  {
    id: 'descenso-sella',
    title: 'Descenso Internacional del Sella',
    category: 'cultura',
    location: 'Arriondas → Ribadesella',
    coords: [43.391, -5.197],
    description:
      'Primer sábado de agosto. Mucho más que una carrera de piragüas — es la fiesta del verano asturiano. Llegar el viernes noche para vivir el ambiente de verbena.',
    tags: ['tradición', 'agosto', 'piragüismo', 'fiesta'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'vaqueirada',
    title: 'La Vaqueirada (Vaqueiros de Alzada)',
    category: 'cultura',
    location: 'Aristébano / Luarca',
    coords: [43.547, -6.510],
    description:
      'Fiesta ancestral de los vaqueiros de alzada. Última semana de julio en el Puertu. Gaita, danza prima y ropa tradicional — sin folclorismo impostado.',
    tags: ['tradición', 'vaqueiros', 'julio', 'danza prima'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'gaita-asturiana',
    title: 'Conciertos de gaita y folk celta',
    category: 'cultura',
    location: 'Todo Asturias',
    coords: [43.362, -5.849],
    description:
      'Grupos como Llan de Cubel, La Musgaña o Felpeyu tocan en fiestas de pueblos todo el verano. Consulta la agenda del Ayuntamiento de tu concejo.',
    tags: ['gaita', 'folk celta', 'fiestas patronales', 'verano'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'fiesta-san-mateo',
    title: 'Fiestas de San Mateo (Oviedo)',
    category: 'cultura',
    location: 'Oviedo',
    coords: [43.362, -5.849],
    description:
      'Del 19 al 25 de septiembre. Los ovetenses recuperan su ciudad. Verbenas en el Bombé, mercado medieval, bajada de la Balesquida, conciertos gratuitos.',
    tags: ['Oviedo', 'septiembre', 'verbena', 'gratuito'],
    season: 'otoño',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'semana-grande-gijon',
    title: 'Semana Grande de Gijón',
    category: 'cultura',
    location: 'Gijón',
    coords: [43.536, -5.665],
    description:
      'Agosto en Gijón: conciertos gratuitos junto al puerto, feria de muestras, fuegos artificiales. El ambiente de Cimadevilla de noche vale la pena.',
    tags: ['Gijón', 'agosto', 'conciertos', 'Cimadevilla'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'museu-etnograficu',
    title: "Muséu del Pueblu d'Asturies",
    category: 'cultura',
    location: 'Gijón',
    coords: [43.531, -5.676],
    description:
      'Museo al aire libre con hórreos, cabañas y edificios históricos trasladados de toda Asturias. Entrada gratuita los jueves.',
    tags: ['museo', 'gratis los jueves', 'etnografía', 'Gijón'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'prerromanico-asturiano',
    title: 'Ruta del Prerrománico Asturiano',
    category: 'cultura',
    location: 'Oviedo / Lena',
    coords: [43.386, -5.876],
    description:
      'Patrimonio Mundial UNESCO. Santa María del Naranco, San Miguel de Lillo, Santa Cristina de Lena (s. IX). Tres joyas que los asturianos pocas veces visitan.',
    tags: ['UNESCO', 'prerrománico', 'siglo IX', 'arquitectura'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: true,
  },
  {
    id: 'festival-interceltique',
    title: 'Festival de Música Celta',
    category: 'cultura',
    location: 'Gijón / Avilés',
    coords: [43.536, -5.665],
    description:
      'Asturias acoge eventos de música celta propios cada verano. El Festival de Ortigueira (Galicia) es la cita más próxima — los grupos asturianos siempre participan.',
    tags: ['música celta', 'gaita', 'festival', 'verano'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },

  // ─── DEPORTE Y AIRE LIBRE ──────────────────────────────────────────────────

  {
    id: 'surf-rodiles',
    title: 'Surf en Rodiles',
    category: 'deporte',
    location: 'Villaviciosa',
    coords: [43.540, -5.369],
    description:
      'La ola más larga de Asturias (más de 400 m en días buenos). Reserva natural — acceso a pie. Varios clubs locales dan clases. Mejor en otoño-invierno.',
    tags: ['surf', 'ola larga', 'clases disponibles', 'reserva natural'],
    season: 'otoño',
    familyFriendly: false,
    indoor: false,
  },
  {
    id: 'surf-salinas',
    title: 'Surf y baño en Salinas',
    category: 'deporte',
    location: 'Castrillón',
    coords: [43.570, -5.975],
    description:
      'El paseo marítimo más largo de Asturias con oleaje consistente. Los locales de Avilés pasan aquí los fines de semana. Punto de encuentro: chiringuito Bahía.',
    tags: ['surf', 'paseo marítimo', 'bodyboard', 'fácil acceso'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'kayak-ria-villaviciosa',
    title: 'Kayak por la ría de Villaviciosa',
    category: 'deporte',
    location: 'Villaviciosa',
    coords: [43.498, -5.428],
    description:
      'La ría más virgen de Asturias, Reserva Natural. Alquiler de kayak en El Puntal. Con marea subiendo se llega a los meandros interiores — avistamiento de aves garantizado.',
    tags: ['kayak', 'ría', 'naturaleza', 'aves'],
    season: 'primavera-verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'escalada-lavandera',
    title: 'Escalada en La Lavandera',
    category: 'deporte',
    location: 'Langreo',
    coords: [43.290, -5.682],
    description:
      'Zona de escalada en roca caliza a 20 min de Oviedo. Más de 200 vías de todos los niveles. La comunidad local es muy activa.',
    tags: ['escalada', 'roca caliza', 'todos los niveles', 'cerca de Oviedo'],
    season: 'todo el año',
    familyFriendly: false,
    indoor: false,
  },
  {
    id: 'bolos-celticos',
    title: 'Bolos celtas y deportes rurales',
    category: 'deporte',
    location: 'Todo Asturias',
    coords: [43.362, -5.849],
    description:
      'Los bolos asturianos (tamborín, bolo pasiego, birle) siguen vivos en los pueblos. La Federación organiza torneos casi todos los fines de semana. Gratis para ver.',
    tags: ['deporte rural', 'tradición', 'gratuito', 'todos los fines de semana'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'lucha-leonesa',
    title: 'Lucha leonesa en Asturias',
    category: 'deporte',
    location: 'Cuencas mineras / Oviedo',
    coords: [43.296, -5.690],
    description:
      'Deporte de agarre tradicional. En las fiestas patronales del interior hay corros de lucha. Calendario en la Federación Regional de Lucha.',
    tags: ['deporte rural', 'tradición', 'fiestas patronales', 'corros'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'cicloturismo-via-verde-minera',
    title: 'Vía Verde Minera (Valle del Nalón)',
    category: 'deporte',
    location: 'Langreo / Laviana',
    coords: [43.301, -5.677],
    description:
      'Antiguo trazado ferroviario minero reconvertido. 7 km sin desnivel a lo largo del río Nalón, con murales y patrimonio industrial.',
    tags: ['bici', 'vía verde', 'patrimonio industrial', 'familias'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'trail-montaña-central',
    title: 'Trail running en la montaña central',
    category: 'deporte',
    location: 'Quirós / Teverga',
    coords: [43.250, -6.000],
    description:
      'La comarca de Quirós concentra los mejores trails de montaña media: Peña Manteca, La Sobia, valles del Trubia. El Cros del Oso en noviembre es la cita anual.',
    tags: ['trail', 'montaña', 'carreras populares', 'noviembre'],
    season: 'todo el año',
    familyFriendly: false,
    indoor: false,
  },

  // ─── CON NIÑOS ─────────────────────────────────────────────────────────────

  {
    id: 'parque-prehistoria-teverga',
    title: 'Parque de la Prehistoria de Teverga',
    category: 'ninos',
    location: 'Teverga',
    coords: [43.147, -6.058],
    description:
      'Réplicas de arte rupestre a escala real en cuevas artificiales. Taller de pigmentos naturales para niños incluido en la entrada. Mejor reservar online.',
    tags: ['prehistoria', 'arte rupestre', 'talleres', 'interior'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: true,
  },
  {
    id: 'aquarium-gijon',
    title: 'Acuario de Gijón',
    category: 'ninos',
    location: 'Gijón',
    coords: [43.552, -5.665],
    description:
      'Uno de los mejores acuarios del norte de España, con el oceanarium central de dos plantas. Los lunes en temporada baja suele estar semivacío.',
    tags: ['acuario', 'oceanarium', 'interior', 'lunes tranquilo'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: true,
  },
  {
    id: 'museo-jurasico-asturias',
    title: 'Museo del Jurásico de Asturias (MUJA)',
    category: 'ninos',
    location: 'Colunga',
    coords: [43.487, -5.340],
    description:
      'Dinosaurios en Asturias — la costa jurásica de Colunga tiene huellas reales. El museo completa el contexto con réplicas espectaculares.',
    tags: ['dinosaurios', 'museo', 'costa jurásica', 'playa de huellas'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: true,
  },
  {
    id: 'huellas-dinosaurios-costa',
    title: 'Huellas de dinosaurio en la costa',
    category: 'ninos',
    location: 'Colunga / Ribadesella',
    coords: [43.485, -5.338],
    description:
      'Con marea baja puedes ver huellas de saurópodos en la playa de La Griega. Consulta las tablas de mareas — solo visibles con coeficiente alto.',
    tags: ['dinosaurios', 'marea baja', 'gratis', 'paleontología'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'senda-oso-bici-familiar',
    title: 'Senda del Oso en bici (plan familiar)',
    category: 'ninos',
    location: 'Proaza / Quirós',
    coords: [43.252, -5.978],
    description:
      'Alquila bicis en Tuñón o Entrago, recorre 22 km de cemento liso junto al río y para a ver los osos pardos en el recinto. Bocadillo en La Foz.',
    tags: ['bici', 'osos pardos', 'carril bici', 'familias'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'parque-isabel-gijon',
    title: 'Parque Isabel la Católica',
    category: 'ninos',
    location: 'Gijón',
    coords: [43.534, -5.672],
    description:
      'Gran pulmón verde urbano con el Museo del Pueblo, pista de atletismo, zoo de aves y zona de juegos. Gratis. El domingo por la mañana es el paseo clásico familiar.',
    tags: ['gratis', 'parque urbano', 'zoo de aves', 'domingos'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'cueva-tito-bustillo',
    title: 'Cueva de Tito Bustillo',
    category: 'ninos',
    location: 'Ribadesella',
    coords: [43.462, -5.061],
    description:
      'Arte paleolítico en cueva real — pinturas de hasta 35.000 años. Solo 30 personas/visita — reserva con antelación. El Centro de Arte Rupestre contiguo es gratis.',
    tags: ['cueva', 'arte paleolítico', 'reserva previa', 'Ribadesella'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: true,
  },
  {
    id: 'playa-pozos-naturales',
    title: 'Pozos naturales en ríos',
    category: 'ninos',
    location: 'Interior de Asturias',
    coords: [43.252, -5.978],
    description:
      'El Ese (Proaza), el Pigüeña (Belmonte), el Narcea en Cornellana... Docenas de pozos naturales con agua cristalina aptos para niños. Gratis.',
    tags: ['río', 'baño', 'gratis', 'verano'],
    season: 'verano',
    familyFriendly: true,
    indoor: false,
  },

  // ─── EVENTOS Y AGENDA ──────────────────────────────────────────────────────

  {
    id: 'agenda-proximamente',
    title: 'Agenda de eventos en tiempo real',
    category: 'eventos',
    location: 'Todo Asturias',
    coords: [43.362, -5.849],
    description:
      'Próximamente: calendario actualizado con fiestas patronales, mercados de temporada, espichas abiertas y conciertos. En v2 conectaremos fuentes de datos locales.',
    tags: ['próximamente', 'v2', 'en construcción'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'ferias-ganado',
    title: 'Ferias de ganado y agroalimentarias',
    category: 'eventos',
    location: 'Pola de Siero / Grado / Tineo',
    coords: [43.405, -5.673],
    description:
      'Las ferias de ganado son el corazón del Asturias rural. La feria de Pola de Siero (lunes) y la de Grado (miércoles y domingos) son las más grandes. Madrugón necesario.',
    tags: ['feria de ganado', 'tradicional', 'lunes/miércoles', 'Pola de Siero'],
    season: 'todo el año',
    familyFriendly: true,
    indoor: false,
  },
  {
    id: 'vino-cangas-vendimia',
    title: 'Vendimia del Vino de Cangas',
    category: 'eventos',
    location: 'Cangas del Narcea',
    coords: [43.178, -6.548],
    description:
      'En septiembre-octubre la vendimia del único vino D.O. de Asturias es un momento especial. Algunas bodegas aceptan voluntarios. Contactar con la DO Cangas.',
    tags: ['vino', 'vendimia', 'septiembre-octubre', 'DO Cangas'],
    season: 'otoño',
    familyFriendly: true,
    indoor: false,
  },
];

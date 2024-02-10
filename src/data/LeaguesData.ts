import type { ILeague } from "@/interfaces/ILeague";
const LeaguesData: ILeague[] = [
    {
      id: 0,
      name: 'Premier League',
      description: 'Es la máxima categoría del sistema de ligas de fútbol de Inglaterra. La Premier League es considerada una de las cinco grandes ligas europeas junto con la Primera División española, la Serie A italiana, la Bundesliga alemana y la Ligue 1 francesa, ocupando el primer puesto del coeficiente UEFA',
      ubication: 'Inglaterra',
      teams: 20,
    },
    {
      id: 1,
      name: 'LaLiga EA Sports',
      description: 'Es la máxima categoría masculina del sistema de ligas de fútbol de España y la principal competición a nivel de clubes del país. LaLiga española es considerada una de las cinco grandes ligas europeas junto con la Premier League inglesa, la Serie A italiana, la Bundesliga alemana y la Ligue 1 francesa, ocupando el segundo puesto del coeficiente UEFA.',
      ubication: 'España',
      teams: 20,
    },
    {
      id: 2,
      name: 'Bundesliga',
      description: 'Es la competición entre los equipos de fútbol de la máxima categoría de Alemania. En la Bundesliga el mayor clásico de más importancia y esperado por los alemanes es Der Klassiker, que enfrenta al Bayern de Múnich contra el Borussia Dortmund, otro de ellos es el que enfrenta al Bayern de Múnich contra el Werder Bremen.',
      ubication: 'Alemania',
      teams: 18,
    },
    {
      id: 3,
      name: 'Serie A TIM',
      description: 'Es la máxima categoría del sistema de ligas italiano, organizada por la Lega Nazionale Professionisti (LNP) desde 1946, tras suceder a la Federación Italiana de Fútbol (FIGC) y convertirse en 2010 en la Lega Nazionale Professionisti Serie A (LNPA).',
      ubication: 'Italia',
      teams: 20,
    },
    {
      id: 4,
      name: 'Ligue 1 Uber Eats',
      description: 'Es la primera división del sistema de ligas del fútbol francés organizada por la Ligue de Football Professionnel. Está formada por dieciocho clubes, que disputan un total de 340 partidos (34 cada club), en cada temporada que se extiende entre los meses de agosto y mayo. Los dos últimos clasificados al final del campeonato, descienden a la Ligue 2. ',
      ubication: 'Francia',
      teams: 20,
    },
    {
      id: 5,
      name: 'Eredivisie',
      description: 'Es la máxima categoría del sistema de Ligas de fútbol de los Países Bajos, organizada por la Real Asociación de Fútbol de los Países Bajos. Aunque hasta 53 equipos han participado al menos durante una temporada, solo ocho se han coronado campeones de liga. Los tres clubes más importantes de Países Bajos: A. F. C. Ajax, P. S. V. y Feyenoord Róterdam',
      ubication: 'Países Bajos',
      teams: 18,
    },
    {
      id: 6,
      name: 'Liga Portugal Betclic',
      description: 'Es la máxima categoría del sistema de ligas de fútbol de Portugal. Las únicas categorías con estatus profesional en Portugal son Primera y Segunda División, ambas bajo el paraguas de la LPFP, mientras que el resto de divisiones dependen de la FPF y sus correspondientes federaciones regionales.',
      ubication: 'Portugal',
      teams: 18,
    },
    {
      id: 7,
      name: 'Liga BBVA MX',
      description: 'Es la máxima categoría masculina del sistema de ligas de México y la principal competición de clubes del país.  Se juegan dos torneos cortos por ciclo anual futbolístico (cada uno con su campeón) denominados Apertura y Clausura (en ese orden). El campeonato se define por medio de una fase final posterior a cada fase regular, conocida como liguilla; clasifican a ella los diez primeros lugares de la tabla general.',
      ubication: 'México',
      teams: 18,
    },
    {
      id: 8,
      name: 'Süper Lig',
      description: 'Es la máxima categoría del fútbol profesional en Turquía.La temporada se inicia en el mes de agosto y concluye en el mes de mayo, con un lapso de descanso entre los meses de diciembre y enero. Los 20 clubes participantes deben completar 38 fechas. ',
      ubication: 'Turquia',
      teams: 20,
    },
    {
      id: 9,
      name: 'Major League Soccer (MLS)',
      description: 'Es la liga de fútbol de Canadá y Estados Unidos. La liga es disputada por 29 equipos, 26 en los Estados Unidos y 3 en Canada, desde la temporada 2023. Está integrada por dos conferencias de 15 y 14 equipos respectivamente, Conferencia Este y Conferencia Oeste. La temporada se inicia en marzo y termina en noviembre. Cada equipo juega 34 partidos durante la temporada regular.',
      ubication: 'USA/Canada',
      teams: 27,
    },
  ];

  export default LeaguesData;
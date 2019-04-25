const data = {
  code: [
    {
      title: "Company Certification",
      img: ["openhxouse1.png", "openhxouse.png"],
      stack: [
        "React",
        "Redux",
        "Redux Forms",
        "Node.js",
        "Express",
        "Cloud Firestore"
      ],
      roles: ["Web Development"],
      desc:
        'The final project for <a href="https://bridgeschool.io/">Bridge for Software Development</a>, where students were put in teams of four, along with a product owner and lead developer, to utilize agile (kanban) methodologies. Our group was tasked with creating an app that certifies companies based on diversity and inclusion standards, then match certified companies with alumni that share tech/industry interests. <a href="https://material-ui.com/">Material UI</a> was used as the UI library. The backend was built with Node.js + Express, using Cloud Firestore, Firebase\'s new document-model database. View the backend repo <a href="https://github.com/bridge-school/company-cert-backend">here</a>.',
      live: "http://company-cert-frontend.bridgeschoolapp.io/",
      github: "https://github.com/bridge-school/company-cert-frontend"
    },
    {
      title: "OPEN HXOUSE",
      img: ["openhxouse1.png", "openhxouse.png"],
      stack: ["HTML5", "CSS3", "Sass", "Gulp"],
      roles: ["Web Development"],
      desc:
        'A microsite created for <a href="https://hxouse.com/">HXOUSE</a>, a Toronto incubator and accelerator for emerging creatives. A provided mockup was translated into a live responsive website. 3D graphics and animated images were provided by an external company. Staging link was submitted for multiple rounds of QA and feedback with client. I challenged myself to only use vanilla JavaScript for interactivity.',
      live: "https://open.hxouse.com/",
      github: "https://github.com/susiekims/xhouse"
    },
    {
      title: "BudgIt",
      img: ["budgit1.png", "budgit2.png"],
      stack: ["React", "Firebase", "Chart.js", "CSS3", "HTML5", "Sass"],
      roles: ["Web Development", "Web Design"],
      desc:
        "An expense tracker/budgeting web app. Users can create an account, make multiple sheets, define custom categories and budgets, and see their data visualized in a pie chart. Featuring an excel-esque transactions table. React Router was used to create multiple pages and Firebase was used to store data with Google authentication.",
      live: "https://expense-tracker-v2.firebaseapp.com",
      github: "https://github.com/susiekims/susie_kim_project5"
    },
    {
      title: "GetGo",
      img: ["getgo2.png", "getgo.png"],
      stack: [
        "Gulp",
        "jQuery",
        "AJAX",
        "RESTful APIs",
        "CSS3",
        "HTML5",
        "Sass"
      ],
      roles: ["Web Development", "Web Design"],
      desc: `A travel app that gets information about where you're going. Consolidates data from DarkSky API, Sygic Travel API, and RESTful Countries API after destination city is determined by Google Geocoder. Provides the user information about the top attractions, weather, language, currency, and tours in that destination. Layout was created with CSS Grids. A pair-programming effort with <a href="http://moingani.com/">Moin Gani</a>. If some features are not functioning, it probably means I have not sent my monthly e-mail to Sygic for a new free API key.`,
      live: "http://susiekim.co/getgo/",
      github: "https://github.com/susiekims/susie-moin_project4"
    },
    {
      title: "Critter",
      img: ["critter1.png", "critter2.png"],
      stack: ["React", "Firebase Authentication", "Axios", "Sass", "HTML5"],
      roles: ["Web Development", "Web Design"],
      desc:
        'A mock agency group project. We were tasked with creating a <a href="https://en.wikipedia.org/wiki/Vaporwave">vaporwave</a> influenced app for people who want to adopt an alternative pet (read: not dogs or cats). Built in React and powered by PetFinder API. Users can browse adoptable pets in their area, share the pet online, and save their favorite pets to their page. Authentication powered by Firebase.',
      live: "https://critter-app.firebaseapp.com/",
      github: "https://github.com/susiekims/project-six"
    },
    {
      title: "Trump Dump",
      img: ["trump-dump.png", "trump-dump2.png"],
      stack: ["jQuery", "JavaScript", "HTML5", "CSS3", "Sass"],
      roles: ["Web Development", "Web Design"],
      desc:
        'A JavaScript recreation of the first game I ever made in Processing three years ago. A classic "falling objects" style game, users can play as Hilary or Trump and try to catch e-mails or toupes respectively.',
      live: "http://susiekim.co/trumpdump",
      github: "https://github.com/susiekims/susie_kim_project3"
    }
    // {
    //   title: "PSD Conversion",
    //   img: ["photography.png", "photography2.png"],
    //   stack: ["HTML5", "CSS3", "Responsive Design", "Sass"],
    //   roles: ["Web Development"],
    //   desc:
    //     "A fully responsive, pixel-perfect PSD conversion of a photography website. jQuery was used for fade-in-on-scroll effect.",
    //   live: "http://susiekim.co/photography/",
    //   github: "https://github.com/susiekims/susie_kim_project2"
    // }
  ],

  design: [
    {
      title: "Something Inside You",
      img: [
        "../public/assets/design/somethinginsideyou1.png",
        "https://cortex.persona.co/w/877/i/a5afe0dfa799a05b663eb2e50d367621e00c882d804833107451875924f65c9e/Screen-Shot-2016-04-02-at-6.51.06-PM.png",
        "../public/assets/design/somethinginsideyou.png"
      ],
      stack: ["Photoshop", "Cinema4D"],
      roles: ["Web Development"],
      desc:
        "Typographic poster of lyrics from Nightcall by Kavinsky, as featured in the major motion picture Drive. Inspired by Rizon Parein’s poster work for the film. Modeled in Cinema4D."
    },
    {
      title: "Sabbatical",
      img: [
        "../public/assets/design/sagmeister1.png",
        "../public/assets/design/sagmeister3.png",
        "../public/assets/design/sagmeister2.png",
        "../public/assets/design/sagmeister4.png"
      ],
      stack: ["InDesign", "Photoshop"],
      roles: ["Book Design"],
      desc:
        "A booklet cataloguing several typographic works of Stefan Sagmeister, under the theme “Sabbatical”. Text is a transcript of Sagmeister’s TED Talk, “The Power of Time Off”.",
      readmore: "#"
    },
    {
      title: "Shy Robot",
      img: [
        "https://cortex.persona.co/w/810/i/113bc9c2a0726d7c1ed923856704c6d60d37d451b45ce095406994ae3daeae5c/robot.gif",
        "https://cortex.persona.co/w/1250/i/487294bcff7e8a40bb1495ce016bab1ec4175fc419cb887d832dbc0214095ae4/Screen-Shot-2016-04-02-at-6.27.01-PM.png",
        "../public/assets/design/robot3.png"
      ],
      stack: ["Max/MSP", "Cinema4D"],
      roles: ["Interactive Design", "3D Modelling"],
      desc:
        "A shy robot that watches your movement. Its eyes glows red with fear when you approach too close. Modeled in Cinema4D and programmed using MaxMSP. Webcam input and motion tracker was used to detect user movement and proximity.",
      readmore: "#"
    },
    {
      title: "Tandura Centre for Arts and Culture",
      img: [
        "../public/assets/design/tandura3.png",
        "../public/assets/design/tandura2.png",
        "../public/assets/design/tandura1.png",
        "../public/assets/design/tcac.png",
        "../public/assets/design/tcac2.png"
      ],
      stack: ["Adobe Photoshop", "InDesign", "Illustrator"],
      roles: ["Identiy Design", "Brand Development"],
      desc:
        "Brand development of Tandura, a fictional arts and culture centre. Identity, typography, colors, stationary suite, and applications were created. Rules of use were compiled into a Graphics Standards Manual. The identity was inspired by the northern lights to represent the heritage of the centre. A pixel motif combined with an organic shape was used to represent the coming together of the man-made and the natural, the new and the old, the URL and the IRL.",
      readmore: "#"
    },
    {
      title: "Revolution",
      img: [
        "https://cortex.persona.co/w/1000/i/748bb2c87780152889dbfa004e110e892da9091ed573088050b548948876ea6f/revolution.png",
        "https://cortex.persona.co/w/960/i/6ff6f51bc24da8753c3ff2aff9bfa568ee9348586894ea9a55c889c9235026ea/ezgif.com-video-to-gif.gif",
        "https://cortex.persona.co/w/960/i/5c8b9fcde9d440a03f62395dacd52f9460bcd405206724eb62f2277d8bcc4d7c/ezgif.com-video-to-gif-1.gif"
      ],
      stack: ["After Effects", "Illustrator"],
      roles: ["Motion Design"],
      desc:
        "A kinetic type piece made using the prompt “revolution”. Motion was used to illustrate the various connotations of revolution:  to evolve, revolve, and revolt. Custom typeface made using rectangles, circles, and half circles.",
      readmore: "#"
    }
  ],
  emojis: [
    "🔥",
    "✨",
    "👹",
    "👽",
    "🐤",
    "🌸",
    "🌚",
    "💖",
    "😈",
    "😇",
    "💰",
    "🙏",
    "💁🏻",
    "🐸",
    "🇰🇷",
    "💻",
    "🎨",
    "💩",
    "👀",
    "🙈"
  ],
  icons: [
    "react.svg",
    "redux.svg",
    "javascript.svg",
    "html.svg",
    "css.svg",
    "git.svg",
    "github.svg",
    "vue.svg",
    "typescript.svg",
    "node.svg",
    "firebase.svg",
    "jquery.svg",
    "sass.svg",
    "photoshop.svg",
    "illustrator.svg"
  ],
  favicons: [
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/fire_1f525.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/sparkles_2728.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/japanese-ogre_1f479.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/extraterrestrial-alien_1f47d.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/cherry-blossom_1f338.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/129/smiling-face-with-horns_1f608.png"
  ]
};

import ProjectFigure from "./ProjectFigure";
import ScrollSnapBox from "../ScrollSnapBox";

const projects = [
  {
    title: "Trope-Hunt",
    heading: "Web App, Find Tropes in Xmas Movies",
    thumbnail: "trope-hunt-screenshot.png",
    link: "https://mern-template-git-demo-no-db-dempseyc.vercel.app/home/main",
    githublink: "https://github.com/dempseyc/trope-hunt",
    stack: "React, Redux, NextJS, MaterialUI, MongoDB, Express",
  },
  // {
  //   "title": "MERN NextJS Template",
  //   "heading": "Mobile-friendly Web-App Template",
  //   "thumbnail": "MERN_template.png",
  //   "link": "https://mern-template-git-demo-no-db-dempseyc.vercel.app/home/main",
  //   "githublink": "https://github.com/dempseyc/mern-template/tree/demo-no-db",
  //   "stack": "React, Redux, NextJS, MaterialUI, MongoDB, Express"
  // },
  {
    title: "TTT-HIT-POW",
    heading: "Python Websockets game",
    thumbnail: "ttt-hit-pow-screenshot.png",
    link: "http://www.craigdempsey.com/ttt-hit-pow-client",
    githublink: "https://github.com/dempseyc/gameserver",
    stack: "Python, WebSocket, Javascript, CSS Grid and Flex",
    // "story": "Learned some Python. Love array comprehension stuff. Making a game is a good way to learn a language. YOU NEED A PARTNER TO PLAY. Click to copy this link and send it to a friend. <a class='copy-link' href=''>http://www.craigdempsey.com/ttt-hit-pow-client</a><span> copied!</span>"
  },
  // {
  //   "title": "SleepWithKevin / GCal API",
  //   "heading": "Showtimes",
  //   "thumbnail": "sleepwithkevin.gif",
  //   "link": "http://www.berreycomic.com/sleepwithkevin.com/",
  //   "githublink": "https://github.com/dempseyc/google-calendar-api",
  //   "stack": "ExpressJS API, Google Calendar public .ics file"
  // },
  {
    title: "SMATTER_art",
    heading: "Generative Art, Trigonometry algos",
    thumbnail: "genny1.jpg",
    link: "http://www.craigdempsey.com/smatter_art",
    githublink: "https://github.com/dempseyc/react-gen-art",
    stack: "React, Redux easy-peasy, UI component designs",
  },
  // {
  //   "title": "Thinking Cat",
  //   "heading": "personality test",
  //   "thumbnail": "thinking_cat_thumb.gif",
  //   "link": "http://www.craigdempsey.com/thinking_cat_fe",
  //   "githublink": "https://github.com/dempseyc/thinking-cat",
  //   "stack": "D3, JQuery, ExpressJS Server, PostgresQL"
  // },
  // {
  //   "title": "Our Moon Gardens",
  //   "heading": "visual playpen",
  //   "thumbnail": "our-moon-gardens-thumb2.gif",
  //   "link": "https://our-moon-gardens.herokuapp.com/",
  //   "githublink": "https://github.com/dempseyc/our_moon_gardens",
  //   "stack": "JQuery, GiphyAPI, ExpressJS, PostgresQL"
  // },
  // {
  //   "title": "Baad Plaanet!!",
  //   "heading": "demo: would-be rpg style game engine",
  //   "thumbnail": "baad_planet_thumb.gif",
  //   "link": "https://dempseyc.github.io/",
  //   "githublink": "https://dempseyc.github.io/",
  //   "stack": "JQuery, CSS animation",
  //   // "story": "<p>This was one of the first things I built with Javascript, and though it is humble jquery stuff, I'm proud of it.  Once I saw how far I could get with no JS animation, I decided to stick to it.  Working within constraints engages my creativity.  I liked the challenge of creating a looping 2D array to simulate the 'planet.'  The design of the 'planet' in the demo is a silouhuette of a Shoebill, The name of my General Assembly Web Dev Immersive cohort.  Just a simple demo, but the further development would be a super small RPG game engine.</p><br/><p>RELATED:</p><a href='https://codepen.io/dempseyc/full/yLydMEM'>plaanet maaker https://codepen.io/dempseyc/full/yLydMEM</a>"
  // },
  {
    title: "Pauline Marie Designs",
    heading: "theme and logo design",
    thumbnail: "pmd_designs_screenshot-700sq.png",
    link: "http://paulinemariedesigns.com/",
    stack: "custom php functions, Wordpress custom theme, etsy RSS API",
  },
];

const Projects = () => {
  return (
    <ScrollSnapBox>
      {projects.map((data, i) => (
        <ProjectFigure key={i} data={data} />
      ))}
    </ScrollSnapBox>
  );
};

export default Projects;

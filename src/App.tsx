import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{justifyContent: 'center'}}>

      {/* DRAFT AUTO HEADER */}
      <div className="dA-bin-c">
        <div className="dA-bin"><br></br>
        <img src="\images\DraftAutoLogo.jpg"
         width={500}
         style={{ alignSelf: 'center' }}></img>
        </div>
        <div className="dA-bin-sm">- Magazine and Apprael -</div>
      </div>

      {/* Menu options; Home, Blog, Cars, Apprael, Contact, FAQ */}


      {/* <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p> */}

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Cars />} />
          <Route path="apprael" element={<Apprael />} />
          <Route path="social" element={<Social />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="feedback" element={<Feedback />} />

          {/* 2023 Issues */}
          <Route path="oct23" element={<October23/>} />
          

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="dA-bin-c">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>

            <Link to="/">Home</Link>
            <span> - </span>

            <Link to="/cars">Cars</Link>
            <span> - </span>

            <Link to="/apprael">Apprael</Link>
            <span> - </span>

            <Link to="/social">Social</Link>
            <span> - </span>

            {/* <Link to="/contact">Contact</Link>
            <span> - </span> */}

            <Link to="/faq">FAQ</Link>

            <span> - </span>

            <Link to="/feedback">Feedback</Link>


            {/* <Link to="/nothing-here">Nothing Here</Link> */}
        </ul>
      </nav>
      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div style={{justifyContent: 'center', justifyItems: 'center'}}>
      <h2>Home</h2>
      <body>Welcome to <b>Draft Auto</b><br/><br/></body>
      
      <body>
      
      {/* <img src="\images\DRAFTAUTOMOCK.png"
       width={600}
       style={{ alignSelf: 'center' }}/>
      <div>This is a concept cover</div> */}
      <b>~2023~</b></body>
      <br/>
      *pst* click me <br/>
      <Link to="/oct23">
      <img src="/images/DraftAuto2023OCT.png"
      width={600}
      style={{ alignSelf: 'left' }}/>
      </Link>

    </div>
  );
}
function Cars(){
  return (
    <div style={{justifyContent: 'center'}}>
      <h2 style={{justifyContent: 'center'}}>Cars</h2>

      Not sure what to do with this part yet... <br/>
      <img src="/images/RatKingWhite.png" width={200} height={200}/>
      
      <div className="blog-l" style={{justifyContent: 'center'}}>
      <img src="\images\WEK23-1.JPG" width={300} height={200} alt="./images/WEK-2.JPG"/>
      <span className="blogtitle"> Wekfest 2023</span>
      </div>

      <p className="blog-r">
      <img src="\images\WEK23-2.JPG" width={300} height={200} alt="" />
      </p>


    </div>

  );
}
function Apprael(){
  return (
    <div style={{justifyContent: 'center'}}>
      <h2>Apprael</h2>
      <body>
        Coming soon!
        Finding vendors is hard
      </body>
    </div>
  );
}
function Social(){
  return (
    <div style={{justifyContent: 'center'}}>
      <h2 style={{justifyContent: 'center'}}>Social</h2>
      
      <a href="https://www.instagram.com/draftautocommunity/">
        <img src="/images/DraftLogoURL.png" width={200} height={200}/><br/>Draft Auto
        <br></br><br></br></a> <br/>
      <a href="https://www.instagram.com/maninrobes/">
        <img src="/images/ManInRobes.png" width={300} height={200}/><br/>
        Gabe's Instagram<br></br></a>

    </div>
  );
}
function Contact(){
  return (
    <div style={{justifyContent: 'center'}}>
      <h2>Contact</h2>
    </div>
  );
}
function FAQ() {
  return (
    <div>
      <h2>FAQ</h2>
      <header>
        About Draft Auto
      </header>
      <body>
      Welcome to the Draft Auto website. You may have a few questions about its purpose and maybe even who made the website. 
      Firstly, the purpose of the site and the reason for creating it is to help myself and others take their first step into
       the car community in Seattle. When I look at other states and cities on Instagram or in magazines from times past, I see
        a somewhat disconnected community. Maybe as things pick up, I'll end up making those connections where I'll know about more
         car meets. So, following that explanation, I have a few goals in mind as I continue to develop this blog: <br/>
      </body>
      <body><b>1.</b> Capturing the Essence:
      My first goal is to capture the energy that inspired Draft Auto – old car magazines my dad owned, which I used to flip through as a kid, 
      and the import magazines I started reading as an adult.<br/>
      </body>
            <body><b>2.</b>  Building a Unique Community:
      I want to help build a community that I personally want to be a part of. Contrary to current trends, I don't intend for this community
      to be dominated by takeovers. Instead, I envision semi-formalized meets at parking garages, beaches, side roads, and viewpoints. The 
      idea is to familiarize ourselves and become friendly with those who own or maintain establishments so that we can utilize their space.<br/>
      </body>
            <body> <b>3.</b>  Bridging Generational Gaps:
      Alongside creating a physical space for our community, I'd like us to work on bridging the gap between the older generation and the younger one.
      In my experience at car meets, I rarely encounter older car enthusiasts, and I believe it's essential to bridge this generational gap.<br/>
      </body>
            <body><b>4.</b>  Regular Events:
      After securing meeting spaces and building bridges between generations, I hope to organize regular meetings or events, even if they're
      as simple as BBQ gatherings or low-energy meet-and-cruise events.<br/>
      </body>
      <body>
      <b>5.</b>  Community-Driven Growth:
      Communication is key. I want this to be a community where ideas about the brand's direction, preferred events, and potential merchandise
      are shared. If we decide to explore merchandise, I already have a few plans in mind, such as member blogs. In my eyes, the possibilities
        are limitless. If there's something we want to build, I'll try to facilitate it by adding features or planning events.<br/>
      </body>
      <body>
      <b>6.</b>  Education and Connectivity:
      My final goal, though it's lower on the priority list at the moment, is education. I believe it would be beneficial to have a forum,
      Discord server, or something similar as one of my personal stretch goals for Draft Auto's growth. Some ideas I'm considering include
        enabling comments at the bottom of each post and establishing a forum-type area.<br/><br/>
      </body>
      <body><b>About Me:</b></body>
      <body>
      My name is Gabriel Holmquist, but on all my online platforms, you'll find me as ManInRobes. I've always held a fascination for mechanical
       things and how they are crafted. Currently, my interests lie in computer science, and I hold a degree in manufacturing. However, when it
        comes to cars, I have a confession to make – I'm currently in the process of learning. I own a 1986 BMW 325e, and I've discovered a deep
         love for it, a feeling I couldn't quite grasp until I had a car of my own.<br/>
        The story of how I acquired my BMW is rather simple. It came from an old owner who was retiring and relocating to Arizona. They were looking for 
        someone who shared their passion for the E30 line of cars, and I was fortunate to fit the bill. Recently, I took a trip to Tacoma for the annual 
        E30 picnic. While it was a relatively low-key event, it was incredibly enjoyable, and I had the chance to both see and learn some fascinating things.<br/>
        Beyond my automotive pursuits, I have a keen interest in science fiction that revolves around mechs, including franchises like Warhammer 40k,
        Neon Genesis Evangelion, and more recently, Gundams. Along a similar vein, I have a strong appreciation for model kits, even though my attention
          span tends to waver, making it a time-consuming process to complete them.<br/>
        Regarding my future plans for my E30, I have no intentions of adhering to purist traditions. Instead, I aim to undertake an engine swap and transform
        it into a street/track car. To me, the true beauty of owning and working on a car lies in expressing your personality through it. I see it as a reflection of oneself, with rat rods and bosozuko-inspired vans being prime examples of how individuals use their vehicles as a canvas for self-expression. While I value functionality over aesthetics (a nod to those who prefer slammed cars), I also appreciate the dedication it takes to turn dreams into reality.
        Another automotive passion of mine is station wagons, and in my eyes, the E30 station wagon represents the ultimate upgrade for my vehicle since I
        consider most of the interior components interchangeable.
        <br/><br/>
      </body>
      </div>
  );
}

function Dashboard() {
  return (
    <div style={{justifyContent: 'center'}}>
      <h2>Dashboard</h2>
    </div>
  );
}

function Feedback() {
  return (
    <div style={{justifyContent: 'center'}}>
      <h2>Feedback</h2>
      <br/>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScTEGVczIOyDCka14hwF5XIL3oDhA0ormqDsJlM4YuH4mXJHQ/viewform?embedded=true" width="640"
       height="623">Loading…</iframe>
    </div>
  );
}


function NoMatch() {
  return (
    <div style={{justifyContent: 'center', justifyItems: 'center'}}>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

// 2023 ISSUES
function October23() {
  return(
    <div style={{justifyContent: 'center'}}> <body style={{justifyContent: 'center'}}>
      <b>Finally!</b>
      <br/><br/> it's spooky season as the first attempt at a real issue I’ll be running it loose and keeping it short. 
       After a lot of trial and error with getting this site up I can get to the fun part of building this club/brand/news
      finding stories to tell and taking pictures of some fucking rad cars. In the spirit of some punk magazines,
      I was researching while brainstorming this project, and I had an idea of using both my interpretation of the Rat
      King that will show up pretty frequently in the form of doodles and treat this as my signature on articles.
      Additionally, I want to include only the named ‘Mr. Bones’ for the moment in future pictures he’s the perfect
      model for photos. For this first article, I wanted to spend some time going over some events I would like to
      attend, discuss as of currently my current plans for growing the project, and talk more about my vision for
      where I would like things to go.
      <br/><br/>
      <img src="/images/BMWOCT.png" 
      width={600}
      style={{ alignSelf: 'center' }}
      ></img><br/><br/>


      <b>Events (short term Sep/Oct/Nov/Dec),</b><br/><br/>

      <b>Planning:</b>
      <br/>-Attending some more of the local car meets (UW car club, other small car meet-ups)
      <br/>-Really want to find some cars and coffee
      <br/><br/> 
      
      <b>-Looking into:</b>
      <br/>-Seattle International Car Show I’m on the ropes for
      <br/>-2023 rally cross (might be next year)
      <br/>-Some of the Evergreen Speedway race events later in October
      <br/><br/>

      <img src="/images/BMWOCTWide.png" width={600}
      style={{ alignSelf: 'center' }} /> <br/><br/>

      Short-term plans and current Draft Auto,

My whole goal for DA is to help spread information regarding events, other car-focused groups, drivers,
and their cars, and take some sweet ass photos along the way for those local to Washington. After I say
that your first reaction might be to ask the question why only local to Washington? Well honestly even
if this were ever to gain enough traction and everything lined up I don’t know that I would ever try
and make something for outside of Washington unless I myself went to an event or something else of note.
In the end, the effort I spend is to encourage more events for my community. So as I do grow and down
the line, I’m going to try and upgrade things so the cost is as low as possible for my ideas around
magazines I want to do a return to form with old black and white punk magazines I can still kind of find.
With annual issues being 5$ (target price) for annuals and other things being free if possible with
advertising inside. Of course if possible I’d love to have a centerfold of maybe a community-voted
car, a featured car, or something fun to represent the month. As much as I push myself I’m not
much of a writer so most of my articles or retellings will be image-based. To remedy that one
of the big things will be finding more people I can trust with writing small articles or allowing
me to share what they’ve written here with links. As a small addition, I want to show off people's
art so if you have a little comic or something that you’d like to add I’ll add a submissions tab
shortly. I’ll post a write-up of how I would like things to function in a later post with some
visual aid.
<br/><br/>
Thank you,
<br/>
<img src="/images/GAHWhite.png" width={100} height={100}/><img src="/images/RatKingWhite.png" width={100} height={100}/>
</body></div>
  )
}
export default function Home() {
  return (
    <div className="flex">
      <header className="flex-1">
        <div>
          <h1>Alan Coste</h1>
          <h3>Fullstack developer</h3>
          <p>
            I build <em>accesible</em> fullstack applications for the web
          </p>
        </div>
        <nav>
          <p>About</p>
          <p>Projects</p>
        </nav>
      </header>
      <main className="flex-1">
        <p>
          I am a developer who is changing careers from owning a food business
          and freelancing photography. I am passionate about
        </p>
        <p>
          I made a MERN app for an accountant firm that helped with Project
          Management. The app dealt with their monthly and yearly tax pipelines
          and kept the data for up their 400 clients. The app was up and running
          for months until it had a security breach.
        </p>
        <p>
          In my previous careers I had the opportunity to lead small teams. I
          had to manage expectations and keep the scope of the projects within
          reach. I can handle pressure with tight deadlines and dynamic
          environments where things go off the plan and the project still needs
          to be delivered on time.
        </p>
        <p>
          In my me-time I enjoy playing guitar, cooking fancy meals, lifting
          heavy weights and playing Elden Ring
        </p>
      </main>
    </div>
  );
}

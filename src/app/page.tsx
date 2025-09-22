import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-5xl">
        <Header />
        <main className="flex-1">
          <p>
            I am a developer who is changing careers from owning a food business
            and freelancing{" "}
            <Link className="text-red-400" href={"food-content"}>
              photography
            </Link>
            . I am passionate about building accesible, responsive projects. My
            favorite part of
          </p>
          <br />
          <p>
            I made a MERN app for an accountant firm that helped with Project
            Management. The app dealt with their monthly and yearly tax
            pipelines and kept the data for up their 400 clients. The app was up
            and running for months until it had a security breach, I learned the
            importance of a team of experts.
          </p>
          <br />
          <p>
            In my previous careers I had the opportunity to lead small teams. I
            had to manage expectations and keep the scope of the projects within
            reach. I can handle pressure with tight deadlines and dynamic
            environments where things go off the plan and the project still
            needs to be delivered on time.
          </p>
          <br />
          <p>
            In my me-time I enjoy playing guitar, cooking fancy meals, lifting
            heavy weights and playing Elden Ring
          </p>
        </main>
      </div>
    </div>
  );
}

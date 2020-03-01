import React from "react";

import MainLayout from "../components/MainLayout";
import SEO from "../components/SEO";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const AboutPage = () => {
  return (
    <MainLayout>
      <SEO title="About" />
      <div className="spacing">
        <section className="module-text-hero-intro pt-8 pb-8 sm:pt-16 sm:pb-16">
          <h1>Hi folks, Piervincenzo here.</h1>
          <h3 className="row">
            <i className="underlined underlined--offset">People</i> stay at the
            end and the beginning of my design process. I find myself in playing
            with code and designing seamless experiences, at the intersection of
            Design and Technology
          </h3>
        </section>
        <section className="page-body mt-16 sm:my-32 sm:flex">
          <div className="sm:w-2/5">
            <div className="client text-1_5vh sm:text-sm sm:max-w-xs">
              <span id="info-label" className="font-mono opacity-50">
                Design
              </span>
              <h4 id="info-text" className="text-2vh px-8 sm:px-0 sm:text-base">
                Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla
                bla bla Bla bla bla
              </h4>
            </div>
            <div className="client text-1_5vh sm:text-sm sm:max-w-xs">
              <span id="info-label" className="font-mono opacity-50">
                Technology
              </span>
              <h4 id="info-text" className="text-2vh px-8 sm:px-0 sm:text-base">
                Bla bla bla
              </h4>
            </div>
          </div>
          <div className="sm:w-3/5">
            <p className="font-mono text-lg leading-8">
              There are stories of success and failure everywhere around us.
              When I was a teenager, I wanted to be a professional football
              player. I was quite good, played some important matches in
              semi-pro leagues, but I failed. When I was 20, I forced myself to
              be an electronic engineer. I tried, I passed more than 30 exams,
              but I failed.  Then I wanted to be a startupper. I tried, I
              launched two startups: a crowdsourced data sports app and a
              graphic t-shirts marketplace. Raised investments, hard work and a
              lot of enthusiasm but, guess what? I failed. Yes, I failed, but I
              learned a lot. How to deal with people and be part of a team, how
              to think like an engineer (or a nerd?), how to risk and create new
              things like an entrepreneur, how to create, end-to-end, a
              high-quality digital product, how to feel intense and eager
              enjoyment doing my job.
            </p>
          </div>
        </section>
      </div>
      <section className="page-bottom-next-content">
        <div className="flex flex-col justify-around">
          <img
            id="cover"
            src={`https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80`}
            alt="project text"
            className="object-cover object-right w-full h-40vh sm:h-35vh"
          />
          <div className="spacing absolute">
            <AniLink duration={0.8} paintDrip hex="#fff" to="/projects">
              <span className="content-type">Next</span>
              <svg
                fill="none"
                height="8"
                viewBox="0 0 201 8"
                width="201"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m200.354 4.35355c.195-.19526.195-.51184 0-.7071l-3.182-3.181984c-.196-.195262-.512-.195262-.708 0-.195.195262-.195.511845 0 .707104l2.829 2.82843-2.829 2.82843c-.195.19526-.195.51184 0 .7071.196.19527.512.19527.708 0zm-200.354.14645h200v-1h-200z"
                  fill="#fff"
                />
              </svg>
              <span className="content">Projects</span>
            </AniLink>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;

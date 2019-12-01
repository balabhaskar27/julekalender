import React, { useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';
import Particles from 'react-particles-js';
import moment from "moment";
const BlockContent = require('@sanity/block-content-to-react');
const { DateTime } = require('luxon');

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source)
}

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
};

const stengtLukeBeskjed = ( post, stengtLuke, lukenr ) => {
  let beskjed = <div className="luke-beskjed"><i>Send inn svaret til <a href={`mailto:julekalender@offerspill.no?subject=Luke ${lukenr}`}>julekalender@offerspill.no</a> før {lukenr + 1}. desember.</i></div>;

  if (stengtLuke) {
    if (post.solution) return <div className="luke-beskjed"><i>Luken er stengt.</i></div>;

    beskjed = <div className="luke-beskjed"><i>Luken er stengt. Løsningen dukker snart opp her på siden.</i></div>;
  }
  return beskjed;
}

function Luke( { nr, posts }) {
  const [detaljertTekst, setDetaljertTekst] = useState("Vis løsning");

  const toggleTekst = () => {
    if (detaljertTekst === "Vis løsning") {
      setDetaljertTekst("Skjul løsning");
    } else {
      setDetaljertTekst("Vis løsning")
    }
  };

  const post = posts.find(post => post.slug.current == nr);
  const lukenr = (parseInt(nr, 10));

  if (!post) {
    if (lukenr > 0 && lukenr < 25) return <div className="luke-side"><h3 className="notfound">Du må nok vente litt.</h3></div>;
    return <div className="luke-side"><h3 className="notfound">Denne luken finnes ikke.</h3></div>;
  }

  const now = DateTime.utc().toISO();


  const diff = moment.duration(moment(now).diff(moment(post.publishedAt)));

  const stengtLuke = diff._data.days > 0;

  console.log("POST");
  console.log(post);

  return (
    <div className="luke-side">
      <div className="oppgave-del">
    <h1>Luke {post.title}</h1>
      <div className="oppgavetekst">
        <BlockContent
          blocks={post.body}
          serializers={serializers}
          imageOptions={{w: 500}}
          projectId="jraodywc"
          dataset="production"
        />
      </div>
      {stengtLukeBeskjed(post, stengtLuke, lukenr)}
      <div>
        {post.solution ?
          <div className="løsningwrapper">
          <a onClick={() => toggleTekst()} id="solutionButton" className="btn btn-primary" data-toggle="collapse" href="#løsning" role="button"
             aria-expanded="false" aria-controls="collapseExample">
            {detaljertTekst}
          </a>
          <div className="collapse" id="løsning">
            <div className="card card-body">
              <BlockContent
                blocks={post.solution}
                serializers={serializers}
                imageOptions={{w: 500}}
                projectId="jraodywc"
                dataset="production"
              />
            </div>
          </div>
        </div> : null}
      </div>
      {post.mainImage && post.mainImage.asset ? <img className="oppgavebilde" src={urlFor(post.mainImage).width(400).url()} /> : null}
      </div>
        <Particles
          className="partikler"
          params={{
            particles: {
              number: {
                value: 52,
                density: {
                  enable: true,
                  value_area: 631.3280775270874
                }
              },
              color: {
                value: "#fff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 500,
                color: "#ffffff",
                opacity: 0.4,
                width: 2
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "bottom",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            retina_detect: true
          }} />
    </div>
);
}

export default Luke;

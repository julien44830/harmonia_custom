import React, { useState, useEffect } from "react";
import TemplateForm from "../components/TemplateForm";
import NavForm from "../components/NavForm";
import BlindForm from "../components/BlindForm";
import Aveugle from "../components/Aveugle";
import Daltonien from "../components/Daltonien";
import Trouble from "../components/Trouble";

const data = {
  Aveugle : {
    component : Cécité,
    name: "Cécité",
    h2: "Cécité",
    p: "Nous vous proposons d'expérimenter le remplissage du formulaire caché à droite en se mettant à la place d'une personne aveugle. Pour cette immersion, télécharger le lecteur d'écran NVDA.",
  },
  Daltonien : {
    component : Daltonien,
    name: "Daltonien",
    h2: "daltonisme",
    p: "daltonisme Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
  },
  Trouble : {
    component : Trouble,
    name: "Trouble",
    h2: "trouble de l'attention",
    p: "trouble de l'attention Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
  },
};

function FormPage() {
  const [handicap, setHandicap] = useState(0);
  const [component, setComponent] = useState("Trouble")
  const ComponentToRender = data[component].component; 

  return (
    <main className="formpage">
      <h1>Découvrez la réalité du handicap sur internet</h1>
      <NavForm setHandicap={setHandicap} setComponent={setComponent} handicap={handicap} />
      {/* <TemplateForm data={data[component]} /> */}
      <BlindForm data={data[component]} />
      {ComponentToRender && <ComponentToRender />}
    </main>
  );
}

export default FormPage;
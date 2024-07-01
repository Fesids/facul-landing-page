import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-one.png";

const benefitOne = {
  title: "Vantagens e Benefícios",
  desc: "Use nosso espaço para se desenvolver e aprimorar suas capacidades físicas, mentais e sociais, como por exemplo: ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Melhore seu humor e confiança",
      desc: "O esporte é uma das principais ferramentais para construir disposição e confiança.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Senso de progresso",
      desc: "Aprenda a mensurar seu progresso e perseguir metas.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Foco e constância",
      desc: "Desenvolva seu foco.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    
  ],
};


export {benefitOne, benefitTwo};

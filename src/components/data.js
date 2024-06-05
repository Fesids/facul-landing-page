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
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

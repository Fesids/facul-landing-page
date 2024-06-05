import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Beneficios do projeto"
        title="Por que eu deveria praticar esportes?"
      >
      Praticar esportes traz uma série de benefícios físicos, mentais e sociais. Fisicamente, 
      fortalece os músculos, melhora a saúde cardiovascular e ajuda a controlar o peso. Mentalmente, reduz o 
      estresse, aumenta a autoestima e promove a concentração. 
      </SectionTitle>

      <Benefits data={benefitOne} />
     

      <SectionTitle preTitle="FAQ" title="Questões frequentes">
       Secção destinada a sanar dúvidas sobre possíveis interessados em ingressar no projeto
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}

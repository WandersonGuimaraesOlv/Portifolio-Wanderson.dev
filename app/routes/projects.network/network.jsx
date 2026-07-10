import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';

const title = 'Rede de Alta Disponibilidade';
const description =
  'Projeto e implantação de reestruturação de rede física e lógica na Videplast, implementando topologia em anel de fibra óptica e VLANs.';
const roles = [
  'Projeto de Redes',
  'Cabeamento de Fibra Óptica',
  'Segurança Lógica (VLANs)',
  'Alta Disponibilidade (Anel)',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projetos' });
};

export const Network = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectTextRow>
            <ProjectSectionHeading>O Desafio</ProjectSectionHeading>
            <ProjectSectionText>
              Na fábrica da Videplast, a infraestrutura de rede sofria com interrupções frequentes
              e gargalos na largura de banda. A topologia antiga era vulnerável: uma falha em um único switch ou
              rompimento de cabo no pátio industrial podia parar toda a produção ou a comunicação de dados
              críticos do administrativo e monitoramento CFTV.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>A Solução em Anel de Fibra e VLANs</ProjectSectionHeading>
            <ProjectSectionText>
              Conduzi a reestruturação completa do cabeamento óptico espalhado pela fábrica.
              Projetei e implementei uma topologia física em **anel de fibra óptica** conectando switches gerenciáveis,
              garantindo que se houvesse qualquer rompimento físico, o tráfego seria automaticamente redirecionado (failover),
              mantendo a operação ininterrupta.
            </ProjectSectionText>
            <ProjectSectionText>
              Para a segurança e organização lógica dos dados, configurei a segmentação da rede através de **VLANs**,
              isolando o pesado tráfego de vídeo do CFTV das redes administrativas de ERP (Protheus) e do tráfego público de convidados.
              Toda a nova rede foi devidamente identificada e mapeada em diagramas lógicos.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection padding="bottom">
          <ProjectTextRow>
            <ProjectSectionHeading>Resultados Obtidos</ProjectSectionHeading>
            <ProjectSectionText>
              A rede passou a rodar em um padrão de alta disponibilidade industrial com downtime nulo após a finalização
              da topologia redundante. A divisão por VLANs trouxe maior estabilidade ao sistema de CFTV corporativo,
              proteção aos acessos administrativos sensíveis e total conformidade às diretrizes de privacidade de dados do negócio.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

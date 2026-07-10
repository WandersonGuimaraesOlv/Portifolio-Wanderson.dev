import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
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
import { baseMeta } from '~/utils/meta';
import { Fragment } from 'react';

const title = 'Automações com Python & n8n';
const description =
  'Desenvolvimento de soluções automatizadas para otimização de processos de TI, gestão de filas de chamados e monitoramento de sistemas.';
const roles = [
  'Desenvolvimento Python',
  'Orquestração com n8n',
  'Integração de APIs',
  'Indicadores de Desempenho (SLA)',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projetos' });
};

export const Automations = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          opacity={0.5}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
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
              Nas operações diárias de suporte de TI, a gestão manual de grandes volumes de chamados
              e incidentes representava um gargalo operacional. O tempo gasto na triagem, atribuição de
              prioridades e comunicação com técnicos atrasava a resolução de problemas críticos.
              Além disso, a consolidação de relatórios de desempenho e custos consumia horas de trabalho analítico.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>A Solução Automatizada</ProjectSectionHeading>
            <ProjectSectionText>
              Para resolver esse gargalo, criei fluxos de trabalho inteligentes utilizando a ferramenta de
              orquestração **n8n** conectada a scripts customizados em **Python**.
            </ProjectSectionText>
            <ProjectSectionText>
              Desenvolvi integrações com APIs do sistema de chamados para extrair dados em tempo real,
              classificar a severidade dos incidentes e disparar alertas instantâneos para os canais de
              comunicação da equipe de infraestrutura. Também automatizei relatórios periódicos em SQL que consolidam
              os principais indicadores operacionais (tempo de resposta, SLA e custos de TI).
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection padding="bottom">
          <ProjectTextRow>
            <ProjectSectionHeading>Resultados Obtidos</ProjectSectionHeading>
            <ProjectSectionText>
              As automações reduziram significativamente o tempo de resposta para incidentes críticos de infraestrutura.
              A eliminação do trabalho manual de consolidação de relatórios deu à liderança visibilidade imediata
              sobre gargalos e custos operacionais, otimizando os recursos de TI e elevando o nível de
              disponibilidade dos sistemas corporativos.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

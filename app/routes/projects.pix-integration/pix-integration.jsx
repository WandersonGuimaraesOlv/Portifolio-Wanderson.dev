import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
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

const title = 'Integração PIX - Zanthus PDV';
const description =
  'Liderança técnica na implantação e homologação do método de pagamento PIX integrado ao sistema Zanthus PDV e TEF (Sitef).';
const roles = [
  'Liderança Técnica',
  'Configuração de PDV',
  'Integração TEF (Sitef)',
  'Modernização de Fluxo de Caixa',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projetos' });
};

export function PixIntegration() {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectTextRow>
            <ProjectSectionHeading>O Contexto</ProjectSectionHeading>
            <ProjectSectionText>
              Com o surgimento e a rápida adesão ao PIX no Brasil, a rede Conquista Supermercados Ltda
              precisava adaptar-se rapidamente à nova demanda do mercado. A operação manual (onde o operador
              mostrava um QR Code estático ou maquininha externa e conferia no celular) era lenta, propensa a falhas
              e dificultava a conciliação financeira do caixa.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>A Implementação Técnica</ProjectSectionHeading>
            <ProjectSectionText>
              Liderei a implantação do PIX integrado diretamente no Zanthus PDV (Point of Sale).
              O projeto envolveu a reconfiguração dos módulos de TEF (Transferência Eletrônica de Fundos) utilizando
              o sistema **Sitef**, permitindo a geração dinâmica de QR Codes na tela do cliente para cada compra.
            </ProjectSectionText>
            <ProjectSectionText>
              Também fui encarregado de conduzir as atualizações de software nos terminais de todas as lojas físicas,
              executar os testes de homologação com as adquirentes e prestar suporte e treinamento às equipes de frente de caixa.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection padding="bottom">
          <ProjectTextRow>
            <ProjectSectionHeading>Resultados Obtidos</ProjectSectionHeading>
            <ProjectSectionText>
              O projeto reduziu significativamente o tempo de atendimento por transação eletrônica, eliminando erros
              operacionais e de digitação manual de valores. A modernização do fluxo de caixa proporcionou maior segurança
              lógica e otimização dos fluxos de conciliação financeira para a equipe de tesouraria do Conquista Supermercados.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

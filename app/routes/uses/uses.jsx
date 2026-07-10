import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Tecnologias',
    description: 'Lista de ferramentas e softwares que utilizo no meu dia a dia',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Tecnologias"
          description="Uma lista detalhada das ferramentas, softwares, sistemas corporativos e hardwares que utilizo no meu dia a dia profissional para gerenciar infraestrutura de TI, criar automações e programar."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Automação & Processos</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://n8n.io/">n8n</Link> é minha plataforma principal de
                    orquestração de fluxos de dados, conectando sistemas e APIs de forma
                    automatizada e eficiente.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.python.org/">Python</Link> é a linguagem padrão que
                    utilizo para criar scripts customizados, automações de tarefas operacionais,
                    integrações de dados e consumo de APIs.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.zabbix.com/">Zabbix</Link> é a ferramenta adotada
                    para monitoramento proativo dos ativos críticos de rede e servidores de produção.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Desenvolvimento</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Utilizo o <Link href="https://code.visualstudio.com/">VS Code</Link> como meu
                    editor de código principal para scripts Python, automações e desenvolvimento web.
                  </ListItem>
                  <ListItem>
                    Para o desenvolvimento frontend de painéis e interfaces de controle de suporte,
                    utilizo frameworks como <Link href="https://angular.dev/">Angular</Link> e{' '}
                    <Link href="https://react.dev/">React</Link> em conjunto com TypeScript e HTML/CSS.
                  </ListItem>
                  <ListItem>
                    Minhas consultas de relatórios operacionais, KPIs e análises financeiras de
                    custo de TI são executadas diretamente em bancos de dados utilizando **SQL**.
                  </ListItem>
                  <ListItem>
                    Utilizo o Git e o **GitHub** para controle de versão de todos os meus scripts,
                    automações e códigos de interfaces web.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Sistemas & Infraestrutura</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Sistemas ERP / PDV</TableHeadCell>
                    <TableCell>TOTVS Protheus, Zanthus PDV, SAP</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Sistemas Operacionais</TableHeadCell>
                    <TableCell>Windows Server (Active Directory, GPO) e Linux (Ubuntu/Debian)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Infraestrutura de Rede</TableHeadCell>
                    <TableCell>Cabeamento óptico estruturado em anel, switches gerenciáveis e VLANs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitoramento Patrimonial</TableHeadCell>
                    <TableCell>CFTV (Administração e segurança física de servidores críticos)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Comunicação e Voz</TableHeadCell>
                    <TableCell>Telefonia IP, centrais telefônicas PABX e gerenciamento de ramais</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Segurança Digital</TableHeadCell>
                    <TableCell>Políticas de controle de acessos, LGPD e monitoramento de logs</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

# Anuário Digital — 3º TV

Anuário digital da turma, construído em cima da especificação original e
já passando por duas rodadas de revisão (v2, polimento) e uma de correções
técnicas (v2.1). Sem banco de dados, sem autenticação, sem coleta de dados
reais — tudo aqui é conteúdo fictício e arquitetura.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Arquitetura

Next.js (App Router) + TypeScript + Tailwind CSS v4. Cada uma das sete áreas
é uma rota própria em `src/app/`:

```
/                 Home
/turma            Turma
/pessoas          Pessoas (alunos + professores)
/momentos         Momentos
/galeria          Galeria
/linha-do-tempo   Linha do Tempo
/mensagens        Mensagens
```

Dados e apresentação estão separados: tudo em `src/data/*.ts` é conteúdo
mockado, tipado por `src/lib/types.ts`. Nenhum componente tem texto de
aluno/professor/evento hardcoded — trocar os dados reais no futuro é editar
esses arquivos (ou trocá-los por uma fonte externa), não mexer em JSX.

## Componentes principais

- `Navbar` / `MobileNav` — a navegação mobile é uma solução própria (menu
  tipo sumário em tela cheia, não uma versão espremida da navegação
  desktop), com suporte a fechar com `Escape` e foco movido para dentro do
  menu ao abrir.
- `SectionHeader`, `PageContainer` — cabeçalho e moldura reutilizados em
  todas as páginas internas.
- `PersonCard` — card único usado tanto para alunos quanto professores.
  Substituiu os antigos `StudentCard`/`TeacherCard` (removidos): a página
  `/pessoas` mapeia `Student`/`Teacher` para um formato comum via
  `lib/people.ts` (`studentToPersonCard`, `teacherToPersonCard`) antes de
  passar pro card, então a UI não sabe (nem precisa saber) a diferença
  entre os dois tipos.
- `MomentCard`, `GalleryCard`, `TimelineItem`, `MessageCard` — um
  componente por tipo de conteúdo restante, cada um consumindo seu tipo de
  `lib/types.ts`.
- `PhotoFrame` — renderiza as fotos. Ver decisão abaixo.

## Decisões técnicas

- **Fotos**: `PhotoFrame` recebe uma prop `photo` opcional. Se o arquivo
  apontado por `photo` existir de fato em `public/` (checagem server-side
  com `existsSync`, feita uma vez na renderização), essa foto real é
  usada; caso contrário — inclusive hoje, já que todo registro em
  `src/data/` tem um `photo` como `/mock/nome.jpg` que ainda não existe
  como arquivo —, cai no retrato ilustrado gerado (SVG determinístico,
  cor/iniciais por pessoa, a partir do `id`). Ou seja: **colocar a foto
  real no caminho já configurado em `public/` é suficiente**, não precisa
  mexer em nenhum componente. `PersonCard` e `MessageCard` já repassam
  `person.photo`/`message.photo` para o `PhotoFrame`.
- **`<img>` em vez de `next/image`**: mesmo para fotos reais, ainda não há
  um pipeline de imagem (sem dimensões fixas por foto, sem passo de build
  que resolva os caminhos com antecedência), e o fallback ilustrado precisa
  de um data URI de qualquer forma, que `next/image` não serve. Vale
  reavaliar quando fotos reais virarem a regra, não a exceção.
- **Tipografia**: a identidade visual usa uma serifada com personalidade
  (Fraunces) para títulos, sans neutra (Inter) para corpo e mono
  (JetBrains Mono) para metadados — com fallback de sistema. As fontes via
  Google Fonts (`next/font/google`) não puderam ser buscadas no ambiente
  onde este build foi validado (sem acesso a fonts.googleapis.com); o
  CSS já referencia os nomes corretos por `font-family`, então basta
  reintroduzir `next/font/google` em `layout.tsx` assim que houver rede
  disponível (dev local ou Vercel já têm).
- **Direção visual**: fugimos do "dashboard" — sem sidebar, sem cards
  genéricos de SaaS. A referência é álbum/anuário de papel: fundo escuro e
  quente, dourado como cor de destaque, fotos levemente rotacionadas tipo
  polaroid (rotação varia por item, não é um ângulo fixo), selo do ano no
  canto dos retratos de pessoas, sumário numerado na Home e no menu mobile.
- **"Pessoas"** ficou como uma página só, com Alunos e Professores em duas
  seções (não duas rotas separadas) — evita navegação redundante numa
  versão sem volume real de dados.

## Acessibilidade

- Contraste revisado (tokens de cor ajustados pra passar AA em texto
  pequeno).
- Skip-link para o conteúdo principal.
- Foco visível (`:focus-visible`) em toda a interface.
- Menu mobile: fecha com `Escape`, move o foco pro primeiro link ao abrir e
  devolve o foco pro botão de abrir/fechar ao fechar via `Escape`.
- `prefers-reduced-motion` desliga as transições (hover das fotos,
  sublinhado do menu, animação do ícone do menu mobile) globalmente.

## Limitações / pontos a revisar

- Fotos reais ainda não foram adicionadas — o mecanismo já existe (ver
  "Decisões técnicas" acima), falta decidir como os colegas vão enviar
  fotos e frases e colocar os arquivos em `public/mock/`.
- Não há paginação/filtro na Galeria nem na lista de Pessoas — se a turma
  crescer, vale revisitar.
- Nenhuma validação de acessibilidade foi feita com leitor de tela real,
  só HTML semântico, `alt`, foco visível e navegação por teclado.
- Nenhum teste automatizado configurado (só `dev`/`build`/`start`/`lint`
  no `package.json`).

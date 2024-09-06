const roadmaps = {
  javascript: {
    title: "Roadmap de JavaScript",
    content: `
                <li><strong>Fundamentos do JavaScript</strong>
                  <ul>
                    <li>Introdução ao JavaScript
                      <ul>
                        <li>O que é JavaScript?</li>
                        <li>História e evolução</li>
                      </ul>
                    </li>
                    <li>Configuração do Ambiente
                      <ul>
                        <li>Escolhendo um editor de código (VS Code, Sublime Text)</li>
                        <li>Configuração de um projeto simples</li>
                      </ul>
                    </li>
                    <li>Sintaxe Básica
                      <ul>
                        <li>Variáveis e tipos de dados</li>
                        <li>Operadores e estruturas de controle (if, for, while)</li>
                      </ul>
                    </li>
                    <li>Funções
                      <ul>
                        <li>Definição e chamada de funções</li>
                        <li>Funções anônimas e arrow functions</li>
                      </ul>
                    </li>
                    <li>Objetos e Arrays
                      <ul>
                        <li>Criação e manipulação de objetos</li>
                        <li>Trabalhando com arrays e métodos array</li>
                      </ul>
                    </li>
                    <li>DOM (Document Object Model)
                      <ul>
                        <li>Manipulação do DOM</li>
                        <li>Eventos e listeners</li>
                      </ul>
                    </li>
                  </ul>
                </li>
      
                <li><strong>JavaScript Intermediário</strong>
                  <ul>
                    <li>Programação Assíncrona
                      <ul>
                        <li>Promises e async/await</li>
                        <li>Manipulação de erros</li>
                      </ul>
                    </li>
                    <li>Manipulação de Eventos
                      <ul>
                        <li>Eventos de formulário</li>
                        <li>Eventos personalizados</li>
                      </ul>
                    </li>
                    <li>Objetos Avançados
                      <ul>
                        <li>Prototypes e herança</li>
                        <li>Classes ES6</li>
                      </ul>
                    </li>
                    <li>JSON e APIs
                      <ul>
                        <li>Trabalhando com JSON</li>
                        <li>Fetch API e Axios</li>
                      </ul>
                    </li>
                    <li>Ferramentas e Build Tools
                      <ul>
                        <li>Webpack e Babel</li>
                        <li>Configuração de ambientes de desenvolvimento</li>
                      </ul>
                    </li>
                  </ul>
                </li>
      
                <li><strong>JavaScript Avançado</strong>
                  <ul>
                    <li>Desenvolvimento de Aplicações
                      <ul>
                        <li>Frameworks e bibliotecas (React, Vue, Angular)</li>
                        <li>State management (Redux, Vuex)</li>
                      </ul>
                    </li>
                    <li>Desempenho e Otimização
                      <ul>
                        <li>Profiling e análise de desempenho</li>
                        <li>Otimização de código</li>
                      </ul>
                    </li>
                    <li>Segurança
                      <ul>
                        <li>Segurança em aplicações web</li>
                        <li>Prevenção de ataques comuns (XSS, CSRF)</li>
                      </ul>
                    </li>
                    <li>Desenvolvimento Full Stack
                      <ul>
                        <li>Node.js e Express</li>
                        <li>Construção de APIs</li>
                      </ul>
                    </li>
                  </ul>
                </li>
      
                <li><strong>Projetos Práticos</strong>
                  <ul>
                    <li>Construa projetos:
                      <ul>
                        <li>Aplicação de lista de tarefas (To-Do List)</li>
                        <li>Aplicativo de tempo real (chat)</li>
                        <li>Dashboard com gráficos</li>
                      </ul>
                    </li>
                  </ul>
                </li>
      
                <li><strong>Recursos Adicionais</strong>
                  <ul>
                    <li>Livros:
                      <ul>
                        <li>"Eloquent JavaScript" - Marijn Haverbeke</li>
                        <li>"JavaScript: The Good Parts" - Douglas Crockford</li>
                      </ul>
                    </li>
                    <li>Cursos online:
                      <ul>
                        <li>FreeCodeCamp, Udemy, Codecademy</li>
                      </ul>
                    </li>
                    <li>Comunidades:
                      <ul>
                        <li>Stack Overflow</li>
                        <li>Reddit (r/javascript)</li>
                        <li>JavaScript Weekly</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              `,
  },

  python: {
    title: "Roadmap de Python",
    content: `
            <li><strong>Fundamentos da Programação</strong>
              <ul>
                <li>Fundamentos do Python
                  <ul>
                    <li>O que é Python?</li>
                    <li>História e evolução</li>
                    <li>Instalando Python e configurando o ambiente</li>
                    <li>Tipos de dados e variáveis (int, float, string, boolean)</li>
                  </ul>
                </li>
                <li>Sintaxe Básica:
                  <ul>
                    <li>Estruturas de controle (if, else, elif, for, while)</li>
                    <li>Funções: Definição, parâmetros, retorno e funções lambda</li>
                    <li>Listas, dicionários e tuplas</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Python Intermediário</strong>
              <ul>
                <li>Orientação a Objetos:
                  <ul>
                    <li>Classes e objetos</li>
                    <li>Herança, encapsulamento e polimorfismo</li>
                  </ul>
                </li>
                <li>Assincronismo:
                  <ul>
                    <li>Threading</li>
                    <li>Asyncio</li>
                  </ul>
                </li>
                <li>Bibliotecas e Frameworks:
                  <ul>
                    <li>Flask</li>
                    <li>Django</li>
                    <li>Pandas, NumPy e Matplotlib</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Python Avançado</strong>
              <ul>
                <li>Design Patterns:
                  <ul>
                    <li>Singleton, Factory, Observer</li>
                  </ul>
                </li>
                <li>Testes Automatizados:
                  <ul>
                    <li>Unittest, PyTest</li>
                  </ul>
                </li>
                <li>Machine Learning:
                  <ul>
                    <li>Introdução ao Scikit-learn</li>
                    <li>Redes neurais com TensorFlow</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Calculadora</li>
                    <li>Gerador de senhas</li>
                    <li>Aplicação de controle financeiro</li>
                    <li>Analisador de dados</li>
                    <li>Web scraper</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"Automate the Boring Stuff with Python"</li>
                    <li>"Fluent Python"</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Alura, Udemy, Coursera</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Python Brasil</li>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/learnpython)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },

  java: {
    title: "Roadmap de Java",
    content: `
            <li><strong>Fundamentos da Programação</strong>
              <ul>
                <li>Fundamentos do Java
                  <ul>
                    <li>O que é Java?</li>
                    <li>História e evolução</li>
                    <li>Instalando Java e configurando o ambiente</li>
                    <li>Tipos de dados e variáveis (int, float, string, boolean)</li>
                  </ul>
                </li>
                <li>Sintaxe Básica:
                  <ul>
                    <li>Estruturas de controle (if, else, switch, for, while)</li>
                    <li>Funções: Métodos, parâmetros e retorno</li>
                    <li>Arrays e coleções (List, Set, Map)</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Java Intermediário</strong>
              <ul>
                <li>Orientação a Objetos:
                  <ul>
                    <li>Classes, objetos, interfaces</li>
                    <li>Herança e polimorfismo</li>
                    <li>Encapsulamento</li>
                  </ul>
                </li>
                <li>Bibliotecas e Frameworks:
                  <ul>
                    <li>Spring Framework</li>
                    <li>Hibernate</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Java Avançado</strong>
              <ul>
                <li>Design Patterns:
                  <ul>
                    <li>Factory, Singleton, Observer</li>
                  </ul>
                </li>
                <li>Assincronismo e Concurrency:
                  <ul>
                    <li>Threading, Executors</li>
                    <li>Parallel Streams</li>
                  </ul>
                </li>
                <li>JVM Tuning e Performance:
                  <ul>
                    <li>Garbage Collection</li>
                    <li>Profiling</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Aplicação de gerenciamento de estoque</li>
                    <li>Sistema de login</li>
                    <li>API RESTful com Spring Boot</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"Effective Java"</li>
                    <li>"Java: A Beginner's Guide"</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Alura, Udemy, Coursera</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Java Brasil</li>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/java)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  c: {
    title: "Roadmap de C",
    content: `
            <li><strong>Fundamentos da Programação</strong>
              <ul>
                <li>Fundamentos do C
                  <ul>
                    <li>O que é C?</li>
                    <li>História e evolução</li>
                    <li>Instalando o compilador (GCC, Clang)</li>
                    <li>Tipos de dados e variáveis (int, float, char, double)</li>
                    <li>Estruturas de controle (if, else, switch, for, while)</li>
                  </ul>
                </li>
                <li>Funções:
                  <ul>
                    <li>Declaração e chamada de funções</li>
                    <li>Passagem de parâmetros (por valor e por referência)</li>
                    <li>Funções recursivas</li>
                  </ul>
                </li>
                <li>Arrays e Strings:
                  <ul>
                    <li>Trabalhando com arrays e strings</li>
                    <li>Manipulação de strings com funções da biblioteca padrão</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>C Intermediário</strong>
              <ul>
                <li>Ponteiros:
                  <ul>
                    <li>O que são ponteiros?</li>
                    <li>Alocação de memória (malloc, calloc, free)</li>
                    <li>Ponteiros para arrays e funções</li>
                  </ul>
                </li>
                <li>Structs:
                  <ul>
                    <li>Estruturas de dados definidas pelo usuário</li>
                    <li>Ponteiros para structs</li>
                  </ul>
                </li>
                <li>Entrada/Saída (I/O):
                  <ul>
                    <li>Leitura e gravação de arquivos</li>
                    <li>Entrada e saída de dados com scanf e printf</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>C Avançado</strong>
              <ul>
                <li>Manipulação de Memória:
                  <ul>
                    <li>Gerenciamento de memória dinâmica</li>
                    <li>Leitura de ponteiros de ponteiros</li>
                  </ul>
                </li>
                <li>Compilação e Otimização:
                  <ul>
                    <li>Processo de compilação e linking</li>
                    <li>Flags de otimização</li>
                  </ul>
                </li>
                <li>Desenvolvimento de Sistemas:
                  <ul>
                    <li>Programação de baixo nível</li>
                    <li>Programação de drivers</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Calculadora simples</li>
                    <li>Editor de texto em terminal</li>
                    <li>Gerenciamento de arquivos</li>
                    <li>Implementação de algoritmos de busca e ordenação</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"The C Programming Language" - Kernighan & Ritchie</li>
                    <li>"C: A Modern Approach"</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Alura, Udemy, Coursera</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/C_Programming)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  cpp: {
    title: "Roadmap de C++",
    content: `
            <li><strong>Fundamentos da Programação</strong>
              <ul>
                <li>Fundamentos do C++
                  <ul>
                    <li>O que é C++?</li>
                    <li>História e evolução</li>
                    <li>Compilação com GCC e outros compiladores</li>
                    <li>Tipos de dados e variáveis</li>
                    <li>Estruturas de controle (if, else, switch, for, while)</li>
                  </ul>
                </li>
                <li>Funções:
                  <ul>
                    <li>Declaração, parâmetros e retorno</li>
                    <li>Funções inline e sobrecarga de funções</li>
                  </ul>
                </li>
                <li>Ponteiros e Referências:
                  <ul>
                    <li>Trabalhando com ponteiros e referências</li>
                    <li>Alocação de memória dinâmica (new e delete)</li>
                  </ul>
                </li>
                <li>Classes e Objetos:
                  <ul>
                    <li>Definindo classes e criando objetos</li>
                    <li>Construtores e destrutores</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>C++ Intermediário</strong>
              <ul>
                <li>Orientação a Objetos:
                  <ul>
                    <li>Herança, polimorfismo e encapsulamento</li>
                    <li>Classes abstratas e interfaces</li>
                  </ul>
                </li>
                <li>Templates:
                  <ul>
                    <li>Templates de funções e classes</li>
                    <li>STL (Standard Template Library): Vectors, Maps, etc.</li>
                  </ul>
                </li>
                <li>Manipulação de Arquivos:
                  <ul>
                    <li>Entrada e saída de arquivos (fstream)</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>C++ Avançado</strong>
              <ul>
                <li>Programação Genérica:
                  <ul>
                    <li>Templates avançados e metaprogramação</li>
                  </ul>
                </li>
                <li>Multithreading:
                  <ul>
                    <li>Threading e paralelismo com a biblioteca padrão</li>
                    <li>Mutexes e locks</li>
                  </ul>
                </li>
                <li>Otimização de Código:
                  <ul>
                    <li>Uso eficiente de memória e tempo de execução</li>
                    <li>Perfis de execução e otimização</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Jogo simples (ex: Snake)</li>
                    <li>Sistema de gerenciamento de alunos</li>
                    <li>Implementação de algoritmos de grafos</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"The C++ Programming Language" - Bjarne Stroustrup</li>
                    <li>"Effective C++" - Scott Meyers</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Alura, Udemy, Coursera</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/cpp)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  csharp: {
    title: "Roadmap de C#",
    content: `
            <li><strong>C# Intermediário</strong>
              <ul>
                <li>Orientação a Objetos:
                  <ul>
                    <li>Herança, polimorfismo e encapsulamento</li>
                    <li>Interfaces e classes abstratas</li>
                  </ul>
                </li>
                <li>LINQ (Language Integrated Query):
                  <ul>
                    <li>Consultas com LINQ em coleções</li>
                    <li>Consultas com LINQ em bancos de dados</li>
                  </ul>
                </li>
                <li>Gerenciamento de Memória e Coleções:
                  <ul>
                    <li>Garbage Collection</li>
                    <li>Collections (List, Dictionary, Queue, Stack)</li>
                  </ul>
                </li>
                <li>Manipulação de Arquivos e I/O:
                  <ul>
                    <li>Leitura e gravação de arquivos com File I/O</li>
                    <li>Trabalhando com arquivos CSV e JSON</li>
                  </ul>
                </li>
                <li>Tratamento de Exceções:
                  <ul>
                    <li>Try, Catch, Finally</li>
                    <li>Exceções personalizadas</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>C# Avançado</strong>
              <ul>
                <li>Programação Assíncrona:
                  <ul>
                    <li>Async e Await</li>
                    <li>Task Parallel Library (TPL)</li>
                  </ul>
                </li>
                <li>Design Patterns:
                  <ul>
                    <li>Singleton, Factory, Observer, Dependency Injection</li>
                  </ul>
                </li>
                <li>Programação Paralela:
                  <ul>
                    <li>Threads e Tasks</li>
                    <li>Paralelismo e concorrência</li>
                  </ul>
                </li>
                <li>ASP.NET:
                  <ul>
                    <li>Desenvolvimento de aplicações web com ASP.NET Core</li>
                    <li>Model-View-Controller (MVC)</li>
                  </ul>
                </li>
                <li>Entity Framework:
                  <ul>
                    <li>Mapeamento objeto-relacional</li>
                    <li>Consultas e migrações</li>
                  </ul>
                </li>
                <li>Desenvolvimento de Aplicações Desktop:
                  <ul>
                    <li>Windows Forms</li>
                    <li>WPF (Windows Presentation Foundation)</li>
                  </ul>
                </li>
                <li>Desenvolvimento de Jogos:
                  <ul>
                    <li>Unity3D e C#</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Aplicação de gerenciamento de contatos</li>
                    <li>Aplicação de tarefas com interface gráfica</li>
                    <li>Sistema de gerenciamento de biblioteca</li>
                    <li>Jogo simples com Unity3D</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"C# 9.0 in a Nutshell" - Joseph Albahari</li>
                    <li>"Pro C# 8 with .NET Core 3" - Andrew Troelsen</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Pluralsight, Udemy, Coursera</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/csharp)</li>
                    <li>Microsoft Learn</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  ruby: {
    title: "Roadmap de Ruby",
    content: `
            <li><strong>Fundamentos do Ruby</strong>
              <ul>
                <li>Introdução ao Ruby
                  <ul>
                    <li>O que é Ruby?</li>
                    <li>História e filosofia</li>
                  </ul>
                </li>
                <li>Configuração do Ambiente
                  <ul>
                    <li>Instalação do Ruby</li>
                    <li>Gerenciadores de versão (rbenv, RVM)</li>
                    <li>Configurando um editor (VS Code, RubyMine)</li>
                  </ul>
                </li>
                <li>Sintaxe Básica
                  <ul>
                    <li>Variáveis e tipos de dados</li>
                    <li>Operadores</li>
                    <li>Estruturas de controle</li>
                  </ul>
                </li>
                <li>Funções e Métodos
                  <ul>
                    <li>Definição e chamada de métodos</li>
                    <li>Argumentos e retornos</li>
                  </ul>
                </li>
                <li>Objetos e Classes
                  <ul>
                    <li>Criação e uso de classes</li>
                    <li>Herança e módulos</li>
                  </ul>
                </li>
                <li>Manipulação de Strings e Arrays
                  <ul>
                    <li>Operações com strings</li>
                    <li>Manipulação de arrays</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Ruby Intermediário</strong>
              <ul>
                <li>Metaprogramação
                  <ul>
                    <li>Reflexão e introspecção</li>
                    <li>Definição dinâmica de métodos</li>
                  </ul>
                </li>
                <li>Programação Funcional
                  <ul>
                    <li>Blocos, Proc e Lambda</li>
                    <li>Enumeradores e iteradores</li>
                  </ul>
                </li>
                <li>Tratamento de Exceções
                  <ul>
                    <li>Begin, Rescue, Ensure</li>
                    <li>Exceções personalizadas</li>
                  </ul>
                </li>
                <li>Trabalhando com Gems
                  <ul>
                    <li>Instalação e uso de gems</li>
                    <li>Desenvolvimento de gems</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Ruby Avançado</strong>
              <ul>
                <li>Ruby on Rails
                  <ul>
                    <li>Configuração e desenvolvimento de aplicações Rails</li>
                    <li>Model-View-Controller (MVC)</li>
                    <li>Active Record e migrations</li>
                  </ul>
                </li>
                <li>Performance e Escalabilidade
                  <ul>
                    <li>Profiling e otimização</li>
                    <li>Cache e outros mecanismos de melhoria de desempenho</li>
                  </ul>
                </li>
                <li>Testes
                  <ul>
                    <li>RSpec e Minitest</li>
                    <li>Testes de unidade e integração</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Aplicação de blog</li>
                    <li>Gerenciador de tarefas</li>
                    <li>API RESTful com Ruby on Rails</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"The Well-Grounded Rubyist" - David A. Black</li>
                    <li>"Eloquent Ruby" - Russ Olsen</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Codecademy, Udemy, Coursera</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Ruby Forum</li>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/ruby)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  php: {
    title: "Roadmap de PHP",
    content: `
            <li><strong>Fundamentos do PHP</strong>
              <ul>
                <li>Introdução ao PHP
                  <ul>
                    <li>O que é PHP?</li>
                    <li>História e evolução</li>
                  </ul>
                </li>
                <li>Configuração do Ambiente
                  <ul>
                    <li>Instalação do PHP</li>
                    <li>Configuração do servidor (Apache, Nginx)</li>
                    <li>Configurando um editor (VS Code, PHPStorm)</li>
                  </ul>
                </li>
                <li>Sintaxe Básica
                  <ul>
                    <li>Variáveis e tipos de dados</li>
                    <li>Operadores</li>
                    <li>Estruturas de controle</li>
                  </ul>
                </li>
                <li>Funções e Métodos
                  <ul>
                    <li>Definição e chamada de funções</li>
                    <li>Argumentos e retornos</li>
                  </ul>
                </li>
                <li>Manipulação de Strings e Arrays
                  <ul>
                    <li>Funções de manipulação de strings</li>
                    <li>Manipulação de arrays</li>
                  </ul>
                </li>
                <li>Trabalhando com Formulários
                  <ul>
                    <li>Recebendo dados com GET e POST</li>
                    <li>Validação e sanitização de dados</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>PHP Intermediário</strong>
              <ul>
                <li>Programação Orientada a Objetos
                  <ul>
                    <li>Classes e objetos</li>
                    <li>Herança e interfaces</li>
                  </ul>
                </li>
                <li>Trabalhando com Banco de Dados
                  <ul>
                    <li>Conexão com MySQL usando PDO</li>
                    <li>CRUD (Create, Read, Update, Delete)</li>
                  </ul>
                </li>
                <li>Manipulação de Arquivos
                  <ul>
                    <li>Leitura e escrita de arquivos</li>
                    <li>Upload de arquivos</li>
                  </ul>
                </li>
                <li>Tratamento de Exceções
                  <ul>
                    <li>Try, Catch e Finally</li>
                    <li>Exceções personalizadas</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>PHP Avançado</strong>
              <ul>
                <li>Segurança
                  <ul>
                    <li>Proteção contra SQL Injection</li>
                    <li>Proteção contra XSS e CSRF</li>
                  </ul>
                </li>
                <li>Frameworks
                  <ul>
                    <li>Laravel</li>
                    <li>Symfony</li>
                  </ul>
                </li>
                <li>Testes
                  <ul>
                    <li>PHPUnit</li>
                    <li>Testes de unidade e integração</li>
                  </ul>
                </li>
                <li>Desenvolvimento de APIs
                  <ul>
                    <li>Criação de APIs RESTful</li>
                    <li>Autenticação e autorização</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Sistema de gerenciamento de usuários</li>
                    <li>Aplicação de blog</li>
                    <li>API RESTful com Laravel</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"PHP Objects, Patterns, and Practice" - Mika Schwartz</li>
                    <li>"Modern PHP" - Josh Lockhart</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Udemy, Pluralsight, Coursera</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>PHP Forums</li>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/PHP)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  swift: {
    title: "Roadmap de Swift",
    content: `
            <li><strong>Fundamentos do Swift</strong>
              <ul>
                <li>Introdução ao Swift
                  <ul>
                    <li>O que é Swift?</li>
                    <li>História e filosofia</li>
                  </ul>
                </li>
                <li>Configuração do Ambiente
                  <ul>
                    <li>Instalação do Xcode</li>
                    <li>Configurando um projeto Swift</li>
                  </ul>
                </li>
                <li>Sintaxe Básica
                  <ul>
                    <li>Variáveis e constantes</li>
                    <li>Tipos de dados</li>
                    <li>Operadores e estruturas de controle</li>
                  </ul>
                </li>
                <li>Funções e Métodos
                  <ul>
                    <li>Definição e chamada de funções</li>
                    <li>Argumentos e retornos</li>
                  </ul>
                </li>
                <li>Objetos e Classes
                  <ul>
                    <li>Criação e uso de classes</li>
                    <li>Herança e protocolos</li>
                  </ul>
                </li>
                <li>Manipulação de Strings e Collections
                  <ul>
                    <li>Operações com strings</li>
                    <li>Arrays e dicionários</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Swift Intermediário</strong>
              <ul>
                <li>Programação Funcional
                  <ul>
                    <li>Closures</li>
                    <li>Map, Filter, Reduce</li>
                  </ul>
                </li>
                <li>Tratamento de Exceções
                  <ul>
                    <li>Try, Catch e Throw</li>
                    <li>Tratamento de erros com Optionals</li>
                  </ul>
                </li>
                <li>Gerenciamento de Memória
                  <ul>
                    <li>Automatic Reference Counting (ARC)</li>
                  </ul>
                </li>
                <li>Desenvolvimento com UIKit
                  <ul>
                    <li>Interface Builder</li>
                    <li>View Controllers e Navigation Controllers</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Swift Avançado</strong>
              <ul>
                <li>Desenvolvimento com SwiftUI
                  <ul>
                    <li>Layouts e Views</li>
                    <li>Data Binding e Combine</li>
                  </ul>
                </li>
                <li>Performance e Escalabilidade
                  <ul>
                    <li>Profiling e otimização</li>
                  </ul>
                </li>
                <li>Desenvolvimento de Aplicações iOS
                  <ul>
                    <li>Arquitetura MVVM</li>
                    <li>Gerenciamento de estado e navegação</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Aplicação de lista de tarefas</li>
                    <li>Aplicativo de clima</li>
                    <li>Jogo simples com SpriteKit</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"Swift Programming: The Big Nerd Ranch Guide" - Matthew Mathias</li>
                    <li>"iOS Programming: The Big Nerd Ranch Guide" - Christian Keur</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Udemy, Coursera, Ray Wenderlich</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Swift Forums</li>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/swift)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  rust: {
    title: "Roadmap de Rust",
    content: `
            <li><strong>Fundamentos do Rust</strong>
              <ul>
                <li>Introdução ao Rust
                  <ul>
                    <li>O que é Rust?</li>
                    <li>História e filosofia</li>
                  </ul>
                </li>
                <li>Configuração do Ambiente
                  <ul>
                    <li>Instalação do Rust (rustup)</li>
                    <li>Configurando o ambiente de desenvolvimento (Cargo, Rustfmt)</li>
                    <li>Configurando um editor (VS Code, IntelliJ Rust)</li>
                  </ul>
                </li>
                <li>Sintaxe Básica
                  <ul>
                    <li>Variáveis e tipos de dados</li>
                    <li>Operadores e estruturas de controle</li>
                  </ul>
                </li>
                <li>Funções e Métodos
                  <ul>
                    <li>Definição e chamada de funções</li>
                    <li>Funções e métodos em structs</li>
                  </ul>
                </li>
                <li>Propriedade e Empréstimo
                  <ul>
                    <li>Propriedade de dados</li>
                    <li>Empréstimos e referências</li>
                  </ul>
                </li>
                <li>Collections e Strings
                  <ul>
                    <li>Arrays e vetores</li>
                    <li>Strings e manipulação de texto</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Rust Intermediário</strong>
              <ul>
                <li>Tratamento de Erros
                  <ul>
                    <li>Result e Option</li>
                    <li>Pattern matching</li>
                  </ul>
                </li>
                <li>Concorrência
                  <ul>
                    <li>Threads e async/await</li>
                    <li>Canal de comunicação e Mutex</li>
                  </ul>
                </li>
                <li>Macro e Metaprogramação
                  <ul>
                    <li>Macros em Rust</li>
                    <li>Procedural macros</li>
                  </ul>
                </li>
                <li>Testes
                  <ul>
                    <li>Testes unitários</li>
                    <li>Testes de integração</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Rust Avançado</strong>
              <ul>
                <li>Performance e Escalabilidade
                  <ul>
                    <li>Otimização de código</li>
                    <li>Gerenciamento de memória</li>
                  </ul>
                </li>
                <li>Desenvolvimento de Bibliotecas
                  <ul>
                    <li>Criação e publicação de crates</li>
                    <li>Documentação e versionamento</li>
                  </ul>
                </li>
                <li>Desenvolvimento de Aplicações
                  <ul>
                    <li>Web frameworks como Actix e Rocket</li>
                    <li>Desenvolvimento de CLI</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>CLI para gerenciamento de arquivos</li>
                    <li>Servidor web com Actix</li>
                    <li>Aplicativo de processamento de dados</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"The Rust Programming Language" - Steve Klabnik</li>
                    <li>"Programming Rust" - Jim Blandy</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Udemy, Coursera, Rust Book Online</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Rust Users Forum</li>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/rust)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  go: {
    title: "Roadmap de Go",
    content: `
            <li><strong>Fundamentos do Go</strong>
              <ul>
                <li>Introdução ao Go
                  <ul>
                    <li>O que é Go?</li>
                    <li>História e filosofia</li>
                  </ul>
                </li>
                <li>Configuração do Ambiente
                  <ul>
                    <li>Instalação do Go</li>
                    <li>Configurando o ambiente de desenvolvimento (GOPATH, módulos)</li>
                    <li>Configurando um editor (VS Code, GoLand)</li>
                  </ul>
                </li>
                <li>Sintaxe Básica
                  <ul>
                    <li>Variáveis e tipos de dados</li>
                    <li>Operadores e estruturas de controle</li>
                  </ul>
                </li>
                <li>Funções e Métodos
                  <ul>
                    <li>Definição e chamada de funções</li>
                    <li>Funções anônimas e closures</li>
                  </ul>
                </li>
                <li>Estruturas e Interfaces
                  <ul>
                    <li>Structs e interfaces</li>
                    <li>Composição e herança</li>
                  </ul>
                </li>
                <li>Manipulação de Strings e Collections
                  <ul>
                    <li>Operações com strings</li>
                    <li>Arrays, slices e maps</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Go Intermediário</strong>
              <ul>
                <li>Programação Concorrente
                  <ul>
                    <li>Goroutines</li>
                    <li>Channels</li>
                  </ul>
                </li>
                <li>Tratamento de Erros
                  <ul>
                    <li>Erro e tratamento de erros com error</li>
                    <li>Panics e recover</li>
                  </ul>
                </li>
                <li>Manipulação de Arquivos e I/O
                  <ul>
                    <li>Leitura e escrita de arquivos</li>
                    <li>Trabalhando com arquivos CSV e JSON</li>
                  </ul>
                </li>
                <li>Testes
                  <ul>
                    <li>Testes unitários com o pacote esting</li>
                    <li>Testes de benchmark</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Go Avançado</strong>
              <ul>
                <li>Performance e Escalabilidade
                  <ul>
                    <li>Profiling e otimização</li>
                    <li>Garbage Collection</li>
                  </ul>
                </li>
                <li>Desenvolvimento de APIs
                  <ul>
                    <li>Criação de APIs RESTful</li>
                    <li>Frameworks como Gin e Echo</li>
                  </ul>
                </li>
                <li>Desenvolvimento Web
                  <ul>
                    <li>Templating e middleware</li>
                    <li>Serviços e microservices</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>API RESTful com Gin</li>
                    <li>Aplicativo de gerenciamento de tarefas</li>
                    <li>Web scraper simples</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"The Go Programming Language" - Alan A. Donovan</li>
                    <li>"Go Programming Language" - Robert Griesemer</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Udemy, Coursera, Go Academy</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Go Forum</li>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/golang)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  kotlin: {
    title: "Roadmap de Kotlin",
    content: `
            <li><strong>Fundamentos do Kotlin</strong>
              <ul>
                <li>Introdução ao Kotlin
                  <ul>
                    <li>O que é Kotlin?</li>
                    <li>História e filosofia</li>
                  </ul>
                </li>
                <li>Configuração do Ambiente
                  <ul>
                    <li>Instalação do IntelliJ IDEA</li>
                    <li>Configurando um projeto Kotlin</li>
                  </ul>
                </li>
                <li>Sintaxe Básica
                  <ul>
                    <li>Variáveis e tipos de dados</li>
                    <li>Operadores e estruturas de controle</li>
                  </ul>
                </li>
                <li>Funções e Métodos
                  <ul>
                    <li>Definição e chamada de funções</li>
                    <li>Funções de extensão</li>
                  </ul>
                </li>
                <li>Objetos e Classes
                  <ul>
                    <li>Criação e uso de classes</li>
                    <li>Herança e interfaces</li>
                  </ul>
                </li>
                <li>Manipulação de Collections
                  <ul>
                    <li>Listas, conjuntos e mapas</li>
                    <li>Operações com collections</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Kotlin Intermediário</strong>
              <ul>
                <li>Programação Funcional
                  <ul>
                    <li>Lambda expressions</li>
                    <li>Funções de alta ordem</li>
                  </ul>
                </li>
                <li>Coroutines
                  <ul>
                    <li>Introdução às coroutines</li>
                    <li>Gerenciamento de threads e suspensão</li>
                  </ul>
                </li>
                <li>Tratamento de Erros
                  <ul>
                    <li>Try, Catch e Throw</li>
                    <li>Exceções personalizadas</li>
                  </ul>
                </li>
                <li>Desenvolvimento Android
                  <ul>
                    <li>Introdução ao Android com Kotlin</li>
                    <li>ViewModels e LiveData</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Kotlin Avançado</strong>
              <ul>
                <li>Desenvolvimento de Aplicações
                  <ul>
                    <li>Frameworks como Ktor</li>
                    <li>Desenvolvimento de APIs</li>
                  </ul>
                </li>
                <li>Performance e Escalabilidade
                  <ul>
                    <li>Profiling e otimização</li>
                  </ul>
                </li>
                <li>Programação Multiplataforma
                  <ul>
                    <li>Introdução ao Kotlin Multiplatform</li>
                    <li>Desenvolvimento multiplataforma</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Aplicação Android simples</li>
                    <li>API RESTful com Ktor</li>
                    <li>App multiplataforma</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"Kotlin Programming: The Big Nerd Ranch Guide" - Josh Skeen</li>
                    <li>"Kotlin in Action" - Dmitry Jemerov</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Udemy, Coursera, JetBrains Academy</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Kotlin Slack</li>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/Kotlin)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  sql: {
    title: "Roadmap de SQL",
    content: `
            <li><strong>Fundamentos do SQL</strong>
              <ul>
                <li>Introdução ao SQL
                  <ul>
                    <li>O que é SQL?</li>
                    <li>História e filosofia</li>
                  </ul>
                </li>
                <li>Configuração do Ambiente
                  <ul>
                    <li>Instalação de um SGBD (MySQL, PostgreSQL, SQLite)</li>
                    <li>Configurando um ambiente de desenvolvimento</li>
                  </ul>
                </li>
                <li>Sintaxe Básica
                  <ul>
                    <li>Criação e manipulação de tabelas</li>
                    <li>Tipos de dados</li>
                    <li>Comandos DDL (CREATE, ALTER, DROP)</li>
                  </ul>
                </li>
                <li>Consultas Básicas
                  <ul>
                    <li>SELECT, FROM, WHERE</li>
                    <li>ORDER BY, LIMIT</li>
                  </ul>
                </li>
                <li>Operações de Manipulação
                  <ul>
                    <li>INSERT, UPDATE, DELETE</li>
                    <li>Transações (BEGIN, COMMIT, ROLLBACK)</li>
                  </ul>
                </li>
                <li>Joins e Subconsultas
                  <ul>
                    <li>INNER JOIN, LEFT JOIN, RIGHT JOIN</li>
                    <li>Subconsultas e consultas aninhadas</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>SQL Intermediário</strong>
              <ul>
                <li>Funções Agregadas
                  <ul>
                    <li>COUNT, SUM, AVG, MIN, MAX</li>
                  </ul>
                </li>
                <li>Views e Indexes
                  <ul>
                    <li>Criando e manipulando views</li>
                    <li>Criação e uso de índices</li>
                  </ul>
                </li>
                <li>Stored Procedures e Triggers
                  <ul>
                    <li>Criação e uso de stored procedures</li>
                    <li>Trigers e eventos</li>
                  </ul>
                </li>
                <li>Otimização de Consultas
                  <ul>
                    <li>Análise de planos de execução</li>
                    <li>Otimização e tuning de consultas</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>SQL Avançado</strong>
              <ul>
                <li>Desenvolvimento de Banco de Dados
                  <ul>
                    <li>Normalização e desnormalização</li>
                    <li>Design de esquemas e modelagem</li>
                  </ul>
                </li>
                <li>Segurança e Backup
                  <ul>
                    <li>Segurança de dados e permissões</li>
                    <li>Backups e recuperação de dados</li>
                  </ul>
                </li>
                <li>SQL em Ambientes Distribuídos
                  <ul>
                    <li>Databases NoSQL</li>
                    <li>Integração com Big Data</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Sistema de gerenciamento de biblioteca</li>
                    <li>Aplicativo de CRM</li>
                    <li>Relatórios e dashboards</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"SQL in 10 Minutes, Sams Teach Yourself" - Ben Forta</li>
                    <li>"SQL Queries for Mere Mortals" - Michael J. Hernandez</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>Udemy, Coursera, Khan Academy</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/SQL)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  html: {
    title: "Roadmap de HTML",
    content: `
            <li><strong>Fundamentos do HTML</strong>
              <ul>
                <li>Introdução ao HTML
                  <ul>
                    <li>O que é HTML?</li>
                    <li>História e evolução</li>
                  </ul>
                </li>
                <li>Configuração do Ambiente
                  <ul>
                    <li>Escolhendo um editor de código (VS Code, Sublime Text)</li>
                    <li>Estrutura básica de um documento HTML</li>
                  </ul>
                </li>
                <li>Elementos e Tags
                  <ul>
                    <li>Tags HTML comuns (html, head, body, p, a, div, span)</li>
                    <li>Semântica HTML (header, footer, article, section)</li>
                  </ul>
                </li>
                <li>Atributos
                  <ul>
                    <li>Uso de atributos em tags</li>
                    <li>Atributos globais (id, class, style)</li>
                  </ul>
                </li>
                <li>Formulários e Inputs
                  <ul>
                    <li>Criação de formulários</li>
                    <li>Tipos de input (text, password, checkbox, radio, etc.)</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>HTML Intermediário</strong>
              <ul>
                <li>HTML5
                  <ul>
                    <li>Novo elementos (article, section, aside, nav)</li>
                    <li>APIs HTML5 (Canvas, Geolocation, Local Storage)</li>
                  </ul>
                </li>
                <li>Multimídia
                  <ul>
                    <li>Incorporando vídeos e áudios (video, audio)</li>
                    <li>Uso de elementos de mídia</li>
                  </ul>
                </li>
                <li>Acessibilidade
                  <ul>
                    <li>Princípios básicos de acessibilidade</li>
                    <li>Uso de ARIA roles</li>
                  </ul>
                </li>
                <li>SEO e Performance
                  <ul>
                    <li>Melhorando SEO com HTML</li>
                    <li>Otimização de carregamento de página</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>HTML Avançado</strong>
              <ul>
                <li>Web Components
                  <ul>
                    <li>Custom Elements</li>
                    <li>Shadow DOM</li>
                  </ul>
                </li>
                <li>Internacionalização
                  <ul>
                    <li>Gerenciamento de múltiplos idiomas</li>
                    <li>Uso de atributos hreflang</li>
                  </ul>
                </li>
                <li>HTML e JavaScript
                  <ul>
                    <li>Manipulação DOM com JavaScript</li>
                    <li>Eventos e interações</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Portfólio pessoal</li>
                    <li>Formulário de inscrição</li>
                    <li>Landing page</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"HTML and CSS: Design and Build Websites" - Jon Duckett</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>FreeCodeCamp, Coursera, Udemy</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/webdev)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
  css: {
    title: "Roadmap de CSS",
    content: `
            <li><strong>Fundamentos do CSS</strong>
              <ul>
                <li>Introdução ao CSS
                  <ul>
                    <li>O que é CSS?</li>
                    <li>História e evolução</li>
                  </ul>
                </li>
                <li>Configuração do Ambiente
                  <ul>
                    <li>Adicionando CSS a HTML</li>
                    <li>Usando editores de código</li>
                  </ul>
                </li>
                <li>Sintaxe Básica
                  <ul>
                    <li>Seletores e regras</li>
                    <li>Propriedades e valores</li>
                  </ul>
                </li>
                <li>Layout
                  <ul>
                    <li>Modelo de Caixa (Box Model)</li>
                    <li>Propriedades de layout (margin, padding, border)</li>
                  </ul>
                </li>
                <li>Estilização de Texto e Fontes
                  <ul>
                    <li>Fontes web (Google Fonts)</li>
                    <li>Propriedades de texto (font-size, font-family, text-align)</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>CSS Intermediário</strong>
              <ul>
                <li>Layout Avançado
                  <ul>
                    <li>Flexbox</li>
                    <li>Grid Layout</li>
                  </ul>
                </li>
                <li>Transições e Animações
                  <ul>
                    <li>Transições CSS</li>
                    <li>Animações com @keyframes</li>
                  </ul>
                </li>
                <li>Design Responsivo
                  <ul>
                    <li>Media Queries</li>
                    <li>Design adaptativo e fluido</li>
                  </ul>
                </li>
                <li>Pré-processadores CSS
                  <ul>
                    <li>Uso de SASS/SCSS</li>
                    <li>Variáveis e mixins</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>CSS Avançado</strong>
              <ul>
                <li>Custom Properties
                  <ul>
                    <li>Uso de variáveis CSS</li>
                  </ul>
                </li>
                <li>Grid Layout Avançado
                  <ul>
                    <li>Alinhamento e áreas de grid</li>
                  </ul>
                </li>
                <li>Design Avançado
                  <ul>
                    <li>Layouts complexos e responsivos</li>
                    <li>Uso avançado de transformações</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Projetos Práticos</strong>
              <ul>
                <li>Construa projetos:
                  <ul>
                    <li>Layout de site</li>
                    <li>Formulário estilizado</li>
                    <li>Portfólio responsivo</li>
                  </ul>
                </li>
              </ul>
            </li>
  
            <li><strong>Recursos Adicionais</strong>
              <ul>
                <li>Livros:
                  <ul>
                    <li>"CSS: The Missing Manual" - David Sawyer McFarland</li>
                    <li>"CSS Secrets" - Lea Verou</li>
                  </ul>
                </li>
                <li>Cursos online:
                  <ul>
                    <li>FreeCodeCamp, Coursera, Udemy</li>
                  </ul>
                </li>
                <li>Comunidades:
                  <ul>
                    <li>Stack Overflow</li>
                    <li>Reddit (r/css)</li>
                  </ul>
                </li>
              </ul>
            </li>
          `,
  },
};

function changeLanguage() {
  const selectedLanguage = document.getElementById("language-selector").value;
  const roadmap = roadmaps[selectedLanguage];

  // Atualiza o título e o conteúdo com base na linguagem selecionada
  document.querySelector(".resultados-pesquisa h2").innerText = roadmap.title;
  document.querySelector(".resultados-pesquisa ul").innerHTML = roadmap.content;
}

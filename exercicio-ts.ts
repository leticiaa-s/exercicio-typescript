//1 - Crie um tipo para representar um objeto que contenha as suas informações de
// nome,profissão, idade e uma lista de assuntos do seu interesse. 
interface Perfil {
    nome: string;
    profissao: string;
    idade: number;
    interesses: string[];
}

//2 - Crie um objeto utilizando o tipo criado no exercício 1
// e o popule de acordo com suas informações.
const aluna: Perfil = {
    nome: "Letícia",
    profissao: "Desenvolvedora Full Stack Júnior",
    idade: 25,
    interesses: ['Culinária', 'Séries', 'Filmes', 'Música', 'Tecnologia', 'História', 'Ciências']
}

//3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1,
// e retorne somente a lista de assuntos do objeto.
//
//4 - Coloque a tipagem tanto no argumento da função do exercício 3
// quanto no tipo de retorno dela.
function listarInteresses(perfil: Perfil): string[] {
    return perfil.interesses;
}
console.log(listarInteresses(aluna));

//5 - Crie um enum para representar as matérias do curso (Angular, Typescript, Git)
enum MateriasCurso {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git"
}

//6 - Crie mais um tipo para representar os professores,
// contendo nome e uma lista das materias de cada um
interface Professores {
    nome: string;
    materias: MateriasCurso[];
}

//7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6
const profNathan: Professores = {
    nome: "Nathan",
    materias: [
        MateriasCurso.Angular,
        MateriasCurso.Git
    ]
}

const profAlan: Professores = {
    nome: "Alan",
    materias: [
        MateriasCurso.Angular,
        MateriasCurso.Typescript,
        MateriasCurso.Git
    ]
}

//8 - Declare e popule um array com os objetos do exercício 7
let profSchoolAngular: Professores[] = [
    profAlan,
    profNathan
];
console.log(profSchoolAngular);

//9 - Faça uma função que receba um argumento de array de Professor
// e retorne um novo array de strings contendo somente os nomes dos professores
function populandoNomes(profSchoolAngular: Professores[]): string[] {
    return profSchoolAngular.map((profNome) => profNome.nome);
}
console.log(populandoNomes(profSchoolAngular));

//10 - Faça uma função que receba um argumento de array de Professor
// e retorne um array de materias
function populandoMaterias(profSchoolAngular: Professores[]): MateriasCurso[] {
    return profSchoolAngular.map(p => p.materias).reduce<MateriasCurso[]>((accumulator, materias) => {
        return accumulator.concat(materias)
    }, [])
}
console.log(populandoMaterias(profSchoolAngular));

//11 - Faça uma função que receba um argumento de array de Professores e
// retorne o primeiro professor encontrado que dê aula de typescript
function profTypescript(profSchoolAngular: Professores[]): Professores | undefined {
    return profSchoolAngular.find(professor => professor.materias.includes(MateriasCurso.Typescript));
}
console.log(profTypescript(profSchoolAngular));
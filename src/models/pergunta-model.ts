export interface PerguntaModel {
    pergunta_id: number,
    alunos: Array <{ numero: number, name: string, notes: string }>;
}
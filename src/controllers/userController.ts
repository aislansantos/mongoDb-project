import { Request, Response } from "express";

export const nome = (req: Request, res: Response) => {
  const nome: string = req.query.nome as string;
  const idade: string = req.query.idade as string;

  res.render("pages/nome", {
    nome,
    idade,
  });
};

export const idadeForm = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const idadeAction = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if (req.body.ano) {
    const anoNascimento: number = parseInt(req.body.ano as string);
    const anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }

  res.render("pages/idade", {
    idade,
    mostrarIdade,
  });
};

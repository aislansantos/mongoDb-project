import { Request, Response } from "express";
import User from "@/models/User";

export const home = async (req: Request, res: Response) => {
  //  Existem 3 formas principais de conseguir atualizar dados:

  // 1 - forma primeiro coloco um objeto com os paramtros da busca, depois colocamos o que vai ser alterado em outro objeto
  await User.updateMany({ age: { $lte: 18 } }, { age: 18 });
  // 2 - atualiza somenter um usuário, muda somente a função mais é quase a mesma da segunda forma, esse nao retorna o registro
  await User.updateOne({ email: "aislan.santos@gmail.com" }, { age: 38 });
  // 3 - Está forma ja muda pq usaremos o objeto do usuario, atualizando alguma informação desse objeto
  const user = await User.findOne({ "name.firstName": "Juca" });

  if (!user) {
    console.log("Usuário não encontrado");
    return;
  }
  user.set("name.lastName", "Oliveira");
  user.set("age", 22);
  await user.save();

  // 4 - menos ultilizada que é uma funcão findOneAndUpdate, é como o update one, só que este caso retorna o usuário.
  // const userFindAndUpdate = await User.findOneAndUpdate(
  //   { email: "augusto.santos@gmail.com" },
  //   { age: 2 },
  // );

  // console.log(userFindAndUpdate);

  // Deletando informações do mongo, existe mais de uma forma de fazer esse processo:
  //  1 - usando findOneAndDelete
  // await User.findOneAndDelete({ email: "ateste@com.com.br" });
  //  2 - quando temos o usuario em mãos
  const userDelete = await User.findOne({ email: "teste@teste.com" });
  if (userDelete) {
    await User.deleteOne({ _id: userDelete._id });
  } else {
    console.log("Usuário não localizado");
  }

  const users = await User.find({}).sort({ "name.firstName": 1 });

  res.render("pages/home", {
    users,
  });
};

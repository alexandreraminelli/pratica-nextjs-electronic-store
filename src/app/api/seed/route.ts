import client from "@/utils/database/client"
import dropTables from "@/utils/database/dropTables"
import seedBrand from "@/utils/database/createTables/seedBrand"
import seedCpu from "@/utils/database/createTables/seedCpu"
import seedProduct from "@/utils/database/createTables/seedProduct"
import seedSmartphone from "@/utils/database/createTables/seedSmartphone"

/**
 * Função principal da rota `/seed` que executa as demais funções para criar e popular o banco de dados.
 * @author Alexandre Raminelli
 */
export async function GET() {
  // Verificar se está em ambiente de desenvolvimento
  if (process.env.NODE_ENV !== "development") {
    return Response.json(
      { message: "This action is only allowed in development environment." },
      { status: 403 } // Forbidden (não autorizada)
    )
  }

  try {
    // Criar e popular as tabelas do banco de dados.
    await client.sql`BEGIN` // iniciar transação

    await dropTables() // apagar tabelas já existentes

    await seedBrand()
    await seedCpu()
    await seedProduct()
    await seedSmartphone()

    await client.sql`COMMIT` // finalizar transação

    // Mensagem de sucesso
    return Response.json({ message: "Database seeded successfully!" })
  } catch (error) {
    /* se ocorrer um erro */
    await client.sql`ROLLBACK` // desfazer transação
    // Retorno de resposta
    return Response.json(
      {
        message: `An error occurred while seeding the database. ${error}`,
      },
      { status: 500 }
    )
  }
}

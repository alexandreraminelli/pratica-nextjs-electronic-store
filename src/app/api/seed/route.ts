import client from "@/utils/database/client"

/**
 * Função que deleta todas as tabelas do banco de dados.
 * @author Alexandre Raminelli
 */
async function dropTables() {
  await client.sql`DROP TABLE IF EXISTS brand, product, smartphone CASCADE;`
}

/**
 * Função que cria a extensão `uuid-ossp` no banco de dados caso ela não exista.
 * @author Alexandre Raminelli
 */
async function createUuidOsspExtension() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
}

/**
 * Função para criar e popular a tabela `brand`.
 * Possui as marcas de produtos disponibilizados na loja.
 */
async function seedBrand() {
  await createUuidOsspExtension()

  // Criar tabela `brand`
  await client.sql`
    CREATE TABLE IF NOT EXISTS brand (
        brand_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, -- identificador
        name VARCHAR(30) NOT NULL UNIQUE, -- nome da marca
        brand_logo VARCHAR(255) UNIQUE -- rota pra imagem do logo da marca
    );
  `
}

/**
 * Função para criar e popular a tabela `product`.
 * Possui os atributos compartilhados em comum com todos os produtos.
 * @author Alexandre Raminelli
 */
async function seedProduct() {
  await createUuidOsspExtension()

  // Criar tabela `product`
  await client.sql`
    CREATE TABLE IF NOT EXISTS product (
        product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, -- identificador
        name VARCHAR(255) NOT NULL UNIQUE, -- nome do produto
        price INT NOT NULL,  -- preço (em centavos)
        brand UUID NOT NULL REFERENCES brand(brand_id) -- marca do produto
    );
  `
}

/**
 * Função para criar e popular a tabela `smartphone`.
 * Herda os atributos de `product` e possui atributos específicos para smartphones.
 * @author Alexandre Raminelli
 */
async function seedSmartphone() {
  // Criar tabela `smartphone`
  await client.sql`
    CREATE TABLE IF NOT EXISTS smartphone (
        model VARCHAR(255) NOT NULL, -- modelo
        ram INT NOT NULL, -- quantidade de memória RAM (em GB)
        storage INT NOT NULL -- quantidade de armazenamento (em GB)
    ) INHERITS (product);`
}

/**
 * Função principal da rota `/seed` que executa as demais funções para criar e popular o banco de dados.
 * @author Alexandre Raminelli
 */
export async function GET() {
  try {
    // Criar e popular as tabelas do banco de dados.
    await client.sql`BEGIN` // iniciar transação

    await dropTables() // apagar tabelas já existentes

    await seedBrand()
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

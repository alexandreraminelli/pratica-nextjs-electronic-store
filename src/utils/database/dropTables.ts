import client from "./client"

/**
 * Função que deleta todas as tabelas do banco de dados.
 * @author Alexandre Raminelli
 */
export default async function dropTables() {
  await client.sql`DROP TABLE IF EXISTS brand, product, smartphone CASCADE;`
}

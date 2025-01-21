import client from "./client"

/**
 * Função que cria a extensão `uuid-ossp` no banco de dados caso ela não exista.
 * @author Alexandre Raminelli
 */
export default async function createUuidOsspExtension() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
}

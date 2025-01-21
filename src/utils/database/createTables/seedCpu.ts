import client from "../client"
import createUuidOsspExtension from "../createUuidOsspExtension"

/**
 * Função para criar e popular a tabela `cpu`.
 * @author Alexandre Raminelli
 */
export default async function seedCpu() {
  await createUuidOsspExtension()

  // Criar tabela `cpu`
  await client.sql`
    CREATE TABLE IF NOT EXISTS cpu (
        cpu_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, -- identificador
        name VARCHAR(50) NOT NULL UNIQUE, -- nome do processador
        numbers_of_cores INT -- quantidade de núcleos
    )`

  // Popular a tabela `cpu`
  await client.sql`
    INSERT INTO cpu (name, numbers_of_cores) VALUES
    ('Apple A16 Bionic', 6)
    ON CONFLICT (name) DO NOTHING; -- Evitar duplicação se a seed for rodada novamente
  `
}

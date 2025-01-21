import client from "../client"
import createUuidOsspExtension from "../createUuidOsspExtension"

/**
 * Função para criar e popular a tabela `smartphone`.
 * Herda os atributos de `product` e possui atributos específicos para smartphones.
 * @author Alexandre Raminelli
 */
export default async function seedSmartphone() {
  await createUuidOsspExtension()

  // Criar tabela `smartphone`
  await client.sql`
    CREATE TABLE IF NOT EXISTS smartphone (
        model VARCHAR(255) NOT NULL, -- modelo
        ram INT NOT NULL, -- quantidade de memória RAM (em GB)
        storage INT NOT NULL -- quantidade de armazenamento (em GB)
    ) INHERITS (product);`
}

import client from "../client"
import createUuidOsspExtension from "../createUuidOsspExtension"

/**
 * Função para criar e popular a tabela `brand`.
 * Possui as marcas de produtos disponibilizados na loja.
 */
export default async function seedBrand() {
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

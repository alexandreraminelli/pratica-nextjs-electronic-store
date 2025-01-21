import client from "../client"
import createUuidOsspExtension from "../createUuidOsspExtension"

/**
 * Função para criar e popular a tabela `product`.
 * Possui os atributos compartilhados em comum com todos os produtos.
 * @author Alexandre Raminelli
 */
export default async function seedProduct() {
  await createUuidOsspExtension()

  // Criar tabela `product`
  await client.sql`
    CREATE TABLE IF NOT EXISTS product (
        product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, -- identificador
        brand UUID NOT NULL REFERENCES brand(brand_id) -- marca do produto
        name VARCHAR(45) NOT NULL UNIQUE, -- nome do produto
        price_in_cents INT NOT NULL,  -- preço (em centavos)
        description TEXT, -- descrição do produto
        details TEXT, -- texto de detalhes do produto
        guaranteed_years INT -- anos de garantia
    );`
}

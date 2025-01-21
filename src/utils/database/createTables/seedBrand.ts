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
        name VARCHAR(25) NOT NULL UNIQUE, -- nome da marca
        brand_logo VARCHAR(100) UNIQUE -- rota pra imagem do logo da marca
    );`

  // Popular tabela `brand`
  await client.sql`
    INSERT INTO brand (name, brand_logo) VALUES
    ('Apple', 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'),
    ('Samsung', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'),
    ('Xiaomi', 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Xiaomi_logo.svg'),
    ('Sony', 'https://upload.wikimedia.org/wikipedia/commons/5/52/Sony_logo.svg'),
    ('LG', 'https://upload.wikimedia.org/wikipedia/commons/8/87/LG_logo_%282015%29.svg'),
    ('Motorola', 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Motorola_Mobility_logo.svg'),
    ('Microsoft', 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'),
    ('Asus', 'https://upload.wikimedia.org/wikipedia/commons/f/f7/AsusTek_logo.svg'),
    ('Dell', 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg'),
    ('HP', 'https://upload.wikimedia.org/wikipedia/commons/3/3a/HP_logo_2012.svg')
    ON CONFLICT (name) DO NOTHING; -- Evitar duplicação se a seed for rodada novamente
  `
}

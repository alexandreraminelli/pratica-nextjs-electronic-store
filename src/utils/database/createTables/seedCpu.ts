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
    ('Apple A16 Bionic', 6),
    ('Qualcomm Snapdragon 8 Gen 2', 8),
    ('Google Tensor G3', 8),
    ('Qualcomm Snapdragon 8+ Gen 1', 8),
    ('Exynos 2200', 8),
    ('Apple A15 Bionic', 6),
    ('MediaTek Dimensity 9000', 8),
    ('Kirin 9000', 8),
    ('Snapdragon 888', 8),
    ('Apple M1', 8),
    ('Qualcomm Snapdragon 8 Gen 1', 8),
    ('Exynos 1380', 8),
    ('Exynos 1330', 8),
    ('Qualcomm Snapdragon 888', 8)
    ON CONFLICT (name) DO NOTHING; -- Evitar duplicação se a seed for rodada novamente
  `
}

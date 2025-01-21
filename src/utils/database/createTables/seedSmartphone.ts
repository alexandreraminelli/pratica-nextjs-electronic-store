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
        ram INT NOT NULL, -- quantidade de memória RAM (em GB)
        storage TEXT[] NOT NULL, -- quantidade de armazenamento (em GB)
        battery_capacity INT NOT NULL, -- capacidade da bateria (em mAh)
        cpu UUID NOT NULL REFERENCES cpu(cpu_id), -- processador

        main_camera VARCHAR(35) NOT NULL, -- câmera principal
        front_camera VARCHAR(35) NOT NULL, -- câmera frontal

        screen_diagonal FLOAT NOT NULL, -- tamanho da tela (em polegadas)
        screen_resolution VARCHAR(10) NOT NULL, -- resolução da tela (width x height, em px)
        screen_refresh_rate INT NOT NULL, -- taxa de atualização da tela (em Hz)
        screen_type VARCHAR(25) NOT NULL, -- tipo de tela (ex: AMOLED, LCD)
        pixel_density INT NOT NULL -- densidade de pixels (em ppi)
    ) INHERITS (product);`

  // Popular a tabela `smartphone`
  await client.sql`
    INSERT INTO smartphone (name, brand, price_in_cents, description, details, guaranteed_years, ram, storage, battery_capacity, cpu, main_camera, front_camera, screen_diagonal, screen_resolution, screen_refresh_rate, screen_type, pixel_density)
    VALUES
    ('Apple iPhone 14 Pro Max', (SELECT brand_id FROM brand WHERE name = 'Apple' LIMIT 1), 139900, 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras [more...]', 'Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year''s 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.', 1, 8, ARRAY['256GB', '512GB', '1TB'], 4323, (SELECT cpu_id FROM cpu WHERE name = 'Apple A16 Bionic' LIMIT 1), '48-12-12 MP', '12 MP', 6.7, '2796x1290', 120, 'OLED', 460),
    ('Samsung Galaxy S23 Ultra', (SELECT brand_id FROM brand WHERE name = 'Samsung' LIMIT 1), 149900, 'The ultimate phone with a 6.8-inch screen and a 200 MP camera for stunning photos. Powered by Snapdragon 8 Gen 2 and great performance for gaming.', 'A premium flagship phone designed for users who demand performance, camera quality, and screen resolution at the highest level. Samsung’s most powerful S-series phone to date.', 2, 12, ARRAY['256GB', '512GB', '1TB'], 5000, (SELECT cpu_id FROM cpu WHERE name = 'Qualcomm Snapdragon 8 Gen 2' LIMIT 1), '200 MP + 12 MP + 10 MP + 10 MP', '12 MP', 6.8, '3088x1440', 120, 'Dynamic AMOLED', 500),
    ('Google Pixel 8 Pro', (SELECT brand_id FROM brand WHERE name = 'Google' LIMIT 1), 109900, 'A Google phone with an incredible 6.7-inch OLED display and the best AI-powered camera experience.', 'With the Pixel 8 Pro, Google is stepping up its game in smartphone photography, offering incredible software processing and an upgraded design. It delivers what you would expect from a premium Android phone with excellent AI integration.', 2, 12, ARRAY['128GB', '256GB', '512GB'], 5000, (SELECT cpu_id FROM cpu WHERE name = 'Google Tensor G3' LIMIT 1), '50 MP + 12 MP + 48 MP', '10.8 MP', 6.7, '3120x1440', 120, 'OLED', 512),
    ('OnePlus 11 5G', (SELECT brand_id FROM brand WHERE name = 'OnePlus' LIMIT 1), 84999, 'Flagship performance with a 120 Hz AMOLED display and 50 MP triple camera system for great photography.', 'OnePlus continues to deliver flagship-level performance at a competitive price with the OnePlus 11. The device offers a beautiful design, top-tier performance, and a solid camera experience.', 1, 8, ARRAY['128GB', '256GB'], 5000, (SELECT cpu_id FROM cpu WHERE name = 'Qualcomm Snapdragon 8 Gen 2' LIMIT 1), '50 MP + 48 MP + 32 MP', '16 MP', 6.7, '3216x1440', 120, 'AMOLED', 525),
    ('Xiaomi 13 Pro', (SELECT brand_id FROM brand WHERE name = 'Xiaomi' LIMIT 1), 99999, 'A 6.73-inch display with Leica optics for the best photography experience.', 'Xiaomi’s flagship phone with Leica optics offers incredible camera performance and a superb display. It runs on the Snapdragon 8 Gen 2 chipset, making it a powerhouse for gaming and productivity.', 2, 12, ARRAY['256GB', '512GB'], 4820, (SELECT cpu_id FROM cpu WHERE name = 'Qualcomm Snapdragon 8 Gen 2' LIMIT 1), '50 MP + 50 MP + 50 MP', '32 MP', 6.73, '3200x1440', 120, 'AMOLED', 522),
    ('Apple iPhone 14', (SELECT brand_id FROM brand WHERE name = 'Apple' LIMIT 1), 99900, 'The perfect balance of performance and design with a 6.1-inch display.', 'Offers advanced features with A15 Bionic and dual-camera system.', 1, 6, ARRAY['128GB', '256GB', '512GB'], 3279, (SELECT cpu_id FROM cpu WHERE name = 'Apple A15 Bionic' LIMIT 1), '12 MP + 12 MP', '12 MP', 6.1, '2532x1170', 60, 'OLED', 460),
    ('Apple iPhone 14 Plus', (SELECT brand_id FROM brand WHERE name = 'Apple' LIMIT 1), 109900, 'A bigger iPhone experience with a 6.7-inch display and long-lasting battery.', 'The same power as iPhone 14, but with a larger display.', 1, 6, ARRAY['128GB', '256GB', '512GB'], 4323, (SELECT cpu_id FROM cpu WHERE name = 'Apple A15 Bionic' LIMIT 1), '12 MP + 12 MP', '12 MP', 6.7, '2778x1284', 60, 'OLED', 458),
    ('Apple iPhone 13 Pro', (SELECT brand_id FROM brand WHERE name = 'Apple' LIMIT 1), 89900, 'Pro features with a triple camera system and A15 Bionic.', 'Perfect for photography and video enthusiasts with cinematic mode.', 1, 6, ARRAY['128GB', '256GB', '512GB', '1TB'], 3095, (SELECT cpu_id FROM cpu WHERE name = 'Apple A15 Bionic' LIMIT 1), '12 MP + 12 MP + 12 MP', '12 MP', 6.1, '2532x1170', 120, 'Super Retina XDR', 460),
    ('Apple iPhone SE (2022)', (SELECT brand_id FROM brand WHERE name = 'Apple' LIMIT 1), 42900, 'Compact design with big performance powered by A15 Bionic.', 'For those who want a smaller iPhone with powerful specs.', 1, 4, ARRAY['64GB', '128GB', '256GB'], 2018, (SELECT cpu_id FROM cpu WHERE name = 'Apple A15 Bionic' LIMIT 1), '12 MP', '7 MP', 4.7, '1334x750', 60, 'LCD', 326),
    ('Samsung Galaxy S22 Ultra', (SELECT brand_id FROM brand WHERE name = 'Samsung' LIMIT 1), 129900, 'Powerful 6.8-inch AMOLED screen with S-Pen support.', 'The ultimate flagship with a quad-camera system and S-Pen.', 2, 12, ARRAY['128GB', '256GB', '512GB'], 5000, (SELECT cpu_id FROM cpu WHERE name = 'Qualcomm Snapdragon 8 Gen 1' LIMIT 1), '108 MP + 12 MP + 10 MP + 10 MP', '40 MP', 6.8, '3088x1440', 120, 'Dynamic AMOLED 2X', 500),
    ('Samsung Galaxy S22+', (SELECT brand_id FROM brand WHERE name = 'Samsung' LIMIT 1), 99900, 'Balanced flagship with a 6.6-inch AMOLED display.', 'Premium design with high-end features for every need.', 2, 8, ARRAY['128GB', '256GB'], 4500, (SELECT cpu_id FROM cpu WHERE name = 'Qualcomm Snapdragon 8 Gen 1' LIMIT 1), '50 MP + 12 MP + 10 MP', '10 MP', 6.6, '2340x1080', 120, 'Dynamic AMOLED 2X', 393),
    ('Samsung Galaxy S21 FE', (SELECT brand_id FROM brand WHERE name = 'Samsung' LIMIT 1), 74900, 'Affordable flagship with excellent performance and design.', 'Designed for fans, this device offers premium specs at a lower price.', 2, 6, ARRAY['128GB', '256GB'], 4500, (SELECT cpu_id FROM cpu WHERE name = 'Qualcomm Snapdragon 888' LIMIT 1), '12 MP + 12 MP + 8 MP', '32 MP', 6.4, '2400x1080', 120, 'Dynamic AMOLED', 411),
    ('Samsung Galaxy Z Fold4', (SELECT brand_id FROM brand WHERE name = 'Samsung' LIMIT 1), 179900, 'Folding phone with a massive 7.6-inch inner display.', 'Combines a tablet experience with a powerful flagship.', 2, 12, ARRAY['256GB', '512GB', '1TB'], 4400, (SELECT cpu_id FROM cpu WHERE name = 'Qualcomm Snapdragon 8+ Gen 1' LIMIT 1), '50 MP + 12 MP + 10 MP', '10 MP', 7.6, '2176x1812', 120, 'Dynamic AMOLED 2X', 374),
    ('Samsung Galaxy Z Flip4', (SELECT brand_id FROM brand WHERE name = 'Samsung' LIMIT 1), 99900, 'Compact and stylish folding phone with a 6.7-inch display.', 'Designed for users who want a fashionable phone without compromising performance.', 2, 8, ARRAY['128GB', '256GB'], 3700, (SELECT cpu_id FROM cpu WHERE name = 'Qualcomm Snapdragon 8+ Gen 1' LIMIT 1), '12 MP + 12 MP', '10 MP', 6.7, '2640x1080', 120, 'Dynamic AMOLED', 426),
    ('Samsung Galaxy A54 5G', (SELECT brand_id FROM brand WHERE name = 'Samsung' LIMIT 1), 39900, 'Mid-range phone with great value for money.', 'Perfect for budget-conscious users who still want good performance.', 2, 6, ARRAY['128GB', '256GB'], 5000, (SELECT cpu_id FROM cpu WHERE name = 'Exynos 1380' LIMIT 1), '50 MP + 12 MP + 5 MP', '32 MP', 6.4, '2400x1080', 120, 'Super AMOLED', 405),
    ('Samsung Galaxy M14 5G', (SELECT brand_id FROM brand WHERE name = 'Samsung' LIMIT 1), 19900, 'Affordable phone with a massive 6000 mAh battery.', 'Ideal for users who prioritize battery life.', 1, 4, ARRAY['64GB', '128GB'], 6000, (SELECT cpu_id FROM cpu WHERE name = 'Exynos 1330' LIMIT 1), '50 MP + 2 MP + 2 MP', '13 MP', 6.6, '2408x1080', 90, 'PLS LCD', 400);`
}

import { createClient } from "@vercel/postgres"

/**
 * Cliente do banco de dados para lidar com conexões.
 * @author Alexandre Raminelli
 */
const client = createClient()

export default client

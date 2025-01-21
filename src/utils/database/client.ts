import { db } from "@vercel/postgres"

/**
 * Cliente do banco de dados para lidar com conexões.
 * @author Alexandre Raminelli
 */
const client = await db.connect()

export default client

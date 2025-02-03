import { db } from "@vercel/postgres"
import { NextResponse } from "next/server"

/**
 * API Route que busca os produtos no banco de dados.
 * @author Alexandre Raminelli
 */
export async function GET() {
  try {
    /** Criar cliente que se conecta ao banco de dados. */
    const client = await db.connect()
    /** Query SQL que obtêm os produtos do banco de dados. */
    const result = await client.sql`SELECT * FROM product ORDER BY name ASC;`

    // Retornar produtos no banco de dados.
    return NextResponse.json(result.rows)
  } catch (e) {
    // Tratamento de erros
    return NextResponse.json({ error: `Unable to get products. ${e}` }, { status: 500 })
  }
}

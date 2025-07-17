import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { appendFileSync, existsSync } from 'fs'
import path from 'path'

const EMAIL_FILE = path.resolve(process.cwd(), 'data/newsletter-emails.txt')

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email || typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email address.' }, { status: 400 })
    }
    // Append email to file (with newline)
    appendFileSync(EMAIL_FILE, email + '\n', { encoding: 'utf8' })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Server error.' }, { status: 500 })
  }
} 
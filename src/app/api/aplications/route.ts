'use server';
import { NextResponse } from 'next/server';
import db from '../../../../models';


export async function GET() {
  const applacations = await db?.applications.findAll();
  return NextResponse.json(
    {
      data: applacations,
      message: 'Connection is OK'
    }
  );
}
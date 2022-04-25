import jwt_decode from 'jwt-decode';
import { NextResponse } from 'next/server';
import React from 'react';

export function middleware(request) {
  return NextResponse.next();
}

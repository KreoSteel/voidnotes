"use server";

import { headers } from "next/headers";

import { auth } from "../auth";

export type SessionResponse = Awaited<ReturnType<typeof auth.api.getSession>>;

function resolveHeaders(providedHeaders?: HeadersInit): HeadersInit {
  if (providedHeaders) {
    return providedHeaders;
  }

  return headers();
}

export async function getServerSession(providedHeaders?: HeadersInit) {
  const session = await auth.api.getSession({
    headers: resolveHeaders(providedHeaders),
  });

  return session;
}

export async function getCurrentUser(providedHeaders?: HeadersInit) {
  const session = await getServerSession(providedHeaders);

  return session?.user ?? null;
}

export async function requireServerSession(providedHeaders?: HeadersInit) {
  const session = await getServerSession(providedHeaders);

  if (!session) {
    throw new Error("Unauthorized");
  }

  return session;
}

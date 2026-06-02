import { adminAuth } from '../../../../lib/tech-academia/firebase-admin';
import { readUserMemory, writeUserMemory } from '../../../../lib/tech-academia/chat-memory';

export const runtime = 'nodejs';

function getBearerToken(request: Request) {
  const authorization = request.headers.get('authorization');
  const [scheme, token] = authorization?.split(' ') ?? [];

  if (scheme !== 'Bearer' || !token) {
    return null;
  }

  return token;
}

type AuthResult =
  | {
      response?: never;
      uid: string;
    }
  | {
      response: Response;
      uid?: never;
    };

function jsonError(code: string, error: string, status: number) {
  return Response.json({ code, error }, { status });
}

async function getUidFromRequest(request: Request): Promise<AuthResult> {
  const token = getBearerToken(request);

  if (!token) {
    return {
      response: jsonError('AUTH_REQUIRED', 'Authentication required.', 401),
    };
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(token);

    return {
      uid: decodedToken.uid,
    };
  } catch {
    return {
      response: jsonError('AUTH_INVALID', 'Please sign in again.', 401),
    };
  }
}

export async function GET(request: Request) {
  const authResult = await getUidFromRequest(request);

  if (authResult.response) return authResult.response;

  const memory = await readUserMemory(authResult.uid);

  return Response.json({
    memory,
  });
}

export async function POST(request: Request) {
  return updateMemory(request);
}

export async function PUT(request: Request) {
  return updateMemory(request);
}

export async function PATCH(request: Request) {
  return updateMemory(request);
}

async function updateMemory(request: Request) {
  const authResult = await getUidFromRequest(request);

  if (authResult.response) return authResult.response;

  try {
    const body = (await request.json()) as unknown;

    if (!body || typeof body !== 'object') {
      return jsonError('INVALID_MEMORY_PAYLOAD', 'Memory payload is required.', 400);
    }

    const memory = await writeUserMemory(authResult.uid, body);

    return Response.json({
      memory,
    });
  } catch {
    return jsonError('MEMORY_UPDATE_FAILED', 'Unable to update memory.', 500);
  }
}

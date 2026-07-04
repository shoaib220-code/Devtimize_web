import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Product Engineering Studio';
  const subtitle =
    searchParams.get('subtitle') || 'Web · Mobile · AI Automation · AI Receptionist';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#080c14',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(0,232,255,0.12), transparent 45%), radial-gradient(circle at 85% 85%, rgba(124,58,237,0.12), transparent 45%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#00e8ff',
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            marginBottom: 24,
          }}
        >
          devtimize.exe_
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 700,
            color: '#eff6ff',
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#64748b',
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            color: '#00d68f',
            fontFamily: 'monospace',
            marginTop: 48,
          }}
        >
          USA · UK · Canada · Europe · Australia · Kuwait
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

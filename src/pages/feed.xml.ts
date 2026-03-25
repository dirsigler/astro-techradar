import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import config from 'virtual:techradar/config';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(context: APIContext) {
  const site = context.site?.toString().replace(/\/+$/, '') ?? 'https://example.com';
  const technologies = await getCollection('technologies');

  const items = technologies.map((entry) => {
    const ring = entry.data.ring.charAt(0).toUpperCase() + entry.data.ring.slice(1);

    let pubDate = '';
    if (entry.data.history && entry.data.history.length > 0) {
      const sorted = [...entry.data.history].sort((a, b) =>
        b.date.localeCompare(a.date),
      );
      const parsed = new Date(sorted[0].date);
      if (!isNaN(parsed.getTime())) {
        pubDate = `<pubDate>${parsed.toUTCString()}</pubDate>`;
      }
    }

    const link = `${site}${config.basePath}/technology/${entry.id}/`;

    return `    <item>
      <title>${escapeXml(`${entry.data.title} — ${ring}`)}</title>
      <link>${escapeXml(link)}</link>
      <guid>${escapeXml(link)}</guid>
      <description>${escapeXml(`${entry.data.title} is in the ${ring} ring of the technology radar.`)}</description>
      ${pubDate}
    </item>`;
  });

  const channelTitle = escapeXml(config.title);
  const channelDescription = escapeXml(
    config.subtitle ?? `${config.name} — tracking technology adoption`,
  );
  const channelLink = `${site}${config.basePath}/`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${channelTitle}</title>
    <description>${channelDescription}</description>
    <link>${escapeXml(channelLink)}</link>
    <atom:link href="${escapeXml(`${channelLink}feed.xml`)}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}

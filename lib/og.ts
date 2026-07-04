export function ogImage(title: string, subtitle?: string) {
  const params = new URLSearchParams({ title });
  if (subtitle) params.set('subtitle', subtitle);

  return [
    {
      url: `/api/og?${params.toString()}`,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];
}

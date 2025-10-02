import { useState } from 'react';

type PricesType = Record<string, unknown>;
type NewsType = Record<string, unknown>;

export default function ConcurrentDemo() {
  const [data, setData] = useState<{ prices: PricesType | null; news: NewsType | null } | null>(null);

  const run = async () => {
    const base = '';
    const [prices, news] = await Promise.allSettled([
      fetch(`${base}/api/examples/prices`).then(r => r.json()),
      fetch(`${base}/api/examples/news`).then(r => r.json())
    ]);

    setData({
      prices: prices.status === 'fulfilled' ? prices.value as PricesType : null,
      news: news.status === 'fulfilled' ? news.value as NewsType : null
    });
  };

  return (
    <div className="container my-4">
      <h5>Concurrencia (múltiples solicitudes en paralelo)</h5>
      <button className="btn btn-outline-primary" onClick={run}>Ejecutar</button>
      {data && (
        <pre className="mt-3 bg-light p-3 rounded">{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
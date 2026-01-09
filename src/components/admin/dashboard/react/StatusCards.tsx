import { useState, useEffect } from 'react';

interface Stats {
  published: number;
  draft: number;
  totalViews: number;
}

export function StatusCards() {
  const [stats, setStats] = useState<Stats>({
    published: 0,
    draft: 0,
    totalViews: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = import.meta.env.PUBLIC_API_URL || 'https://blog-api-rrttqa.fly.dev/api/v1';

    async function fetchStats() {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        // Fetch published posts
        const publishedResponse = await fetch(
          `${API_URL}/posts?status=PUBLISHED`,
          { signal: controller.signal }
        );
        const publishedData = publishedResponse.ok ? await publishedResponse.json() : { total: 0 };

        // Fetch draft posts
        const draftResponse = await fetch(
          `${API_URL}/posts?status=DRAFT`,
          { signal: controller.signal }
        );
        const draftData = draftResponse.ok ? await draftResponse.json() : { total: 0 };

        // Fetch total views
        const viewsResponse = await fetch(
          `${API_URL}/posts/stats/views`,
          { signal: controller.signal }
        );
        const viewsData = viewsResponse.ok ? await viewsResponse.json() : { totalViews: 0 };

        clearTimeout(timeoutId);

        setStats({
          published: publishedData.total || 0,
          draft: draftData.total || 0,
          totalViews: viewsData.totalViews || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <section className="container mx-auto max-w-12xl mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <article className="flex flex-col gap-2 rounded-lg glass p-4 border border-white/5">
          <h3 className="font-semibold text-gray-400">Cantidad de vistas</h3>
          <p className="text-3xl font-bold text-[var(--color-secondary)]">
            {loading ? '...' : stats.totalViews.toLocaleString()}
          </p>
        </article>
        
        <article className="flex flex-col gap-2 rounded-lg glass p-4 border border-white/5">
          <h3 className="font-semibold text-gray-400">Cantidad de suscriptores</h3>
          <p className="text-3xl font-bold text-[var(--color-secondary)]">32</p>
        </article>
        
        <article className="flex flex-col gap-2 rounded-lg glass p-4 border border-white/5">
          <h3 className="font-semibold text-gray-400">Posts publicados</h3>
          <p className="text-3xl font-bold text-[var(--color-secondary)]">
            {loading ? '...' : stats.published}
          </p>
        </article>
        
        <article className="flex flex-col gap-2 rounded-lg glass p-4 border border-white/5">
          <h3 className="font-semibold text-gray-400">Posts en borrador</h3>
          <p className="text-3xl font-bold text-[var(--color-secondary)]">
            {loading ? '...' : stats.draft}
          </p>
        </article>
      </div>
    </section>
  );
}

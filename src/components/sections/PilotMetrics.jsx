import { motion } from 'framer-motion';
import { CONTENT } from '../../utils/constants';
import { useInView } from '../../hooks/useInView';

function formatPercent(n) {
  return `${n.toFixed(2).replace('.', ',')} %`;
}

function monthLabel(isoMonth) {
  const [y, m] = isoMonth.split('-').map(Number);
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'];
  return `${months[m - 1]} ${y}`;
}

function buildLinePath(points, width, height, padding) {
  if (points.length === 0) return '';
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const xScale = (x) =>
    padding + ((x - minX) / (maxX - minX || 1)) * (width - padding * 2);
  const yScale = (y) =>
    padding + (1 - (y - minY) / (maxY - minY || 1)) * (height - padding * 2);

  return points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xScale(p.x)} ${yScale(p.y)}`)
    .join(' ');
}

export default function PilotMetrics() {
  const [ref, inView] = useInView();
  const data = CONTENT.pilotMetrics;

  if (!data) return null;

  const rows = data.downloadsByLocation?.rows ?? [];
  const allRowsForMax = [];
  for (const r of rows) {
    allRowsForMax.push(r);
    if (Array.isArray(r.children)) allRowsForMax.push(...r.children);
  }
  const maxDownloads = Math.max(1, ...allRowsForMax.map((r) => r.downloads));

  const series = data.listeners?.series ?? [];
  const maxSeries = Math.max(1, ...series.map((s) => s.value));
  const chartPoints = series.map((s, i) => ({ x: i, y: s.value }));
  const linePath = buildLinePath(chartPoints, 640, 220, 18);

  return (
    <section ref={ref} className="bg-white dark:bg-black py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white text-center"
        >
          {data.headline}
        </motion.h1>

        {/* KPIs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, delay: 0.05, ease: 'easeOut' }}
          className="mt-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-5 sm:p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-5"
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">{kpi.label}</p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <p className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
                    {kpi.value}
                  </p>
                  {kpi.deltaLabel ? (
                    <span className="text-sm font-semibold text-amber-500">
                      {kpi.deltaLabel}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Descargas por ubicación */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
        >
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="p-6">
              <p className="text-xl font-bold text-black dark:text-white">
                {data.downloadsByLocation.title}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {data.downloadsByLocation.subtitle}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
              <img
                src={data.downloadsByLocation.imageSrc}
                alt={data.downloadsByLocation.imageAlt}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-600 dark:text-gray-400">
                <span>País</span>
                <span className="flex items-center gap-6">
                  <span>Descargas</span>
                  <span>% del total</span>
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {rows.map((r) => {
                  const children = Array.isArray(r.children) ? r.children : [];
                  return (
                    <div
                      key={r.name}
                      className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-black"
                    >
                      {/* parent row */}
                      <div className="p-4 bg-gray-50 dark:bg-gray-950">
                        <div className="flex items-center justify-between gap-4">
                          <div className="min-w-0">
                            <p className="font-semibold text-black dark:text-white truncate">
                              {r.name}
                            </p>
                            <div className="mt-2 h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-amber-500"
                                style={{ width: `${(r.downloads / maxDownloads) * 100}%` }}
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-6 flex-shrink-0">
                            <p className="text-sm font-semibold text-black dark:text-white tabular-nums">
                              {r.downloads}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 tabular-nums">
                              {formatPercent(r.percent)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* children rows inside same container */}
                      {children.length ? (
                        <div className="divide-y divide-gray-200 dark:divide-gray-800">
                          {children.map((c) => (
                            <div key={c.name} className="p-4 bg-white dark:bg-black">
                              <div className="flex items-center justify-between gap-4">
                                <div className="min-w-0">
                                  <p className="pl-6 text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                                    {c.name}
                                  </p>
                                  <div className="mt-2 ml-6 h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                                    <div
                                      className="h-full rounded-full bg-amber-500/80"
                                      style={{ width: `${(c.downloads / maxDownloads) * 100}%` }}
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center gap-6 flex-shrink-0">
                                  <p className="text-sm font-semibold text-black dark:text-white tabular-nums">
                                    {c.downloads}
                                  </p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 tabular-nums">
                                    {formatPercent(c.percent)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Oyentes */}
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="p-6">
              <p className="text-xl font-bold text-black dark:text-white">
                {data.listeners.title}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Vista mensual
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 p-4">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4">
                <svg
                  viewBox="0 0 640 220"
                  className="w-full h-auto block"
                  role="img"
                  aria-label="Gráfica de oyentes por mes"
                >
                  {/* grid */}
                  {Array.from({ length: 5 }).map((_, i) => {
                    const y = 18 + (i * (220 - 36)) / 4;
                    const value = Math.round(maxSeries - (i * maxSeries) / 4);
                    return (
                      <g key={i}>
                        <line
                          x1="18"
                          x2="622"
                          y1={y}
                          y2={y}
                          stroke="currentColor"
                          className="text-black/5 dark:text-white/10"
                        />
                        <text
                          x="10"
                          y={y + 4}
                          textAnchor="end"
                          fontSize="10"
                          className="fill-gray-500 dark:fill-gray-400"
                        >
                          {value}
                        </text>
                      </g>
                    );
                  })}

                  {/* line */}
                  <path
                    d={linePath}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-amber-500"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />

                  {/* points */}
                  {chartPoints.map((p, i) => {
                    const x = 18 + (i * (640 - 36)) / Math.max(1, chartPoints.length - 1);
                    const y =
                      18 +
                      (1 - p.y / Math.max(1, maxSeries)) * (220 - 36);
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="4"
                        className="fill-amber-500"
                      />
                    );
                  })}

                  {/* x labels (sparse for mobile) */}
                  {series.map((s, i) => {
                    const show = i === 0 || i === series.length - 1 || i % 3 === 0;
                    if (!show) return null;
                    const x = 18 + (i * (640 - 36)) / Math.max(1, series.length - 1);
                    return (
                      <text
                        key={s.month}
                        x={x}
                        y="212"
                        textAnchor="middle"
                        fontSize="10"
                        className="fill-gray-500 dark:fill-gray-400"
                      >
                        {monthLabel(s.month)}
                      </text>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {data.spotifyCta ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
            className="mt-10"
          >
            <a
              href={data.spotifyCta.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-7 md:p-9 text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white">
                {data.spotifyCta.title}
              </p>
              <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
                {data.spotifyCta.subtitle}
              </p>
              <span className="mt-6 inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 transition">
                Ir a Spotify ↗
              </span>
            </a>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}


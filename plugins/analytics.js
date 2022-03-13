import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import perfumePlugin from '@analytics/perfumejs'

export default ({ $config }) => {
  const analytics = Analytics({
    app: 'ryaposov.com',
    plugins: [
      // Attach Google analytics
      googleAnalytics({
        trackingId: $config.GOOGLE_ANALYTICS
      }),
      // Include perfume.js plugin with no options set.
      // This will send data to all analytics providers by default
      ...process.client ? [perfumePlugin(require('perfume.js').default)] : []
    ]
  })
}
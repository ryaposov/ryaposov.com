import Analytics from 'analytics'
import mixpanelPlugin from '@analytics/mixpanel'
import perfumePlugin from '@analytics/perfumejs'
import Perfume from 'perfume.js'

export default ({ $config, app }) => {
  const analytics = Analytics({
    app: 'ryaposov.com',
    plugins: [
      mixpanelPlugin({
        token: $config.MIXPANEL_TOKEN
      }),
      perfumePlugin({
        perfume: Perfume,
        perfumeOptions: {
          resourceTiming: true,
          elementTiming: true
        }
      })
    ]
  })

  app.router.afterEach((to, from) => {
    analytics.page()
  })
}
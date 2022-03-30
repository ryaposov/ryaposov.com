import ImgixClient from '@imgix/js-core'

const client = new ImgixClient({
  domain: 'images.prismic.io',
  includeLibraryParam: false
})

const buildDefaultParams = (params) => {
  const defaultBuildParams = {
    auto: 'compress',
    format: true
  }

  return {
    ...defaultBuildParams,
    ...params
  }
}

const buildDefaultOptions = (options) => {
  const defaultBuildOptions = {
    devicePixelRatios: [1, 2, 3]
  }

  return {
    ...defaultBuildOptions,
    ...options
  }
}

const getUrlPath = (url) => {
  try {
    return new URL(url).pathname
  } catch (error) {
    console.error(error)

    return ''
  }
}

const buildCustomSrcSet = (url, params) => {
  return `${client.buildURL(url, { ...params, dpr: 0.5 })} 1x,
    ${client.buildURL(url, { ...params, dpr: 1 })} 2x,
    ${client.buildURL(url, { ...params, dpr: 1.5 })} 3x`
}

export const buildURL = (url, params) => {
  params = buildDefaultParams(params)

  return client.buildURL(getUrlPath(url), params)
}

export const buildSrcSet = (url, params, options) => {
  params = buildDefaultParams(params)
  options = buildDefaultOptions(options)

  if (url.endsWith('.mp4')) {
    return client.buildURL(getUrlPath(url), params)
  } else if (params.w || params.h) {
    return client.buildSrcSet(getUrlPath(url), params, options)
  } else {
    return buildCustomSrcSet(url, params)
  }
}

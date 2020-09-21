import linkResolver from "./link-resolver"
import prismicDOM from 'prismic-dom'
import unescape from 'lodash/unescape';
 
const Elements = prismicDOM.RichText.Elements
 
export default function (type, element, content, children) {
  // Generate links to Prismic Documents as <router-link> components
  // Present by default, it is recommended to keep this

  if (type === Elements.hyperlink) {
    let result = ''
    const url = prismicDOM.Link.url(element.data, linkResolver)
 
    if (element.data.link_type === 'Document') {
      result = `<nuxt-link to="${url}">${content}</nuxt-link>`
    } else {
      const target = element.data.target ? `target="'${element.data.target}'" rel="noopener"` : ''
      result = `<a href="${url}" ${target}>${content}</a>`
    }
    return result
  }
  
  // If the image is also a link to a Prismic Document, it will return a <router-link> component
  // Present by default, it is recommended to keep this
  if (type === Elements.image) {
    let result = `<img src="${element.url}" alt="${element.alt || ''}" copyright="${element.copyright || ''}">`
 
    if (element.linkTo) {
      const url = prismicDOM.Link.url(element.linkTo, linkResolver)
 
      if (element.linkTo.link_type === 'Document') {
        result = `<nuxt-link to="${url}">${result}</nuxt-link>`
      } else {
        const target = element.linkTo.target ? `target="${element.linkTo.target}" rel="noopener"` : ''
        result = `<a href="${url}" ${target}>${result}</a>`
      }
    }
    const wrapperClassList = [element.label || '', 'block-img']
    result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`
    return result
  }

  if (type === Elements.preformatted && !children[0].includes('data-render')) {
    let html = children
    let regex = /<br\s*[\/]?>/gi
    html = html.map(str => str.replace(regex, "\n"))

    return `<div class="code"><pre class="language-javascript"><code>${html.join('')}</code></pre></div>`;
  } else if (type === Elements.preformatted && children[0].includes('data-render')) {
    let html = [...children]

    return `<div class="embed">${unescape(html.join(''))}</div>`;
  }
 
  // Return null to stick with the default behavior for everything else
  return null
}
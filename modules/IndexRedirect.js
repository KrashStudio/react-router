import warning from 'warning'
import invariant from 'invariant'
import { Component } from 'react'
import Redirect from './Redirect'
import { falsy } from './PropTypes'
import PropTypes from 'prop-types'

const { string, object } = PropTypes

/**
 * An <IndexRedirect> is used to redirect from an indexRoute.
 */
class IndexRedirect extends Component {

  /* istanbul ignore next: sanity check */
  render() {
    invariant(
      false,
      '<IndexRedirect> elements are for router configuration only and should not be rendered'
    )
  }

}

IndexRedirect.propTypes = {
  to: string.isRequired,
  query: object,
  state: object,
  onEnter: falsy,
  children: falsy
}

IndexRedirect.createRouteFromReactElement = function (element, parentRoute) {
  /* istanbul ignore else: sanity check */
  if (parentRoute) {
    parentRoute.indexRoute = Redirect.createRouteFromReactElement(element)
  } else {
    warning(
      false,
      'An <IndexRedirect> does not make sense at the root of your route config'
    )
  }
}

export default IndexRedirect

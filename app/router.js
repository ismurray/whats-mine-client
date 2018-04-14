import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('users')
  this.route('items', function () {
    this.route('item', {path: '/:item_id'})
    this.route('new')
    this.route('edit', {path: '/:item_id/edit'})
  })
  this.route('boxes', function () {
    this.route('box', {path: '/:box_id'})
    this.route('new-item', {path: '/:box_id/new-item'})
    this.route('new')
    this.route('edit', {path: '/:box_id/edit'})
  })
})

export default Router

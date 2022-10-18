import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IframesController {
  public async index(ctx: HttpContextContract) {
    return await ctx.view.render('iframe', {
      greeting: 'Hello'
    })
  }

  public async openIframe(ctx: HttpContextContract) {
    return await ctx.view.render('iframe', {
      greeting: 'Hello'
    })
  }
}

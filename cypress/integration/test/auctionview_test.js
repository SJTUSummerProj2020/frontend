
describe('Test auctionView', function () {
  it('Test stepper', function () {
    // 发送请求
    cy.request('POST', 'http://localhost:8080/sso/login', { 'username': 'user', 'password': 'user' })
    cy.visit('/auction?id=7')
    for (let i = 1; i < 6; ++i) {
      cy.get('span[class="ant-input-number-handler ant-input-number-handler-up"]').click()
      cy.get('input[class="ant-input-number-input"]').should(($input) => {
        const quantity = $input[0].getAttribute('aria-valuenow')
        expect(70 + i * 10).to.equal(parseInt(quantity))
      })
    }

    for (let i = 1; i < 5; ++i) {
      cy.get('span[class="ant-input-number-handler ant-input-number-handler-down"]').click()
      cy.get('input[class="ant-input-number-input"]').should(($input) => {
        const quantity = $input[0].getAttribute('aria-valuenow')
        expect(120 - i * 10).to.equal(parseInt(quantity))
      })
    }
    // cy.get('span[class="ant-input-number-handler ant-input-number-handler-down ant-input-number-handler-down-disabled"]').should(($span) => {
    //   const status = $span[0].getAttribute('aria-disabled')
    //   expect('true').to.equal(status)
    // })
  })

  // 购买流程
  it('Test commitOffer', function () {
    // logout
    cy.request('POST', 'http://localhost:8080/sso/logout', {})
    cy.visit('/auction?id=7')
    // 未登录状态购买
    cy.get('.auction-card-buy-button').click()
    cy.url().should('include', '/login')
    cy.contains('请登录')
    // 模拟登录
    cy.get('input[placeholder="用户名"').type('user')
    cy.get('input[placeholder="密码"]').type('user')
    cy.get('button[type="submit"]').click()
    // 登陆状态购买
    cy.wait(200)
    cy.visit('/auction?id=7')
    cy.wait(200)
    cy.get('.auction-card-buy-button').click()
  })
})

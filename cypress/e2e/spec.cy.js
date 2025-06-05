describe("My First Test", () => {
  it("Does not do much!", () => {
    // assert
    expect(true).to.equal(true);
  });

  it("Visites the Ketchen Sink!", () => {
    // visit - 링크 이동
    cy.visit("https://example.cypress.io");
  });

  it('finds the content "type"', () => {
    // contains - contents(text) 기반으로 요소 찾음. assert(가설)없이 사용함. 요소가 없으면 fail 처리됨
    cy.visit("https://example.cypress.io");
    cy.contains("type");
  });

  it('clicks the link "type"', () => {
    // click - 인터렉션(클릭), contains으로 요소 찾고, 클릭 체이닝 🔥
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
  });

  it('clicking "type" navigates to a new url', () => {
    // url, should(include) - 예측되는 url이 새로운 url과 같은지 확인. url 찾고, 명확하게 동일한지 체이닝으로 확인 🔥
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
  });

  it("Gets, types and assets", () => {
    // get - 클래스명 기반으로 요소 선택
    // type - input 요소에 텍스트 입력
    // should(have.value) - type된 값과 input 요소에 반영된 값이 동일한지 확인
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email").type("fake@email.com");
    cy.get(".action-email").should("have.value", "fake@email.com");
  });
});

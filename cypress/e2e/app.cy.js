/// <reference types='cypress' />

describe("Duetube App", () => {
  beforeEach(() => {
    cy.intercept("GET", /(mostPopular)/gi, { fixture: "popular.json" });
    cy.intercept("GET", /(search)/g, { fixture: "search.json" });

    // cy.viewport(1200, 800);
    cy.visit("/");
  });

  it("렌더", () => {
    cy.findByText("Duetube").should("exist");
  });

  it("첫 화면에 인기 동영상을 출력합니다", () => {
    cy.findByText(/몰래/i).should("exist");
  });

  it("키워드로 검색 - enter", () => {
    const keyword = "실리카겔";
    cy.findByPlaceholderText("검색").type(`${keyword}{enter}`);

    cy.url().should("include", "search");
    cy.findByText("실리카겔 (Silica Gel) - NO PAIN [MV]").should("exist");
  });

  it("키워드로 검색 - Button Click", () => {
    cy.findByPlaceholderText("검색").type("실리카겔");
    cy.findByTitle("검색 버튼을 눌러주세요").click();

    cy.url().should("include", "search");
    cy.findByText("실리카겔 (Silica Gel) - NO PAIN [MV]").should("exist");
  });

  it("상세 페이지로 이동", () => {
    cy.findAllByRole("article").first().children().first().click();
    cy.url().should("include", "watch");
    cy.findByTitle(/출연해서 쌓인 거/i).should("exist"); // iframe
    cy.findByText(/출연해서 쌓인 거/i).should("exist"); // video info
    cy.findByText("안녕하세요 소통왕 MJ입니다.").should("exist"); // channel info
  });
});

import { formatAgo, formatDate } from "../date";

describe("date", () => {
  it("formatAgo", () => {
    const date = new Date("2023-10-01T12:00:00Z");
    const formatted = formatAgo(date, "ko");
    expect(formatted).toBe("1년 전");
  });

  it("formatDate", () => {
    const date = new Date("2023-10-01T12:00:00Z");
    const formatted = formatDate(date);
    expect(formatted).toBe("2023.10.01");
  });
});

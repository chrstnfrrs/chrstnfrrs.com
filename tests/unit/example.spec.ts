import * as VTL from "@testing-library/vue";
import "@testing-library/jest-dom";
import Home from "@/views/Home.vue";

describe("HelloWorld.vue", () => {
  test("renders props.msg when passed", () => {
    VTL.render(Home);

    expect(VTL.screen.getByText("Hello World")).toBeVisible();
  });
});

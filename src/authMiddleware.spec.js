
import { auth } from "./authMiddleware";
import { authenticate } from "./actions";
import { serverLogIn } from "./api";

jest.mock("./api", () => ({ serverLogIn: jest.fn(() => true) }));

describe("auth", () => {
  describe("#AUTHENTICATE", () => {
      it("authenticates through api", async () => {
        const dispatch = jest.fn();

        await auth({ dispatch })()(
          authenticate("testlogin", "testpassword")
        );
        expect(serverLogIn).toBeCalledWith("testlogin", "testpassword");
        expect(dispatch).toBeCalledWith(
         { type: "LOG_IN"}
        );
      });
      });
    });

    
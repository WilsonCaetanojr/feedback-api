import { FeedbackServices } from "./feedback";

//spy functions, to check for execution
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const createFeedback = new FeedbackServices(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Create feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      createFeedback.create({
        type: "BUG",
        comment: "Example",
        screenshot: "data:image/png;base64,iga5ksuu8uaasdg",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      createFeedback.create({
        type: "",
        comment: "Example",
        screenshot: "data:image/png;base64,iga5ksuu8uaasdg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      createFeedback.create({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,iga5ksuu8uaasdg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with invalid screenshot", async () => {
    await expect(
      createFeedback.create({
        type: "BUG",
        comment: "Example",
        screenshot: "image.png",
      })
    ).rejects.toThrow();
  });
});

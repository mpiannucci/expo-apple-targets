import { SharedCodeConfig } from "../config";

describe("SharedCodeConfig", () => {
  it("should allow valid sharedCode configuration", () => {
    const config: SharedCodeConfig = {
      includeGlobal: true,
      includeTargetShared: ["widget", "watch"],
      excludeFiles: ["WidgetUtils.swift"],
    };

    expect(config.includeGlobal).toBe(true);
    expect(config.includeTargetShared).toEqual(["widget", "watch"]);
    expect(config.excludeFiles).toEqual(["WidgetUtils.swift"]);
  });

  it("should allow minimal sharedCode configuration", () => {
    const config: SharedCodeConfig = {
      includeGlobal: true,
    };

    expect(config.includeGlobal).toBe(true);
    expect(config.includeTargetShared).toBeUndefined();
    expect(config.excludeFiles).toBeUndefined();
  });

  it("should allow target-specific sharing only", () => {
    const config: SharedCodeConfig = {
      includeTargetShared: ["complication"],
    };

    expect(config.includeGlobal).toBeUndefined();
    expect(config.includeTargetShared).toEqual(["complication"]);
  });
}); 
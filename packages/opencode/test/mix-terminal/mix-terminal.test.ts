import { describe, test, expect, beforeEach, afterEach } from "bun:test"
import { MixTerminal, SmartBrain, SolanaRemix, SolanaRemixTerminal } from "../../src/mix-terminal"

describe("MIX Terminal", () => {
  // Reset state before and after each test to avoid test pollution
  beforeEach(async () => {
    await MixTerminal.shutdown()
  })

  afterEach(async () => {
    await MixTerminal.shutdown()
  })

  describe("MixTerminal Integration", () => {
    test("should get default configuration", () => {
      const config = MixTerminal.getDefaultConfig()

      expect(config).toBeDefined()
      expect(config.smartbrain).toBeDefined()
      expect(config.solanaRemix).toBeDefined()
      expect(config.terminal).toBeDefined()
    })

    test("should initialize all components", async () => {
      const config = MixTerminal.getDefaultConfig()
      await MixTerminal.initialize(config)

      const status = MixTerminal.getStatus()
      expect(status.initialized).toBe(true)
      expect(status.components.smartbrain).toBe(true)
      expect(status.components.solanaRemix).toBe(true)
      expect(status.components.terminal).toBe(true)
    })

    test("should shutdown all components", async () => {
      const config = MixTerminal.getDefaultConfig()
      await MixTerminal.initialize(config)
      await MixTerminal.shutdown()

      const status = MixTerminal.getStatus()
      expect(status.initialized).toBe(false)
    })
  })

  describe("SmartBrain", () => {
    test("should initialize with config", async () => {
      const result = await SmartBrain.initialize({
        enabled: true,
        features: ["analysis"],
      })

      expect(result.success).toBe(true)
      expect(result.data).toBeDefined()
    })

    test("should process commands", async () => {
      const result = await SmartBrain.process("test command", {
        sessionId: "test",
        timestamp: Date.now(),
      })

      expect(result.success).toBe(true)
    })

    test("should get status", () => {
      const status = SmartBrain.getStatus()
      expect(status.success).toBe(true)
      expect(status.data).toBeDefined()
    })
  })

  describe("SolanaRemix", () => {
    test("should initialize with config", async () => {
      const result = await SolanaRemix.initialize({
        enabled: true,
        network: "devnet",
      })

      expect(result.success).toBe(true)
      expect(result.data).toBeDefined()
    })

    test("should connect to network", async () => {
      const result = await SolanaRemix.connect("devnet")
      expect(result.success).toBe(true)
    })

    test("should get wallet info", async () => {
      const result = await SolanaRemix.getWallet()
      expect(result.success).toBe(true)
    })
  })

  describe("SolanaRemixTerminal", () => {
    test("should initialize with config", async () => {
      const result = await SolanaRemixTerminal.initialize({
        enabled: true,
        theme: "dark",
      })

      expect(result.success).toBe(true)
      expect(result.data).toBeDefined()
    })

    test("should execute commands", async () => {
      const result = await SolanaRemixTerminal.executeCommand({
        name: "test",
      })

      expect(result.success).toBe(true)
      expect(result.exitCode).toBe(0)
    })

    test("should get empty history initially", () => {
      const history = SolanaRemixTerminal.getHistory()
      expect(Array.isArray(history)).toBe(true)
    })

    test("should clear terminal", () => {
      const result = SolanaRemixTerminal.clear()
      expect(result.success).toBe(true)
    })
  })
})

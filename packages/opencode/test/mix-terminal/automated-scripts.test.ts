import { describe, test, expect } from "bun:test"
import { AutomatedScripts } from "../../src/mix-terminal/scripts/automated"

describe("Automated Scripts", () => {
  describe("Script Listing", () => {
    test("should list all available scripts", () => {
      const scripts = AutomatedScripts.listScripts()
      
      expect(scripts).toBeDefined()
      expect(scripts.length).toBeGreaterThan(0)
      expect(scripts.every((s) => s.name && s.description)).toBe(true)
    })
  })

  describe("Script Execution", () => {
    test("should execute smartbrain-init script", async () => {
      const result = await AutomatedScripts.smartbrainInit()
      
      expect(result.success).toBe(true)
      expect(result.output).toBeDefined()
    })

    test("should execute solana-setup script", async () => {
      const result = await AutomatedScripts.solanaSetup()
      
      expect(result.success).toBe(true)
      expect(result.output).toBeDefined()
    })

    test("should execute terminal-config script", async () => {
      const result = await AutomatedScripts.terminalConfig()
      
      expect(result.success).toBe(true)
      expect(result.output).toBeDefined()
    })

    test("should execute full-integration script", async () => {
      const result = await AutomatedScripts.fullIntegration()
      
      expect(result.success).toBe(true)
      expect(result.output).toBeDefined()
    })

    test("should execute script by name", async () => {
      const result = await AutomatedScripts.executeScript("smartbrain-init")
      
      expect(result.success).toBe(true)
    })

    test("should fail for unknown script", async () => {
      const result = await AutomatedScripts.executeScript("unknown-script")
      
      expect(result.success).toBe(false)
      expect(result.error).toBeDefined()
    })
  })
})

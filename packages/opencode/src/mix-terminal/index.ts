/**
 * MIX Terminal Integration
 * Main module that integrates SmartBrain, SolanaRemix, and SolanaRemix/Terminal
 */

import { SmartBrain } from "./smartbrain"
import { SolanaRemix } from "./solana-remix"
import { SolanaRemixTerminal } from "./solana-remix-terminal"

export namespace MixTerminal {
  export interface Config {
    smartbrain: SmartBrain.Config
    solanaRemix: SolanaRemix.Config
    terminal: SolanaRemixTerminal.Config
  }

  export interface Status {
    initialized: boolean
    components: {
      smartbrain: boolean
      solanaRemix: boolean
      terminal: boolean
    }
  }

  let status: Status = {
    initialized: false,
    components: {
      smartbrain: false,
      solanaRemix: false,
      terminal: false,
    },
  }

  /**
   * Initialize all MIX Terminal components
   */
  export async function initialize(config: Config): Promise<void> {
    console.log("[MixTerminal] Initializing all components...")

    // Reset status at the start of initialization to avoid stale flags
    status.initialized = false
    status.components.smartbrain = false
    status.components.solanaRemix = false
    status.components.terminal = false

    let allComponentsSucceeded = true

    if (config.smartbrain.enabled) {
      const result = await SmartBrain.initialize(config.smartbrain)
      status.components.smartbrain = result.success
      if (!result.success) {
        allComponentsSucceeded = false
      }
      console.log("[MixTerminal] SmartBrain initialized:", result.success)
    }

    if (config.solanaRemix.enabled) {
      const result = await SolanaRemix.initialize(config.solanaRemix)
      status.components.solanaRemix = result.success
      if (!result.success) {
        allComponentsSucceeded = false
      }
      console.log("[MixTerminal] SolanaRemix initialized:", result.success)
    }

    if (config.terminal.enabled) {
      const result = await SolanaRemixTerminal.initialize(config.terminal)
      status.components.terminal = result.success
      if (!result.success) {
        allComponentsSucceeded = false
      }
      console.log("[MixTerminal] Terminal initialized:", result.success)
    }

    status.initialized = allComponentsSucceeded

    if (status.initialized) {
      console.log("[MixTerminal] All enabled components initialized successfully")
    } else {
      console.log("[MixTerminal] One or more enabled components failed to initialize")
    }
  }

  /**
   * Get current status of MIX Terminal
   */
  export function getStatus(): Status {
    return {
      ...status,
      components: {
        ...status.components,
      },
    }
  }

  /**
   * Shutdown all components
   */
  export async function shutdown(): Promise<void> {
    console.log("[MixTerminal] Shutting down all components...")

    if (status.components.smartbrain) {
      await SmartBrain.shutdown()
    }

    if (status.components.solanaRemix) {
      await SolanaRemix.shutdown()
    }

    if (status.components.terminal) {
      await SolanaRemixTerminal.shutdown()
    }

    status = {
      initialized: false,
      components: {
        smartbrain: false,
        solanaRemix: false,
        terminal: false,
      },
    }

    console.log("[MixTerminal] All components shut down")
  }

  /**
   * Get default configuration
   */
  export function getDefaultConfig(): Config {
    return {
      smartbrain: {
        enabled: true,
        features: ["analysis", "suggestions", "automation"],
      },
      solanaRemix: {
        enabled: true,
        network: "devnet",
      },
      terminal: {
        enabled: true,
        theme: "dark",
        features: ["command-execution", "history", "autocomplete"],
      },
    }
  }
}

export { SmartBrain } from "./smartbrain"
export { SolanaRemix } from "./solana-remix"
export { SolanaRemixTerminal } from "./solana-remix-terminal"

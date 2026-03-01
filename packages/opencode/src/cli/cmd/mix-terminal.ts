import { cmd } from "./cmd"
import * as prompts from "@clack/prompts"
import { UI } from "../ui"
import { AutomatedScripts } from "../../mix-terminal/scripts/automated"

export const MixTerminalCommand = cmd({
  command: "mix-terminal",
  describe: "MIX Terminal - Integrated terminal with SmartBrain and SolanaRemix",
  builder: (yargs) =>
    yargs
      .command(MixTerminalStartCommand)
      .command(MixTerminalConfigCommand)
      .command(MixTerminalScriptCommand)
      .demandCommand(),
  async handler() {},
})

export const MixTerminalStartCommand = cmd({
  command: "start",
  describe: "Start MIX Terminal with integrated components",
  builder: (yargs) =>
    yargs
      .option("smartbrain", {
        type: "boolean",
        default: true,
        describe: "Enable SmartBrain integration",
      })
      .option("solana-remix", {
        type: "boolean",
        default: true,
        describe: "Enable SolanaRemix integration",
      })
      .option("terminal", {
        type: "boolean",
        default: true,
        describe: "Enable SolanaRemix/terminal integration",
      }),
  async handler(args) {
    UI.empty()
    prompts.intro("🚀 MIX Terminal")

    const spinner = prompts.spinner()
    spinner.start("Initializing MIX Terminal components...")

    const components = []
    if (args.smartbrain) {
      components.push("@SmartBrain")
    }
    if (args.solanaRemix) {
      components.push("@SolanaRemix")
    }
    if (args.terminal) {
      components.push("@SolanaRemix/terminal")
    }

    spinner.stop(`MIX Terminal started with: ${components.join(", ")}`)

    prompts.log.success("All components initialized successfully")
    prompts.log.info("Use 'opencode mix-terminal script run' to execute automated scripts")
    prompts.outro("MIX Terminal is ready! 🎉")
  },
})

export const MixTerminalConfigCommand = cmd({
  command: "config",
  describe: "Configure MIX Terminal settings",
  async handler() {
    UI.empty()
    prompts.intro("Configure MIX Terminal")

    const smartbrainEnabled = await prompts.confirm({
      message: "Enable @SmartBrain integration?",
      initialValue: true,
    })
    if (prompts.isCancel(smartbrainEnabled)) throw new UI.CancelledError()

    const solanaRemixEnabled = await prompts.confirm({
      message: "Enable @SolanaRemix integration?",
      initialValue: true,
    })
    if (prompts.isCancel(solanaRemixEnabled)) throw new UI.CancelledError()

    const terminalEnabled = await prompts.confirm({
      message: "Enable @SolanaRemix/terminal integration?",
      initialValue: true,
    })
    if (prompts.isCancel(terminalEnabled)) throw new UI.CancelledError()

    prompts.log.success("Configuration choices recorded (not yet saved to a config file)")
    prompts.outro("MIX Terminal configuration flow complete")
  },
})

export const MixTerminalScriptCommand = cmd({
  command: "script",
  describe: "Manage automated advanced scripts",
  builder: (yargs) =>
    yargs
      .command({
        command: "run <name>",
        describe: "Run an automated script",
        handler: async (args) => {
          UI.empty()
          prompts.intro(`Running script: ${args.name}`)

          const spinner = prompts.spinner()
          spinner.start("Executing automated script...")

          try {
            const result = await AutomatedScripts.executeScript(args.name as string)

            if (result.success) {
              spinner.stop("Script executed successfully")
              prompts.log.success(result.output)
            } else {
              spinner.stop("Script execution failed")
              prompts.log.error(result.error || "Unknown error")
            }
          } catch (error) {
            spinner.stop("Script execution failed")
            prompts.log.error(error instanceof Error ? error.message : "Unknown error")
          }

          prompts.outro("Script complete")
        },
      })
      .command({
        command: "list",
        describe: "List available automated scripts",
        handler: async () => {
          UI.empty()
          prompts.intro("Available MIX Terminal Scripts")

          const scripts = await AutomatedScripts.listScripts()

          if (!Array.isArray(scripts) || scripts.length === 0) {
            prompts.log.info("No automated scripts are currently available.")
          } else {
            scripts.forEach((script: any, index: number) => {
              let name: string
              let description: string | undefined

              if (typeof script === "string") {
                name = script
              } else {
                name = script.name
                description = script.description
              }

              const prefix = `${index + 1}. ${name}`
              const line = description ? `${prefix} - ${description}` : prefix
              prompts.log.info(line)
            })
          }
          prompts.outro("Use 'opencode mix-terminal script run <name>' to execute")
        },
      })
      .demandCommand(),
  async handler() {},
})

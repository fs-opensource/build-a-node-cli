'use strict'

const { Command } = require('@adonisjs/ace')

class Ask extends Command {
  /**
   * The method signature describes the comannd, arguments and flags/aliases
   * The words flags and aliases mean the same thing in this context 😃
   */
  static get signature () {
    return `ask`
  }

  /**
   * Use this description to provide additional details
   * about the command.
   */
  static get description () {
    return 'Ask a user for input on stdin'
  }

  /**
   * Handle the "deploy" command
   *
   * @param {*} args   arguments object for the "deploy" command
   * @param {*} flags  an object of flags where each value is either "null" or "true".
   *                   Check the signature for available flags
   */
  async handle ({ version }, flags) {
    const input = await this.ask('What’s your name?')
    console.log(`\nOh yeah, nice name ${this.chalk.bold.magenta(input)}!`)
  }
}

module.exports = Ask

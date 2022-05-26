import { Accessor, Component } from 'solid-js'

interface CommandProps {
  text: Accessor<string>
}

const Command: Component<CommandProps> = ({ text }) => {
  return (
    <p>
      <span class="text-emerald-400">guest@terminal</span>:
      <span class="text-sky-400">~</span>$ {text()}
    </p>
  )
}

export default Command

import { Component, createSignal, For } from 'solid-js'
import Command from './Command'
import Output from './Output'

const Header: Component = () => {
  return (
    <div>
      <pre class="text-slate-400 leading-none">
        {`
   _____            _                 __                    _____
  / ___/__  _______(_)_  ______  ____/ /___  _________     / ___/
  \\\\__ \\\\/ / / / ___/ / / / / __ \\\\/ __  / __ \\\\/ ___/ __ \\\\    \\\\__ \\\\ 
 ___/ / /_/ / /  / / /_/ / /_/ / /_/ / /_/ / /  / / / /   ___/ / 
/____/\\\\__,_/_/  /_/\\\\__, /\\\\____/\\\\__,_/\\\\____/_/  /_/ /_/   /____(_)
                  /____/
    `}
      </pre>
      <p>Welcome to my CLI Portfolio.</p>
      <p>
        For list of all commands, type <span class="text-sky-400">'help'</span>.
      </p>
      <p>
        For GUI version, type <span class="text-sky-400">'gui'</span>.
      </p>
    </div>
  )
}

const App: Component = () => {
  let inputRef: HTMLTextAreaElement | undefined
  let divRef: HTMLDivElement | undefined
  const [input, setInput] = createSignal('')
  const [commands, setCommands] = createSignal<string[]>([])

  return (
    <div
      class="h-screen overflow-auto scrollbar-hide p-4"
      onDblClick={() => {
        inputRef?.select()
        if (divRef) divRef.scrollTop = divRef.scrollHeight
      }}
      ref={divRef}
    >
      <Header />
      <For each={commands()}>
        {(command) => (
          <div>
            <Command text={() => command} />
            <Output input={command} />
          </div>
        )}
      </For>
      <div class="flex">
        <textarea
          autofocus
          class="h-0 w-0"
          ref={inputRef}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const command = (e.target as HTMLTextAreaElement).value.trim()
              if (command === 'clear') setCommands([])
              else setCommands((prev) => [...prev, command])
              setInput('')
              if (divRef) divRef.scrollTop = divRef.scrollHeight
            }
          }}
          onInput={(e) => {
            setInput((e.target as HTMLTextAreaElement).value)
          }}
          value={input()}
        />
        <Command text={input} />
      </div>
    </div>
  )
}

export default App

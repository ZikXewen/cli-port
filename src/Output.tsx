import { Component } from 'solid-js'

interface OutputProps {
  input: string
}

const Output: Component<OutputProps> = ({ input }) => {
  switch (input) {
    case '':
      return
    case 'about':
      return (
        <div class="ml-[1rem]">
          <br />
          <p>Hey, this is Data. You might've heard of me as ZikXewen.</p>
          <p>As of 2022, I am a Computer Engineering freshman at UW-Madison.</p>
          <p>
            During my highschool years at Triam Udom Suksa, the whole world was
            struck down with COVID-19.
          </p>
          <p>
            There was a lot of free time, and I didn't want to spend all of them
            on gaming.
          </p>
          <p>I found web development intriguing and tried my hand on it.</p>
          <br />
          <p>Here lies my creations so far...</p>
          <br />
        </div>
      )
    case 'gui':
      return 'GUI version is still under development... Sorry for the inconvenience.'
    case 'help':
      return (
        <div class="ml-[1rem]">
          <br />
          <p>
            For more information on a specific command, type
            <span class="text-sky-400"> 'help [command]'</span>.
          </p>
          <pre class="font-sans">
            <span class="text-sky-400">about</span>
            {'      Who is Suriyodorn S.\n'}
            <span class="text-sky-400">clear</span>
            {'      Clear the terminal.\n'}
            <span class="text-sky-400">gui</span>
            {'        Redirects to GUI version of the portfolio.\n'}
            <span class="text-sky-400">help</span>
            {'       Provides help to all commands.\n'}
            <span class="text-sky-400">social</span>
            {'     Links to my social media accounts.\n'}
          </pre>
          <br />
        </div>
      )
    case 'social':
      return (
        <div class="ml-[1rem]">
          <br />
          <pre class="font-sans decoration-sky-400 underline-offset-1">
            <a href="https://github.com/ZikXewen" class="hover:underline">
              <span class="text-sky-400">github</span>
              {'     ZikXewen\n'}
            </a>
            <a href="https://www.instagram.com/ss.data" class="hover:underline">
              <span class="text-sky-400">instagram</span>
              {'  @ss.data\n'}
            </a>
            <a href="https://www.facebook.com/supdata" class="hover:underline">
              <span class="text-sky-400">facebook</span>
              {'   Data Sup Srd\n'}
            </a>
            <a href="https://twitter.com/ZXewen" class="hover:underline">
              <span class="text-sky-400">twitter</span>
              {'    ZikXewen\n'}
            </a>
          </pre>
          <br />
        </div>
      )
    default:
      return (
        <div>
          <p>
            <span class="text-sky-400">{input + ' '}</span>
            is not recognized as a command.
          </p>
          <p>
            For a list of commands, type
            <span class="text-sky-400"> 'help'</span>
          </p>
        </div>
      )
  }
}

export default Output

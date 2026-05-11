'use client';

import Markdown from 'marked-react';
import { useState } from 'react';

const TextEditor = () => {
  const [text, setText] = useState('# Hello');
  const configProse =
    'prose max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-strong:text-zinc-900 prose-code:text-pink-600 prose-hr:border-zinc-400 prose-li:marker:text-zinc-500 prose-blockquote:border-l-zinc-400 prose-blockquote:text-zinc-600 prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline';

  return (
    <div className="flex w-full gap-4 p-4">
      <textarea
        placeholder="Введите Markdown..."
        className="w-1/2 min-w-0 flex-1 resize-none rounded-xl border bg-slate-200/50 p-4 font-mono transition-colors outline-none focus:bg-slate-500/10"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div
        className={`${configProse} w-1/2 max-w-none flex-1 overflow-y-auto rounded-xl border bg-slate-200/50 p-4`}
      >
        <Markdown breaks value={text} />
      </div>
    </div>
  );
};

export default TextEditor;

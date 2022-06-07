const WORD_LIST = [
  'html',
  'css',
  'scss',
  'javascript',
  'typescript',
  'angular',
  'react',
  'nextjs',
  'nodejs',
  'nestjs',
  'git',
  'json',
  'xml',
  'npm',
  'docker'
]

export const getWord = (index = 0) => {
  return WORD_LIST[index % WORD_LIST.length]
}
